/* 
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».


*/

let user = {
    name: 'John',
    age: 30
  };

function count(obj) {
    counter = 0;

    for( let values of Object.entries(obj) ){
        if(!values){
            return 0;
        } else {
            counter++;
        }
    
}

return counter;
}


  alert( count(user) ); // 2

