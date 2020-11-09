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
      <sub-sub-elementq></sub-sub-elementq>
      <sub-sub-elementw></sub-sub-elementw>
      <sub-sub-elemente></sub-sub-elemente>
      <sub-sub-elementr></sub-sub-elementr>
      <sub-sub-elementt></sub-sub-elementt>
      <sub-sub-elementy></sub-sub-elementy>
      <sub-sub-elementu></sub-sub-elementu>
      <sub-sub-elementi></sub-sub-elementi>
      <sub-sub-elemento></sub-sub-elemento>
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
class SubSubElementq extends GluonElement {
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
class SubSubElementw extends GluonElement {
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
class SubSubElemente extends GluonElement {
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
class SubSubElementr extends GluonElement {
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
class SubSubElementt extends GluonElement {
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
class SubSubElementy extends GluonElement {
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
class SubSubElementu extends GluonElement {
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
class SubSubElementi extends GluonElement {
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

class SubSubElemento extends GluonElement {
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
customElements.define(SubSubElementq.is, SubSubElementq);
customElements.define(SubSubElementw.is, SubSubElementw);
customElements.define(SubSubElemente.is, SubSubElemente);
customElements.define(SubSubElementr.is, SubSubElementr);
customElements.define(SubSubElementt.is, SubSubElementt);
customElements.define(SubSubElementy.is, SubSubElementy);
customElements.define(SubSubElementu.is, SubSubElementu);
customElements.define(SubSubElementi.is, SubSubElementi);
customElements.define(SubSubElemento.is, SubSubElemento);

