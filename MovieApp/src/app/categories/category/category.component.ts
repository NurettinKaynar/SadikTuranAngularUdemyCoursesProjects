import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/models/categories.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  categories: Categories[] = [];
  selectedCategory: Categories = null;
  displayAll: boolean = true;
  constructor(private categoryService: CategoryService) {}

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
