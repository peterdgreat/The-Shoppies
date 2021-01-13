import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueArray'
})
export class ValueArrayPipe implements PipeTransform {

  transform(objects:any=[]): unknown {
    return Object.values(objects)
  }

}
