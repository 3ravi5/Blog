import { createFeature, createReducer, on } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';
import { getFeed, getFeedError, getFeedSuccess } from './feed.actions';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(getFeed, (state) => ({ ...state, isLoading: true })),
    on(getFeedSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })),
    on(getFeedError, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.err,
    })),
    //we want to remove the inital feed while jumping to another page
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsLoading,
  //renaming this special key
  selectData: selectFeedData,
  selectError,
} = feedFeature;
