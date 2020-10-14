/* 
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор || 
*/


function checkAge(age){
    return (age > 18) ? true : confirm('Do your parents know about it?');
};


function checkAge2(age){
    return (age > 18) || confirm('Do you parents know about it?');
};