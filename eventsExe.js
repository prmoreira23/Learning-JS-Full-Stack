var btn = document.querySelector("button");

btn.addEventListener("click", changeColor);

function changeColor(){
	document.body.classList.toggle("pink");
}