import { CommonModule } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UtilsService } from '../../services/utils.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class PaginationComponent implements OnInit {
  @Input() total!: number;
  @Input() limit!: number;
  @Input() url!: string;
  @Input() currentPage!: number;

  pagesCount: number = 1;
  pages: number[] = [];

  constructor(private utilsService: UtilsService) {}

  ngOnInit() {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages =
      this.pagesCount > 0
        ? this.utilsService.rangeArray(1, this.pagesCount)
        : [];
  }
}
