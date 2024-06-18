import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToggleCasePipe } from './pipes/toogle-case.pipe';
import { Color, Hero } from './interfaces/hero.interface';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [
    CommonModule,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
  ],
  templateUrl: './custom.component.html',
  styles: `
    :host {
      display: block;
    }
    section {
      padding: 20px;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fill, 1fr);
    }
    section > div {
      background-color: #f6f6f6;
      padding: 15px;
    }
    td {
      text-align: center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComponent {
  isUpperCase = false;

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    }
  ]

  toggle(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  sort: keyof Hero | '' = '';
  sortedBy(by: keyof Hero) {
    this.sort = by;
  }
}
