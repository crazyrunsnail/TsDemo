// string number boolean

// Arrays
let arr = [1, 2, 3]

// any
let obj: any = { x: 0 };

// const let var
let myName : string = "myName";

let myName1 = "hello"; // string

// parameter type
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// return type
function getFavoriteNumber(): number {
  // return "23"
  return 26;
 
}

// Objects type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 23, y: 23})

// optional properties: last
function printName(obj: { first: string; last?: string }) {
  
}

printName({first: ""})
printName({first: "", last: ""})
// printName({first: "", last: null})  !ERROR

// union types
function stringOrNumber(value: string | number) { 
  if (typeof value === "string") {
    return value;
  } else {
    return value.toString();
  }
}
// common in union types
function stirngOrArrayUseSlice(value: string | number[]) {
  return value.slice(0, value.length);
}

// defined type
type ID = number | string 

function printID(id : ID) {
  if (typeof id === 'number') {
    return id.toString()
  }
  return id
}

// type 不能重新定义
// type ID = number

type UserString = string
let userInput: UserString = 'userInput'


// type assertions

// 指定myCanvas类型
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas1 = <HTMLCanvasElement>document.getElementById("main_canvas");


// Literal type

let x: "hello"

x = "hello"
// x = "world"

// combine
let alignment: 'left' | 'right' |  'center' = 'center'

interface Options {
  width?: number
}

function configure(x: Options | "auto") {
  // ...
}
configure({ });
configure("auto");
// configure("automatic");

interface Request1 {
  url: string;
  method: "GET" | "POST" ;
}
function handleRequest(url: string,method: "GET" | "POST" ) {

}


// const req = { url: "https://example.com", method: "GET" as "GET"};
const req = { url: "https://example.com", method: "GET" };
// const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method as "GET");


