import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/models/movie.model';
import { MovieRepository } from 'src/models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  // movies = ['Film 1', 'Film 2', 'Film 3'];
  movies: Movie[];
  title: string = 'Film Listesi';
  movieRepository: MovieRepository;
  filteredMovies: Movie[];
  // popularMovies: Movie[];
  // today = new Date();
  filterText: string = '';

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    // this.popularMovies = this.movieRepository.getPopularMovies();
    this.filteredMovies = this.movies;
  }
  onInputChange() {
    this.filteredMovies = this.filterText
      ? this.movies.filter(
          (m) =>
            m.title.indexOf(this.filterText) !== -1 ||
            m.description.indexOf(this.filterText) !== -1
        )
      : this.movies;
  }

  ngOnInit(): void {}
}
