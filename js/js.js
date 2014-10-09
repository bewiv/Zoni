(function($){

	var sections = [];

	$('.navbar-nav a').each(function(){
		sections.push($($(this).attr('href')));
	});

	$(window).scroll(function(e){
		var scrollTop = $(this).scrollTop() + ($(window).height()/2)
		for (var i in sections) {
 			var section = sections[i];
		};
	});
	console.log(sections);

})(jQuery);