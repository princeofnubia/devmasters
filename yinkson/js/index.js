// asingle line comment
/*
Multiline commment
*/

// Variables is something that holds a value so that comuter can process it

var myName = "Abubakri";
let myAge = 90;
const code = 44; ///
let str = "my name is " + myName;
let age = `I am  ${myAge} years old`;
let cod = "my code is" + code;

console.log(str);
console.log(age);
console.log(cod);

str = "dsd";
console.log(str);

const student = {
  // data property
  firstName: "Monica",

  // accessor property(getter)
  get getName() {
    return this.firstName;
  },

  set setName(a) {
    this.firstName = a;
  },
};

let fp = { myName: "Anas", callName };
let dt = { myName: "Abu", callName: callName };
global.myName = "Ade";
function callName() {
  console.log(this.myName);
}
{
  myName = "DSD";
  callName();
}

callName.call(fp);
callName.call(dt);

d = new callName();
console.log(d.myName);
