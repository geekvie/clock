let hour = document.getElementById('phr');
let min = document.getElementById('pmn');
let sec = document.getElementById('psc');



function theClock() {
		//get time
		let time = new Date();
		theHour= time.getHours();
		theMin= time.getMinutes();
		theSec = time.getSeconds();
		//update html
		hour.innerHTML = theHour;
		min.innerHTML =theMin;
		sec.innerHTML=theSec;

		//leading zero
		addZero(theMin,min);
		addZero(theSec,sec);

}


function addZero(digit,html){
	if (digit<10){
		html.innerHTML = '0'+digit
	}
}


window.onload = theClock;
setInterval (theClock ,1000);