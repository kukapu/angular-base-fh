import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Search:</h5>
  <input type="text"
    class="form-control"
    placeholder="Search..."
  />
  `
})

export class SearchBoxComponent {
  constructor() { }

}
