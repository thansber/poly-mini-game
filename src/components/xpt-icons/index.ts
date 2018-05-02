import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-iconset-svg/iron-iconset-svg';

import * as defs from './defs.html';

const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');
documentContainer.id = 'xpt_icons';
documentContainer.innerHTML = '' + defs;
document.head.appendChild(documentContainer);
