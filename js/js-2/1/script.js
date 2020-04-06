let mark=0;
(prompt("Як переадресувати сторінку в javascript?","") == "windows.location.href")?mark++ : 0;
(prompt("Скільки парметрів можна передати в функцію?", "") == "безліч") ? mark++ : 0;
(prompt("Як задавати змінну в js?", "") == "let") ? mark++ : 0;
(prompt("Які дужки використовуються для масиву?", "") == "[]") ? mark++ : 0;
(prompt("Чи мона використовувати функцію в якості конструктора?", "") == "Так") ? mark++ : 0;
(prompt("Чи можна задати масив таким способом var a = 'A,B'.split(',') ", "") == "Так") ? mark++ : 0;
(prompt("Що виведе alert(typeof null", "") == "object") ? mark++ : 0;
(prompt("0.1+0.2== 0.3", "") == "Ні") ? mark++ : 0;
(prompt("NaN == NaN", "") == "false") ? mark++ : 0;
(prompt("alert null instance Object", "") == "false") ? mark++ : 0;
(mark >= 8) ? alert("Senior JS"): (mark >= 5) ? alert("Middle JS") : alert("Junior JS")