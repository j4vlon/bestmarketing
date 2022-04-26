$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');
    $('.navigation-list').toggleClass('un-active');
});
$(".article-txt").hover(function () {
    $(this).toggleClass("article-news-txt");
    $(".article-news-p").toggleClass("un-active");
 });
