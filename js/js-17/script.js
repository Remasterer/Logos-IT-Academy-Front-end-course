let getSel = ourSel => document.querySelector(ourSel),
    timeBlock = getSel(".clock"),
    dateBlock = getSel(".date"),
		stopwatchBlock = getSel(".stopwatch"),
		stopwatchRecorderBlock = getSel(".stopwatch__recorder"),
		timerValue = getSel(".timer-value"),
		time,
		interval,
		currentButton,
		lastButton,
		milliseconds =0,seconds=0,minutes=0,hours=0,
		timerMinutes, timerSeconds = 59,timerInterval,
		timeCorrector = (date, max) => (date < max) ? '0'.repeat(max.toString().length - date.toString().length  )+ date:date;
function getTime(){
  time = new Date();
  timeBlock.innerText = `${timeCorrector(time.getHours(), 10)}:${timeCorrector(time.getMinutes(), 10)}:${timeCorrector(time.getSeconds(), 10)}`;
}
function getDate() {
  time = new Date();
  dateBlock.innerText = `${timeCorrector(time.getDate(), 10)}:${timeCorrector(time.getMonth() + 1, 10)}:${time.getFullYear()}`;
}
setInterval(getTime,1000);
setInterval(getDate, 1000);


function neonToggler(){
	currentButton=this;
	this.style.border = '1px solid #087290';
	(lastButton != undefined && lastButton != currentButton) ? lastButton.style.border = "1px solid #131d30" :1;
	lastButton = this;
	
}

function stopwatch(){
	stopwatchBlock.innerText = `${timeCorrector(hours, 10)}:${timeCorrector(minutes, 60)}:${timeCorrector(seconds, 60)}:${timeCorrector(milliseconds,999)}`;
	milliseconds += 11;
	if (milliseconds >=1000){
		seconds++;
		milliseconds=0;
		if(seconds==60){
			seconds=0;
			minutes++;
			if(minutes==60){
				minutes=0
				hours++
			}
		}
	}
}
getSel(".button_start").addEventListener('click',function(){
	if (interval == null){
		interval = setInterval(stopwatch, 10);
	}
})
getSel(".button_stop").addEventListener('click', function () {
	clearInterval(interval);
	interval = null;
	
})
getSel(".button_loop").addEventListener('click', function () {
	let loopResult = document.createElement('p');
	loopResult.innerText = stopwatchBlock.innerText ;
	stopwatchRecorderBlock.append(loopResult);
})
getSel(".button_reset").addEventListener('click', function () {
	milliseconds = 0; 
	seconds = 0;
	minutes = 0;
	hours = 0;
	stopwatchBlock.innerText ="00:00:00:000"
})

getSel(".button_start").addEventListener("click",neonToggler);
getSel(".button_reset").addEventListener("click", neonToggler);
getSel(".button_loop").addEventListener("click", neonToggler);
getSel(".button_stop").addEventListener("click", neonToggler);
getSel(".timer_start").addEventListener("click", neonToggler);
getSel(".timer_stop").addEventListener("click", neonToggler);
getSel(".timer_reset").addEventListener("click", neonToggler);
getSel(".button_decrease").addEventListener("click", neonToggler);
getSel(".button_add").addEventListener("click", neonToggler);
getSel(".button_decrease").addEventListener('click',function(){
	if(+timerValue.innerText>0) timerValue.innerText = +timerValue.innerText - 1;
});
getSel(".button_add").addEventListener('click', function () {
	timerValue.innerText = +timerValue.innerText + 1;
});
getSel(".timer_start").addEventListener("click",function(){

	timerMinutes = timerValue.innerText;
	getSel(".timer__live").innerText = `${timeCorrector(timerMinutes -= 1, 10)}:${timerSeconds}`;
	timerInterval = setInterval(timer,1000)
})
getSel(".timer_stop").addEventListener("click",function(){
	clearInterval(timerInterval);
})
getSel(".timer_reset").addEventListener("click", function () {
	clearInterval(timerInterval);
	timerSeconds=59;
	timerMinutes=0;
	getSel(".timer__live").innerText =`00:00`;
})
function timer() {
		timerSeconds--;
		if(timerSeconds==0){
			if (timerMinutes == 0){
				clearInterval(timerInterval );
			}
			else{
			timerSeconds = 59;
			timerMinutes--;
			}
		}		
	getSel(".timer__live").innerText = `${timeCorrector(timerMinutes, 10)}:${timeCorrector(timerSeconds,10)}`;
}