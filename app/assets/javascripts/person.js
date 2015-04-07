$(document).ready(function(){
	$(".person").mouseover(function(){
		$(".person").css("background-color","yellow");
	});
	$(".person").mouseout(function(){
		$(".person").css("background-color","lightBlue");
	});
});