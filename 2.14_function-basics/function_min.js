/* 
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/


function min(a,b){
    if (a <= b){
        return a;
    }else if (a > b){
        return b;
    };
}


function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  

function min(a, b) {
    return a < b ? a : b;
  }