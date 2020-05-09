let $ = (sel) => document.querySelector(sel), currentId, loginForm = document.forms["loginForm"], usersTable = $('.users-table__body'), users = [];
let editButton = document.createElement('button');
editButton.innerText = 'Edit';
editButton.classList.add('button-users', 'button-users_edit');
let deleteButton = document.createElement('button');
deleteButton.innerText = 'delete';
deleteButton.classList.add('button-users', 'button-users_delete');
class User {
    constructor(login, password, email) {
        this.login = login;
        this.password = password;
        this.email = email;
    }
}
function addUser() {
    users.push(new User(loginForm.login.value, loginForm.password.value, loginForm.email.value));
    for (const element of loginForm.elements)
        if (element.type != 'button')
            element.value = '';
    render();
}
function render() {
    usersTable.innerHTML = '';
    for (const user of users) {
        let newTableRow = document.createElement('tr');
        newTableRow.classList.add('users-table__table-row');
        newTableRow.cloneNode(true);
        let idCell = document.createElement('td');
        idCell.classList.add('table-row_cell');
        idCell.innerText = (users.indexOf(user) + 1).toString();
        newTableRow.append(idCell);
        for (const key in user) {
            let newTableCell = document.createElement('td');
            newTableCell.classList.add('table-row_cell');
            newTableCell.innerText = user[key];
            newTableRow.append(newTableCell);
        }
        let cellEdit = document.createElement('td');
        cellEdit.classList.add('table-row_cell');
        let cellDelete = cellEdit.cloneNode(true);
        let newEditButton = editButton.cloneNode(true);
        cellEdit.append(newEditButton);
        let newDeleteButton = deleteButton.cloneNode(true);
        cellDelete.append(newDeleteButton);
        newTableRow.append(cellEdit);
        newTableRow.append(cellDelete);
        usersTable.append(newTableRow);
        console.log(usersTable);
    }
}
function editUser(currenID) {
    for (const element of loginForm.elements)
        if (element.type != 'button')
            element.value = users[currenID][element.name];
    loginForm.editButton.style.display = 'block';
    loginForm.loginButton.style.display = 'none';
}
function saveEditUser(currenID) {
    for (const element of loginForm.elements)
        if (element.type != 'button')
            users[currenID][element.name] = element.value;
    loginForm.editButton.style.display = 'none';
    loginForm.loginButton.style.display = 'block';
    render();
    for (const element of loginForm.elements)
        if (element.type != 'button')
            element.value = '';
}
loginForm.editButton.addEventListener('click', function () {
    saveEditUser(currentId);
});
usersTable.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName == 'BUTTON') {
        currentId = target.parentElement.parentElement.firstChild.innerText - 1;
        if (target.innerText == 'Edit') {
            editUser(currentId);
        }
        else {
            users.splice(currentId, 1);
            render();
        }
    }
});
loginForm.loginButton.addEventListener('click', function () {
    if (!$('[name="loginForm"] input:invalid'))
        addUser();
});
