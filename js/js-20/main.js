let get = ourSel => document.querySelector(ourSel),
    regForm = document.forms.register,
    users = [],
    newTd,userIndex;

function addUser(){
    if (regForm.login.value != '' && regForm.password.value != '' && regForm.email.value!='')users.push({name: regForm.login.value, password: regForm.password.value, email: regForm.email.value});
    else alert('Без пустих полів !!!')
    for(const item of regForm.elements){
        item.value='';
    }
    render();
}

function render(){
    get('.main-table > tbody').innerHTML='';
    users.forEach( (item,index)=>{
        let newUserRow = document.createElement('tr');
        newTd = document.createElement('td');
        newTd.innerText = index+1;
        newUserRow.append(newTd);
        for(const key in item){
            newTd = document.createElement('td');
            newTd.innerText= item[key];
            newUserRow.append(newTd);
        }
        newTd = document.createElement('td');
        let buttonEdit = document.createElement('button');
        buttonEdit.classList = 'button , button_edit';
        buttonEdit.innerText = 'Edit';
        newTd.append(buttonEdit);
        newUserRow.append(newTd);

        newTd = document.createElement('td');
        let buttonDelete = document.createElement('button');
        buttonDelete.classList = 'button , button_delete';
        buttonDelete.innerText = 'Delete';  
        newTd.append(buttonDelete);
        newUserRow.append(newTd);
        get('.main-table > tbody').append(newUserRow);
    })
}

function deleteUser(event){
    indexLocator = event.target.parentElement.parentElement.firstChild.innerText;
    if (event.target.classList.contains('button_delete') ) {
        users.splice(indexLocator-1, 1);
        render();
    }
}
function edit(event){
    userIndex = event.target.parentElement.parentElement.firstChild.innerText;
    if (event.target.classList.contains('button_edit')) {
        ({ name: regForm.login.value, password: regForm.password.value, email: regForm.email.value } = users[userIndex-1]);
        get(".register-button").style.display = 'none';
        get('.edit-button').style.display = 'block';
    }
}
function saveEditUser(){
    get(".register-button").style.display = 'block';
    get('.edit-button').style.display = 'none';
    users[userIndex-1] = { name: regForm.login.value, password: regForm.password.value, email: regForm.email.value };
    for (const item of regForm.elements) {
        item.value = '';
    }
    render();
}
get(".register-button").addEventListener('click', addUser);
get(".main-table tbody").addEventListener('click', deleteUser);
get(".main-table tbody").addEventListener('click', edit);
get(".edit-button").addEventListener('click', saveEditUser);