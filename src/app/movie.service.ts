import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { movies, Movie } from './models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private ROOT_URL = "http://localhost:3000/movies"

  constructor(private http: HttpClient) {}

  getMovies() {
    return of(movies);
  }

  getMovieFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL)
  }

  movie(id: number) {
    console.log(id);
    return of(movies.find(movie => +movie.id === +id));
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }
}
