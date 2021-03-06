import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Cast, Credits } from '../../models/cast.interface';
import { Movie, Trailer, Genres } from '../../models/movie.interface';
import { DisneyService } from '../../services/disney.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  movie!: Movie;
  trailer!: Trailer;
  credits: Cast[] = [];
  moviesSimiliar: Movie[] = [];


  constructor(private actividatedRoute: ActivatedRoute, private movieService: DisneyService) { }

  ngOnInit(): void {

    this.actividatedRoute.params
    .pipe(
      switchMap(({id}) => this.movieService.getMovieId(id)) // retorna un observable
      // tslint:disable-next-line: max-line-length
      // tap(console.log)
    )  // el tap recibe el producto de este observable y el tap imprime en consola el resultado
    .subscribe(movie => this.movie = movie);

    this.actividatedRoute.params
    .pipe(
      switchMap(({id}) => this.movieService.getMovieTrailer(id)) // retorna un observable
      // tslint:disable-next-line: max-line-length
      // tap(console.log)
    )  // el tap recibe el producto de este observable y el tap imprime en consola el resultado
    .subscribe(trailer => this.trailer = trailer);

    this.actividatedRoute.params
    .pipe(
      switchMap(({id}) => this.movieService.getCastMovieId(id)), // retorna un observable
      // tslint:disable-next-line: max-line-length
      // tap(console.log)
    )  // el tap recibe el producto de este observable y el tap imprime en consola el resultado
    .subscribe(({cast}) => this.credits = cast);

    this.actividatedRoute.params
    .pipe(
      switchMap(({id}) => this.movieService.getSimiliarMovies(id)) // retorna un observable
      // tslint:disable-next-line: max-line-length
      // tap(console.log)
    )  // el tap recibe el producto de este observable y el tap imprime en consola el resultado
    .subscribe(({results}) => this.moviesSimiliar = results );


  }

  createURL(key: string): string {
    const url = `https://www.youtube.com/embed/${key}`;
    return url;
  }

  addClassNoImg(value: string | null): string{
    if (value === null){
      return 'actor__img--height';
    }else {
      return '';
    }
  }

  addClassTextOverflow(value: string | undefined, condition: number): string{

    if (value && value.length >= condition){
      return 'text-overflow';
    }else{
      return '';
    }

  }

}
