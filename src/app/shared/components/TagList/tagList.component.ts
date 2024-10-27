import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tagList.component.html',
})
export class TagListComponent {
  @Input() tags!: string;
  constructor() {}
}
