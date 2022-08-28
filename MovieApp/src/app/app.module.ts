import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summaryPipe/summary.pipe';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movieFilterPipe/movie-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
@NgModule({
  declarations: [
    //component
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
  ],
  imports: [
    //Module
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AlertifyService], //services
  bootstrap: [AppComponent], // Starter Component
})
export class AppModule {}
