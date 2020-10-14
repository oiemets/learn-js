/* Допустим, у нас есть массив arr.

Создайте функцию unique(arr), которая вернёт массив уникальных, 
не повторяющихся значений массива arr.

Например:

function unique(arr) {
  /* ваш код */
/* }

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
P.S. Здесь мы используем строки, но значения могут быть любого типа.

P.P.S. Используйте Set для хранения уникальных значений. */ 


let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


/* function unique(arr) {
  const unique1 = (str, index, arr) => {
    return arr.indexOf(str) === index;
  }
  const unique2 = arr.filter(unique1);
    console.log(unique2);
};
unique(values);
 */

function unique(arr) {
  arr = new Set(arr);
  return [...arr];
}

console.log( unique(values) );


