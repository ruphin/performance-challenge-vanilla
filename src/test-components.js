import { GluonElement, html } from '../node_modules/gluonjs/gluon.js';

class ContainerElement extends GluonElement {
  get template() {
    return html`
      <style>
        :host {
          display: inline-flex;
          padding: 10px;
          margin: 10px;
          border: 1px solid #4f4f4f;
          border-radius: 4px;
        }
      </style>
      <sub-element></sub-element>
      <sub-element></sub-element>
      <sub-element></sub-element>
      <sub-element></sub-element>
      <sub-element></sub-element>
      <sub-element></sub-element>
      <sub-element></sub-element>
      <sub-element></sub-element>
      <sub-element></sub-element>
      <sub-element></sub-element>
    `;
  }
}

class SubElement extends GluonElement {
  get template() {
    return html`
      <style>
        :host {
          display: inline-flex;
          flex-wrap: wrap;
          height: 100px;
          width: 100px;
          margin: 10px;
          background: #f1f1f1;
          border: 1px solid #4f4f4f;
          border-radius: 4px;
        }
      </style>
      <sub-sub-element></sub-sub-element>
      <sub-sub-element></sub-sub-element>
      <sub-sub-element></sub-sub-element>
      <sub-sub-element></sub-sub-element>
      <sub-sub-element></sub-sub-element>
      <sub-sub-element></sub-sub-element>
      <sub-sub-element></sub-sub-element>
      <sub-sub-element></sub-sub-element>
      <sub-sub-element></sub-sub-element>
    `;
  }
}

class SubSubElement extends GluonElement {
  get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          height: 20px;
          width: 20px;
          margin: 5px;
          background: #e1e1e1;
          border: 1px solid #4f4f4f;
          border-radius: 4px;
        }
      </style>
    `;
  }
}

customElements.define(ContainerElement.is, ContainerElement);
customElements.define(SubElement.is, SubElement);
customElements.define(SubSubElement.is, SubSubElement);
