import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(img: string | null): string {
    if (img){
      return `https://image.tmdb.org/t/p/original/${img}`;
    }else {
      return 'assets/images/no-img.png';
    }
  }

}
