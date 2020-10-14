/* 

В Европейских странах неделя начинается с понедельника (день номер 1), 
затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
Напишите функцию getLocalDay(date), которая возвращает «европейский» 
день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2


*/

function getLocalDay(date) {
    if(date.getDay() === 0){
        return 7;
    }
    return date.getDay();
}



// the answer:

/* 

 function getLocalDay(date) {
  
    let day = date.getDay();
  
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
      day = 7;
    }
  
    return day;
  }

*/


let date = new Date(2012, 0, 3);

console.log(getLocalDay(date));