/* 
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения межу 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например:

.. ваш код для inBetween и inArray


let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

*/



let arr = [1, 2, 3, 4, 5, 6, 7];


function inBetween(a, b) {
    return (el) => {
        return el >= a && el <= b;
    };
  };


function inArray(array) {
    return (el) => {
      return array.indexOf(el) >= 0;
    };
  };


// answer:
  // function inArray(arr) {
  //   return function(x) {
  //     return arr.includes(x);
  //   };
  // }


console.log( arr.filter (inBetween(3, 6) ) );

console.log( arr.filter(inArray([1, 2, 10])) );
