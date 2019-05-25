import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit() {}
}
