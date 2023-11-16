import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['ironman', 'spiderman', 'hulk', 'thor', 'capitan america'];
  public deletedHero?: string;

  public deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
