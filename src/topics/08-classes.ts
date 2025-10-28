// Definri una Clase
// usamos ? si la propiedad puede estar indefinida
export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string = 'No Address') 
  {}
}

// Creamos una nueva clase que extiende de la clase Person
// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string,
//   ) {
//     // Se necesita incluir la funcion super() del padre
//     super( realName, 'New York');
//   }
// }

// Nosotros vamos a tratar de darle prioridad a la composición sobre la Herencia.
export class Hero {

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,
  ) {}

}


const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman',45,'Tony', tony);
console.log("Clase Person: ", ironman);


