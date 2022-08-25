import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'italicCase'
})
export class ItalicCasePipe implements PipeTransform {

  transform(value: string): unknown {
    return '<i>'+value+'</i>';
  }
}
