$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');
    $('.navigation-list').toggleClass('un-active');
});
$(".article-txt").hover(function () {
    $(this).toggleClass("article-news-txt");
    $(".article-news-p").toggleClass("un-active");
 });
 $(function() {
	
	//BEGIN
	$(".js-faq-title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("faq__active")) {
			$(".js-faq-content").slideUp(800);
			$(".js-faq-title").removeClass("faq__active");
			$('.js-faq-rotate').removeClass('faq__rotate');
		}

		$this.toggleClass("faq__active");
		$this.next().slideToggle();
		$('.js-faq-rotate',this).toggleClass('faq__rotate');
	});
	//END
	
});
