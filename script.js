//AJAX, сетевые API fetch, promise
//BOM коротко
// события два метода назначения обработчика, всплытие и погружение, параметры события объект event
///шаблоны в DOM
//создание объетов в DOM 
//получение элементов DOM и доступ к атрибутам в HTML 5 атрибут data
// DOM методы работы с DOM
//строки методы работы со строками, слайсы
//массивы методы массивов (деструктуризация, rest и спред оператор)

//Объекты создание и работа с объектами, методы объектов, деструктуризация, копирование обектов
let sharik = {
    Aname: "Sharik",
    poroda: "Dvorterer",
    age: 3,
    speak(){
        console.log("ГАВ! Я ШАРИК!")
    }
}
const bob = {
    Aname: "Bobik",
    poroda: "Ovcharka",
    age: 3,
    speak(){
        console.log("ГАВ! Я БОБИК!")
    }
}
let horse = {
    Aname: "Lola",
    poroda: "Gonchaya",
    age: 300,
    speak(){
        console.log("ИГО-ГО! Я ЛОЛА!")
    }
}
let f = {};
 Object.assign(bob);
f.Aname = "Полкан"
function getName(a){
    console.log(a.Aname);
}
function speak(b){
    b.speak();
}
/*
let {n:Aname, poroda, age}=bob
console.log(Aname);
console.log(poroda);
console.log(age);

function showData(Aname, poroda, age){
    console.log("Имя:")
    console.log(Aname)
    console.log("Порода:")
    console.log(poroda)
    console.log("Возраст:")
    console.log(age)
}*/
console.log(bob.Aname)
speak(sharik);
speak(horse);
speak(bob);





//замыкания
/*
function fn(){
    let mesg = "Привет!";
    console.log("Вызов fn")
    function fn2(a){
        console.log("Вызов fn2");
        console.log("Вызов fn2", mesg)
    }
    return fn2;
}
let c = fn();
c();
*/


//функции область видимости, функции как объект, поднятие определения, контекст, стрелочные фунции, параметры функции, arguments
/*
let c = (d,g)=>{ 
    console.log(this); 
function fn(){
     a = 16;
         console.log("вызов внутри функции");
         console.log("Стрелочная функция");
         
 }
let func = fn;
    let b = 10;
        func();

        }
b = c(20,18);
console.log(b);


*/
//Переменные const var let их отличие поднятие определения