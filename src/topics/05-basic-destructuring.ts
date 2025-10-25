interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}


// Como tradicionalmente se asignan
// console.log('Song: ', audioPlayer.song);
// console.log('Duration: ', audioPlayer.songDuration);
// console.log('Author: ', audioPlayer.details.author);

// ********************** 
// Usando Destructuracion
// **********************

// Asignar un nuevo song a la clase nadamas para poder distinguir
const song = 'New Song';

// Desctructuracion de audioPlayer
const { song:anotherSong, songDuration:duration, details} = audioPlayer;

// Para details, primero descinstruir primero details y luego sacar el autor
const { author } = details;

// console.log("Song: ", anotherSong);
// console.log("Duration: ", duration);
// console.log("Author: ", author);

// *************************** 
// Destructuracion de Arreglos
// ***************************

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[3] || "No hay personaje";

// console.log('Personaje 3: ', dbz[2]);
// console.log('Personaje 3: ', dbz[3] || 'No hay personaje');
// console.log('Personaje 3: ', trunks);

// const [p1,p2,trunks]: string[] = ["Goku", "Vegeta", "Trunks"];

// console.log("Personaje 1: ", p1);
// console.log("Personaje 2: ", p2);
// console.log("Personaje 3: ", trunks);

// para llegar a Trunks tambien podemos ingnorar p1 y p2
// const [, , trunks]: string[] = ["Goku", "Vegeta", "Trunks"];
// console.log("Personaje 3: ", trunks);

// para el caso que no exista Trunks
const [, , trunks='No encontrado!']: string[] = ["Goku", "Vegeta"];
console.log("Personaje 3: ", trunks);

