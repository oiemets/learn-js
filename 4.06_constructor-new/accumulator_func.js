/* 
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе 
конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при 
вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
*/


/*I did. Wrong.*/
// function Accumulator(startingValue) {
//         this.read = function () {
//         this.a = +prompt("enter value", 0);
//         this.b = +startingValue + this.a;
//         this.value = (this.a + this.b);
// };
//     }; 



function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('enter value', 0);
    };
}



let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value);