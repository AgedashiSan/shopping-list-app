$(document).ready(function(){
	var shopping_item;

	$('.add').click(function(){
		if (!$('input').val()){
			alert("No input");
		} else {
			shopping_item	= document.getElementById('item').value;
			$("ul").prepend("<li>" + shopping_item + "<i class='fa fa-times'></i>" + "</li>");
			$("input").val('');
		}
	});
	$(document).keyup(function(event){
		if (event.keyCode == 13) {
			$('.add').click();
		};
	});
});
$(document).on('click', ".fa", function(){
	$(this).parent().remove();
	return false;
});
$(document).on('click', "li", function(){
	$(this).addClass('current');
});
