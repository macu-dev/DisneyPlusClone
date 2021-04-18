import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.interface';
import { DisneyService } from '../../services/disney.service';


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  recommended: Movie[] = [];

  // tslint:disable-next-line: member-ordering
  slideConfig = {
    'slidesToShow': 4,
    'slidesToScroll': 4,
    "nextArrow": "<div class='nav-btn next-slide'><img src='assets/images/right-arrow.png'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><img src='assets/images/left-arrow.png'></div>",
    infinite: true,

  };
  constructor(private disneyService: DisneyService){}

  ngOnInit(): void {
    this.getRecommendedMovie();
  }

  getRecommendedMovie(): void {
    this.disneyService.getRecommendedMovie()
    // tslint:disable-next-line: deprecation
    .subscribe(({results}) => {
      this.recommended = results;
      // console.log(results);
    });

  }




}
