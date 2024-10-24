import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'banner',
  standalone: true,
  templateUrl: './banner.component.html',
  imports: [CommonModule],
})
export class BannerComponent {
  constructor() {}
}
