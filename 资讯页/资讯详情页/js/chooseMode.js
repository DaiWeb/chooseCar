//查找方式
var chooses = document.getElementsByName("chooses");
var chooseBoxs = document.getElementsByName("chooseBoxs");
 for(var i = 0;i<chooses.length;i++){
 	chooses[i].index = i;
    chooses[i].onclick = function(){
    	var j = this.index;
      	choosesStyle();
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      	chooseBoxs[j].style.display = "block";
      
    }
  }

function choosesStyle(){
    for(var i = 0;i<chooses.length;i++){ 
      	chooses[i].style.background = "#FFFFFF";
      	chooses[i].style.color = "#1F1F1F";
      	chooseBoxs[i].style.display = "none";
    }
  }
  

