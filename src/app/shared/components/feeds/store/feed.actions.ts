import { createAction, props } from '@ngrx/store';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

export const getFeed = createAction(
  '[Feed] Get Feed',
  props<{ url: string }>()
);

export const getFeedSuccess = createAction(
  '[Feed] Get Feed Success',
  props<{ feed: GetFeedResponseInterface }>()
);

export const getFeedError = createAction(
  '[Feed] Get Feed Error',
  props<{ err: string }>()
);
