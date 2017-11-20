$(function(){
	$('.x').addClass('active');
	$('.y').addClass('active').addClass('delay');
	$('.img').addClass('transform');
	$('.button').addClass('delay');
	$('.button').addClass('btn-transform');

	$('.box').hover(function(){
		$('.button').removeClass('delay');
		$('.button').addClass('btn-before');
	},
		function(){
			$('.button').removeClass('btn-before');			
	});

	// $('.box').on(function(){
	// 	$('.box').css("background-color", "#ccc");
	// });
});