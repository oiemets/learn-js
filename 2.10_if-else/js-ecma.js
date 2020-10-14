/* Используя конструкцию if..else, напишите код, который будет спрашивать: 
„Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», 
в противном случае – отобразить: «Не знаете? ECMAScript!» */

let quiery = prompt('What is the official name of JavaScript?', '');
// let answer = "ECMAScript";
if (quiery == "ECMAScript"){ //if (quiery == answer)
    alert("That's right!");
}else{
    alert("Don't you know? ECMAScript!");
};