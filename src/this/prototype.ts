/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extend-native */

interface Function {
  myFunction: (this: any) => void
}

Function.prototype.myFunction = function (this: any): void {
  console.log('Hello since the bind')
}

const arr = [1, 2]
const object = { a: 1, b: 2 }

// the correct form to pass the prototype is:
const object2 = Object.create(object)
object2.c = 3

function print (this: any): void {}

console.log({ arrPrototype: Object.getPrototypeOf(arr) === Array.prototype }) // true
console.log({ objectPrototype: Object.getPrototypeOf(object) === Object.prototype }) // true
console.log({ printPrototype: Object.getPrototypeOf(print) === Function.prototype }) // true

console.log({ object2Prototype: Object.getPrototypeOf(object2) === object }) // true
console.log({ propAOnObject2: object2.a }) // 1

Object.getPrototypeOf(print).myFunction() // same as print.myFunction()
print.myFunction() // same as Object.getPrototypeOf(print).myFunction()
