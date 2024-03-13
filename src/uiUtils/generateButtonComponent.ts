import Button from '../components/composables/Button';
import { ButtonElementDataType } from '../types/components';

const generateButtonComponent = (buttonOptionData: Partial<ButtonElementDataType>) => {
  const { TAG_TEXT, TAG_TYPE, TAG_CLASS_NAME, TAG_ID, TAG_ROLE, TAG_VALUE } = buttonOptionData;

  return Button({
    className: TAG_CLASS_NAME ?? '',
    text: TAG_TEXT ?? '',
    type: TAG_TYPE ?? 'button',
    id: TAG_ID ?? '',
    role: TAG_ROLE ?? '',
    value: TAG_VALUE ?? '',
  });
};

export default generateButtonComponent;
