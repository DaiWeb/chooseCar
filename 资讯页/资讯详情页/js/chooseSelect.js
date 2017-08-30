var car = document.getElementById("car");
var suv = document.getElementById("suv");
var limousine = document.getElementById("limousine");
var suves = document.getElementById("suves");
car.onclick = function(){
	limousine.style.display = "block";
	limousine.style.position = "absolute"
	limousine.style.left = 0;
	limousine.style.top = "25px";
	limousine.style.color = "#1F1F1F";
	limousine.style.width = "104px";
	limousine.style.border = "1px solid #ff6000";
	limousine.style.backgroundColor = "#FFA166";
	
	limousine.style.zIndex = "9";
	
}
suv.onclick = function(){
	suves.style.display = "block";
	suves.style.position = "absolute"
	suves.style.left = 0;
	suves.style.top = "25px";
	suves.style.color = "#1F1F1F";
	suves.style.width = "104px";
	suves.style.border = "1px solid #ff6000";
	suves.style.backgroundColor = "#FFA166";
	suves.style.listStyle = "none";
	suves.style.zIndex = "9";
	
}
car.onmouseout = function(){
	limousine.style.display = "none";
}
suv.onmouseout = function(){
	suves.style.display = "none";
}

