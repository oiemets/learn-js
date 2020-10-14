/* 
Скопировать и отсортировать массив

У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений) 
*/

const arr = ["HTML", "JavaScript", "CSS"];

function copySorted (arr) {
    let sortedArray = arr.slice();
    sortedArray.sort();
    return sortedArray;
}

copySorted(arr);


// answer:

// function copySorted(arr) {
//     return arr.slice().sort();
//   }
  
//   let arr = ["HTML", "JavaScript", "CSS"];
  
//   let sorted = copySorted(arr);
  
//   alert( sorted );
//   alert( arr );