// Test decorator classDecorator que añade dos propiedades nuevas
// Simple Decorator Function
function classDecorator<T extends { new (...args:any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'override';
  }
}

@classDecorator
export class SuperClass {
  public myProperty: string = 'Abc123';
  print() {
    console.log('Hola Mundo dentro del metodo de la clase ...')
  }
}

// Esta es la definicion de la clase
console.log(SuperClass);

const myClass = new SuperClass;
// Esta es la instancia de la Clase
console.log(myClass);

//  ******************************************************************************
// Test decorator classDecorator que sella la clase para que no se pueda modificar
//  Lo tome de ejemplo de: TypeScript [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
// *******************************************************************************

// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }

// @sealed
// class BugReport {
//   type = "report";
//   title: string;

//   constructor(t: string) {
//     this.title = t;
//   }
// }

// const bug = new BugReport("Needs dark mode");
// console.log(bug);
