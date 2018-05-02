import {PolymerElement} from '@polymer/polymer/polymer-element';

import '../xpt-palette';
import '../xpt-icons';

import * as view from './xpt-button-demo.template.html';
import * as css from './xpt-button-demo.postcss';

export class XptButtonDemo extends PolymerElement {

  static get is() {
    return 'xpt-button-demo';
  }

  static get template() {
    return `<style include="xpt-palette">${css}</style>${view}`;
  }
}
