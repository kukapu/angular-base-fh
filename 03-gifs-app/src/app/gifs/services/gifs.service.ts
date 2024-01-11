import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GiphyResponse } from '../interfaces/gifs.interfaces';



@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = []
  private serciveUrl = 'https://api.giphy.com/v1/gifs/search';
  private apiKey = '8GqGygaNhEVlihe0BNi4VnpisxbW5Eat'

  constructor(
    private http: HttpClient
  ) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory( tag: string ){
    tag = tag.trim().toLowerCase();
    if( this._tagsHistory.includes( tag ) ){
      this._tagsHistory = this._tagsHistory.filter( oldTag => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify( this._tagsHistory ));
  }

  public loadLocalStorage(): void {
    const tagsHistory = localStorage.getItem('tagsHistory');
    if( tagsHistory ){
      this._tagsHistory = JSON.parse( tagsHistory );
    }

    this.searchTag( this._tagsHistory[0] );
  }

  searchTag( tag: string ): void {
    if( tag.length === 0 ) return;
    this.organizeHistory( tag );

    // console.log( this._tagsHistory );

    const params =  new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', 12);

    this.http.get<GiphyResponse>(`${this.serciveUrl}`, { params })
      .subscribe( resp => {

        console.log( resp );
        this.gifList = resp.data;
      })
  }
}
