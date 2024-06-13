import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './numbers.component.html',
  styles: `
    :host {
      display: block;
    }
    section {
      padding: 20px;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
    section > div {
      background-color: #f6f6f6;
      padding: 15px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumbersComponent {
  totlasSells = 1234567.56789;
  percent = 0.4856;

}
