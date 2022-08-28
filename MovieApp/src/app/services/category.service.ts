import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/models/categories.model';

@Injectable()
export class CategoryService {
  url = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}
  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.url);
  }
}
