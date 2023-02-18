import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Categories } from 'src/models/categories.model';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  providers: [CategoryService],
})
export class CreateCategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initCategoryForm();
  }

  initCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      category: new FormControl('', Validators.required),
    });
  }

  createCategory() {
    if (this.categoryForm.valid) {
      this.categoryService.createCategory(this.categoryForm.value).subscribe({
        next: (response: Categories) => {
          console.log('Kategoriler', response);
        },
      });
    }
  }
}
