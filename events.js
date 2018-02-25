var btn = document.getElementById("btn-action");
var count = 0;
btn.addEventListener("click", function(){
	console.log("BUTTON HAS BEEN CLICKED!" + (++count));
});

var lis = document.getElementsByTagName("li");
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
	this.style.color = "pink";
});
}
