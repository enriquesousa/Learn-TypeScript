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

// ******************** 
// Usando Descontrccion
// ********************

// Asignar un nuevo song a la clase nadamas para poder distinguir
const song = 'New Song';

// Desctructuracion de audioPlayer
const { song:anotherSong, songDuration:duration, details} = audioPlayer;

// Para details, primero descinstruir primero details y luego sacar el autor
const { author } = details;

console.log("Song: ", anotherSong);
console.log("Duration: ", duration);
console.log("Author: ", author);

