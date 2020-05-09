import {bar} from './bar.js';
let $  = sel => document.querySelector(sel),receiptBlock =$('.container:nth-child(3)'),modalWindow=$('.modal_window'),
barForm= document.forms.barForm,
assortmentForm= barForm.assortmentForm;

function renderAssortment() {
    for (const quant of assortmentForm.elements) {
        if(quant.name == 'balance') quant.value = bar.assortment.balance + ' грн';
        else quant.value = bar.assortment[quant.name].count + ' шт';
    }    
}
barForm.addProduct.addEventListener('click',function(){
    let productQuant = barForm.productQuant.value,productName = $('[name="productName"]:checked');
    if(productQuant != 0 && productName != null ){
        productName = productName.value
        let addingProduct = bar.addToBin(productName,productQuant);
        if( typeof(addingProduct) == 'string'){
            barForm.productQuant.value = '';
            modalWindow.style.display='block';
            
            $('.modal_text').innerText = `Вибачте , але на складі лишилося  ${addingProduct.split(' ')[0]} ${bar.assortment[addingProduct.split(' ')[0]].count}`;
        }   
        else{
            console.log(bar.currentBin)
            barForm.bin.value= ' ';
            for (const product in bar.currentBin) {
                if(bar.currentBin[product]!=0) barForm.bin.value += bar.assortment[product].ukr +' : ' + bar.currentBin[product] +'\n';
            }
        }
       
    }
})
barForm.buyProduct.addEventListener('click',function () {
    receiptBlock.innerText = '';
    for (const product in bar.currentBin) (bar.currentBin[product]!=0)?(receiptBlock.innerText += `${product}: ${bar.currentBin[product]}\n`):'';
    receiptBlock.innerText += `Всого: ${bar.getSuma()}`;
    bar.sellProducts();
    barForm.bin.value = '';
    renderAssortment();
})


function closeModal(){modalWindow.style.display='none';}
$('.modal_close').addEventListener('click',closeModal);
$('.modal_exit').addEventListener('click',closeModal);
window.addEventListener('click',function (event) { if(event.target==modalWindow)closeModal()})
renderAssortment()