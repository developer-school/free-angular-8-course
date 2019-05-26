import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieService } from './../movie.service';
import { NavbarService } from './../navbar/services/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService,
  ) {}

  ngOnInit() {
    this.movies$ = this.movieService.getMovieFromHttp();
    this.navbarService.title.next('MovieNight');
  }
}
