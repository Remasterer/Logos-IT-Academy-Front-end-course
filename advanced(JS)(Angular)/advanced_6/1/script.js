let $ = sel => document.querySelector(sel),
registerForm = document.forms.registerForm,loginForm=document.forms.loginForm,
check={
  text:/^\w{1,20}$/,
  email:/^[0-9a-z-\.\_]+\@[a-z]{2,}\.[a-z]{2,}$/,
  password:/^[a-zA-Z0-9]{8,15}$/,
},possibilityOfUserCreation=1,users=[];

function checkForm(){
  for (const input of this.parentElement.elements) {
   if(input.type!='button'){
     if((check[input.type]).test(input.value)){
       if(input.type == 'email' && input.parentElement == registerForm){
        if(users.find(item=>JSON.parse(item).email==input.value)){
          input.parentElement.classList.add('repetedEmail'); 
          possibilityOfUserCreation = 0;
        }
       }
       else{
        input.parentElement.classList.remove('repetedEmail');
        input.parentElement.classList.remove('badAnswer');
        input.parentElement.classList.add('goodAnswer');
       }
      } 
     else{
       input.parentElement.classList.remove('goodAnswer');
       input.parentElement.classList.add('badAnswer');  
       possibilityOfUserCreation = 0;
      }
    }
  }
}
function addUser(){
  if(possibilityOfUserCreation != 0){
    let newUser = new User(
      registerForm.firstName.value,
      registerForm.secondName.value,
      registerForm.email.value,
      registerForm.password.value
    );
    for (const input of registerForm.elements){
      input.value= '';
      input.parentElement.classList.remove('goodAnswer');
      input.parentElement.classList.remove('repetedEmail');
    };
    newUser = JSON.stringify(newUser);
    if(localStorage.length > 0 && localStorage.getItem('users')){
      users = JSON.parse(localStorage.getItem('users'));
    }
    else{
      users =[];
    }
    users.push(newUser);
    console.log(users)
    localStorage.setItem('users',JSON.stringify(users));
    possibilityOfUserCreation = 1;
  }
  else{
    possibilityOfUserCreation = 1;
  }
}

function login(){
  users = JSON.parse(localStorage.getItem('users'));
  if(users != null){
    searchUser = JSON.parse(users.find(user=>JSON.parse(user).email ==loginForm.userEmail.value));
    if(searchUser){
      if(searchUser.password == loginForm.userPassword.value){
        loginForm.style.display='none';
        $('.profile_bar').style.display='flex';
        $('.profile_name').innerText = `${searchUser.firstName} ${searchUser.lastName}`;
        $('.profile_email').innerText = `${searchUser.email}`;
      }
    }
    else{
    loginForm.userPassword.parentElement.classList.add('errorLogin');
      }
    }
  else{
  loginForm.userPassword.parentElement.classList.add('localstorageError');
  }
}



$('.login_link').addEventListener('click',function () { 
  this.parentElement.style.display='none';
  loginForm.style.display='flex';
})
$('.register_link').addEventListener('click',function () { 
  this.parentElement.style.display='none';
  registerForm.style.display='flex'; 
})

$('.profile_button').addEventListener('click', function(){
  loginForm.style.display='flex';
  $('.profile_bar').style.display='none';
})

loginForm.loginButton.addEventListener('click',checkForm);
loginForm.loginButton.addEventListener('click',login);
registerForm.registerButton.addEventListener('click',checkForm);
registerForm.registerButton.addEventListener('click',addUser);


class User{
  constructor(firstName,lastName,email,password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}