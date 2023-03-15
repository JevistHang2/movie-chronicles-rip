import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [
    CommonModule, MovieRoutingModule,
    MatDatepickerModule, MatButtonModule, MatDialogModule, MatInputModule,
    FormsModule, ReactiveFormsModule, MatNativeDateModule, MatIconModule, MatSelectModule
  ],
  exports: [MovieListComponent, MovieDetailComponent]
})
export class MovieModule { }
