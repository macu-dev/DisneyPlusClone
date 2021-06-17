import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BannerComponent } from './components/banner/banner.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { NewDisneyComponent } from './components/new-disney/new-disney.component';
import { SafeurlPipe } from './safeurl.pipe';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MinuteAHoursPipe } from './pipe/minute-ahours.pipe';
import { ImagesPipe } from './pipe/images.pipe';
import { CastComponent } from './pages/cast/cast.component';
import { GenderPipe } from './pipe/gender.pipe';


// Install modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    RecommendedComponent,
    SearchComponent,
    MoviesComponent,
    SeriesComponent,
    NotFoundComponent,
    BannerComponent,
    NewDisneyComponent,
    SafeurlPipe,
    MinuteAHoursPipe,
    ImagesPipe,
    CastComponent,
    GenderPipe
  ],
  exports: [
    HomeComponent,
    BannerComponent,
    RecommendedComponent,
    SearchComponent,
    MoviesComponent,
    SeriesComponent,
    NotFoundComponent,
    NewDisneyComponent,
    SafeurlPipe,
    MinuteAHoursPipe,
    ImagesPipe
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SlickCarouselModule,
    RouterModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class DisneyModule { }
