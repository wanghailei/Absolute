$(function() {
	
	$(".scroll-pane").jScrollPane({
			showArrows: true,
			horizontalArrowPositions: 'after'
	});
	layout();
});
$(window).resize(function() {
	layout();
});

function layout() {
	$(".plate").height( $(window).height()-160 );
}