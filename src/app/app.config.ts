import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as AuthEffects from './auth/store/effects';
import * as FeedEffects from './shared/components/feeds/store/feed.effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { authInterceptor } from './shared/services/authInterceptor';
import {
  feedFeatureKey,
  feedReducer,
} from './shared/components/feeds/store/feed.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore({
      router: routerReducer,
    }),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideEffects(AuthEffects),
    provideEffects(FeedEffects),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouterStore(),
  ],
};
