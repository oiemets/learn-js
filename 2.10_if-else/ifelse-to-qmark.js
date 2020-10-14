//Перепишите if с использованием условного оператора '?':
// let result;

// if (a + b < 4) {
//   result = 'A bit';
// } else {
//   result = 'A lot';
// }
let result = (a + b < 4) ? "A bit" : "A lot";





/* Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк. */

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
let message = (login == 'Employee') ? 'Hi' :
    (login == 'Manager') ? 'Hello' :
    (login == '') ? 'No login':
    '';