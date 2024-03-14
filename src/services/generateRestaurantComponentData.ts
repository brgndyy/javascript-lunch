import RESTAURANT_LIST_ITEM_IMAGE_COMPONENT_DATA from '../components/restaurantListItem/componentsData/RestaurantListItemImageComponentData';
import RESTAURANT_LIST_ITEM_HEADING_COMPONENT_DATA from '../components/restaurantListItem/componentsData/RestaurantListItemHeadingComponentData';
import RESTAURANT_LIST_ITEM_SPAN_COMPONENT_DATA from '../components/restaurantListItem/componentsData/RestaurantListItemSpanComponentData';
import RESTAURANT_LIST_ITEM_DESCRIPTION_COMPONENT_DATA from '../components/restaurantListItem/componentsData/RestaurantListItemDescriptionComponentData';
import RESTAURANT_LIST_ITEM_IS_FAVORITED_COMPONENT_DATA from '../components/restaurantListItem/componentsData/RestaurantListItemIsFavoritedComponentData';
import { CategoryInfo } from '../types';
import RESTAURANT_LIST_ITEM_LINK_COMPONENT_DATA from '../components/restaurantListItem/componentsData/RestaurantListItemLinkComponentData';

export const generateRestaurantCategoryImageComponentData = (categoryInfo: CategoryInfo) => {
  const componentData = {
    ...RESTAURANT_LIST_ITEM_IMAGE_COMPONENT_DATA,
    TAG_SRC: categoryInfo.src,
    TAG_ALT: categoryInfo.alt,
  };

  return componentData;
};

export const generateRestaurantNameComponentData = (restaurantName: string) => {
  const componentData = {
    ...RESTAURANT_LIST_ITEM_HEADING_COMPONENT_DATA,
    TAG_TEXT_CONTENT: RESTAURANT_LIST_ITEM_HEADING_COMPONENT_DATA.TAG_TEXT_CONTENT(restaurantName),
    TAG_LEVEL: 3,
  };

  return componentData;
};

export const generateRestaurantDistanceComponentData = (textContent: string) => {
  const componentData = {
    ...RESTAURANT_LIST_ITEM_SPAN_COMPONENT_DATA,
    TAG_TEXT_CONTENT: RESTAURANT_LIST_ITEM_SPAN_COMPONENT_DATA.TAG_TEXT_CONTENT(textContent),
  };

  return componentData;
};

export const generateRestaurantDescriptionComponentData = (textContent?: string) => {
  const componentData = {
    ...RESTAURANT_LIST_ITEM_DESCRIPTION_COMPONENT_DATA,
    TAG_TEXT_CONTENT: textContent ?? '',
  };

  return componentData;
};

export const generateRestaurantIsFavoritedComponentData = (isFavorited: boolean) => {
  const componentData = {
    ...RESTAURANT_LIST_ITEM_IS_FAVORITED_COMPONENT_DATA,
    TAG_ALT: RESTAURANT_LIST_ITEM_IS_FAVORITED_COMPONENT_DATA.TAG_ALT(isFavorited),
    TAG_SRC: RESTAURANT_LIST_ITEM_IS_FAVORITED_COMPONENT_DATA.TAG_SRC(isFavorited),
  };

  return componentData;
};

export const generateRestaurantLinkComponentData = (link?: string) => {
  if (link) {
    const componentData = {
      ...RESTAURANT_LIST_ITEM_LINK_COMPONENT_DATA,
      TAG_HREF: RESTAURANT_LIST_ITEM_LINK_COMPONENT_DATA.TAG_HREF(link),
    };

    return componentData;
  }

  const componentData = {
    ...RESTAURANT_LIST_ITEM_LINK_COMPONENT_DATA,
    TAG_HREF: RESTAURANT_LIST_ITEM_LINK_COMPONENT_DATA.TAG_HREF(''),
  };

  return componentData;
};