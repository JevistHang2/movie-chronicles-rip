import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Genre } from './model/genre';
import { Movie } from './model/movie';
import { ResponseMovie } from './model/response-movie';
import { SortOptions } from './model/sort-options';
import { MovieListService } from './movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  detail!: ResponseMovie;
  genres!: Genre[];
  imageBaseUrl: string = environment.imageBaseUrl;

  length: number = 0;
  pageSize: number = 20;
  pageIndex: number = 0;
  hidePageSize = true;
  showFirstLastButtons = true;

  sort!: string;
  pageEvent!: PageEvent;

  sortOptions: SortOptions[] = [
    { sortBy: 'popularity.asc', label: 'Popularity (Asc)' },
    { sortBy: 'popularity.desc', label: 'Popularity (Desc)' },
    { sortBy: 'release_date.asc', label: 'Release Date (Asc)' },
    { sortBy: 'release_date.desc', label: 'Release Date (Desc)' },
    { sortBy: 'vote_count.asc', label: 'Vote Count (Asc)' },
    { sortBy: 'vote_count.desc', label: 'Vote Count (Desc)' },
  ];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private movieListServices: MovieListService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
    let params = new HttpParams()
    this.movieListServices.getListGenre(params).subscribe((data: any) => this.listDataGenre(data))
    this.movieListServices.getListMovie(params)
      .subscribe((data: any) => this.listDataResult(data))
  }

  listDataResult(response: ResponseMovie) {
    this.detail = response;
    this.pageIndex = response.page - 1;
    this.length = response.total_results;
  }

  listDataGenre(response: any) {
    this.genres = response.genres;
  }

  handlePageEvent(e: PageEvent) {
    let params = new HttpParams()
    if (this.range.value.start) {
      params = params.append('primary_release_date.gte', String(this.datePipe.transform(this.range.value.start, 'yyyy-MM-dd')))
    }
    if (this.range.value.end) {
      params = params.append('primary_release_date.lte', String(this.datePipe.transform(this.range.value.end, 'yyyy-MM-dd')))
    }
    if (this.sort) {
      params = params.append('sort_by', String(this.sort))
    }
    params = params.append('page', String(e.pageIndex + 1))
    this.movieListServices.getListMovie(params)
      .subscribe((data: any) => this.listDataResult(data))
  }

  handleFilterDate() {
    let params = new HttpParams()
    if (this.range.value.start) {
      params = params.append('primary_release_date.gte', String(this.datePipe.transform(this.range.value.start, 'yyyy-MM-dd')))
    }
    if (this.range.value.end) {
      params = params.append('primary_release_date.lte', String(this.datePipe.transform(this.range.value.end, 'yyyy-MM-dd')))
    }
    if (this.sort) {
      params = params.append('sort_by', String(this.sort))
    }
    this.movieListServices.getListMovie(params).subscribe((data: any) => this.listDataResult(data))
  }

  handleSortBy(event: any) {
    let tempSort = 'popularity.desc'
    if (event.value) {
      tempSort = String(event.value);
    }
    this.sort = tempSort;
    let params = new HttpParams()
    if (this.range.value.start) {
      params = params.append('primary_release_date.gte', String(this.datePipe.transform(this.range.value.start, 'yyyy-MM-dd')))
    }
    if (this.range.value.end) {
      params = params.append('primary_release_date.lte', String(this.datePipe.transform(this.range.value.end, 'yyyy-MM-dd')))
    }
    params = params.append('sort_by', tempSort)
    this.movieListServices.getListMovie(params).subscribe((data: any) => this.listDataResult(data))
  }

  onDetail(data: Movie) {
    this.router.navigate(['home/movie/detail'], {
      replaceUrl: true, // replaces the current URL in the browser history
      state: {
        // persist the state data using the HTML5 history API
        data: data,
        title: 'Detail Data'
      }
    })
  }

}
