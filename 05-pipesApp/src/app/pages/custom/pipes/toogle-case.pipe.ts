import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
  standalone: true,
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): any {
    console.log({ value, toUpper })
    return toUpper
      ? value.toUpperCase()
      : value.toLowerCase();
  }
}
