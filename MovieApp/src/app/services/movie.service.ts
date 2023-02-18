import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import { Movie } from 'src/models/movie.model';
import { UrlPathUtilities } from '../utilities/url-path';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(categoryId: number): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(UrlPathUtilities.BASE_URL + UrlPathUtilities.MOVIES)
      .pipe(
        map((response) => {
          const movies: Movie[] = [];
          for (const key in response) {
            if (categoryId) {
              if (categoryId == response[key].categoryId) {
                movies.push({ ...response[key], id: key });
              }
            } else {
              movies.push({ ...response[key], id: key });
            }
          }
          return movies;
        }),
        catchError(this.handleError),
        delay(1000)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client yada network
      console.log('error:' + error.error.message);
    } else {
      //backend
      switch (error.status) {
        case 404:
          console.error('Not Found');
          return throwError(() => new Error('Not Found'));
        case 403:
          console.error('Access Denied');
          return throwError(() => new Error('Access Denied'));
        case 500:
          console.error('Interval Server');
          return throwError(() => new Error('Interval Server Error'));
        default:
          console.error('Bilinmeyen Bir Hata Oluştu');

          return throwError(() => new Error('Unknown Error'));
      }
    }
    return throwError(() => error);
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.http
      .get<Movie>(
        UrlPathUtilities.BASE_URL +
          UrlPathUtilities.GET_MOVIE_BY_ID +
          movieId +
          '.json'
      )
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError),
        delay(1000)
      );
  }
  createMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };

    return this.http
      .post<Movie>(
        UrlPathUtilities.BASE_URL + UrlPathUtilities.MOVIES,
        movie,
        httpOptions
      )
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError),
        delay(1000)
      );
  }
}
