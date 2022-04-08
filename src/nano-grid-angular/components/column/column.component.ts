import { Component, Input } from '@angular/core';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
})

export class ColumnComponent {

  @Input() size: String = '';
  @Input() tableElement: Boolean = false;

  constructor() { }
}