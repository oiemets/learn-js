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



// function sumInput () {
//     let sumArray  = [];
//     do {
//         sumArray.push( +prompt("enter the number, please", "") );
//     } while (sumArray.length);
    

//     console.log(sumArray);

function sumInput () {
    let input;
    let sumArray = [];
    do {
        input = prompt("enter a number, please", "");
        if ( input === null || input === '' || !isFinite(input) ) break;
        sumArray.push(+input);
    } while (input);
    let sum = 0;
    for (let i of sumArray) {
      sum += i; 
    }
    return sum;    
};

alert ( sumInput() );
    
    // do {
    //     input = +prompt('enter the number, please', '');
    //     sumArray.push(input)
    // } while (Number.isInteger(input));
    
    // console.log(sumArray)
    

    // if(input === null || input === ''){
    //     return
    // } for (let i = 0; i < sumArray.length; i++)
    // alert (i += i);    



// 
    // function sumInput() {

    //     let numbers = [];
      
    //     while (true) {
      
    //       let value = prompt("Введите число", 0);
      
    //       // Прекращаем ввод?
    //       if (value === "" || value === null || !isFinite(value)) break;
      
    //       numbers.push(+value);
    //     }
      
    //     let sum = 0;
    //     for (let number of numbers) {
    //       sum += number;
    //     }
    //     return sum;
    //   }
      
    //   alert( sumInput() );



