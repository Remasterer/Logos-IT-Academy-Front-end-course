let getSel = ourSel => document.querySelector(ourSel);
let getSelAll = ourSels => document.querySelectorAll(ourSels),lastIndex=0;
let taskCheckers = document.forms.form_task_list.elements;
getSel(".modal__cancel").addEventListener("click", function () {
  getSel(".modal_null_string").style.visibility = "hidden";
})
getSel(".add-task-button").addEventListener('click', function(){
  if (getSel(".task-listener").value != ''){
    let newTask = document.createElement('li');
    newTask.classList.add("task-list-item");
    let newTaskCheck = document.createElement('input');
    newTaskCheck.type="checkbox";
    newTask.append(newTaskCheck);
    newTask.innerHTML += getSel(".task-listener").value;
    getSel(".task-list").append(newTask);
    newTask.addEventListener('click', function () { 
      if(lastIndex>1){
        this.remove() 
        lastIndex--;
      }
      else{
        getSel(".modal_null_string").style.visibility ="visible";
        getSel(".modal_text >p ").innerHTML = "Ви не видалити останю стрічку!";
      }
    })
    lastIndex++;
  }
  else{
    getSel(".modal_null_string").style.visibility = "visible";
    getSel(".modal_text >p ").innerHTML = "Ви не можете добавити пусту стрічку!";
  }
})
