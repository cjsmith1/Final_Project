function showModalComedy(){
		$(".modal-wrapper-comedy").fadeIn(450);
		$("body").addClass("modal-on");
	};

	function hideModalComedy(){
		$(".modal-wrapper-comedy").fadeOut(450);
		$("body").removeClass("modal-on");
	};

function showModalDrama(){
		$(".modal-wrapper-drama").fadeIn(450);
		$("body").addClass("modal-on");
	};

	function hideModalDrama(){
		$(".modal-wrapper-drama").fadeOut(450);
		$("body").removeClass("modal-on");
	};

function showModalReality(){
		$(".modal-wrapper-reality").fadeIn(450);
		$("body").addClass("modal-on");
	};

	function hideModalReality(){
		$(".modal-wrapper-reality").fadeOut(450);
		$("body").removeClass("modal-on");
	};		

$(document).ready(function() {

	window.onload = function(){ 
	//Get submit button
	var submitbutton = document.getElementById("tfq");
	//Add listener to submit button
	if(submitbutton.addEventListener){
		submitbutton.addEventListener("click", function() {
			if (submitbutton.value == 'Search TV Shows'){
				submitbutton.value = '';
			};
		});
	}
}

		$(".gallimage").click(function() {
			$(".gallimage").css("boxShadow","0 0 15px #545150");
			$(".arrow").css("border", "");
			$(".more-info-wrapper").fadeIn();

			});

var title= '24'
	$.ajax (
		{
			url: "http://www.omdbapi.com/?t="+ title,
			dataType: "jsonp"}).done(
			function(data){
				$('#more-info-24 .infotitle').append('<p>', data.Title);
				$('#more-info-24 .plot').append('<p>', data.Plot);
				$('#more-info-24 .year').append('<p>', data.Year);
				$('#more-info-24 .imdbrating').append('<p>', data.imdbRating);
				$('#more-info-24 .runtime').append('<p>', data.Runtime);
				$('#more-info-24 .actors').append('<p>', data.Actors);
				$('#more-info-24 .rating').append('<p>', data.Rated);
				$('#more-info-24 .premiere').append('<p>', data.Released);

			});				


	$(".arrow").click(function() {
		$(".gallimage").css("boxShadow", "");
		$(".arrow").css("border", "1px #a8a2a1 dashed");
		$(".more-info-wrapper").fadeOut();
	});

	var currentImageIndex = 0;
	var numImages= $(".gallimage").length;	
			
	$("#arrow-right").click(function() {	
			$(".gallimage").eq(currentImageIndex).hide();
			currentImageIndex = (currentImageIndex + 1) % numImages;
			$(".gallimage").eq(currentImageIndex).show();

	});
			
	$("#arrow-left").click(function() {
		$(".gallimage").eq(currentImageIndex).hide();
			currentImageIndex = (currentImageIndex - 1) % numImages;
			$(".gallimage").eq(currentImageIndex).show();
	});
		
});	