/*var detailLists = document.getElementsByClassName("detailList");
for(var i = 0; i<detailLists.length; i++){
	var detailIds = detailLists[i].id;
	
}*/
var detailLists = document.getElementsByClassName("detailList");
var detailTits = document.getElementsByClassName("detailTit");

for(var i = 0; i<detailTits.length; i++){
	detailTits[i].index = i;
	detailTits[i].onclick = function(){
		var j = this.index;
		/*detailStyle();*/
		var bl = detailLists[j].style.display;
		if(bl == false){
			
				this.style.backgroundImage = "url(img/icon/close.png)";	
				detailLists[j].style.display = "block";
			
		}else{
			
				detailLists[j].style.display = "none";
				this.style.backgroundImage = "url(img/icon/open.png)";
			
		}
	}
}
function detailStyle(){
	for(var i=0; i<detailLists.length; i++){
		detailLists[i].style.display = "none";
		detailTits[i].style.backgroundImage = "url(img/icon/open.png)";
		
	}
};
