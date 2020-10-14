/* 
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr.

Например:

function unique(arr) {
  ваш код 
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O

*/

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];


function unique(arr) {
  const unique1 = (str, index, arr) => {
    return arr.indexOf(str) === index;
  }
  const unique2 = arr.filter(unique1);
  console.log(unique2)
}

unique(strings);