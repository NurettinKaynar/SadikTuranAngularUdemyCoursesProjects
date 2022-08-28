import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Movie } from 'src/models/movie.model';

@Injectable()
export class MovieService {
  url = 'http://localhost:3000/movie';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url).pipe(
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
    return throwError(() => new Error('Unknown Error'));
  }
}
