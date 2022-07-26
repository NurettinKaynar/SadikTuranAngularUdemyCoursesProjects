// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/movie.model';
// import { MovieRepository } from 'src/models/movie.repository';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  // movies = ['Film 1', 'Film 2', 'Film 3'];
  movies: Movie[] = [];
  title: string = 'Film Listesi';
  // movieRepository: MovieRepository;
  filteredMovies: Movie[] = [];
  // popularMovies: Movie[];
  // today = new Date();
  filterText: string = '';
  err: any;

  constructor(
    private alertify: AlertifyService, // private http: HttpClient,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.movieRepository = new MovieRepository();
    // this.movies = this.movieRepository.getMovies();
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
  addToList($event: any, movie: Movie) {
    // console.log('Movie Title', movie.title);
    // console.log($event.target.classList);

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
    // this.http.get<Movie[]>('http://localhost:3000/movies').subscribe({
    //   next: (res) => {
    //     this.movies = res;
    //     this.filteredMovies = this.movies;
    //   },
    // });
    this.activatedRoute.params.subscribe((params) => {
      this.movieService.getMovies(params['categoryId']).subscribe({
        next: (res) => {
          this.movies = res;
          this.filteredMovies = this.movies;
        },
        error: (error) => {
          this.err = error;
          console.log(error);
        },
      });
    });
  }
}
