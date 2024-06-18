import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true,
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'can fly' | 'can\'t fly' {
    if (value) {
      return 'can fly';
    } else {
      return 'can\'t fly';
    }
  }
}
