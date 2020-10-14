// let name = "John";

// function sayHi() {
//     alert("hi, " + name);
// }

// name = "Pete";

// sayHi();


// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       alert(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)


// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   }
  
// }

// let counter = makeCounter();

// alert( counter() );
// alert( counter() );
// alert( counter() );


// let counter2 = makeCounter();

// alert( counter2() );

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// alert( counter2() ); // ?
// alert( counter2() ); // ?


// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter()

// // console.log(counter);

// alert( counter.up() ); //1
// alert( counter.up() ); //2
// alert( counter.down() ); //


// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }



// sayHi();


// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//     };


//     console.log(options)

//     let {title, width, height} = options;

    // console.log(options)


    // let options = {
    //     title: "Menu"
    //     };

    //     let {width = prompt("width?"), title = prompt("title?")} = options;
        
    //     // alert(title); // Menu
    //     // alert(width);

    