// Напишите функцию sumInput() , которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


// function sumInput () {
//     let sumArray  = [];
//     do {
//         sumArray.push( +prompt("enter the number, please", "") );
//     } while (sumArray === Number);
    
//     for (let i = 0; i < sumArray.length; i++)
//     alert( i += i);
// };



function sumInput () {
    let sumArray = [];
    let input;
    do {
        input = +prompt('enter the number, please', '');
        sumArray.push(input)
    } while (input);

    if(input === null || input === ''){
        return
    } for (let i = 0; i < sumArray.length; i++)
    alert (i += i);    
};

sumInput();


