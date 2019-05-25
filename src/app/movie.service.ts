import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { movies } from './models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = movies;

  constructor() {}

  getMovies() {
    return of(movies);
  }

  movie(id: number) {
    console.log(id);
    return of(movies.find(movie => +movie.id === +id));
  }
}
