import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisneyService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'api_key=d20775fff92244e778e6196b31f18576';

  constructor() { }
}
