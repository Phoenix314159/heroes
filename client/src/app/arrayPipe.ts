import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'key'})
export class KeysPipe implements PipeTransform {
  transform(value, args:{}) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
