/* 
Сортировать в обратном порядке


let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки в обратном порядке

alert( arr ); // 8, 5, 2, 1, -10 
*/



let arr = [5, 2, 1, -10, 8];

function sortReverse (arr) {
    arr.sort( (a, b) => a - b ).reverse();
    return arr;
}


// answer:
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr );