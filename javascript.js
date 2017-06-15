$( document ).ready(function() {
	var url = window.location.href;
	console.log(url)

	$("#headerstyles").click(function( event ) {
		alert( "Image Clicked")
	});

	$("h2").click(function(){
		console.log($("h2").text())
	});
	$("h3").click(function() {
		$( "h3").last().addClass("addingClass")
	});

});