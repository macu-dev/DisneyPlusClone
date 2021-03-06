import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast, Credits } from '../models/cast.interface';
import { Movies, Trailer, Movie } from '../models/movie.interface';
import { Person } from '../models/person.interface';

@Injectable({
  providedIn: 'root'
})
export class DisneyService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'api_key=d20775fff92244e778e6196b31f18576';

  constructor(private http: HttpClient) {}

  getDiscoverMovies(): Observable<Movies> {
    const url = `${this.apiUrl}/discover/movie?${this.apiKey}`;
    return this.http.get<Movies>(url);
  }

  getRecommendedMovie(): Observable<Movies>{
    const url = `${this.apiUrl}/movie/top_rated?${this.apiKey}`;
    return this.http.get<Movies>(url);
  }

  getNewMovies(): Observable<Movies> {
    const url = `${this.apiUrl}/movie/upcoming?${this.apiKey}`;
    return this.http.get<Movies>(url);
  }


  getMovieId(id: string): Observable<Movie> {
    const url = `${this.apiUrl}/movie/${id}?${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  getMovieTrailer(id: string): Observable<Trailer> {
    const url = `${this.apiUrl}/movie/${id}/videos?${this.apiKey}`;
    return this.http.get<Trailer>(url);
  }


  getCastMovieId(id: string): Observable<Credits> {
    const url = `${this.apiUrl}/movie/${id}/credits?${this.apiKey}`;
    return this.http.get<Credits>(url);
  }

  getPersonMovieId(id: string): Observable<Movies> {
    const url = `${this.apiUrl}/person/${id}/movie_credits?${this.apiKey}`;
    return this.http.get<Movies>(url);
  }

  getSimiliarMovies(id: string): Observable<Movies> {
    const url = `${this.apiUrl}/movie/${id}/similar?${this.apiKey}`;
    return this.http.get<Movies>(url);
  }

  getActorBioById(id: string): Observable<Person>{
    const url = `${this.apiUrl}/person/${id}?${this.apiKey}`;
    return this.http.get<Person>(url);
  }
}
