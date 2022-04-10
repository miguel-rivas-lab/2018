import { Component, Input, OnChanges } from '@angular/core';
import { validateSize } from "nano-grid/modules/columns-manager.js";

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
})

export class ColumnComponent implements OnChanges {

  @Input() size: String = '';
  @Input() tableElement: Boolean = false;

  classes = [];
  styles = "";

  ngOnChanges() {
    let computedSize = this.size ? validateSize(this.size).class.trim() : "";
    let computedStyle = this.size ? validateSize(this.size).style.trim() : "";

    this.classes = ["column", computedSize];
    this.styles = computedStyle;
  }

  constructor() { }
}