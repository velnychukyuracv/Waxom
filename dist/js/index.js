"use strict";!function(){var e=document.body,a=document.getElementsByClassName("b-menu")[0],s=document.getElementsByClassName("b-container")[0],t=document.getElementsByClassName("b-nav")[0];a.addEventListener("click",function(){[e,s,t].forEach(function(e){e.classList.toggle("open")})},!1)}(),$(window).scroll(function(){$(window).scrollTop()>100?$("#navigation").css({background:"#4B4A45"}):$("#navigation").css("background","transparent")}),$(".sl").slick({autoplay:!0,autoplaySpeed:3e3,dots:!0,responsive:[{breakpoint:768,settings:{arrows:!1}}]}),$(".video").magnificPopup({type:"iframe",iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>'},callbacks:{markupParse:function(e,a,s){a.title=s.el.attr("title")}}});
 $('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
    patterns: {
      dailymotion: {
       
        index: 'dailymotion.com',
        
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                  
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        
        src: 'https://vimeo.com/205379223'
        
      }
    }
  }
  
  
});