$(document).ready(function(){
	var shopping_item;

	$('.add').click(function(){
		if (!$('input').val()){
			alert("Forgot to type in something? :)");
		} else {
			shopping_item	= document.getElementById('item').value;
			$(".list").prepend("<li class='added'>" + shopping_item + "<i class='fa fa-times'></i>" + "</li>");
			$("input").val('');
			$("p").remove();
		}
	});
	$(document).keyup(function(event){
		if (event.keyCode == 13) {
			$('.add').click();
		};
	});
	$('.fa-check').click(function(){
		$('.current').remove();
	});
	$('.fa-repeat').click(function(){
		location.reload();
	});
});
$(document).on('click', ".fa-times", function(){
	$(this).parent().slideUp();
	return false;
});
$(document).on('click', ".added", function(){
	$(this).addClass('current');
});
