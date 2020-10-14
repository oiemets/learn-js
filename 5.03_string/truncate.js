/* Создайте функцию truncate(str, maxlength), 
которая проверяет длину строки str и, если она превосходит maxlength, 
заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, 
либо, если необходимо, усечённая строка. */





// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         maxlength = maxlength - 3;
//         strSliced = str.substr(0, maxlength) + "...";
//         return strSliced;
//     }return str;
// };


function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    }return str;
};



function truncate(str, maxlength) {
    return (str.length > maxlength) ? 
      str.slice(0, maxlength - 1) + '…' : str;
  }

