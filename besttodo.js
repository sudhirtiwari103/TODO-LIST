//alert("hii");
$("ul").on("click","li",function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 	$(this).css ({
// 	color: "black",
// 	textDecoration : "none"
//     });	
// }
// else{
// 	$(this).css ({
// 	color: "gray",
// 	textDecoration : "line-through"
//     });	
// }
$(this).toggleClass("completed");
})
// click on x to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
// uppercase first character of each word
function capitalizeFirstLetter(todoText) {
    return todoText.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
}
//adding todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13 && ($("input").val().length) > 0 ){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>  " + capitalizeFirstLetter(todoText) + "</li>")
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(1000);
});
// to rotate icon 
 $('.fa-plus').on('click', function(e) {
      $(".fa-plus").toggleClass("antirotate"); //you can list several class names 
      e.preventDefault();
    });

