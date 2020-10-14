/* 
Напишите функцию shuffle(array), которая перемешивает 
(переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным 
последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. 
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], 
или [3,1,2] и т.д., с равной вероятностью каждого случая.
*/


let arr = [1, 2, 3];

function shuffleArray (arr) {

    arr.sort( (a, b) => Math.random(a) - Math.random(b) );

}

shuffleArray(arr);

console.log(arr);

// answer:

// 1
/* 
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

*/



// 2
// алгоритм «Тасование Фишера — Йетса» 
/* 
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}
*/

