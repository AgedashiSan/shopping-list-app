$(document).ready(function(){
	var shopping_item;

	$('.add').click(function(){
		if (!$('input').val()){
			alert("Forgot to type in something? :)");
		} else {
			shopping_item	= document.getElementById('item').value;
			$("ul").prepend("<li>" + shopping_item + "<i class='fa fa-times'></i>" + "</li>");
			$("input").val('');
			$("p").remove();
		}
	});
	$(document).keyup(function(event){
		if (event.keyCode == 13) {
			$('.add').click();
		};
	});
});
$(document).on('click', ".fa", function(){
	$(this).parent().slideUp();
	return false;
});
$(document).on('click', "li", function(){
	$(this).addClass('current');
});
