import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CastComponent } from './disneyPlus/pages/cast/cast.component';
import { HomeComponent } from './disneyPlus/pages/home/home.component';
import { MoviesComponent } from './disneyPlus/pages/movies/movies.component';
import { NotFoundComponent } from './disneyPlus/pages/not-found/not-found.component';
import { SearchComponent } from './disneyPlus/pages/search/search.component';
import { SeriesComponent } from './disneyPlus/pages/series/series.component';
import { ShowMoviesComponent } from './disneyPlus/pages/show-movies/show-movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full' // pathMatch: Esto es opcional, significa que toda la ruta URL tiene que coincidir (no solo cierta parte).
    // tslint:disable-next-line: max-line-length
    // pathMatch = 'full' produce un resultado de ruta cuando los segmentos restantes, no coincidentes de la coincidencia de URL es la ruta del prefijo
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'movie/:id',
    component: ShowMoviesComponent
  },
  {
    path: 'cast/:id',
    component: CastComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
