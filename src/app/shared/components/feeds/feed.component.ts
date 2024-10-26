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
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { LoadingComponent } from '../loading/loading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ErrorComponent,
    LoadingComponent,
    PaginationComponent,
  ],
})
export class FeedComponent implements OnInit {
  @Input() apiUrl: string = '';
  data$!: Observable<any>;
  limit: number = environment.limit;
  baseUrl!: string;
  currentPage: number = 0;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.data$ = combineLatest({
      isLoading: this.store.select(selectIsLoading),
      error: this.store.select(selectError),
      feed: this.store.select(selectFeedData),
    });

    this.baseUrl = this.router.url.split('?')[0];

    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1');
      this.fetchFeed();
    });
  }

  fetchFeed() {
    const offset = (this.currentPage - 1) * this.limit;
    const detailedUrl = `${this.apiUrl}?limit=${this.limit}&offset=${offset}`;
    this.store.dispatch(getFeed({ url: detailedUrl }));
  }
}
