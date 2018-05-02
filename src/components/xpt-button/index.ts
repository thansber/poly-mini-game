import {PolymerElement} from '@polymer/polymer/polymer-element';

import '../xpt-palette';

import * as view from './xpt-button.template.html';
import * as css from './xpt-button.postcss';

export class XptButton extends PolymerElement {

  static get is() {
    return 'xpt-button';
  }

  static get template() {
    return `<style include="xpt-palette">${css}</style>${view}`;
  }
}
