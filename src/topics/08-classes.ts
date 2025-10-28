// Definri una Clase
// usamos ? si la propiedad puede estar indefinida
export class Person {
  constructor(
    public name: string, 
    public address: string = 'No Address') 
  {}
}

// Creamos una nueva clase que extiende de la clase Person
export class Hero extends Person {

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
  ) {
    // Se necesita incluir la funcion super() del padre
    super( realName, 'New York');
  }

}



// const ironman = new Person('Ironman');
const ironman = new Hero('Ironman',45,'Tony');
console.log("Clase Person: ", ironman);
