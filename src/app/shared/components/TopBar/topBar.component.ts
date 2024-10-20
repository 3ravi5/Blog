import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'top-bar',
  templateUrl: './topBar.component.html',
  standalone: true,
  imports: [],
})
export class TopBarComponent implements OnInit {
  data$!: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.data$ = combineLatest({
      currentUser: this.store.select(selectCurrentUser),
    });
  }
}
