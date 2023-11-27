import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(character: Character): void {

    // debugger;
    // PARA DEBUGUEAR EN CHROME Y PARAR LA EJECUCIÓN EN UN PUNTO DETERMINADO
    const newCharacter: Character = {
      id: uuid(),
      ...character
    };


    console.log(this.character);

    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(newCharacter);

    this.character = { name: '', power: 0 };
  }
}
