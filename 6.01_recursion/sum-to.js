/* 
Вычислить сумму чисел до данного


Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { ... ваш код ...  }

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?


*/

// 1:

// function sumTo(n) {
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumTo(100000));



// 2:

// function sumTo(n) {

//     if(n === 1){
//         return n;
//     }else{
//         return n + sumTo(n - 1);
//     }

// };

// console.log( sumTo(11000) );



// 3:


// answer for 3rd option using a arithmetic progression formula:


function sumTo(n) {
    return n * (n + 1) / 2;
  }
  
  alert( sumTo(100) );
