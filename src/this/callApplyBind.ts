interface Person {
  firstName: string
  lastName: string
}

const name1: Person = {
  firstName: 'John',
  lastName: 'Doe'
}

const name2: Person = {
  firstName: 'Jane',
  lastName: 'Hugh'
}

function printName (this: Person, state: string, age: number): void {
  console.log(this.firstName + ' ' + this.lastName + ' ' + state + ' ' + age)
}

// call
console.log('call')

printName.call(name1, 'CA', 30) // John Doe CA 30
printName.call(name2, 'NY', 25) // Jane Hugh NY 25

// apply
console.log('apply')

printName.apply(name1, ['CA', 30]) // John Doe CA 30
printName.apply(name2, ['NY', 25]) // Jane Hugh NY 25

// bind
console.log('bind')

const printName1 = printName.bind(name1, 'CA', 30)
printName1() // John Doe CA 30

const printName2 = printName.bind(name2)
printName2('NY', 25) // Jane Hugh NY 25
