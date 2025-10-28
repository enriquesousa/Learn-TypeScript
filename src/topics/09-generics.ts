// Tenemos que evitar a toda coista tratar de usar el tipo any
// Mediante los genericos podemos decirle a TypeScript que tome el tipo que esta recibiendo
// Normalmente inician con la letra T pero podemos tener mas
export function whatsMyType<T>( argument: T ): T {

  return argument;
}

// Definir varables con let para forzar tipo
// let amIString = whatsMyType('Hola Mundo');
// let amINumber = whatsMyType(100);
// let amIArray = whatsMyType([1,2,3,4,5]);

// Al Definir con Tipo Generico <> ya podemos volver a usar const
const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);


// Ahora vemos que en cada variable ya tenemos intelisence para c/tipo de variable (Esa es la magia de los tipos genericos)
console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));