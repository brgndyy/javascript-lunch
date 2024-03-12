import generateInputComponent from '../../../uiUtils/generateInputComponent';
import generateLabelComponent from '../../../uiUtils/generateLabelComponent';
import generateSpanComponent from '../../../uiUtils/generateSpanComponent';
import convertHTMLStringToDOM from '../../../utils/convertHTMLStringToDOM';

import LINK_INPUT_COMPONENT_DATA from './componentsData/LinkInputComponentData';
import LINK_LABEL_COMPONENT_DATA from './componentsData/LinkLabelComponentData';
import LINK_SPAN_COMPONENT_DATA from './componentsData/LinkSpanComponentData';
import inputLinkTemplate from './inputLinkTemplate';

export const renderBaseLinkComponents = (form: Element) => {
  form.appendChild(convertHTMLStringToDOM(inputLinkTemplate));
};

export const renderLinkComponents = () => {
  const linkContainer = document.getElementsByClassName('link-container')[0];

  linkContainer.appendChild(generateLabelComponent(LINK_LABEL_COMPONENT_DATA));
  linkContainer.appendChild(generateInputComponent(LINK_INPUT_COMPONENT_DATA));
  linkContainer.appendChild(generateSpanComponent(LINK_SPAN_COMPONENT_DATA));
};
