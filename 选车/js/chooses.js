/*var allChooses = new Array;
allChooses[0] = "level";
allChooses[1] = "price";
allChooses[2] = "output";
allChooses[3] = "energy";
allChooses[4] = "nation";
allChooses[5] = "structure";
allChooses[6] = "drive";
allChooses[7] = "gear-box";
allChooses[8] = "ad-production";
allChooses[9] = "seat";

for(var a = 0; a<allChooses.length;a++){
	//var nameValue = allChooses[a];
	var nameVal = document.getElementsByName(allChooses[a]);
	for(var i = 0;i<nameVal.length;i++){
		//nameVal[i] = i;
		//var ar = nameVal;
		nameVal[i].onclick = function(){
    	var j = nameVal.length;
      	chooseStyle(j);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    	}
	}

	

}
function chooseStyle(x,arr){
    for(var i = 0;i<x;i++){ 
      	arr[i].style.background = "#FFFFFF";
      	arr[i].style.color = "#1F1F1F";
      
    }
 }

 */


var level = document.getElementsByName("level");
 for(var i = 0;i<level.length;i++){
 	level[i].index = i;
    level[i].onclick = function(){
    	var a = level.length
      	choStyle();
      	this.style.backgroundColor = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 function choStyle(){
    for(var i = 0;i<level.length;i++){
    	
      	level[i].style.backgroundColor = "#FFFFFF";
      	level[i].style.color = "#1F1F1F";
      
    }
 }

 
 
 
 var price = document.getElementsByName("price");
 for(var i = 0;i<price.length;i++){
 	price[i].index = i;
    price[i].onclick = function(){
    	var a = price.length
      	chooseStyle(a,price);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 var output = document.getElementsByName("output");
 for(var i = 0;i<output.length;i++){
 	output[i].index = i;
    output[i].onclick = function(){
    	var a = output.length
      	chooseStyle(a,output);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 var energy = document.getElementsByName("energy");
 for(var i = 0;i<energy.length;i++){
 	energy[i].index = i;
    energy[i].onclick = function(){
    	var a = energy.length
      	chooseStyle(a,energy);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 var nation = document.getElementsByName("nation");
 for(var i = 0;i<nation.length;i++){
 	nation[i].index = i;
    nation[i].onclick = function(){
    	var a = nation.length
      	chooseStyle(a,nation);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 var structure = document.getElementsByName("structure");
 for(var i = 0;i<structure.length;i++){
 	structure[i].index = i;
    structure[i].onclick = function(){
    	var a = structure.length
      	chooseStyle(a,structure);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 var drive = document.getElementsByName("drive");
 for(var i = 0;i<drive.length;i++){
 	drive[i].index = i;
    drive[i].onclick = function(){
    	var a = drive.length
      	chooseStyle(a,drive);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 var gearbox = document.getElementsByName("gearbox");
 for(var i = 0;i<gearbox.length;i++){
 	gearbox[i].index = i;
    gearbox[i].onclick = function(){
    	var a = gearbox.length
      	chooseStyle(a,gearbox);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 var adProduction = document.getElementsByName("adProduction");
 for(var i = 0;i<adProduction.length;i++){
 	adProduction[i].index = i;
    adProduction[i].onclick = function(){
    	var a = adProduction.length
      	chooseStyle(a,adProduction);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }
 var seat = document.getElementsByName("seat");
 for(var i = 0;i<seat.length;i++){
 	seat[i].index = i;
    seat[i].onclick = function(){
    	var a = seat.length
      	chooseStyle(a,seat);
      	this.style.background = "#ff6000";
      	this.style.color = "white";
      
    }
  }

function chooseStyle(x,arr){
    for(var i = 0;i<x;i++){ 
      	arr[i].style.background = "#FFFFFF";
      	arr[i].style.color = "#1F1F1F";
      
    }
 }

