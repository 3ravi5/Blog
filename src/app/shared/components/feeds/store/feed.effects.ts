import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from '../services/feed.service';
import { getFeed, getFeedError, getFeedSuccess } from './feed.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const feedEffects = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    return actions$.pipe(
      ofType(getFeed),
      switchMap(({ url }) => {
        return feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccess({ feed });
          }),
          catchError((err: HttpErrorResponse) =>
            of(getFeedError({ err: err.message }))
          )
        );
      })
    );
  },
  { functional: true }
);
