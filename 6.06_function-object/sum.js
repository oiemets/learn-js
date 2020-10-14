/* 
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15

P.S. Подсказка: возможно вам стоит сделать особый метод 
преобразования в примитив для функции.

решение

*/

function sum(a) {
    
    let acc = a;

    function f(b) {
    acc += b;
    return f;
}

    f[Symbol.toPrimitive] = function () {    
      return acc;
  }
    
  // f.toString = function() {
    //     return acc;
    // };

  return f;

};


console.log( sum(2)(3)(4)(3) == 12 )

