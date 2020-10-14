/* 

Создайте декоратор spy(func) , который должен возвращать обёртку, которая сохраняет
все вызовы функции в своём свойстве calls .
Каждый вызов должен сохраняться как массив аргументов.
Например:


function work(a, b) {
alert( a + b ); // произвольная функция или метод
}
work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

*/


function spy (func) {

    result.calls = [];

    function result () {
      let funcRun = func.call(this, ...arguments);
      result.calls.push([...arguments]);
      return funcRun;
    };
    return result;
  };


  function work(a, b) {
    return a + b ;
    }



    work = spy(work);
    

    work(2, 3);  
    work(1, 2);
    work(3, 4);


    console.log( work.calls ) 

    for (let args of work.calls) {
      alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
      }