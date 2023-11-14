
function addNumbers(a: number, b: number): number {
  return a + b
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
  return firstNumber * base;

}

const result: number = addNumbers(1, 2);
const resultArrow: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(1);

console.log(result);
console.log(resultArrow);
console.log(multiplyResult);

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

  character.hp += amount;
}

const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`${this.name} has ${this.hp} HP`);
  }
}

strider.showHp();
healCharacter(strider, 20);
strider.showHp();




export { }