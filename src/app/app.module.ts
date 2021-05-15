import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DisneyModule } from './disneyPlus/disney.module';
import { SharedModule } from './shared/shared.module';
import { ShowMoviesComponent } from './disneyPlus/pages/show-movies/show-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DisneyModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
