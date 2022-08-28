import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/models/categories.model';
import { CategoryService } from '../services/category.service';
// import { CategoryRepository } from 'src/models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  // categories = ['Macera', 'Bilim Kurgu', 'Fantastik', 'Animasyon'];
  categories: Categories[] = [];
  // categoryRepository: CategoryRepository;
  selectedCategory: Categories = null;
  displayAll: boolean = true;
  constructor(private categoryService: CategoryService) {
    // this.categoryRepository = new CategoryRepository();
    // this.categories = this.categoryRepository.getCategories();
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

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
