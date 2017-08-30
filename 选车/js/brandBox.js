//首字母选择
var letters = document.getElementsByClassName("firstLetter");
var brandnames = document.getElementsByClassName("brandName");
for(var i = 0; i<letters.length; i++){
	letters[i].index = i;
	letters[i].onmouseover = function(){
		var j = this.index;
		firstLetterStyle();
		this.style.color = "#ff6000";	
		brandnames[j].style.display = "block";
	}
}
function firstLetterStyle(){
	for(var i=0; i<letters.length; i++){
		letters[i].style.color = "#1F1F1F";
		brandnames[i].style.display = "none";
	}
}