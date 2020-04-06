$(function () {
    // $('#child').draggable({
    //     containment:'#parent',
    //     containment:[150,150,400,400],
    //     axis:'x',
    //     grid:[200,200],
    //     cursor:'move',
    //     handle:'#trigger',
    //     revert:true,
    //     revertDuration: 3000,
    //     start: function (event , ui) { 
    //         console.log(event);
    //         console.log(ui);
    //      },
    //     stop: function (event,ui) { 
    //         console.log(event);
    //         console.log(ui);
    //      }
    // });
  /*   $('.drag').draggable();
    $('.drop').droppable({
        activeClass:'active',
        hoverClass:'hover',
        accept:'.drag',
         */
        // activate: function () { 
        //     $(this).html('<h2>You activated drag effect</h2>');
        //  }
        // drop:function(){
        //     alert(event);
        // } 
    // });

    // $('#left,#right').sortable({
    //     connectWith:'#left,#right',
    //     cancel:'h2',
    //     distance:50,
    //     delay:300
    // });
    let correct = [1,2,3,4,5,6,7,8,9],i=0;
    $('.calc,.final').sortable({
        connectWith:'.calc,.final'
    });
    document.querySelector('.check').addEventListener('click', function () {
        let arr = document.querySelectorAll('.final > .digital');
        for (const item of arr) {
            if(item.innerHTML!=correct[i]){
                alert('bad');
            }
            i++;
        }
    })
})