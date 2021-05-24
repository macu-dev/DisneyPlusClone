import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {
  // tslint:disable-next-line: variable-name
  constructor ( private _domSanitizer: DomSanitizer){}

  transform(value: string, url: string = ''): any {

    return this._domSanitizer.bypassSecurityTrustResourceUrl( url + value );

  }


}
