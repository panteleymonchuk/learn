// //функция конструктор
// //локальные переменные = приватные свойства
// function CoffeeMachine(power) {
//
//     //но свойства записанные в this - публичные.
//     this.waterAmount = 0; //k-vo vodi
//
//     // физическая константа - удельная теплоёмкость воды для getBoilTime
//     var WATER_HEAT_CAPACITY = 4200;
//
//     //приватные методы обьявлены как вложенные функции
//     // расчёт времени для кипячения
//     function getBoilTime() {
//         return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }.bind(this);
//
//     function onReady() {
//         console.log("Coffee done");
//         return true;
//     }
//
//     this.run = function() {
//         setTimeout(onReady, getBoilTime.call(this));
//     }
// }
//
// var coffeeMachine = new CoffeeMachine(100000);
// coffeeMachine.waterAmount = 200;
// coffeeMachine.run();





/*------------ВТОРОЙ МЕТОД УКАЗЫВАНИЯ КОНТЕКСТА*/
// function CoffeeMachine(power) {
//     this.waterAmount = 0;
//     var WATER_HEAT_CAPACITY = 4200;
//
//     function getBoilTime() {
//         return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }.bind(this);
//
//     function onReady() {
//         console.log("Coffee done");
//     }
//
//     this.run = function() {
//         setTimeout(onReady, getBoilTime.call(this));
//     }
// }

// var coffeeMachine = new CoffeeMachine(100000);
// coffeeMachine.waterAmount = 200;
// coffeeMachine.run();
//
//
//
// function CoffeeMachine(power) {
//     this.waterAmount = 0;
//
//     var WATER_HEAT_CAPACITY = 4200;
//
//     var getBoilTime = function() {
//         return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }.bind(this);
//
//     function onReady() {
//         alert( 'Кофе готово!' );
//     }
//
//     this.run = function() {
//         setTimeout(onReady, getBoilTime());
//     };
//
// }
//
// var coffeeMachine = new CoffeeMachine(100000);
// coffeeMachine.waterAmount = 200;
//
// coffeeMachine.run();


/*--------------------*/
// var coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.waterAmount = 200;
//
// var person = {
//     name: "Sorax",
//     _age: 20,
//     get age(){
//         return this._age;
//     },
//     set age(value) {
//         this._age = value < 0 ? 0 : value > 122 ? 122 : value;
//     }
// };
// person.age = 180;
// console.log(person.age);
// person.age = -80;
// console.log(person.age);

// var person = {
//     name: "Sorax",
//     age: 20,
//     gender: "male"
// }
//
// person.userID = 22;
// console.log(person);


// var object = new Object();


// var NewObject = Object.create(null); // empty object
// NewObject.age = 20;
// console.log(NewObject);
// // var objectNasl = Object.create(null); // empty object
// var objectNasl = Object.constructor(NewObject.age);
// console.log(objectNasl);


function CoffeeMachine(power) {

    var _this = this;

    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getBoilTime() {
        return _this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    _this.setWaterAmount = function (amount) {
        if (amount < 0) {

        }
    }

    function onReady() {
        console.log('Coffee is ready!');
    }

    _this.run = function () {
        setTimeout( onReady, getBoilTime() );
    }

    _this.stop = function () {
        clearTimeout( onReady() );
    }



}

var coffeeMachine = new CoffeeMachine(200);

coffeeMachine.waterAmount = 2000;

coffeeMachine.run();
