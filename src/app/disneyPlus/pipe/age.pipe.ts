import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birth: string, death: string | null  ): number {
    // tslint:disable-next-line: quotemark
    const birthday = parseInt( birth.split("-")[0], 10 );
    const today = new Date();
    const year = today.getFullYear();

    if (death) {
      // tslint:disable-next-line: quotemark
      const deathYear = parseInt( death.split("-")[0], 10 );
      return deathYear - birthday;
    }else {
      return year - birthday;
    }

  }

}
