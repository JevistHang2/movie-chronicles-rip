import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SortOptions } from './model/sort-options';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
