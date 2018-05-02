import * as css from './xpt-palette.postcss';

const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');
documentContainer.innerHTML =
  // TODO: discover why using a template string here breaks everything
  '<dom-module id="xpt-palette"><template><style>' +
    css +
  '</style></template></dom-module>';
document.head.appendChild(documentContainer);