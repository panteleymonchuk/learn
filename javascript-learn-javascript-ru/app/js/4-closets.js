// var phrase = 'Привет';
// function sayHi(name) {
//     console.log(phrase + ', ' + name);
// }
// sayHi('Вася');  // Привет, Вася (*)
// phrase = 'Пока';
// sayHi('Вася'); // Пока, Вася (**)





// function sayHiBye(firstName, lastName) {
//     console.log( "Привет, " + getFullName() );
//     console.log( "Пока, " + getFullName() );
//     function getFullName() {
//         return firstName + " " + lastName;
//     }
// }
// sayHiBye("Вася", "Пупкин"); // Привет, Вася Пупкин ; Пока, Вася Пупкин


// function makeCounter() {
//     var currentCount = 1;
//
//     return function() { // (**)
//         return currentCount++;
//     };
// }
//
// var counter = makeCounter(); // (*)
//
// // каждый вызов увеличивает счётчик и возвращает результат
// console.log( counter() ); // 1
// console.log( counter() ); // 2
// console.log( counter() ); // 3
//
// // создать другой счётчик, он будет независим от первого
// var counter2 = makeCounter();
// console.log( counter2() ); // 1




// function f() {
//
// }
//
// f.test = 5;
// console.log(f.test);





// say('Вася'); // Что выведет? Не будет ли ошибки?
// var phrase = 'Привет';
// function say(name) {
//     console.log( name + ", " + phrase );
// }



// var value = 0;
// function f() {
//     if (1) {
//         value = true;
//     } else {
//         var value = false;
//     }
//     console.log( value );
// }
// f();



// var a = 5;
//
// (function() {
//     console.log(a);
// })();





// function makeCounter() {
//     var currentCount = 1;
//
//     // return currentCount;
//     return function() {
//         var currentCount;
//         console.log(currentCount);
//         // можно ли здесь вывести currentCount из внешней функции (равный 1)?
//     };
// }
//
// alert(makeCounter());




// var currentCount = 1;
// function makeCounter() {
//     return function() {
//         return currentCount++;
//     };
// }
// var counter = makeCounter();
// var counter2 = makeCounter();
// alert( counter() ); // ?
// alert( counter() ); // ?
// alert( counter2() ); // ?
// alert( counter2() ); // ?