import { Movie } from './movie.model';

export class MovieRepository {
  private movies!: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'Shazam 6 Güç',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '1.jpeg',
        isPopular: true,
      },
      {
        id: 2,
        title: 'Amazing Grace',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '2.jpeg',
        isPopular: false,
      },
      {
        id: 3,
        title: 'High Life',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '3.jpeg',
        isPopular: false,
      },
      {
        id: 4,
        title: 'Billboard',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '4.jpeg',
        isPopular: true,
      },
      {
        id: 5,
        title: 'Storm Boy',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, in!',
        imageUrl: '5.jpeg',
        isPopular: true,
      },
    ];
  }
  getMovies(): Movie[] {
    return this.movies;
  }
  getPopularMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopular);
  }
  getMovieById(id: number): Movie {
    return this.movies.find((i) => i.id == id);
  }
}
