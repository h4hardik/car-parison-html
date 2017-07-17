$(function(){
	$('ul').each(function() {
		$(this).children().first().addClass('first');
		$(this).children().last().addClass('last');
	});
});