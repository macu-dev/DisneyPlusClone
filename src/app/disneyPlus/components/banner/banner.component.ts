import { Component, OnInit } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Movies, Movie } from '../../models/movie.interface';
import { DisneyService } from '../../services/disney.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  movies: Movie[] = [];

  config: SwiperConfigInterface = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    // effect:'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };


  constructor(private disneyService: DisneyService){}

  ngOnInit(): void{
    this.getDiscoverMovies();
  }

  getDiscoverMovies(): void {
    this.disneyService.getDiscoverMovies()
    .subscribe( ({results}) => {
      this.movies = results;
      console.log(this.movies);
    });
  }


}


