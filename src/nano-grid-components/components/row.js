import { prepairClasses } from "../modules/helpers.js";
import { validateSpacing } from "nano-grid/modules/columns-manager.js";

export default class Row extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const group = this.hasAttribute('group') && this.getAttribute('group') !== 'false' ? 'nano-group' : '';
    const integrated = this.hasAttribute('integrated') && this.getAttribute('integrated') !== 'false' ? 'integrated' : '';
    const vertical = this.hasAttribute('vertical') && this.getAttribute('vertical') !== 'false' ? 'vertical' : '';
    const grid = this.hasAttribute('grid') && this.getAttribute('grid') !== 'false' ? 'grid' : '';
    let role;
    if (this.getAttribute('table-element')) {
      role = 'row';
      if (group) {
        role = 'group';
      }
    }

    const breakpoint = this.getAttribute('breakpoint');
    const spacing = this.getAttribute('spacing') ? validateSpacing(this.getAttribute('spacing')) : '';

    const classes = prepairClasses([
      'nano-row',
      group,
      breakpoint,
      spacing,
      integrated,
      vertical,
      grid,
      this.className,
    ]);
    this.className = classes;

    if (role) {
      this.setAttribute('role', role);
    }
  }
}