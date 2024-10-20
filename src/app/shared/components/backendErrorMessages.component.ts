import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorInterface } from '../types/backendError.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'backend-error-messages',
  standalone: true,
  templateUrl: './backendErrorMessages.component.html',
  imports: [CommonModule],
})
export class BackendErrorMessages implements OnInit {
  @Input() backendErrors: BackendErrorInterface = {};
  errorMessages: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
