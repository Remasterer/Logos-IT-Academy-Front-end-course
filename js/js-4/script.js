let realPassword = "1111",userPassword;
for(let i = 3 ; i>=0;i--){
  userPassword = prompt("Password?");
  if(userPassword == realPassword){
    alert("Запрошуємо на сайт");
    i =0;
  }
   else if(userPassword != realPassword){
    alert("У вас лишилось - " + i +" спроб");
    if(i==0){
      alert("Спробуйте пізніше");
    }
  }
}