let getSel = ourSel => document.querySelector(ourSel);
let getSelAll = ourSels => document.querySelectorAll(ourSels);
getSel(".button_move").addEventListener('click',function(){
    getSelAll(".text-holder")[1].value = getSelAll(".text-holder")[0].value;
});
getSel(".ultr").addEventListener("focusout",function(){
  if(this.value!='')
    this.placeholder = this.value;
    this.value='';
})
