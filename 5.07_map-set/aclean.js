/* 
Анаграммы – это слова, у которых те же буквы в том же количестве, 
но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

*/



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function aclean(arr) {
    let sortedWord = [];
    for(let word of arr) {
        sortedWord.push( word.toLowerCase().split('').sort().join('')  )
    };
    let sortedIndex = new Set();
   for(word of sortedWord) {
       sortedIndex.add(sortedWord.indexOf(word))
   }
    let newArr = [];
    for(let index of sortedIndex){
        newArr.push(arr[index]);
    }

    return newArr;
}

aclean(arr);



