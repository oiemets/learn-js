/* 
Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска 
значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
*/


let styles = ["jazz", "blues"];
alert(styles);
styles.push("rock'n'roll");
alert(styles);
let middleItem = Math.floor(styles.length / 2);
styles[middleItem] = 'classic';
alert(styles);
alert(styles.shift(0));
alert(styles);
styles.unshift("Rap", "Reggae");
alert(styles);

// answer from the book:
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");


// ----------------
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?



/* Вызов arr[2]() синтаксически – старый добрый obj[method](), в роли obj – arr, а в роли method – 2.
Итак, у нас есть вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив:
 */
 let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // "a","b",function
// У массива в итоге 3 элемента: сначала их было 2, плюс функция.