function myFunction() {
	var today = new Date();
	var seconds = today.getSeconds();
	var minutes = today.getMinutes();
	var hours = today.getHours();
	var hrAngle=hours * 30+minutes/2;
	var minAngle=minutes*6;
	var secAngle=seconds*6;
	console.log(hours+":"+minutes+":"+seconds)
	document.getElementsByClassName("dig")[0].innerHTML=(hours<10?("0"+hours):hours)+":"+(minutes<10?("0"+minutes):minutes)+":"+((seconds<10)?("0"+seconds):seconds);
	var hContainer=document.getElementById("hour-container");
	var minContainer=document.getElementById("minute-container");
	var secContainer=document.getElementById("second-container");
	secContainer.style.webkitTransform = 'rotateZ('+secAngle+'deg)';
	secContainer.style.transform = 'rotateZ('+secAngle+'deg)';
	minContainer.style.webkitTransform = 'rotateZ('+minAngle+'deg)';
	minContainer.style.transform = 'rotateZ('+minAngle+'deg)';
	hContainer.style.webkitTransform = 'rotateZ('+hrAngle+'deg)';
	hContainer.style.transform = 'rotateZ('+hrAngle+'deg)';
    myVar = setTimeout(myFunction, 1000);
}
myFunction();