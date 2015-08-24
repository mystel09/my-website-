"use strict";
var emptycol=3;
var emptyrow=3;
var bool=false;
window.onload=function() {
var pic=$("puzzlearea").getElementsByTagName("div");
	var x=0;
	var y=0;
	var locator=0;
	for(var j=0; j<4; j++){
	  	for(var i=0; i<4; i++){
	  	var name=i+"_"+j;
	  	var idname="p"+locator;
		pic[locator].addClassName(name);
		pic[locator].writeAttribute("id", idname);
		pic[locator].style.backgroundPosition = i*-100 + "px " + j*-100 + "px";
		pic[locator].style.left=(x*-1)+"px";
		pic[locator].style.top=y+"px";
		y-=100;
		pic[locator].onmouseover=turnred;
		pic[locator].onmouseout =goback;		
		x-=100;
		locator++;
	}
		y+=100;
		x=0;
  }
  $("shufflebutton").onclick=shuffle;
}
	function turnred(){
	var i=this.className.substring(0,1);
	var j=this.className.substring(2);
	if((Math.abs(parseInt(i)-emptycol)==1 && parseInt(j)==emptyrow) || (Math.abs(parseInt(j)-emptyrow)==1 && parseInt(i)==emptycol) ){
	this.style.color="red";
	this.style.borderColor="red";
	this.onclick=slide;	
   }
  }
	function goback(){
	this.style.color="black";
	this.style.borderColor="black";
	}
	function slide(){
	if(	this.style.color=="red" || bool==true){
	var i=this.className.substring(0,1);
	var j=this.className.substring(2);
	var x=this.style.left;
	var y=this.style.top;
	if(i<emptycol) {
	i++;
	x=(parseInt(x)+100)+"px";
	emptycol--;
	this.style.left=x;
	this.className=i+"_"+j;
	}
	else if (i>emptycol){
	 i--;
	 x=(parseInt(x)-100)+"px";
	 emptycol++;
	 this.style.left=x;	 
	 this.className=i+"_"+j;
	}
	if(j<emptyrow){
	 j++;
	 y=(parseInt(y)+100)+"px";
	 emptyrow--;
	 this.style.top=y;
	 this.className=i+"_"+j;
	}
	else if (j>emptyrow){
	 j--;
	 y=(parseInt(y)-100)+"px";
	 emptyrow++;
	 this.style.top=y;
	 this.className=i+"_"+j;
	}
  }
}
function shuffle(){
var shuffles=0;	
do {
  var bool=true;
  var tiles=[];

  for(var locator=0; locator<15; locator++){
  var idname= "p"+locator;
  var i=$(idname).className.substring(0,1); //declaring i
  var j=$(idname).className.substring(2);// declaring j
  //left
  if(emptycol-parseInt(i)==1 && parseInt(j)==emptyrow){
	tiles.push($(idname).id);
	 //alert($(idname).className);
	 
   }
   //right
  if(parseInt(i)-emptycol==1 && parseInt(j)==emptyrow){
  	tiles.push($(idname).id);

  }
  //top
  if(parseInt(j)-emptyrow==1 && parseInt(i)==emptycol){
  	tiles.push($(idname).id);

  }
  //bottom
  if(emptyrow-parseInt(j)==1 && parseInt(i)==emptycol){
  	tiles.push($(idname).id);

  } 
}
 var square=tiles[Math.floor(Math.random() * tiles.length)];
var a=$(square).className.substring(0,1);
var b=$(square).className.substring(2);
var x=$(square).style.left;
var y=$(square).style.top;
if(a<emptycol) {
	a++;
	x=(parseInt(x)+100)+"px";
	emptycol--;
	$(square).style.left=x;
	$(square).className=a+"_"+b;
	}
	else if (a>emptycol){
	 a--;
	 x=(parseInt(x)-100)+"px";
	 emptycol++;
	 $(square).style.left=x;	 
	 $(square).className=a+"_"+b;
	}
	if(b<emptyrow){
	 b++;
	 y=(parseInt(y)+100)+"px";
	 emptyrow--;
	 $(square).style.top=y;
	 $(square).className=a+"_"+b;
	}
	else if (b>emptyrow){
	 b--;
	 y=(parseInt(y)-100)+"px";
	 emptyrow++;
	 $(square).style.top=y;
	 $(square).className=a+"_"+b;
	}
	shuffles++;
  }
  while (shuffles<400);
  shuffles=0;
  
}
