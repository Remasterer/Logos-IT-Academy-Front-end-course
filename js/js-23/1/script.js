$(function(){
    
    function energy(){
        
        $('.full-battery').effect("slide", { mode: "hide", direction: "down" }, 20000,function(){
            $('h2').css('color','black')
            $('h2').text('1 minutes');
            $('.full-battery').effect("slide", { mode: "show", direction: "up", distance: -4},10000,function(){
                $('h2').text('2 minutes');
                $('h2').css('color', '#fff')
            });
        });
        
    }
    setInterval(energy,1000)
    
})