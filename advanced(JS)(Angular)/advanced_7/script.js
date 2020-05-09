let $ = sel => document.querySelector(sel),
    searchForm = document.forms.searchFilm,
    paginPage = 1;

parseData = result => JSON.parse(result);

function drawContent(searchResult) {
    searchResult.forEach(item => {
        let filmBlock = document.createElement('div');
        filmBlock.classList.add('film_intro');
        filmBlock.setAttribute('filmTitle', `${item.Title}`);
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
        $('.main').append(filmBlock);
    })
}

async function getData(filmName,type) {
    console.log(filmName)
    const search = (type =='t') ? `t=${filmName}`           
    :(filmName.split(' ').length > 1) ?
        `${type}=${filmName.split(' ')[0]}&y=${filmName.split(' ')[1]}&page=${paginPage}` :
        `${type}=${filmName}&page=${paginPage}`;
    
    const response = await fetch(`http://www.omdbapi.com/?${search}&apikey=4b5d6314`);
    console.log(response)
    const data = await response.json();
    console.log(data)
    try {
        if (data.Response != 'False') {
            return  (type == 't')?data:data.Search;
        } 
        else {
            throw new SyntaxError('No such film or film on such year');
        }
    } catch (err) {
        console.error(err);
    }

}
searchForm.searchFilmButton.addEventListener('click', function () {
    $('.more-content').style.display = 'flex';
    paginPage = 1;
    $('main').innerHTML = '';
    const filmName = searchForm.filmName.value;
    getData(filmName,'s').then(data=>drawContent(data));
})

$('.more-content_button').addEventListener('click', function () {
    paginPage++;
    getData(searchForm.filmName.value,'s').then(data=>drawContent(data));
})

$('.clear').addEventListener('click', function () {
    searchForm.filmName.value = '';
})
$('.main').addEventListener('click', function (event) {
    let target = event.target;
    if (target.tagName == 'BUTTON') {
        $('.module-window').style.display = 'block';
        $('.poster_image').src = '';
        let choosedFilm = target.parentElement.getAttribute('filmTitle');
        getData(choosedFilm,'t').then(
            parsedFilmData=>{
                $('.poster_image').src = parsedFilmData.Poster;
                for (const info of $('.module_info').children) {
                    if (info.tagName != 'STRONG') {
                        info.innerText = '';
                        let key = info.className.split('_')[1];
                        key = key[0].toUpperCase() + key.slice(1);
                        if (key == 'Ratings') {
                            parsedFilmData[key].forEach(rate => {
                                info.innerText += `${rate.Source} : ${rate.Value}\n `;
                            })
                        } else info.innerText += parsedFilmData[key];
                    }
                }
            });
    }
})

window.addEventListener('click', function (event) {
    if (event.target == $('.module-window')) $('.module-window').style.display = 'none';
})