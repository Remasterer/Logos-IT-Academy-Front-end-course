$(function(){
    let procent = 0;
    setInterval(function () {
        if(procent<100){
        procent++;
        $('span').text(`${procent}%`);
        setProgress(procent);
        }
    },50)
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent){
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }
    
  })