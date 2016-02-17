var gulp = require('gulp')
var del = require('del')
var browserSync = require('browser-sync')


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

//js stuff
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')

var vinylsource = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var reactify = require('reactify')


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
  return gulp.src('app/scss/**/*.+(scss|sass)')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', errorHandler))
    .pipe(postcss(processors).on('error', errorHandler))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
})

gulp.task('js', function() {
  return browserify('app/js/app.jsx')
  .transform(reactify)
  .bundle()
  .pipe(vinylsource('app.js'))
  .pipe(gulp.dest('dist'));
})

function errorHandler(err) {
console.log(err.toString());
this.emit('end');
}

gulp.task('watch', ['browserSync', 'sass', 'js'], function() {
  gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']);
  gulp.watch('app/js/**/*.+(js|jsx)', ['js', browserSync.reload]);
  gulp.watch('app/dist/temp.js', [browserSync.reload]);
  gulp.watch('index.html', [browserSync.reload]);
});
