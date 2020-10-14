function formatDate(date) { 
    
    
    let diff = new Date() - date; // разница в миллисекундах
    console.log(diff)
    console.log(date);
    console.log(new Date);

    

//   if (diff < 1000) { // меньше 1 минуты
//     return 'прямо сейчас';
//   }



}


console.log( formatDate(new Date(new Date - 1)) );

// alert( formatDate(new Date(new Date - 1)) )