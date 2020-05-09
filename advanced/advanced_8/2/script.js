let $ = (selector) => document.querySelector(selector),
    wordsForm = document.forms["wordsForm"],
    wordPlacer = wordsForm.wordPlacer,
    badWords = [];
wordsForm.addWord.addEventListener('click', function () {
    const newWord = wordPlacer.value;
    if (newWord != '') {
        $('.bad-words').innerText += `${newWord},`;
        badWords.push(newWord);
        wordPlacer.classList.remove('badInput');
        wordPlacer.value = '';
        wordPlacer.placeholder = 'word here...';
    } else {
        wordPlacer.classList.add('badInput');
        wordPlacer.placeholder = 'Please write a word';
    }
});
wordsForm.resetWords.addEventListener('click', function () {
    badWords = [];
    $('.bad-words').innerText = '';
});
wordsForm.cenzorWords.addEventListener('click', function () {
    if (wordsForm.textPlace.value != '') {
        wordsForm.textPlace.value = wordsForm.textPlace.value.split(' ').map((word) => badWords.includes(word) ?
            word = '*'.repeat(word.length) :
            word).join(' ');
        wordsForm.textPlace.classList.add('cenzored');
        wordsForm.textPlace.classList.remove('badInput');
        wordsForm.textPlace.placeholder = 'text here...';
    } else {
        wordsForm.textPlace.classList.add('badInput');
        wordsForm.textPlace.placeholder='Please write a text'
    }
});