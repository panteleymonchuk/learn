// alert("i am js");


// [1, 2].forEach(alert); // по очереди выводит 1, 2


// var number = 1;
// console.log(typeof number);


// var x = 1;
// x = -x;
// console.log(x);

// var str = "1w";
// var str2 = "12f";
// console.log(str + str2);

// var a = 1,
//     b = 4;
// (a + b > 4) ? console.log('more') : console.log('less');


// console.log(null || 2 || undefined);

// alert(alert(1) || 2 || alert(3)); // alert возвращает undefined


// alert( alert(1) && alert(2) ); // 1 и undefined. До второго alert не дойдет



// function sayHi() {
//     console.log('hi');
// }
// var func = sayHi;
// console.log(func); // вывведет текст

// function sumTo(n) {
//     if (n != 0) {
//         return n += sumTo(n-1);
//     } else {
//         return n;
//     }
// }
//
// console.log(sumTo(100));



// var sum = 0;
// var number = 5;
// for (; number > 0; number--) {
//     sum += number;
// }
// console.log(sum);


// var number = 4;
// var sum = 0;
//
// while (number > 0) {
//     sum += number;
//     number--;
// }
// console.log(sum);


// // арифметическая прогрессия
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }
// alert( sumTo(100) );


// function fact(n) {
//     if (n > 1) {
//         return n * fact(n-1);
//     } else {
//         return n;
//     }
// }
// console.log(fact(5));


// //fibbonachi
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(7));


// function fib(n) {
//     var a = 1,
//         b = 1;
//     for (var i = 3; i <= n; i++) {
//         var c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// alert( fib(77) ); // 5527939700884757




function f(n) {
    return n ? n * f(n - 1) : 1;
};
var g = f;
f = null;
alert( g(5) ); // запуск функции с новым именем - ошибка при выполнении!


var f = function factorial(n) {
    return n ? n*factorial(n-1) : 1;
};
var g = f;  // скопировали ссылку на функцию-факториал в g
// f = null;
alert( g(5) ); // 120, работает!



// всё вместе
// http://learn.javascript.ru/javascript-specials


desctibe("pow", function() {
    it("to n pow", function() {
        assert.equal(pow(2, 3), 8);
    });
});


