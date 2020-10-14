/* 

Напишите функцию getLastDayOfMonth(year, month), 
возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).


*/


function getLastDayOfMonth(year, month){
    let date = new Date (year, month + 1);
    let dateAgo = new Date(date.getTime() - 1);
    return dateAgo.getDate();

}



console.log(getLastDayOfMonth(2017, 9));
console.log(getLastDayOfMonth(2013, 10));
console.log(getLastDayOfMonth(2019, 11));

// the answer:
// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
//   }
  
//   alert( getLastDayOfMonth(2012, 0) ); // 31
//   alert( getLastDayOfMonth(2012, 1) ); // 29
//   alert( getLastDayOfMonth(2013, 1) ); // 28


