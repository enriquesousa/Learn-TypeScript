// Definri una Clase
// usamos ? si la propiedad puede estar indefinida
export class Person {
  public name: string;
  public address: string;

  constructor() {
    this.name = 'Enrique';
    this.address = 'Tijuana';
  }
}

const ironman = new Person();

console.log("Clase Person: ", ironman);
