import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    if (value.length == 1) return value.toUpperCase();
    return value.slice(0, 1).toUpperCase() + value.slice(1)
  }

}
