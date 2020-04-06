let monthNumber = prompt("Введіть число від 1 до 12");
(monthNumber == 1 ||monthNumber == 2 || monthNumber == 12) ? alert("Зима"):
(monthNumber >= 3 && monthNumber <= 5)?alert("Весна"):
(monthNumber >= 6 && monthNumber <= 8) ? alert("Літо"):
(monthNumber >= 9 && monthNumber <= 11) ? alert("Осінь"):alert("Нема такого місяця");

