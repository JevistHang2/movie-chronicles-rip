import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MovieDetailService } from './movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  stateData: any;
  detail: any;
  imageBaseUrl: string = environment.imageBaseUrl;

  constructor(private movieDetailServices: MovieDetailService, private datePipe: DatePipe, private router: Router) {
    this.stateData = window.history.state.data
  }

  ngOnInit() {
    let params = new HttpParams();
    this.movieDetailServices.getDetail(params, this.stateData.id).subscribe(((data: any) => this.detail = data));
  }

}
