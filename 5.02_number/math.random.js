/* 
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) 
до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей 
точкой от min до max (но не включая max).
*/

// function random(min, max) {
//     return Math.random() * (max - min) + min;
// };

// alert ( random(1, 5) );

// function random(min, max) {
//     return min + Math.random() * (max - min);
//   }


/* incorrect */
// function randomInteger(min, max) {
//     return Math.round( min + Math.random() * (max - min) );
// };

// alert ( randomInteger(1, 10) );



/* correct answer1 */

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );

  /*  correct answer2  */

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );


  