import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 500
    }
  ]

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    // console.log('main')
    // console.log(index)
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }

}
