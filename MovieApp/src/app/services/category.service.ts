import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categories } from 'src/models/categories.model';
import { UrlPathUtilities } from '../utilities/url-path';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}
  getCategories(): Observable<Categories[]> {
    return this.http
      .get<Categories[]>(
        UrlPathUtilities.BASE_URL + UrlPathUtilities.CATEGORIES
      )
      .pipe(
        map((response) => {
          const categories: Categories[] = [];
          for (const key in response) {
            categories.push({ ...response[key], id: key });
          }
          return categories;
        })
      );
  }

  createCategory(category: Categories): Observable<Categories> {
    return this.http.post<Categories>(
      UrlPathUtilities.BASE_URL + UrlPathUtilities.CATEGORIES,
      category
    );
  }
}
