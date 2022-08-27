// static type check
const message = "hello world"

console.info(message.toLocaleLowerCase())

// message() // not callable

const user = {
  name: "Daniel",
  age: 26,
};

// user.location // property does not exist

const announcement = "Hello World!";
 
// 检测拼写错误
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

announcement.toLocaleLowerCase();

function flipCoin() {
  // Operator '<' cannot be applied to types '() => number' and 'number'
  // return Math.random < 0.5
  return Math.random() < 0.5
}


function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
// greet("Maddison", Date()); // js中 Date()返回string
greet("Maddison", new Date());


"use strict";
function greet2(person, date) {
    // 默认编译成 console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
    // --target es2015
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet2("Maddison", new Date());