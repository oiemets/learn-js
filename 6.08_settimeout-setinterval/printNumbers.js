/* 

Напишите функцию printNumbers(from, to) , 
которая выводит число каждую секунду,
начиная от from и заканчивая to .

Сделайте два варианта решения.
1. Используя setInterval .
2. Используя рекурсивный setTimeout .


*/

// function printNumbers(from, to) {

//     setInterval(
//         function () {
//             if(from <= to){
//                 alert(from);
//                 from++;
//             }
//         }, 1000);

// };

// printNumbers(1, 5);



// function printNumbers (from, to) {

//     setTimeout( 
//         function tick ()  {
//             if(from <= to){
//                 alert(from);
//                 from++;
//                 setTimeout(tick, 1000);
//             }
//          }, 1000);
    
// };



// printNumbers(1, 5);