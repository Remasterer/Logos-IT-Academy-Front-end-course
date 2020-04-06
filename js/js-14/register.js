let getSel  = ourSel => document.querySelector(ourSel);
let getSelAll = ourSels => document.querySelectorAll(ourSels);

let signUpBtn = getSel(".sign-button");
getSel(".agree-to-terms").addEventListener('click', function(){
  if(this.checked){
    signUpBtn.style.background ="#167835";
    signUpBtn.removeAttribute("disabled");
  }
  else{
    signUpBtn.style.background = "#6db985";
    signUpBtn.addAttribute("disabled");
  }
})
getSel(".sign-button").addEventListener('click', function(){
  let nullStr = 1;
  getSelAll(".form-data").forEach( item => (item.value == '')? nullStr = 0 : 1)
  if (nullStr == 1 && (getSel("#sex-male").checked || getSel("#sex-female").checked) && getSel("#positions").value != "standart"){
    getSel(".form__container").style.display="none";
    getSel(".final-form").style.display = "block";
    getSel(".user-name").innerHTML = getSelAll(".form-data")[0].value + getSelAll(".form-data")[1].value;
    getSel(".user-email").innerHTML  = getSelAll(".form-data")[2].value;
    getSel(".user-position").innerHTML  = getSel("#positions").innerHTML;
    (getSel("#sex-male").checked) ? getSel(".male-image").src = "/man.png" : getSel(".male-image").src = "/woman.png";
  }
})
getSel(".sign-out").addEventListener("click",function(){
  getSel(".final-form").style.display = "none";
  getSel(".form__container").style.display = "block";
  getSelAll(".form-data").forEach(item => item.value = '');
  getSel("#sex-male").checked = false;
  getSel("#sex-female").checked = false;
  getSel("#positions").value = "standart";
  getSel(".agree-to-terms").checked= false;
})