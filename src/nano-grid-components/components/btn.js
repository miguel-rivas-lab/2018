import { createNode, prepairClasses } from "../modules/helpers.js";

export default class Btn extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const color = this.hasAttribute('color') ? this.getAttribute('color') : '';
    const glyph = this.hasAttribute('glyph') ? this.getAttribute('glyph') : undefined;
    const direction = this.hasAttribute('direction') ? this.getAttribute('direction') : 'down';
    const active = this.hasAttribute('active') && this.getAttribute('active') !== 'false' ? 'active' : '';
    const mode = this.hasAttribute('mode') ? this.getAttribute('mode') : 'flat';
    const size = this.hasAttribute('size') ? this.getAttribute('size') : '';
    const text = this.getAttribute('text');

    const btn = createNode({
      type: 'button',
      parent: this,
      attributes: [{
        name: 'class',
        value: prepairClasses([
          'btn',
          color,
          active,
          mode,
          size,
        ])
      }],
    });

    if (glyph) {
      createNode({
        type: 'nn-icon',
        parent: btn,
        attributes: [{
          name: 'class',
          value: prepairClasses([
            glyph,
            direction,
          ])
        }],
      });
    }

    createNode({
      type: 'span',
      parent: btn,
      text: text,
      attributes: [{
        name: 'class',
        value: 'caption'
      }],
    });

  }
}