import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line: member-ordering
  slideConfig = {
    'slidesToShow': 4,
    'slidesToScroll': 4,
    "nextArrow": "<div class='nav-btn next-slide'><img src='assets/images/right-arrow.png'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'><img src='assets/images/left-arrow.png'></div>",
    infinite: true,

  };


}
