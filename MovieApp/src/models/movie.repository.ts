import { Movie } from './movie.model';

export class MovieRepository {
  private movies!: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'film 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '1.jpeg',
      },
      {
        id: 2,
        title: 'film 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '2.jpeg',
      },
      {
        id: 3,
        title: 'film 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '3.jpeg',
      },
      {
        id: 4,
        title: 'film 4',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '4.jpeg',
      },
    ];
  }
  getMovies(): Movie[] {
    return this.movies;
  }
  getMovieById(id: number): Movie {
    return this.movies.find((i) => i.id == id);
  }
}
