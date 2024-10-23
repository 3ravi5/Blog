import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const apiUrl = environment.apiUrl + '/' + url;
    return this.http.get<GetFeedResponseInterface>(apiUrl);
  }
}
