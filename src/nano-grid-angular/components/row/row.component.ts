import { Component, Input } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
})

export class RowComponent {
  @Input() breakpoint: String = '';
  @Input() group: Boolean = false;
  @Input() integrated: Boolean = false;
  @Input() spacing: String | Number = '';
  @Input() vertical: Boolean = false;
  @Input() grid: Boolean = false;
  @Input() tableElement: Boolean = false;

  constructor() { }
}