/* 
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); 
оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. 
Почему? Как это исправить?


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple




*/

/* let hamster = {
    stomach: [],
  
    eat(food) {
        this.stomach = [],
        this.stomach.push(food);

    }
  };

  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  
  speedy.eat("apple");
  alert( speedy.stomach ); 
  
 
  alert( lazy.stomach ); 
  
  alert(hamster.stomach) */


  /* 
  answer: 

  eat(food) {
        this.stomach = [food];
    }
  };
  
  */


  
//   alternate solution. own stomach for each hamster:

let hamster = {
    stomach: [],
  
    eat(food) {
        this.stomach.push(food);
  
    }
  };
  
  
  let speedy = {
      stomach: [],
    __proto__: hamster
  };
  
  let lazy = {
      stomach: [],
    __proto__: hamster
  };
  
  
  speedy.eat("apple");
  speedy.eat("smthng else");
  console.log(speedy.stomach);
  console.log(lazy.stomach);
  console.log(hamster.stomach);




  
  
 