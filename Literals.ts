// `let` Literal widen
let a = '123' // string
const b = '123' // '123' literal

// widening
let strFun = (str = 'this is a string') => str;

strFun('this is a string')
strFun('this is a string2')

const specialStr = 'this is specialStr'

let strFun2 = (str = specialStr) => str; // widen str to string type
strFun2('this is specialStr')
strFun2('this is specialStr2')

