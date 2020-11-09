import { GluonElement, html } from '../node_modules/gluonjs/gluon.js';

class NestedElement extends GluonElement {
  get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          padding: 2px;
          border: 1px solid #353535;
          border-radius: 5px;
        }
      </style>
      ${ this.depth > 0 ? html`
      <nested-element depth="${this.depth - 1}"></nested-element>` : ''}
      <span>${ this.depth}</span>
    `;
  }
}

customElements.define(NestedElement.is, NestedElement)
