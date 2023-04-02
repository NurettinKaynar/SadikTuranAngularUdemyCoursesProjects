import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/movie.model';

import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  title: string = 'Film Listesi';

  filteredMovies: Movie[] = [];
  loading: boolean = false;
  filterText: string = '';
  err: any;

  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
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
  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      $event.target.innerText = 'Listeden Çıkar';
      this.alertify.success(movie.title + ' Listene Eklendi');
    } else {
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      $event.target.innerText = 'Listeye Ekle';
      this.alertify.error(movie.title + ' Listenden Çıkarıldı');
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe((params) => {
      this.movieService.getMovies(params['categoryId']).subscribe({
        next: (res) => {
          this.loading = false;
          this.movies = res;
          this.filteredMovies = this.movies;
        },
        error: (error) => {
          this.loading = false;
          this.err = error;
          console.log(error);
        },
      });
    });
  }
}
