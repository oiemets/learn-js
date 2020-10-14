/* 
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять 
числовое значение и возвращать его
*/

function extractCurrencyValue(str) {
    str = str.slice(1);
    return Number(str);
};

extractCurrencyValue($120);


// answer:
function extractCurrencyValue(str) {
    return +str.slice(1);
  }