/* 

Создайте функцию getDateAgo(date, days), возвращающую число, 
которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) 
вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.


*/


function getDateAgo(date, days){
    let daysToMs = days * 24 * 3600 * 1000;
    let dateAgo = new Date(date.getTime() - daysToMs)
    return dateAgo.getDate();
}

// the answer:
/*

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

*/

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) );
console.log( getDateAgo(date, 2) );
console.log( getDateAgo(date, 365) );
