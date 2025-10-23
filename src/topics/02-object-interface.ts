const skills: string[] = ['Bash','Counter','Healing'];

// Definir un Objeto strider
// Para poder dar tipos en un objeto
// Podemos usar un interface, usar ? si queremos que el paranetro sea opcional
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

// Con ctr+. arriba del nombre del objeto podemoa agregar parametro que falta
const strider: Character = {
    name: 'Strider',
    hp: 90,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

// Usar .table otra manera mas bonita de imprimir elementos
console.table(strider);

