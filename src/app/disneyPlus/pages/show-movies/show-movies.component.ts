import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Movies } from '../../models/movie.interface';
import { DisneyService } from '../../services/disney.service';

@Component({
  selector: 'app-show-movies',
  templateUrl: './show-movies.component.html',
  styleUrls: ['./show-movies.component.css']
})
export class ShowMoviesComponent implements OnInit {

  movie!: Movies;

  constructor(private actividatedRoute: ActivatedRoute, private movieService: DisneyService) { }

  ngOnInit(): void {

    this.actividatedRoute.params
    .pipe(
      switchMap(({id}) => this.movieService.getMovieId(id)), // retorna un observable
      // tslint:disable-next-line: max-line-length
      tap(console.log)
    )  // el tap recibe el producto de este observable y el tap imprime en consola el resultado
    .subscribe(movie => this.movie = movie);

  }

}
