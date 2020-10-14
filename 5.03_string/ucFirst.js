/* Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася"; */



function ucFirst(str) {
    alert( str[0].toUpperCase() + str.slice(1) );
};

ucFirst('collaboration');


/* answer with string checking */
// function ucFirst(str) {
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }
  
//   alert( ucFirst("вася") ); // Вася