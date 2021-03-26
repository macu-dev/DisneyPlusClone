import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Movies } from '../models/movie.interface';

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
}
