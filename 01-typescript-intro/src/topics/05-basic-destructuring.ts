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
  song: 'Mess',
  details: {
    author: "GTO",
    year: 2015
  }
}

const {
  audioVolume: volume,
  songDuration: duration,
  song,
  details // : { author, year } PRIORIZAR LECTURA
} = audioPlayer;

const { author, year } = details;

console.log(volume, duration, song, author, year);



const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[2] || 'No existe';
const [, , trunks = 'Not Found'] = dbz;


console.log('Personaje 3: ', trunks);