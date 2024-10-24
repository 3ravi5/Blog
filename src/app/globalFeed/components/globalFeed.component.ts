import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedComponent } from '../../shared/components/feeds/feed.component';
import { BannerComponent } from '../../shared/components/banner/banner.component';

@Component({
  selector: 'global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule, FeedComponent, BannerComponent],
})
export class GlobalFeedComponent implements OnInit {
  apiUrl: string = 'articles';
  constructor() {}

  ngOnInit(): void {}
}
