
// Funcion normal
function addNumbers(a: number,b: number): number {
    return a+b;
}

// Funcio de tipo flecha
// Si queremos regresar en string lo podemos hacer con return (a+b).toString(); pero tambien podemos usar template string con `${a + b}`)
// Ventajas de una función arrow:   
//  - El valor de this se hereda del ámbito léxico donde se definió (contexto estático).  
//  - Podemos omitir corchetes y return en funciones sencillas
// const addNumbersFlecha = (a: number,b: number): string => {
//     return `${a + b}`;
// }
// La misma funcio arrow omitiendo corchetes y return
const addNumbersFlecha = (a: number, b: number): string => `${a + b}`;

// Queremos que secondNumber sea opcional y base tenga un numero por defecto
// El unico numero obligatorio que se el primer numero
function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}


// const result: number = addNumbers(1,2);
// const result2: string = addNumbersFlecha(1,2);
// const multiplyResult: number = multiply(5);

// Impriimir como objeto solo para poder ver mas claro el resultado
// console.log({result, result2, multiplyResult});


/* 
 * Funciones con objetos como argumentos 
 */

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider/Aragon',
    hp: 50,
    showHp() {
        console.log(`Puntos de Vida: ${ this.hp }`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHp();



























// Por lo pronto para que no falle el Vite!
    export {};