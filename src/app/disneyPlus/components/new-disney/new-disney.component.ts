import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { DisneyService } from '../../services/disney.service';


@Component({
  selector: 'app-new-disney',
  templateUrl: './new-disney.component.html',
  styleUrls: ['./new-disney.component.css']
})
export class NewDisneyComponent implements OnInit {

  newMovies: Movie[] = [];

  // tslint:disable-next-line: member-ordering
  slideConfig = {
    'slidesToShow': 4,
    'slidesToScroll': 4,
    "nextArrow": "<div class='nav-btn next-slide'><img src='assets/images/right-arrow.png'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><img src='assets/images/left-arrow.png'></div>",
    infinite: true,

  };

  constructor(private disneyService: DisneyService) { }

  ngOnInit(): void {
    this.getNewMovies();
  }

  getNewMovies(): void {
    this.disneyService.getNewMovies()
    // tslint:disable-next-line: deprecation
    .subscribe(({results}) => {
      this.newMovies = results;
      console.log(results);
    });
  }


}
