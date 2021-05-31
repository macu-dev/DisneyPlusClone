import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteAHours'
})
export class MinuteAHoursPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 0 && value / 60 < 1) {
      return `${value} min`;
    }else {
      return `${value / 60} Hs`;
    }
  }

}
