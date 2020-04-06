$(function(){
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let choosImg=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],rightComb = choosImg;
    $('.puzzles div').each(function(){
        let newImg = getRandomIntInclusive(0, choosImg.length-1);
        $(this).css({
            background:`url(image_part_${choosImg[newImg]}.jpg)  no-repeat`,
            backgroundSize:'contain',
        })
        choosImg.splice(newImg,1);  
    })
    $('.puzzles,.match div').sortable({
        connectWith: '.puzzles  , .match div ',
        distance:50,
    })
    
})