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

	var addOrRemoveConditionalClass = function(ele){

	
		if (ele.hasClass("addingClass")) {
			ele.removeClass("addingClass");
		}
		else{
			ele.addClass("addingClass")
		}
	}

	$("#header2styles").click(function( event ) {
		var ele = $( "#header2styles" );
		addOrRemoveConditionalClass(ele)
	})

	$("#backgroundcolor").ready(function(){
	$("#backgroundcolor").addClass("change")

	$("#headerstyles").addClass("h1change")

	});

$("#styling1").click(function(){
	$("#styling1").append("<p id='name-tag'>Joe Kazmac</p>");
	$("#name-tag").click(function(){
        alert($(this).text());
		});

	});

});