import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFeed } from './store/feed.actions';
import { combineLatest, Observable } from 'rxjs';
import {
  selectError,
  selectFeedData,
  selectIsLoading,
} from './store/feed.reducers';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';
  data$!: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getFeed({ url: this.apiUrl }));
    this.data$ = combineLatest({
      isLoading: this.store.select(selectIsLoading),
      error: this.store.select(selectError),
      feed: this.store.select(selectFeedData),
    });
  }
}
