
export class Person {
  // public name?: string;
  // public addess: string;

  // constructor(name: string, address: string) {
  //   this.name = name;
  //   this.addess = address;
  // } 
  // OTRA FORMA MAS CORTA Y DIRECTA
  constructor(
    public name: string,
    public address: string = 'No Address'
  ) { }
}

// export class Hero extends Person {

//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string,
//   ) {
//     super(realName, 'New York');
//   }
// }


// COMPOSICION ANTES QUE HERENCIA. MAS FACIL DE PENSAR Y MANTENER
export class Hero {

  // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
    // QUE LO MANEJE EL CONSTRUCTOR PARA SI SE MODIFICA LA CLASE PERSON 
    // NO SE TENGA QUE MODIFICAR LA CLASE HERO
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);





