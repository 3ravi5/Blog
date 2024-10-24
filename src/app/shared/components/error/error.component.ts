import { Component, Input } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  imports: [],
  standalone: true,
})
export class ErrorComponent {
  @Input() message: string = 'Something went wrong';

  constructor() {}
}
