/* 
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;





/* 
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/


let testObject = {};

function isEmpty(obj){
    for(let key in obj)
    if(key){
        return false;
    }
    return true;
};


alert( isEmpty(testObject) );

testObject.morning = "7:30";

alert( isEmpty(testObject) );