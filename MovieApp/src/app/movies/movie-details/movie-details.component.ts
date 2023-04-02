import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  providers: [MovieService],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  loading: boolean = false;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.movieService
        .getMovieById(params['movieId'])
        .subscribe((data: Movie) => {
          this.loading = false;
          this.movie = data;
        });
    });
  }
}
