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
import { MovieListService } from './movie-list/movie-list.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common'
import { MovieDetailService } from './movie-detail/movie-detail.service';
import { GetGenreNamePipe } from 'src/app/pipe/get-genre-name.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { ConvertHourMinutePipe } from 'src/app/pipe/convert-hour-minute.pipe';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent, GetGenreNamePipe, ConvertHourMinutePipe],
  imports: [
    CommonModule, MovieRoutingModule, HttpClientModule,
    MatDatepickerModule, MatButtonModule, MatDialogModule, MatInputModule,
    FormsModule, ReactiveFormsModule, MatNativeDateModule, MatIconModule, MatSelectModule,
    MatCardModule, MatPaginatorModule, MatGridListModule
  ],
  exports: [MovieListComponent, MovieDetailComponent],
  providers: [HttpClientModule, MovieListService, MovieDetailService, DatePipe]
})
export class MovieModule { }
