import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient
  ) { }

  private _getCountriesRequest( url: string ): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( error => of([]) )
      );
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    return this.http.get<Country[]>(`${this.baseUrl}/alpha/${code}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( error => of(null) )
      );

  }

  searchCapital( term: string ): Observable<Country[]> {

    const url = `${this.baseUrl}/capital/${term}`;
    // return this.http.get<Country[]>(url)
    //   .pipe(
    //     // tap( countries => console.log('paso por el tap 1', countries) ),
    //     // map( countries => [] ),
    //     // tap( countries => console.log('paso por el tap 2', countries) ),
    //     catchError( error => {
    //       // console.log('Error:', error);
    //       return of([]); // Lo que retorna si hay un error
    //     }),
    //     // catchError( () => of([]) )
    //   );

    return this._getCountriesRequest( url );
  }

  searchCountry( term: string ): Observable<Country[]> {

    const url = `${this.baseUrl}/name/${term}`;
    // return this.http.get<Country[]>(url)
    //   .pipe(
    //     catchError( error => of([]) )
    //   );
    return this._getCountriesRequest( url );
  }

  searchRegion( term: string ): Observable<Country[]> {

    const url = `${this.baseUrl}/region/${term}`;
    // return this.http.get<Country[]>(url)
    //   .pipe(
    //     catchError( error => of([]) )
    //   );
    return this._getCountriesRequest( url );
  }
}
