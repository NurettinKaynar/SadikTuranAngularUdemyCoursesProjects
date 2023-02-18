import { environment } from 'src/environments/environment';

export class UrlPathUtilities {
  public static readonly BASE_URL = environment.FIREBASE_URL;
  public static readonly MOVIES = 'movies.json';
  public static readonly GET_MOVIE_BY_ID = 'movies/';
  public static readonly GET_CATEGORIES = 'categories.json';
}
