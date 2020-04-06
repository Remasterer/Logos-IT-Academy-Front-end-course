let getSel = ourSel => document.querySelector(ourSel),
    getAll = ourSels => document.querySelectorAll(ourSels),
    styleBlock = getSel(".block_style"),
    editBlock = getSel(".block_edit"),
    textBlock = getSel(".block_text"),
    formEdit = document.forms.form_edit,
    editArea = document.forms.form_edit.edit_area,
    formAdd = document.forms.form_add;
function showBlocks(){
  if(".block_" + this.innerHTML == ".block_style") editBlock.style.display = "none"
  else{
    styleBlock.style.display = "none";
    editArea.value = textBlock.innerHTML;
  }
  getSel(".block_" + this.innerHTML).style.display="flex";
}
getSel(".button_style").addEventListener('click', showBlocks);
getSel(".button_edit").addEventListener('click', showBlocks);
getSel(".button_save").addEventListener('click', function(){
  textBlock.innerHTML= editArea.value;
});
for(let elem of formEdit){
  elem.addEventListener("click",function(){
    (this.checked || this.name == "fontFamily") ? textBlock.style[this.name] = this.value : textBlock.style[this.name] = "";  
  })
}
getAll(".button_color").forEach(elem => elem.addEventListener("click", function () {
  let properity = this.name;
  console.log(properity);
  getSel(".choose-color").style.display = "flex";
  getAll(".block-choose").forEach(elem => elem.addEventListener("click",function(){
    textBlock.style[properity] = getComputedStyle(elem).backgroundColor;
    getSel(".choose-color").style.display = "none";
    properity = " ";
  }))
}))
getSel(".button_add").addEventListener("click",function(){
  textBlock.style.display="none";
  getSel(".block__work").style.display="none";
  getSel(".button__container_center").style.display = "none";
  getSel(".block_add").style.display = "block";
})
getSel(".block_add").addEventListener("click",function(event){
  if(event.target == formAdd.item_add[0]){
    getSel(formAdd.item_add[0].value).style.display="block";
    getSel(formAdd.item_add[1].value).style.display = "none";
  }
  else if (event.target == formAdd.item_add[1]){
    getSel(formAdd.item_add[1].value).style.display = "block";
    getSel(formAdd.item_add[0].value).style.display = "none";
  }
})
getSel(".button_table").addEventListener("click",function(){
  let newTable = document.createElement('table');
  for(let i = 0 ; i < formAdd.tr_count.value;i++){
    let newTr = document.createElement('tr');
    for (let j = 0; j < formAdd.td_count.value; j++) {
      let newTd = document.createElement('td');
      newTd.setAttribute("style",`width:${formAdd.td_width.value};
                          height:${formAdd.td_height.value};
                          border:${formAdd.border_width.value} ${formAdd.border_type.value} ${formAdd.border_color.value};`);
      newTd.innerText = "TD";
      newTr.append(newTd );
    }
    newTable.append(newTr);
  }

  getSel(".block__work").style.display = "block";
  getSel(".button__container_center").style.display = "flex";
  editArea.value += newTable.outerHTML;
  getSel(".block_add").style.display = "none";
  textBlock.style.display="block";
})
getSel(".button_list").addEventListener("click",function(){
  let newList = document.createElement('ul');
  for (let i = 0; i < formAdd.li_count.value ; i++){
    let newLi = document.createElement('li');
    newLi.innerText = `${i}Item`;
    newList.append(newLi);
  }
  newList.style.listStyle = formAdd.type_of_marks.value;
  getSel(".block__work").style.display = "block";
  getSel(".button__container_center").style.display = "flex";
  editArea.value += newList.outerHTML;
  getSel(".block_add").style.display = "none";
  textBlock.style.display = "block";
})