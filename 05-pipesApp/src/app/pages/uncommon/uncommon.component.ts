import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './uncommon.component.html',
  styles: `
    :host {
      display: block;
    }
    section {
      padding: 20px;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
    section > div {
      background-color: #f6f6f6;
      padding: 15px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UncommonComponent {
  // i18nSelect Pipe
  name = 'Onizuka'
  gender: 'male' | 'greato' = 'male'
  invatitionMap = {
    'male': 'mejor',
    'greato': 'mas greato'
  } // si la llave no existe no se pintara en el html

  changeClient(){
    this.name = 'GTO'
    this.gender = 'greato'
  }

  // i18Plural Pipe && SlicePipe
  clientes = ['Onizuka1', 'Onizuka2', 'Onizuka3', 'Onizuka4', 'Onizuka5', 'Onizuka6', 'Onizuka7']
  clientsMap = {
    '=0': 'No tenemos ninguna persona siendo Onizuka',
    '=1': 'Tenemos una persona siendo Onizuka',
    '=2': 'Tenemos 2 locos siendo Onizuka',
    'other': 'Tenemos # personas siendo Onizuka'
  }

  deleteClient() {
    this.clientes.pop()
  }

  // KeyValue Pipe && JSON Pipe
  person = {
    name: 'Onizuka',
    age: 23,
    adress: 'Tokyo'
  }

  // Async Pipe
  myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log( 'tap: ', value))
  )

  promiseValue = new Promise(( resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa!')
    }, 3500)
  })
}
