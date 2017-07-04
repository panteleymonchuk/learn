
// var str = 'String';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



// var num = 12.35235;
// console.log( num.toFixed(2) );
// console.log( num.toFixed(0) );
// console.log( num.toFixed(5) );


// console.log( 0/0 ); //NaN


// var n = 0/0;
// if ( n !== n ) {
//     console.log('n == NaN');
// }

// isFinite = true если число не NaN, Infinity, -Infinity
// console.log(isFinite(5)); //true
// console.log(isFinite(Infinity)); //false


// console.log(+'12px'); //NaN
// console.log(parseInt('12px')); //12


// console.log(isNaN('test')); //true


// // проверка на число
// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }



// var n = 255;
// console.log(n.toString(16)); //ff


// округление вниз
// Math.floor()
// Math.ceil()
// Math.round()


// console.log(~"12");


// alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3



//
// var number1 = prompt("Enter number 1:", '0');
// var number2 = prompt("Enter number 2:", '0');
//

// alert( 6.35.toFixed(20) ); // 6.34999999999999964473

//
// function getDecimal(number) {
//     number = parseFloat(number);
//     if (number != NaN) {
//         return number - parseInt(number);
//     }
//     return typeof number;
// }

// function bine(n) {
//     var fi = ( 1 + Math.sqrt(5) ) / 2;
//     var fiPow = fi;
//     for (var i = 1; i < n; i++) {
//         fi *= fiPow;
//     }
//     var result = fi / Math.sqrt(5);
//     return result;
//     // return n ? fi * bine(n-1) : 1;
// }
// console.log(bine(77));




// function fibBinet(n) {
//     var phi = (1 + Math.sqrt(5)) / 2;
//     // используем Math.round для округления до ближайшего целого
//     return Math.round(Math.pow(phi, n) / Math.sqrt(5));
// }
// console.log(fibBinet(77));



// function fromZeroToMax(max) {
//     var number = Math.random().toFixed(2) * 100;
//     return (number < max) ? parseInt(number) : fromZeroToMax(max);
// }
// console.log(fromZeroToMax(20));



// 'jquery'.length; //6
// 'jquery'.charAt(2); //'u'
// "jquery"[0]; // 'j'
// "jquery".toLowerCase();
// "jquery".toUpperCase();
// 'jquery'.indexOf('r'); //4
// 'jquery'.indexOf('a'); // -1




// var str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
// var target = "Иа"; // цель поиска
//
// var pos = 0;
// while (true) {
//     var foundPos = str.indexOf(target, pos);
//     if (foundPos == -1) break;
//
//     alert( foundPos ); // нашли на этой позиции
//     pos = foundPos + 1; // продолжить поиск со следующей
// }


// 'stringify'.substring(1,4); // tri - start + end
// 'stringify'.substr(0,4); // start + length
// 'stringify'.substr(3); // 'ingify'
// 'stringify'.slice(5, 7); //gi - часть подстроки не включая end
// 'stringify'.substring(5, -2); // strin
// 'stringify'.slice(1, -1); // 'tringif'
// 'jquery'.charAt(0);
// String.fromCharCode(1072); // 'a'
// 'jquery'.charCodeAt(0); //кодировка для буквы 'j'


// Правильное сравнение
// Все современные браузеры, кроме IE10- (для которых нужно подключить библиотеку Intl.JS) поддерживают стандарт ECMA 402, поддерживающий сравнение строк на разных языках, с учётом их правил.



// function ucFirst(str) {
//  if (str == '') {
//  return 'empty string';
//  } else {
//  var firstChar = str.charAt(0);
//  return firstChar.toUpperCase() + str.substr(1);
//  }
//  }
//


/*------------- OBJECTS -------------*/
// var person = {};
// person.name = 'Eugene';
// person.age = 24;
// person.male = '';
// delete person.age;
// console.log(person.name); //eugene
// console.log(person.age); //undefined
// console.log(person.lalala); //undefined
//
// if (person.age == undefined) {
//  console.log("name = undefined"); // if "delete person.name;" that "undefined"
// }
// console.log('test' in person); //false
// console.log('name' in person); //true
// console.log('male' in person); //true - свойство существует
//
//
// var menuSetup = {
//     width: 300,
//     height: 200,
//     title: 'Menu'
// };
// console.log(menuSetup.width);



// https://learn.javascript.ru/object#первый-объект
// var users = {};
//
// users.name = 'vasya';
// users.surname = 'petrov';
// console.log(users.name);
//
// users.name = 'sergey';
// console.log(users.name);
//
// delete users.name;
// console.log(users.name);



// var menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
// };
// var counter = 0;
// for (var key in menu) {
//  counter++;
//  console.log( "Ключ: " + key + " значение: " + menu[key] );
// }
// console.log(counter);
// console.log(menu.length);




// var codes = {
//     // телефонные коды в формате "код страны": "название"
//     "+7": "Россия",
//     "+38": "Украина",
//     "+1": "США"
// };
//
// for (var code in codes) console.log( code ); // 1, 7, 38



// https://learn.javascript.ru/object-for-in#определите-пуст-ли-объект
// function isEmpty(obj) {
//     var counter = 0;
//     for (var key in obj) {
//      counter++;
//     }
//     return (counter == 0);
// }
//
// var schedule = {};
// console.log( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "подъём";
// console.log( isEmpty(schedule) ); // true



// https://learn.javascript.ru/object-for-in#сумма-свойств
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
// var result = 0;
// for (var key in salaries) {
//  result+= salaries[key];
// }
// console.log(result);


//https://learn.javascript.ru/object-for-in#свойство-с-наибольшим-значением
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
// function isEmpty(obj) {
//     var counter = 0;
//     for (var key in obj) {
//      counter++;
//     }
//     return (counter == 0);
// }
//
// function maxSalary (obj) {
//  var prevSalary = 0;
//  var maxSalaryName = '';
//  for( var key in obj ) {
//   if ( obj[key] > prevSalary ) {
//       prevSalary = obj[key];
//       maxSalaryName = key;
//   }
//  }
//  return maxSalaryName;
// }
//
// if ( isEmpty(salaries) ) {
//     console.log('Нету данных о зарплате');
// } else {
//     console.log( maxSalary(salaries) );
// }



/*------------- ОБЬЕКТЫ ПЕРЕДАЧА ПО ССЫЛКЕ -------------*/
// var user = { name: "Вася" }; // в переменной - ссылка
// var clone = {};
//
// for (var key in user) {
//     clone[key] = user[key];
//     var admin = user; // скопировали ссылку
// }
// clone.name = 'petya';
// console.log(clone.name);
// console.log(user.name);



// var time = {
//     year: 2345,
//     month: 11,
//     day: 10,
//     hour: 11,
//     minute: 12,
//     second: 13,
//     microsecond: 123456
// }




// // При «раскрытии» свойств объекта в консоли – браузер всегда выводит их текущие (на момент раскрытия) значения.
// console.log(time); // (*)
// time.microsecond++; // (**)
// console.log(time);
// time.microsecond++;
// console.log(time);
// time.microsecond++;



/*------------- Массивы с числовыми индексами -------------*/
// var fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log( fruits[0] ); // Яблоко
// console.log( fruits[1] ); // Апельсин
// console.log( fruits[1] ); // Апельсин
// console.log( fruits[2] ); // Слива
// fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
// fruits[3] = 'Лимон'; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]
// console.log( fruits.length ); // Слива
//
// var arr = [ 1, 'Имя', { name: 'Петя' }, true ];
// console.log( arr[2].name ); // Петя
//
//
// var fruits = ["Яблоко", "Апельсин", "Груша"];
// console.log( fruits.pop() ); // удалили "Груша"
// console.log( fruits ); // Яблоко, Апельсин

// var fruits = []; // создать массив
// fruits[99999] = 5; // присвоить свойство с любым номером
// fruits.age = 25; // назначить свойство со строковым именем



// var arr = ["Яблоко", "Апельсин", "Груша"];
// for (var i = 0; i < arr.length; i++) {
//     console.log( arr[i] );
// }


// var arr = new Array(2, 3);
// console.log( arr[0] );



// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[1][1]);


// var names = 'Маша, Петя, Марина, Василий';
// var arr = names.split(', ');
// for (var i = 0; i < arr.length; i++) {
//     console.log( 'Вам сообщение ' + arr[i] );
// }


// var arr = ['Маша', 'Петя', 'Марина', 'Василий'];
// var str = arr.join(';');
// console.log( str ); // Маша;Петя;Марина;Василий


// var arr = ["Я", "иду", "домой"];
// delete arr[1]; // значение с индексом 1 удалено


// var arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
// arr.splice(0, 3, "Мы", "изучаем");// удалить 3 первых элемента и добавить другие вместо них



// //.sort()
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
// }
// var arr = [ 1, 2, 15 ];
// arr.sort();// 1, 15, 2
// arr.sort(compareNumeric); // 1, 2, 15
// console.log(arr);

// //.reverse()
// arr.reverse();
// console.log(arr);

// //concat
// var arr = [1, 2];
// var newArr = arr.concat(3, 4);



// // .indexOf()/.lastIndexOf()
// var arr = [1, 0, false];
// console.log( arr.indexOf(0) );


// var user = {
//     name: "Петя",
//     age: 30
// };
// var keys = Object.keys(user);
// console.log(keys);



// var object = {
//     className: 'open menu'
// };
// function addClassObj( obj, className ) {
//     var classKey = Object.keys(object)[0];
//     var currentClassArr = obj[classKey].split(' ');
//     currentClassArr.push(className);
//     obj[classKey] = currentClassArr.join(" ");
//     console.log(currentClassArr);
// }
// addClassObj(object, 'sdf');
// addClassObj(object, 'sdfasdf');


// function camelize(camelString) {
//
// }



/*--------------ARRAYS--------------------*/


// var arr = ['apple', 'orange', 'purple'];
// arr.forEach(function(item, i, arr){
//     arr[i] = arr[i] + "asdf";
//     console.log(i + ' ' + item + ' ' + arr);
// });



// var arr = [2, 3, 5, 4, 0, 6, 3];
// var positiveArr = arr.filter(function (number) {
//     return number > 0;
// });
// console.log(positiveArr);



// var names = ['HTML', 'CSS', 'JavaScript'];
// var nameLengths = names.map(function(name) {
//     return name.length;
// });
// // получили массив с длинами
// console.log( nameLengths ); // 4,3,10




// var arr = [1, -1, 2, -2, 3];
// function isPositive(number) {
//     return number > 0;
// }
// console.log( arr.every(isPositive) ); // false, не все положительные
// console.log( arr.some(isPositive) ); // true, есть хоть одно положительное



// var arr = ["Есть", "жизнь", "на", "Марсе"];
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }
// console.log( arrLength ); // 4,5,2,5
// /**/
// var arrNew = arr.map(function(name){
//     return name.length;
// });
// console.log(arrNew);





// var arr = [ 1, 2, 3, 4, 5 ];
// function getSums(array){
//     var result = [];
//     if (!arr.length) return result;
//
//     arr.reduce(function(sum, item) {
//         result.push(sum);
//         return sum + item;
//     });
//
//     return result;
// }
//
// console.log(getSums(arr));


/*---------preudoArr 'arguments'---------*/


// function sayHi() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log( "Привет, " + arguments[i] );
//     }
// }
// sayHi("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'


// var vasya = {
//     age: 21,
//     name: 'Вася',
//     surname: 'Петров'
// };
//
// var user = {
//     isAdmin: false,
//     isEmailConfirmed: true
// };
//
// var student = {
//     university: 'My university'
// };
//
// // добавить к vasya свойства из user и student
// copy(vasya, user, student);
//
//
// console.log( vasya.isAdmin ); // false
// console.log( vasya.university ); // My university
//
//
//
//
// function showWarning(options) {
//     var width = options.width || 200; // по умолчанию
//     var height = options.height || 100;
//
//     var contents = options.contents || "Предупреждение";
//
//     // ...
// }



// function sum() {
//     if ()
//     console.log(arguments.length);
// }
//
//
// sum(3, 2, 1);

// var b = 0.25;
// console.log(~true);


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// function camelize(camelString) {
//     var includeArr = camelString.split('-');
//
//     for (var i = 0; i < includeArr.length; i++) {
//         if (!includeArr[i]) {
//             includeArr.splice(i, 1);
//         } else {
//             includeArr[i] = capitalizeFirstLetter(includeArr[i]);
//         }
//     }
//
//     camelString = includeArr.join('');
//     return camelString = camelString.charAt(0).toLowerCase() + camelString.slice(1);
// }
// console.log(camelize('-webkit-background-color'));


// var obj = {
//     className: 'open menu menu menu olen'
// };
//
// function removeClass(object, classToRemove) {
//     var classArr = obj.className.split(' ');
//     for (var i=0; i < classArr.length; i++) {
//         if (classArr[i] == classToRemove) {
//             classArr.splice(i, 1);
//             i--;
//         }
//     }
//     return obj.className = classArr.join(' ');
// }
// console.log(removeClass(obj, 'menu'));





// function filterRangeInPlace(incArr, startRange, endRange) {
//     for (var i = 0; i < incArr.length; i++) {
//         if (incArr[i] < startRange || incArr[i] > endRange ) {
//             incArr.splice(i, 1);
//             i--;
//         }
//     }
//     return incArr;
// }
//
// var arr = [5, 3, 8, 1];
// console.log(filterRangeInPlace(arr, 1, 4));



// //Сортировать в обратном порядке
// var arr = [5, 2, 1, -10, 8];
// function reverseSort(a, b) {
//     return (a < b) ? 1 : -1;
// }
// function sortFunc(incArr) {
//     return incArr.sort(reverseSort);
// }
// console.log(sortFunc(arr));





/*-----------------DATE-------------------*/
// var now = new Date();
// var nowMs = new Date(2011, 0, 1, 0, 0, 0, 0);
// console.log(now);
// console.log(nowMs.getFullYear());
// console.log(nowMs.getTime());
// console.log(+nowMs);





// var arr = [];
// for (var i = 0; i < 1000; i++) arr[i] = 0;
//
// function walkIn(arr) {
//     for (var key in arr) arr[key]++;
// }
//
// function walkLength(arr) {
//     for (var i = 0; i < arr.length; i++) arr[i]++;
// }
//
// function bench(f) {
//     var date = new Date();
//     for (var i = 0; i < 1000; i++) f(arr);
//     return new Date() - date;
// }
//
// // bench для каждого теста запустим много раз, чередуя
// var timeIn = 0,
//     timeLength = 0;
// for (var i = 0; i < 100; i++) {
//     timeIn += bench(walkIn);
//     timeLength += bench(walkLength);
// }
//
// console.log( 'Время walkIn: ' + timeIn + 'мс' );
// console.log( 'Время walkLength: ' + timeLength + 'мс' );