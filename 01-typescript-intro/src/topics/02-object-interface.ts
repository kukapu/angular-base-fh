
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const skills: string[] = ['Bola de Fuego', 'Golpe', 'Patada'];

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bola de Fuego', 'Golpe', 'Patada'],
}

strider.hometown = 'Rivendale'

console.table(strider);

export { }