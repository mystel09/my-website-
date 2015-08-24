"use strict";
var i=0;
var timerID2;
var timerID;
var display = $("text");
var frame;
 window.onload=function() {
   $("stop").disabled=true;
};

function pick() {
//trying to get value of selection appear in box

var sel = $("selectmenu");
var display = $("text");
	if (sel.options[sel.selectedIndex].value == "Blank") { 
    display.value=null;
	}
	if (sel.options[sel.selectedIndex].value == "Exercise") {
    display.value=EXERCISE;
	}
	if (sel.options[sel.selectedIndex].value == "Juggler") {
    display.value=JUGGLER;
	}
	if (sel.options[sel.selectedIndex].value == "Bike") {
    display.value=BIKE;
	}
	if (sel.options[sel.selectedIndex].value == "Dive") {
    display.value=DIVE;
	}  
	if (sel.options[sel.selectedIndex].value == "Custom") {
    display.value=CUSTOM;
    }
  
}
function startbutton(){
 $("start").disabled=true;
 $("selectmenu").disabled=true;
 $("stop").disabled=false;
 display=$("text");
 frame = display.value.split("=====\n");
 timerID = setInterval(startprocess, 250);
}
function startprocess(){
 if(i<frame.length){
    display.value = frame[i];
    i++;
    }
  else if(i==frame.length){
    i=0;
    }

  
}
  function stopbutton(){
   $("start").disabled=false;
   $("selectmenu").disabled=false;
   $("stop").disabled=true;
  clearInterval(timerID);
  var parts=frame.join("=====\n");
  display.value=parts;
    }
function sizes() {
var sel = $("selectsizes");
var display = $("text");
if(sel.options[sel.selectedIndex].value=="T"){
display.style.fontSize="7pt";
}
else if(sel.options[sel.selectedIndex].value=="S"){
display.style.fontSize="10pt";
}
else if(sel.options[sel.selectedIndex].value=="M"){
display.style.fontSize="16pt";
}
else if(sel.options[sel.selectedIndex].value=="L"){
display.style.fontSize="24pt";
}
else {
display.style.fontSize="32pt";
  }
}
function speed() {
	if($("turbo").checked){
	clearInterval(timerID);
    timerID2=setInterval(startprocess,50);
	}
	else {
	clearInterval(timerID2);
    timerID=setInterval(startprocess,250);
	}
}
