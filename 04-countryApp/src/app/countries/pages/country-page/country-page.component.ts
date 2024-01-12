import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [

  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ))
      )
      .subscribe( country => {
        // console.log({country});
        if( !country ) {
          this.router.navigateByUrl('');
          return;
        }
        console.log('Tenemos un PAIS!')
        this.country = country;
      })
  } // Dos formas de hacerlo. Con un switchmap que devuelve otro observable y se suscribe a ese observable
  // O directamente susbcribirse al observable del observable, puede haber hell

  // ngOnInit(): void {
  //   this.activatedRoute.params
  //     .subscribe( ({ id }) => {

  //       this.searchCountry( id );
  //     })
  // }

  // searchCountry( code: string ): void {
  //   this.countriesService.searchCountryByAlphaCode( code )
  //         .subscribe( country => {
  //           console.log({country});
  //         })
  // }

}
