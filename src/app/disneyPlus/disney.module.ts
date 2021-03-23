import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    MoviesComponent,
    SeriesComponent,
    NotFoundComponent
  ],
  exports: [
    HomeComponent,
    SearchComponent,
    MoviesComponent,
    SeriesComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DisneyModule { }
