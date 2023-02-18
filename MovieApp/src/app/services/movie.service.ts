import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/models/movie.model';

@Injectable()
export class MovieService {
  url = 'http://localhost:3000/movies';
  url_firebase = environment.FIREBASE_URL;
  constructor(private http: HttpClient) {}

  getMovies(categoryId: number): Observable<Movie[]> {
    let newUrl = this.url;
    if (categoryId) {
      newUrl += '?categoryId=' + categoryId;
    }
    return this.http.get<Movie[]>(newUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
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

  getMovieById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/' + movieId).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
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
      .post<Movie>(this.url_firebase + '/movies.json', movie, httpOptions)
      .pipe(
        tap((data) => console.log(data)),
        catchError(this.handleError)
      );
  }
}
