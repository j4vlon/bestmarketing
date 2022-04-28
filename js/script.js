
        $(document).ready(function() {
            $('.hamburger').on('click', function(){
                $('.hamburger').toggleClass('is-active');
                $('.navigation-list').toggleClass('un-active');
            });
            // $(".article-txt").hover(function () {
            //     $(this).toggleClass("article-news-txt");
            //     $(".article-news-p").toggleClass("un-active");
            //  });
        $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $("header").addClass("header-bg");
            $("header").removeClass("main-nav-header");
        } else {
            $("header").removeClass("header-bg");
            $("header").addClass("main-nav-header");
        }
        });
    });


    document.addEventListener("DOMContentLoaded", () => {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true
          });
      });
