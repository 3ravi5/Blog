import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class PaginationComponent implements OnInit {
  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Input() url: string = '';
  @Input() currentPage: number = 1;

  constructor() {}

  ngOnInit() {}
}
