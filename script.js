function calculate () {
	var s = parseInt(document.querySelector('#score').value);
	var p = parseInt(document.querySelector('#percent').value)/100;
	var x, y;
	if(percent.value.length>0 || score.value.length>0) {
		y = Math.round(s*(1-p)/(2*p-1));
		x = y+s;
		document.querySelector('#up').innerHTML = x;
		document.querySelector('#down').innerHTML = y;
	}
}