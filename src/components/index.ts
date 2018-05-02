import * as kebabCase from 'lodash/fp/kebabCase';
import { XptButtonDemo } from './xpt-button-demo';
import { XptButton } from './xpt-button';

// add custom elements here
const elements = {
    XptButtonDemo,
    XptButton
};

// register all components as kebab case
Object.keys(elements).forEach(key => customElements.define(elements[key].is, elements[key]));
