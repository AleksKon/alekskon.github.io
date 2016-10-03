(function($) {
 "use strict";

    
$(window).load(function() {
             
    /*==========================================
       PRELOADER & PAGE TRANSITIONS (requires: functions.js)
    =====================================================*/

        // active navigation
        $("nav").addClass('activ');
        
        // delete preloader
        $(".preloader").delay("500").fadeOut(500);
         
        // page transitions
        var myTimer = setTimeout(function () {

                PageTransitions.init({
                    pages: $('.page-wrapper'),
                    menu: 'ul.dl-menu',
                    animcursor: 55, // 1 - 60
                    nextAnimcursor: true  // true, false
                });
                clearTimeout(myTimer);

        }, 1500); 
        
        
        
    /*==========================================
       BLOG MASONRY (requires: masonry.pkgd.min.js)
    =====================================================*/
    
    var containerBlog = document.querySelector('.blog-masonry');
    if (containerBlog) {
        new Masonry(containerBlog, {
            itemSelector: '.item',
            columnWidth: containerBlog.querySelector('.item-sizer')
        });
    }
    
 

    
           
}); // end window load  


$(document).ready(function() {
    
    
    /*==========================================
       ADD NEW STYLE "max-height" (requires: functions.js)
    =====================================================*/
    
    addMenuHeight();
    
    
    /*==========================================
       DL-MENU (requires: functions.js)
    =====================================================*/  
    
    $('#dl-menu').dlmenu();

 
    /*==========================================
       LOAD FULL SCREEN IMAGE (requires: backstretch.min.js)
    =====================================================*/
    
    var homeBg = document.querySelector('.home-bg');
    if (homeBg) {       
        $('.home-bg').backstretch("assets/img/bg/1.jpg");     
    }
 
    
    
    
   
    /*==========================================
      PORTFOLIO FILTER CATEGORY (requires:functions.js, jquery.shuffle.min.js)
    =====================================================*/
    
    shuffle_init('#portfolio-filter');
     
     
    /*==========================================
       PORTFOLIO HOVERDIR (requires: jquery.hoverdir.js)
     =====================================================*/ 
    
    $('.portfolio-hover > figure').each(function () {
        $(this).hoverdir({hoverDelay: 75 });
    });
       

    
    /*==========================================
       TOOLTIP (requires: bootstrap.min.js)
    =====================================================*/
    
    $("body").tooltip({selector: '[data-toggle=tooltip]'});
    
    
   

}); // end document ready


$(window).resize(function() {
    
        
    /*==========================================
       ADD NEW STYLE "max-height" (requires: functions.js)
    =====================================================*/
    addMenuHeight();
    
    
    
}); // end window resize

    
})(jQuery);
