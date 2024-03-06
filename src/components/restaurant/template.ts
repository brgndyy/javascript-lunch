import { IcategoryInfo, Irestaurant } from "../../types";

export const baseTemplate = (categoryTemplate: string, template: string) => {
  return `<li class="restaurant">${categoryTemplate}${template}</li>`;
};

export const categoryTemplate = (categoryInfo: IcategoryInfo) => {
  console.log(categoryInfo);
  return ` <div class="restaurant__category">
    <img
      src="${categoryInfo.categoryImg}"
      alt="${categoryInfo.category}"
      class="category-icon"
    />
  </div>`;
};

export const template = (restaurant: Irestaurant) => {
  return `<div class="restaurant__info"><h3 class="restaurant__name text-subtitle">${restaurant.name}</h3><span class="restaurant__distance text-body">캠퍼스부터 ${restaurant.distance}분 내</span><p class="restaurant__description text-body">${restaurant.description || ""}</p></div>`;
};
