import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedComponent } from '../../shared/components/feeds/feed.component';

@Component({
  selector: 'global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule, FeedComponent],
})
export class GlobalFeedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
