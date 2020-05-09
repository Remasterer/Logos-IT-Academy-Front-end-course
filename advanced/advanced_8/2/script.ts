let $ = (selector:string):HTMLElement  => document.querySelector(selector)
,wordsForm = document.forms["wordsForm"],wordPlacer:HTMLInputElement =  wordsForm.wordPlacer
,badWords:string[]=[];

wordsForm.addWord.addEventListener('click',function(){
    const newWord:string = wordPlacer.value;
    if(newWord!=''){
        $('.bad-words').innerText+= `${newWord},`;
        badWords.push(newWord);
        wordPlacer.classList.remove('badInput');
        wordPlacer.value='';
        wordPlacer.placeholder='word here...';
    }
    else {
        wordPlacer.classList.add('badInput');
        wordPlacer.placeholder='Please write a word';
    }
})
wordsForm.resetWords.addEventListener('click',function(){
    badWords=[];
    $('.bad-words').innerText= '';
})
wordsForm.cenzorWords.addEventListener('click',function(){
    wordsForm.textPlace.value =  wordsForm.textPlace.value.split(' ').map((word:string)=> 
        badWords.includes(word)  
        ? word = '*'.repeat(word.length)
        : word
        ).join(' ');
    wordsForm.textPlace.classList.add('cenzored');
})