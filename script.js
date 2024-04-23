//your JS code here. If required.
let body=document.getElementById("body");
let p1=document.createElement("p");
p1.setAttribute("id","status");
p1.textContent="Enter the Metaverse";
body.appendChild(p1);
let btn=document.createElement("button");
btn.textContent="Enter";
btn.setAttribute("id","enterBtn");
body.appendChild(btn);
btn.addEventListener("click",myfunc);
function myfunc(){
	p1.innerHTML="<h1>Entered Metaverse</h1>";
}