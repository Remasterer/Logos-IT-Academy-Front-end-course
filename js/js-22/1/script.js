$(function(){

    // $('*').css('color','red'); // 1 властивість 
    // $('tagname'); // div p h1
    // $('#id'); // #id
    // $('.class'); // .class
    // $('#box').html('<span>HTML</span>');
    // $('#box').text('<span>HTML</span>');
    // $('#box').append('<p class="text">Append</p>');
    // $('#box').prepend('<p class="text">Prepend</p>');
    // $('#box').before('<p class="text">Before</p>');
    // $('#box').after('<p class="text">After</p>');
    // $('p').wrap('<div></div>'); //обгорнути
    // $('p.text').wrap('<div></div>');
    // $('p').wrapAll('<div></div>');
    // $('p').wrapInner('<b></b>');

    // $('li:first').css('color','red')ж
    // $('li:last').css('color','red');

    // $('li:first-child').css('color','red')ж
    // $('li:last-child').css('color','red');

    // $('li:odd').css('color','red');
    // $('li:even').css({
    //     color:'blue',
    //     backgroundColor:'red'
    // });
    // $('ul li:gt(2)').css({
    //     color:'blue',
    //     backgroundColor:'yellow'
    // })
    // $('ul li:lt(2)').css({
    //     color: 'white',
    //     backgroundColor: 'red'
    // })
    // $('ul li:eq(2)').css({
    //     color: 'pink',
    //     backgroundColor: 'green'
    // })

    // $('li:contains("item3")').css("background-color",'red');
    // $('li:contains("item3")').remove();
    // $('li:contains("item3")').empty();
    // $('li:empty').css('background-color','lightgray');
    // $(':header').css('color','red');
    // $('div#box:has(p)').css('background-color','purple');
    // let some= $('#box').text();
    // console.log(some);
    // $('input').val('set value');
    // $('input').blur(function(){
    //     let val = $(this).val();
    //     console.log(val)
    // })
    // $('[href]').css('color','red');
    // $('[href="#"]').css('color', 'green');
    // $('a[href != "#"]').css('color', 'green');
    // $('a[href ^= "#"]').css('color', 'green');
    // $('a[href $= "#"]').css('color', 'green');

    // $(':button').css('color','red');

    // $('p').filter('.text').css('color','red');
    // $('p').not('.text').css('color', 'red');

    // let w = $('#box').width();
    // console.log(w);
    // let h = $('#box').height();
    // console.log(h);

    // let inW = $('#box').innerWidth(); 
    // let inH = $('#box').innerHeight(); 

    //  let onW = $('#box').outerWidth(); 
    //  let onH = $('#box').outerHeight();
    let gerRange = max => Math.floor(Math.random() * Math.floor(max));
     $('.ring').click(function(){
         $(this).animate({
            top: `${gerRange(700)}px`,
            left: `${gerRange(700)}px`,
            height: `${gerRange(300)}px`,
            width: `${gerRange(300)}px`,
            backgroundColor: `rgba(${gerRange(255)},${gerRange(255)},${gerRange(255)},${gerRange(10)/10})`
         }, 1000, 'easeInSine');
     })
})