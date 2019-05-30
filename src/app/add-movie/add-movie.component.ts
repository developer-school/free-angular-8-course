import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from './../movie.service';
import { NavbarService } from './../navbar/services/navbar.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  movieForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    releaseYear: new FormControl('', [Validators.required]),
  });
  constructor(
    private navbarService: NavbarService,
    private router: Router,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    this.navbarService.title.next('Add Movies');
  }

  addMovie() {
    console.log(this.movieForm.value);
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(res => {
        this.movieForm.reset();
        this.router.navigate(['/']);
      });
    }
  }
}
