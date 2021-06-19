import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Cast } from '../../models/cast.interface';
import { Movie } from '../../models/movie.interface';
import { Person } from '../../models/person.interface';
import { DisneyService } from '../../services/disney.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  person!: Person;
  credits: Movie[] = [];

  constructor(private actividatedRoute: ActivatedRoute, private movieService: DisneyService) {}

  ngOnInit(): void {

    this.actividatedRoute.params
    .pipe(
      switchMap(({id}) => this.movieService.getActorBioById(id)), // retorna un observable
      // tslint:disable-next-line: max-line-length
      tap(console.log)
    )  // el tap recibe el producto de este observable y el tap imprime en consola el resultado
    .subscribe(person => this.person = person);

    this.actividatedRoute.params
    .pipe(
      switchMap(({id}) => this.movieService.getPersonMovieId(id)), // retorna un observable
      // tslint:disable-next-line: max-line-length
      tap(console.log)
    )  // el tap recibe el producto de este observable y el tap imprime en consola el resultado
    .subscribe(({cast}) => this.credits = cast);
  }

}
