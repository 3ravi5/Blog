import { Component, Input } from '@angular/core';

@Component({
  selector: 'tag-list',
  standalone: true,
  imports: [],
  templateUrl: './tagList.component.html',
})
export class TagListComponent {
  @Input() tags!: string;
  constructor() {}
}
