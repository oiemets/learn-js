/* 

Создайте функцию getSecondsToTomorrow(), 
возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно 
быть конкретного значения сегодняшней даты.


*/


function getSecondsToTomorrow() {
    let currentDate = new Date();
    let currentSeconds = currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds();
    
    return 86400 - currentSeconds


}

console.log(getSecondsToTomorrow());




// the answer 1:

// function getSecondsToTomorrow() {
//   let now = new Date();

//   // завтрашняя дата
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

//   let diff = tomorrow - now; // разница в миллисекундах
//   return Math.round(diff / 1000); // преобразуем в секунды
// }






// the answer 2:


// function getSecondsToTomorrow() {
//   let now = new Date();
//   let hour = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
//   let totalSecondsInADay = 86400;

//   return totalSecondsInADay - totalSecondsToday;
// }

// console.log(getSecondsToTomorrow())




