import { ATagElementDataType } from '../types/components';
import ATag from '../components/composables/ATag';

const generateATagComponenet = (ATagOptionData: ATagElementDataType) => {
  const { TAG_CLASS_NAME, TAG_HREF, TAG_BLANK, TAG_TEXT_CONTENT } = ATagOptionData;

  return ATag({
    className: TAG_CLASS_NAME ?? '',
    href: TAG_HREF ?? '',
    _blank: TAG_BLANK ?? false,
    textContent: TAG_TEXT_CONTENT ?? '',
  });
};

export default generateATagComponenet;
