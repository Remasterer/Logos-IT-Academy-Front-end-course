let getSel = ourSelector => document.querySelector(ourSelector);
let getALL = allSelector => document.querySelectorAll(allSelector);
getSel('.colors').addEventListener('click',function(){
  getSel('.box__container').style.display='flex';
  getALL('.box').forEach((item) => {
    item.style.backgroundImage = ``;
  })
  getALL('.box').forEach(item => item.addEventListener('click',
      function () {
        document.body.style.backgroundColor = item.style.backgroundColor;
  }))
})
getSel('.images').addEventListener('click', function () {
  getSel('.box__container').style.display = 'flex';
  getALL('.box').forEach((item, iteration) => {
    item.style.backgroundImage = `url(${iteration}.jpg)`;
    item.style.backgroundSize="cover";
  })
  getALL('.box').forEach(item => item.addEventListener('click',
    function () {
      document.body.style.backgroundImage = item.style.backgroundImage;
      document.body.style.backgroundSize="cover"
    }))
})