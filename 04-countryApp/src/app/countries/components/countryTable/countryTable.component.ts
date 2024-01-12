import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './countryTable.component.html',
  styles: [
    `img {
      width: 25px;
      border-radius: 2px;
    }`
  ],
})
export class CountryTableComponent {

  @Input()
  countries: Country[] = [];


}
