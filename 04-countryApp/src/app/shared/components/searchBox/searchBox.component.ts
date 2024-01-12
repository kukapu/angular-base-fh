import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtSearchInput')
  public txtSearchInput!: ElementRef<HTMLInputElement>;

  @Input()
  placeholder: string = '';

  @Output()
  // public onValue: EventEmitter<string> = new EventEmitter();
  public onValue = new EventEmitter<string>();

  emitSearchValue(): void {
    this.onValue.emit(this.txtSearchInput.nativeElement.value);
  }
}
