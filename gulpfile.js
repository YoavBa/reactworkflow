var gulp = require('gulp')
var del = require('del')
var browserSync = require('browser-sync')
var gutil = require('gulp-util');

//sass stuff
var sass = require('gulp-sass')
var cssmin = require('gulp-minify-css')
var sourcemaps = require('gulp-sourcemaps')

//postcss stuff
var autoprefixer = require('gulp-autoprefixer')
var postcss = require('gulp-postcss')
var myplugin = require('postcss-myplugin')
var lost = require ('lost')
var postcssverticalrhythm = require('postcss-vertical-rhythm')
//consider adding : uncss/clean-css/gulp-minify-css/GZIP/breakpoint


//js stuff
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')

var vinylsource = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var reactify = require('reactify')

//sketch stuff
var sketch = require('gulp-sketch');



gulp.task('browserSync', function() {
  browserSync({
    server: {
     baseDir: "./" 
    }
  });
});

var processors = [
  // lost,
  // postcssverticalrhythm,
  autoprefixer
];

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.+(scss|sass)')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', errorHandler))
    .pipe(postcss(processors).on('error', errorHandler))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('js', function() {
  return browserify('src/js/app.jsx')
  .transform(reactify)
  .bundle().on('error', errorHandler)
  .pipe(vinylsource('app.js'))
  .pipe(gulp.dest('dist'));
})

function errorHandler(err) {
console.log(err.toString());
this.emit('end');
}

gulp.task('sketch', function(){
  return gulp.src('design/design.sketch')
  .pipe(sketch({
    export: 'artboards',
      format: 'png',
      saveForWeb: true,
      scales: 1.0,
      trimmed: false
  }))
  .pipe(gulp.dest('src/images'))
  .pipe(browserSync.reload({stream: true}));
});


gulp.task('watch', ['browserSync', 'sass', 'js', 'sketch'], function() {
  gulp.watch('src/scss/**/*.+(scss|sass)', ['sass']);
  gulp.watch('src/js/**/*.+(js|jsx)', ['js', browserSync.reload]);
  gulp.watch('index.html', [browserSync.reload]);
  gulp.watch('design/design.sketch',  [ 'sketch', browserSync.reload]);
});
