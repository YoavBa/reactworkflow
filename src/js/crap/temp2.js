

 
 var viewportwidth;
 var viewportheight;

  
 if (typeof window.innerWidth != 'undefined')
 {
      viewportwidth = window.innerWidth,
      viewportheight = window.innerHeight
 }



$( "body" ).append( "<span></span>" );
$("span").append(viewportwidth);

$(window).resize(function(){
     if (typeof window.innerWidth != 'undefined')
      {
        viewportwidth = window.innerWidth,
        viewportheight = window.innerHeight
      }
    console.log(viewportwidth);
    $('span').text(viewportwidth);
  });



