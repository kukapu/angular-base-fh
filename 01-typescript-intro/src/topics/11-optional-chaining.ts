
export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'GTO'
}

const passenger2: Passenger = {
  name: 'Onizuka',
  children: ['Murai', 'Kunio']
}

const printChildren = (passenger: Passenger): number => {
  const howManyChildren = passenger.children?.length ?? 0;
  // const howManyChildren = passenger.children!.length ?? 0;
  // SIEMPRE VOY A TENER EL VALOR ! (not null assertion operator) CONFIA EN MI NO NULL O UNDEFINED
  console.log(passenger.name, howManyChildren);

  return howManyChildren;
}

printChildren(passenger1);
printChildren(passenger2);