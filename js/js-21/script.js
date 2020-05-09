let $ = ourSel => document.querySelector(ourSel),
    resultBlock = $('.edit_zone'), mainModal = $('.modal-window'), 
    newColor, tempProperity,listType,
    mainForm = document.forms.instruments, secondaryForm = document.forms.adminInstruments, 
    signForm = document.forms.LoginForm, tableForm = document.forms.tableForm, listForm = document.forms.listForm;

function closeModal(){
    $('.body-menu').style.display='none';
    $('.modal-content').style.display = 'block';
    $('.sign-modal').style.display = 'none';
    $('.list-modal').style.display = 'none';
    $('.modal__head h2').innerText = '';
    for (const block of $('.modal-body').children) block.style.display='none';
    mainModal.style.display = 'none';
}
function saveColor(event){
    if (event.target.tagName == 'DIV' && event.target.className != 'colors') {
        newColor = getComputedStyle(event.target)[(tempProperity == 'color') ? 'backgroundColor' : 'background'];
        resultBlock.style[tempProperity] = newColor ;
        if (tempProperity=='color') closeModal();
    }
}
function resetForm(form){
    for(const item in form.elements) item.value='';
}
function checkForm(form){
    let check = 1;
    for (const item of form.elements) {
        if (item.value == '' && item.tagName!='BUTTON'){
            item.style.border = '1px solid #f78c6c'
            check=0;
        }
        else{
            item.style.border = '1px solid lightgray'
        }
    }
    return check;
}
$('header').addEventListener('click', function(event){
    let target = event.target;
    if(target.tagName == 'I') target=target.parentElement;
    if(target.name == 'fontWeight' || target.name == 'fontStyle' || target.name == 'textDecoration' || target.name == 'textAlign'){
        if (resultBlock.style[target.name] == target.value ) resultBlock.style[target.name] = ""; 
        else resultBlock.style[target.name] = target.value;
    }
    else if (target.name == 'fontFamily' || target.name == 'fontSize' ){
        resultBlock.style[target.name] = `${target.parentElement.innerText}${(target.name == 'fontFamily')?',sans-serif':''}`;
        target.parentElement.parentElement.previousElementSibling.checked = false;
    }
    else if (target.name == 'color' || target.name == 'background' || target.name == 'signin' ){
        mainModal.style.display = 'block';
        if (target.name == 'signin'){
            if (mainForm.adminButton.disabled){
                $('.modal__head h2').style.margin='0 auto';
                $('.modal__head h2').innerText = 'Sign in';
                signForm.style.display='flex';
            }
            else{
                $('.sign-modal').style.display = 'flex';
                $('.modal-content').style.display='none';
            }
        }
        else{
            $('.modal__head h2').style.margin = '';
            tempProperity = target.name;
            $('.colors').style.display = 'flex';
            if (target.name == 'color') $('.modal__head h2').innerText = 'Choose text color';
            else{
                $('.modal__head h2').innerText = 'Choose background color or image';
                $('.body-menu').style.display='block';
            }
        }
    }
    else if (target.name =='adminButton'){
        if(!mainForm.adminButton.disabled){
            mainForm.style.display='none';
            secondaryForm.style.display='flex';
            resultBlock.contentEditable = true;
            resultBlock.innerText = resultBlock.innerHTML;
        }
    }
    else if (target.name == 'saveButton') {
        mainForm.style.display = 'flex';
        resultBlock.contentEditable = false;
        secondaryForm.style.display = 'none';
        resultBlock.innerHTML = resultBlock.innerText;
    }
    else if (target.name == 'tableButton'){
        mainModal.style.display = 'block';
        $('.modal-content').style.display = 'none';
        $('.table-modal').style.display='flex';
    }    
    else if (target.name == 'olButton' || target.name == 'ulButton') {
        mainModal.style.display = 'block';
        $('.modal-content').style.display = 'none';
        $('.list-modal').style.display='flex';
        $('.row h2').innerText = `Create ${target.value}`;
        listType= this.value;

    }
})
$('.colors').addEventListener('click',saveColor);
$('.images').addEventListener('click', saveColor);
$('.fa-times').addEventListener('click', closeModal);
window.addEventListener('click', function (event) {
    if (event.target == mainModal) closeModal();
})
$('.body-menu').addEventListener('click',function(event){
    if(event.target.tagName='BUTTON'){
        for (const block of $('.modal-body').children) block.style.display = 'none';
        $('.'+(event.target.innerText).toLowerCase()).style.display = 'flex';
    }
})
$(".file input").addEventListener("change", function () {
    if (this.files[0]) {
        var fr = new FileReader();
        fr.addEventListener("load", function () {
            resultBlock.style.backgroundImage = "url(" + fr.result + ")";
        }, false);
        fr.readAsDataURL(this.files[0]);
    }
});
signForm.signInButton.addEventListener('click',function(){
    if (mainForm.adminButton.disabled){
        if (signForm.userLogin.value == '' && signForm.userPassword.value == ''){
            let alertMessage = document.createElement('p');
            alertMessage.style.color ='#f78c6c';
            alertMessage.style.marginTop='1rem';
            alertMessage.innerText='Value is empty';
            $('.alert').append(alertMessage);
        }
        else if (signForm.userLogin.value == 'admin' && signForm.userPassword.value == '1111'){
            mainForm.adminButton.disabled=false;
            mainForm.signin.children[0].classList = "fas fa-lock-open";
            closeModal();
        }
    }
})
$('.sign-modal').addEventListener('click',function(event){
    if (event.target == $('.sign-modal button:first-child'))closeModal();
    if (event.target == $('.sign-modal button:last-child')){
        mainForm.signin.children[0].classList = "fas fa-lock";
        mainForm.adminButton.disabled = true;
        closeModal();
    };
})
tableForm.ResetTableButton.addEventListener('click',resetForm,tableForm)
tableForm.CreateTableButton.addEventListener('click', function(){
    if(checkForm(tableForm)){
        let newTable = document.createElement('table');
        for(let i = 0; i < tableForm.trCount.value;i++){
            let newTr= document.createElement('tr');
            for (let i = 0; i < tableForm.tdCount.value; i++){
                let newTd = document.createElement('td');
                newTd.style.cssText = `height:${tableForm.tdHeight.value}px;
                width:${tableForm.tdWidth.value}px;
                border: ${tableForm.borderWidth.value}px ${tableForm.borderStyle.value}  ${tableForm.borderColor.value};
                `;
                newTd.innerText='TD';
                newTr.append(newTd);
            }
            newTable.append(newTr);
        }
        resultBlock.innerText += newTable.outerHTML;
        closeModal();
    }
    else{
        $('.table-modal').append('Invalid value');
    }
})
listForm.resetList.addEventListener('click',resetForm,listForm);
listForm.createList.addEventListener('click',function(){
    if(checkForm(listForm)){
        let newList = (listType == 'ul') ? document.createElement('ul'):document.createElement('ol');
        newList.style.cssText =`list-style-type : ${listForm.listStyle.value} ;`; 
        for (let i = 0; i < listForm.liCount.value;i++){
            let newLi = document.createElement('li');
            newLi.innerText='li';
            newList.append(newLi);
        }
        resultBlock.innerText += newList.outerHTML;
        closeModal();
    }
    else {
        $('.table-modal').append('Invalid value');
    }
})