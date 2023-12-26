// let head = document.getElementById("head")
// head.addEventListener('click', showname)
// function showname(){
//     let name = prompt("Enter Name")
//     head.innerHTML = `Name: ${name}`
// }

// let number = 5.456778
// let num = number.toFixed()
// console.log(num);

// let text = "Hello planet earth, you are a great planet.";
// let output = text.lastIndexOf("great");
// console.log(output);

// const newdate = new  Date(2018, 11 , 25 , 8 , 55 , 0)
// console.log(newdate.toLocaleDateString());
// let date = new Date()
// let d = date.getDay();
// console.log(d);

// function totalarea(val1, val2){
//     let area = val1 * val2
//     return area

// }
// let val1 = prompt("enter width")
// let val2 = prompt("enter height")
// let result = totalarea (val1, val2)
// console.log('the total area is ' , result);

// function numbercheck(num){
//     if(num >0){
//         return "positive";
//     }
//     else if (num < 0){
//         return "negiive";

//     }
//     else {
//         return "zero"
//     }
// }
// let output1 = numbercheck(0)

// console.log(output1);

// // spread operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const concatenatedArray = [...arr1, ...arr2];
// console.log(concatenatedArray); // // Output: [1, 2, 3, 4, 5, 6]

// let  arraay = [1,2,3]
// let is = Array.isArray(arraay)
// console.log(is);
// let string1 = "zaki"
// let ress = Array.isArray(string1)
// console.log(ress);

// // // from method (form method is use to convert anything in to an array)
// let string = "zaki"
// let arrr = Array.from(string)
// console.log(arrr);
// let object = {name: "zaki", age: 18}
// let res = Array.from(obj)
// console.log(res);
// console.log(arr.includes("i"));
// console.log(arr.indexOf('i'));

// //// (to convert many variavle or element in to array we use) "OF METHOD"

// let name1 = "zaki"
// let name2 = "zaki2"
// let name3 = "zaki3"
// const arr = Array.of(name1, name2, name3)
// console.log(arr);

// // // objects in javascript
// // // 01 SINGLE-TON OBJECTS ====> const obj = new Object()
// //// 02 LETIRAL OBJECTS  ======> cosnt obj = {}

// const obj = {
//     name : "ahmed",
//     age : 18,
//     gender: "male",
//     phoneno: 1444,

// }
// // // obj keys or name getting methods

// console.log(obj.name);
// console.log(obj['name']);
// console.log(obj["phoneno"]);
// console.log(obj["age"]);

// obj.grettings = function(){
//     console.log(`hello user ${this.name}`);
// }
// console.log(obj.grettings());

// // // nested object
// const studentData = {
//   age: 18,
//   class: 10,
//   email: "student@gmail.com",
//   StudentName: { fullname: { firstname: "zaki", lastname: "younus" } },
// };
// console.log(studentData.StudentName.fullname.lastname);

// const keys = Object.keys(obj)
// const values = Object.values(obj)
// const entries = Object.entries(obj)
// console.log(entries);
// const ques = obj.hasOwnProperty('name')
// console.log(ques);

// function calculator(num1, num2, operator) {
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         return num1 / num2;
//       default:
//         return 'Invalid operator';
//     }
//   }

// function calc(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return "invalid number ";
//   }
// }
// let num1 = +prompt("number 1")
// let num2 = +prompt("number 2")
// let operator = prompt("operator",)
// let res = calc(num1, num2, operator)
// console.log(res);
