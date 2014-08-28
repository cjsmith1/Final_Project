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

		currentInfoIndex = 0
	numInfo = $('.more-info').length;

		$(".gallimage#24").click(function() {
			$(".gallimage").css("boxShadow","0 0 15px #545150");
			$(".arrow").css("border", "");
			$(".more-info-wrapper").fadeIn();
			$('#more-info-24').show();
			$('#more-info-whitecollar').hide();

			});

		$(".gallimage#lost").click(function() {
			$(".gallimage").css("boxShadow","0 0 15px #545150");
			$(".arrow").css("border", "");
			$(".more-info-wrapper").fadeIn();
			$('#more-info-lost').show();
			$(".more-info").eq(currentInfoIndex).hide();
			$('#more-info-whitecollar').hide();


			});
		$(".gallimage#prisonbreak").click(function() {
			$(".gallimage").css("boxShadow","0 0 15px #545150");
			$(".arrow").css("border", "");
			$(".more-info-wrapper").fadeIn();
			$('#more-info-prisonbreak').show();
			$(".more-info").eq(currentInfoIndex + 1).hide();
			$('#more-info-whitecollar').hide();


			});

		$(".gallimage#smallville").click(function() {
			$(".gallimage").css("boxShadow","0 0 15px #545150");
			$(".arrow").css("border", "");
			$(".more-info-wrapper").fadeIn();
			$('#more-info-smallville').show();
			$(".more-info").eq(currentInfoIndex + 2).hide();
			$('#more-info-whitecollar').hide();


			});

		$(".gallimage#whitecollar").click(function() {
			$(".gallimage").css("boxShadow","0 0 15px #545150");
			$(".arrow").css("border", "");
			$(".more-info-wrapper").fadeIn();
			$('#more-info-whitecollar').show();
			$(".more-info").eq(currentInfoIndex + 3).hide();


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

var title= 'lost'
	$.ajax (
		{
			url: "http://www.omdbapi.com/?t="+ title,
			dataType: "jsonp"}).done(
			function(data){
				$('#more-info-lost .infotitle').append('<p>', data.Title);
				$('#more-info-lost .plot').append('<p>', data.Plot);
				$('#more-info-lost .year').append('<p>', data.Year);
				$('#more-info-lost .imdbrating').append('<p>', data.imdbRating);
				$('#more-info-lost .runtime').append('<p>', data.Runtime);
				$('#more-info-lost .actors').append('<p>', data.Actors);
				$('#more-info-lost .rating').append('<p>', data.Rated);
				$('#more-info-lost .premiere').append('<p>', data.Released);

			});						

var title = "prison break"
	$.ajax (
		{
			url: "http://www.omdbapi.com/?t="+ title,
			dataType: "jsonp"}).done(
			function(data){
				$('#more-info-prisonbreak .infotitle').append('<p>', data.Title);
				$('#more-info-prisonbreak .plot').append('<p>', data.Plot);
				$('#more-info-prisonbreak .year').append('<p>', data.Year);
				$('#more-info-prisonbreak .imdbrating').append('<p>', data.imdbRating);
				$('#more-info-prisonbreak .runtime').append('<p>', data.Runtime);
				$('#more-info-prisonbreak .actors').append('<p>', data.Actors);
				$('#more-info-prisonbreak .rating').append('<p>', data.Rated);
				$('#more-info-prisonbreak .premiere').append('<p>', data.Released);

			});		

var title = "smallville"

	$.ajax (
		{
			url: "http://www.omdbapi.com/?t="+ title,
			dataType: "jsonp"}).done(
			function(data){
				$('#more-info-smallville .infotitle').append('<p>', data.Title);
				$('#more-info-smallville .plot').append('<p>', data.Plot);
				$('#more-info-smallville .year').append('<p>', data.Year);
				$('#more-info-smallville .imdbrating').append('<p>', data.imdbRating);
				$('#more-info-smallville .runtime').append('<p>', data.Runtime);
				$('#more-info-smallville .actors').append('<p>', data.Actors);
				$('#more-info-smallville .rating').append('<p>', data.Rated);
				$('#more-info-smallville .premiere').append('<p>', data.Released);

			});		

var title = 'white collar'		

	$.ajax (
		{
			url: "http://www.omdbapi.com/?t="+ title,
			dataType: "jsonp"}).done(
			function(data){
				$('#more-info-whitecollar .infotitle').append('<p>', data.Title);
				$('#more-info-whitecollar .plot').append('<p>', data.Plot);
				$('#more-info-whitecollar .year').append('<p>', data.Year);
				$('#more-info-whitecollar .imdbrating').append('<p>', data.imdbRating);
				$('#more-info-whitecollar .runtime').append('<p>', data.Runtime);
				$('#more-info-whitecollar .actors').append('<p>', data.Actors);
				$('#more-info-whitecollar .rating').append('<p>', data.Rated);
				$('#more-info-whitecollar .premiere').append('<p>', data.Released);

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