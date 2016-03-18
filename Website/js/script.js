$(document).ready(function () {

	var url = $("#movieTrailer").attr('src');

	$("#videoModal").on('hide.bs.modal',function(){
		$("#movieTrailer").attr('src','');
	});

	$("#videoModal").on('show.bs.modal',function(){
		$("#movieTrailer").attr('src',url);
	});

});