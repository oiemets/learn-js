/* 
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала 
сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день, т.е. в ней не должно быть конкретного 
значения сегодняшней даты.

*/

function getSecondsToday() {
    
    let currentDate = new Date();
    let getSecondsFromHours = currentDate.getHours() * 3600;
    let getSecondsFromMinutes = currentDate.getMinutes() * 60;
    let getSecondsFromCurrentDate = currentDate.getSeconds();

    return getSecondsFromHours + getSecondsFromMinutes + getSecondsFromCurrentDate; 


}

console.log(getSecondsToday());

// the answer:

/*

function getSecondsToday() {
  let now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

alert( getSecondsToday() );
В качестве альтернативного решения можно получить часы/минуты и преобразовать их в секунды:

 function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}


*/