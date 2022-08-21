import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/models/categories.model';
import { CategoryRepository } from 'src/models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  // categories = ['Macera', 'Bilim Kurgu', 'Fantastik', 'Animasyon'];
  categories: Categories[] = [];
  categoryRepository: CategoryRepository;
  selectedCategory: Categories = null;
  displayAll: boolean = true;
  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {}

  selectCategory(category?: Categories) {
    if (category) {
      this.selectedCategory = category;
      this.displayAll = false;
      console.log(this.selectedCategory);
    } else {
      this.displayAll = true;
      this.selectedCategory = null;
    }
  }
}
