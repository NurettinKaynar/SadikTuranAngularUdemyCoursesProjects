import { Categories } from './categories.model';

export class CategoryRepository {
  private categories: Categories[];

  constructor() {
    this.categories = [
      { id: 1, category: 'Macera' },
      { id: 2, category: 'Bilim Kurgu' },
      { id: 3, category: 'Fantastik' },
      { id: 4, category: 'Animasyon' },
      { id: 5, category: 'Belgesel' },
    ];
  }
  getCategories(): Categories[] {
    return this.categories;
  }
}
