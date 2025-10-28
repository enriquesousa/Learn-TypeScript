// Definri una Clase
// usamos ? si la propiedad puede estar indefinida
export class Person {
  // public name: string;
  // public address: string;

  constructor(
    public name: string, 
    public address: string = 'No Address') 
  {}
}

const ironman = new Person('Ironman');
console.log("Clase Person: ", ironman);
