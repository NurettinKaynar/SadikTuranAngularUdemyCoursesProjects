import { Component, Injectable, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from 'src/models/categories.model';
import { Movie } from 'src/models/movie.model';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService],
})
export class MovieCreateComponent implements OnInit {
  categories: Categories[];
  createMovieForm: any;
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .subscribe((data) => (this.categories = data));
    this.initForm();
  }
  initForm() {
    this.createMovieForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      category: new FormControl(1, Validators.required),
    });
  }

  createMovie() {
    let sendMovie: Movie = this.createMovieForm.value;
    sendMovie.publishedDate = new Date();
    this.movieService.createMovie(sendMovie).subscribe((data) => {
      this.router.navigate(['/movies', data.id]);
      console.log(data);
    });
  }

  clearForms() {
    this.createMovieForm.reset();
  }
}
