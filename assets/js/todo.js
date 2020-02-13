// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
	/*//if li is gray
	console.log($(this).css("color"));
	if($(this).css("color")==="rgb(128, 128, 128)"){
		//turn it black

		$(this).css({
		color: "black",
	textDecoration: "none"

	});
	}
	//else
	else {
	//turn it grey
	$(this).css({
		color: "grey",
	textDecoration: "line-through"
});
}*/
//click om x to delete todos

$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500, function(){
	$(this).remove();
}); 
event.stopPropagation();
}); 

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
	 //grabbing the new todo text from input
	 var todoText = $(this).val();
	 $(this).val("");
 //create a new li and add to ul
 $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")

}
}); 
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

// btnInsert.onclick = function() {
//      	 const key = inpkey.value;
//      	 const value = inpValue.value;
//      	 console.log(key);
//      	 console.log(value);
//      	 if (key && value) {
//      	 	localStorage.setItem(key, value);
//      	 	location.reload(); 
//      	 }
//      }

//      $("input[type='text']").keypress(function(event){
// 	const todo = document.getElementById("inptodo");
// 	var value = inptodo.value;
// 	console.log(localStorage);

// 	if(event.which === 13){
// 	localStorage.setItem(value);
// 	location.reload();
// }
// });