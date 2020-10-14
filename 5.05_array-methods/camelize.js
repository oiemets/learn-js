/* 
Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
потом переделайте всё как нужно и методом join соедините обратно.
*/

let input = 'border-left-width';
let input1 = 'background-color';
let input2 = "-webkit-transition";





function camelize(input) {

    let wordsArray = Array.from(input);
    
    let startIndex = 0;
    let hyphenIndex;
    let outputArray = [];
    let lastHyphenIndex = wordsArray.lastIndexOf("-") - 1;
    let count = 0;

  

    do{
        hyphenIndex = wordsArray.indexOf("-", [startIndex]);
        if(hyphenIndex === -1) break;
        outputArray.push(wordsArray.slice([startIndex], [hyphenIndex]).join(''));
        wordsArray.splice([hyphenIndex], 2, wordsArray[hyphenIndex + 1].toUpperCase());
        startIndex = hyphenIndex;
        count++;
    } while(wordsArray.length);
    

    if(count === 1 || count === 0){
        return wordsArray.join('');
    } else if (count > 1) {
        outputArray.push(wordsArray.slice([lastHyphenIndex], [wordsArray.length]).join(''));
        return outputArray.join('');
    }


};

camelize(input2);

