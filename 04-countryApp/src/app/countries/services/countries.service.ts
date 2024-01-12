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

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    return this.http.get<Country[]>(`${this.baseUrl}/alpha/${code}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( error => of(null) )
      );

  }

  searchCapital( term: string ): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.baseUrl}/capital/${term}`)
      .pipe(
        // tap( countries => console.log('paso por el tap 1', countries) ),
        // map( countries => [] ),
        // tap( countries => console.log('paso por el tap 2', countries) ),
        catchError( error => {
          // console.log('Error:', error);
          return of([]); // Lo que retorna si hay un error
        }),
        // catchError( () => of([]) )
      );

  }

  searchCountry( term: string ): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.baseUrl}/name/${term}`)
      .pipe(
        catchError( error => of([]) )
      );
  }

  searchRegion( term: string ): Observable<Country[]> {

      return this.http.get<Country[]>(`${this.baseUrl}/region/${term}`)
        .pipe(
          catchError( error => of([]) )
        );
  }
}
