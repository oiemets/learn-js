/* 

Создайте декоратор delay(f, ms),

который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, 
но ваше решение должно передавать все аргументы и контекст this.
    

*/

// function delay (f, ms) {


//   return setTimeout(function () {

//     return f.call(this, ...arguments);
//   }, ms, ...arguments); 


//   };





function delay (f, ms) {


  return function () {

    return setTimeout( () => f.apply(this, arguments), ms, arguments );
    
  }


}




function f(x) {
    alert(x);
  }
  
  
  function b(c) {
    console.log(c);
  }
  
  
  let f1000 = delay(b, 1000);
  let f1500 = delay(b, 1500);
  
  f1000("test");
  f1500("shmest");