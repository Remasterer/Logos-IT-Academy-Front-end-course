class MyString{
    reverse(str){
        return str.split('').reverse().join('');
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1,str.length)
    }
    ucWords(str){
        return str.split(' ').map(word =>word[0].toUpperCase() + word.slice(1,word.length)).join(' ');
    }   
}
let s1 = new MyString();
console.log(s1.reverse('rap'));
console.log(s1.ucFirst('arsen'));
console.log(s1.ucWords('arsenal arsenal arsenal'));