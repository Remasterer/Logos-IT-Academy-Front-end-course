$(function(){
    let gerRange = max => Math.floor(Math.random() * Math.floor(max));
    let getColor = () => `rgba(${gerRange(255)},${gerRange(255)},${gerRange(255)},${gerRange(10) / 10})`;
    function anima() {  
    $('.ball_disco').animate({
            top: `${gerRange(700)}px`,
            left: `${gerRange(700)}px`,
            backgroundColor: `${getColor()}`,
            borderColor: `${getColor()}`,
            boxShadow: `0 0 ${gerRange(40)}px ${gerRange(30)}px ${getColor()}`,
        }, 'easeInSine');
    }
    setInterval(anima,500);
   
})