/* 

Результатом декоратора debounce(f, ms) должна быть обёртка, 
которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, 
что все остальные вызовы будут игнорироваться в течение ms.

Например:

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс 
от последнего вызова)
На практике debounce полезен для функций, которые получают/обновляют 
данные, и мы знаем, что повторный вызов в течение короткого промежутка 
времени не даст ничего нового. Так что лучше не тратить на него ресурсы.

*/

// function debounce (f, ms) {
  

//   return function run () {

//     setTimeout( () => f.apply(this, arguments), ms );
    
//     return f.apply(this, arguments);
  
//   };

// }




// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

  // setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
  // setTimeout( () => f(4), 1100); // выполняется
  // setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)



// setTimeout( () => f.call(this, ...arguments), 0 );

  



// -----------------------------------------
// let tStart = new Date();

  // let now = setTimeout( () => f.call(this, ...arguments), 0);

  // let later = function () {
  //   return f.call(this, ...arguments);
  // }

//  return function () {

//     f.call(this, ...arguments)

//     let timerId = setTimeout( () => alert, ms);
//     clearTimeout(timerId);
//  }
    // let startTime = new Date();
    // let endTime = startTime + ms;

    // return function () {
    //     let now = new Date();
    //     if( now = startTime && now < endTime){
    //         return f.call(this, ...arguments);
    //         } return;


    // }





    // function debounce (f, ms) {

      //   // f.apply(this, arguments); 
      
      
      
      //   let timer = ms;
      
      //   return function run () {
          
      //     if(timer <= ms){
      //       // f.apply(this, arguments);
      //       setTimeout( () => f.apply(this, arguments), 0);
      //       // timer = timer + ms;
      //     } return;
      
      
      //   }
      
      //     };





      // function debounce (f, ms) {
  
      //   let now = new Date().getTime();
      //   let endOfPeriod = now + ms;
      
        
      //   return function run () {
      
      //     let runTime = new Date().getTime();
      
      //     if(runTime < endOfPeriod){
      //      return
      //     } f.apply(this, arguments);
      
      //   }
      
      // }



      function debounce(f, ms) {

        let isCooldown = false;
      
        return function() {
          if (isCooldown) return;
      
          f.apply(this, arguments);
      
          isCooldown = true;
      
          setTimeout(() => isCooldown = false, ms);
        };
      
      }

      let f = debounce(alert, 1000);

      f(1); // выполняется немедленно
      f(2); // проигнорирован
      
      setTimeout( () => f(3), 100); 
      setTimeout( () => f(4), 1100); 
      setTimeout( () => f(5), 1500); 