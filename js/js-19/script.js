let checkData = [/^\w{1,20}$/ , /^\w{1,20}$/ , /^[0-9a-z-\.\_]+\@[a-z]{2,}\.[a-z]{2,}$/ , /[0-9-\()-]/ ,/^[a-zA-Z0-9]{8,15}$/],
    registerFrom = document.forms[0],
    get = outSel => document.querySelector(outSel);
$("#phone").mask("38(999)-999-99-99");
for (const children of get(".register-form").children) {
    let alertDiv = document.createElement('div');
    alertDiv.classList.add('wrong');
    alertDiv.innerText = `Please provide a valid`;
    children.append(alertDiv);
}
get(".register-button").addEventListener('click', function(){
  let i =0;
  for (const item of registerFrom.elements) {
    if(checkData[i++].test(item.value)){
      item.style.borderColor = '#41a658';
      item.parentElement.lastChild.style.opacity = '0';
      item.parentElement.classList.remove('badAnswer');
      item.parentElement.classList.add('goodAnswer');

    }
    else{
      item.style.borderColor = '#e14756';
      item.parentElement.lastChild.style.opacity='1';
      item.parentElement.classList.remove('goodAnswer');
      item.parentElement.classList.add('badAnswer');
    }
  }
})