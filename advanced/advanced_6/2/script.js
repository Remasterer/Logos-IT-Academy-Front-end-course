let $ = sel => document.querySelector(sel),
    searchForm = document.forms.searchFilm,
    prevSearchFilm = '';

searchForm.searchFilmButton.addEventListener('click', function () {
    if (searchForm.filmName.value != prevSearchFilm) {
        $('main').innerHTML = '';
        const filmName = searchForm.filmName.value;
        prevSearchFilm = filmName;
        const xml = new XMLHttpRequest();
        xml.open('GET', `http://www.omdbapi.com/?s=${filmName}&apikey=4b5d6314`, false);
        xml.send();
        const parsedData = JSON.parse(xml.responseText);
        parsedData.Search.forEach(item => {
            let filmBlock = document.createElement('div');
            filmBlock.classList.add('film_intro');
            filmBlock.setAttribute('filmTitle',`${item.Title}`);
            filmBlock.innerHTML = `
                <img class="film_image" src=${item.Poster} alt="Film Poster">
                <div class="film_title">
                    <p>${item.Title}</p>
                </div>
                <div class="film_info">
                    <p>${item.Type}</p>
                </div>
                <div class="film_info">
                    <p>${item.Year}</p>
                </div>
                <button class="film_button" type="button">More details</button>`;
            $('main').append(filmBlock);
        })
    }
})
$('.clear').addEventListener('click', function(){
    searchForm.filmName.value='';
})

$('.main').addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName == 'BUTTON') {
        let choosedFilm = target.parentElement.getAttribute('filmTitle');
        const xml = new XMLHttpRequest();
        xml.open('GET', `http://www.omdbapi.com/?t=${choosedFilm}&apikey=4b5d6314`, false);
        xml.send();
        const parsedFilmData = JSON.parse(xml.responseText);
        console.log(parsedFilmData);
        $('.module-window').style.display='block';
        $('.poster_image').src = '';
        $('.poster_image').src= parsedFilmData.Poster;
        for (const info of $('.module_info').children) {
        if(info.tagName!='STRONG'){
            info.innerText = '';
            let key = info.className.split('_')[1];
            key = key[0].toUpperCase() + key.slice(1);
            if(key == 'Ratings'){
                parsedFilmData[key].forEach(rate=>{
                    info.innerText+=`${rate.Source} : ${rate.Value}\n `;
                })
            }
            else info.innerText+=parsedFilmData[key];
            
        }
    }
    }
})
window.addEventListener('click',function(event){
    if(event.target == $('.module-window')){
        $('.module-window').style.display='none';
    }
})