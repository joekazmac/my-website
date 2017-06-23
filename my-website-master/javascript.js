$( document ).ready(function() {
	// var url = window.location.href;
	// console.log(url)

	// $("#headerstyles").click(function( event ) {
	// 	alert( "Image Clicked")
	// });

	// $("h2").click(function(){
	// 	console.log($("h2").text())
	// });
	// $("h3").click(function() {
	// 	$( "h3").last().addClass("addingClass")
	// });

	// var addOrRemoveConditionalClass = function(ele){

	
	// 	if (ele.hasClass("addingClass")) {
	// 		ele.removeClass("addingClass");
	// 	}
	// 	else{
	// 		ele.addClass("addingClass")
	// 	}
	// }

	// $("#header2styles").click(function( event ) {
	// 	var ele = $( "#header2styles" );
	// 	addOrRemoveConditionalClass(ele)
	// })

	// $("#backgroundcolor").ready(function(){
	// $("#backgroundcolor").addClass("change")

	// $("#headerstyles").addClass("h1change")

	// });

	//$("#Headers").addClass("change")
	//$("#backgroundcolor").addClass("newBackground")
	
	var headerHider = function(header) {
		if(header.is(':visible')){
			$(header).hide()
		}
		else {
			$(header).show()
		}
	}

$("#header2styles").click(function(){
	headerHider($("h1"));
})

$("h1").click(function(){
	$("#styling1").append("<p id='dynamic-content'>Joe Kazmac</p>")
})

$('body').on('click', 'p#dynamic-content', function() {
	console.log("P TAG CLICKED BROOOOOOOOO!")
});

$("#name-submit").click(function(){
	$("#username").val();
})

});