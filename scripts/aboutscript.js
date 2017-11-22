function disp1(){
	document.getElementById("box2").style.display="none";
	document.getElementById("box3").style.display="none";
	document.getElementById("box1").style.display="block";
	document.getElementById("btn2").style.opacity=0.4;
	document.getElementById("btn3").style.opacity=0.4;
	document.getElementById("btn1").style.opacity=1;
}
function disp2(){
	document.getElementById("box1").style.display="none";
	document.getElementById("box3").style.display="none";
	document.getElementById("box2").style.display="block";
	document.getElementById("btn1").style.opacity=0.4;
	document.getElementById("btn3").style.opacity=0.4;
	document.getElementById("btn2").style.opacity=1;
}
function disp3(){
	document.getElementById("box1").style.display="none";
	document.getElementById("box2").style.display="none";
	document.getElementById("box3").style.display="block";
	document.getElementById("btn1").style.opacity=0.4;
	document.getElementById("btn2").style.opacity=0.4;
	document.getElementById("btn3").style.opacity=1;
}
