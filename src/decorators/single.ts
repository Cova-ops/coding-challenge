// function split (target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
//   const originalMethod = descriptor.value
//   descriptor.value = function (...args: any[]) {
//     return originalMethod.apply(this, args).split(' ')
//   }
//   return descriptor
// }

function firstFunction (value: StringManager, context: ClassDecoratorContext): void {
  console.log(value, context)
}

@firstFunction
class StringManager {
  // @split
  // public print (str: string): void {
  //   console.log(str)
  // }
}

console.log('a')

export default StringManager

// const StringManagerInstance = new StringManager()
// StringManagerInstance.print('hello') // hello
