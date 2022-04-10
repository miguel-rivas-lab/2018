import { prepairClasses } from "../modules/helpers.js";
import { validateSize } from "nano-grid/modules/columns-manager.js";

export default class Column extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const size = this.getAttribute('size');
    const role = this.hasAttribute('table-element') && this.getAttribute('table-element') !== 'false' ? 'cell' : undefined;

    const computedClasses = size ? validateSize(size).class : undefined;

    const classes = prepairClasses([
      'column',
      computedClasses,
      this.className,
    ]);
    const styles = size ? validateSize(size).style.trim() : undefined;

    this.className = classes;

    if (styles) {
      this.style = styles;
    }
    if (role) {
      this.setAttribute('role', role);
    }
  }
}