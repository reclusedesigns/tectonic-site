jQuery(document).ready(function($) {
	
	
	$('.carousel').carousel('pause');
	
	$('#myModal').modal();
	
	$('.scrollto_js').click(function(e) {
		e.preventDefault();
		$.scrollTo($($(e.currentTarget).attr('href')), 300);
	});
	
	$('#slider').nivoSlider({
		pauseTime: 4000
	});
	
	$().UItoTop({ easingType: 'easeOutQuart' });
	
	$('#slider1').bxSlider({
    auto: true,
    autoControls: false,
		controls: false,
		pause: 8000
  }); 
	
}); 