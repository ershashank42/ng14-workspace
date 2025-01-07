import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray',
  pure: false // Impure pipe
})
export class SortArrayPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value ? value.sort() : [];
  }
}
