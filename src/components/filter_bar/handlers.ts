import filterState from "../../store/FilterStateStore";
import { Icategory, IsortType } from "../../types";
import RestaurantList from "../restaurant_list/RestaurantList";

export const changeFilter = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("category-filter");
    if (categoryFilter) {
      categoryFilterHandler(categoryFilter);
    }
  });
};

const categoryFilterHandler = (categoryFilter: HTMLElement) => {
  categoryFilter.addEventListener("change", (event) => {
    if (event.target instanceof HTMLSelectElement) {
      const selectedValue = event.target.value as Icategory;
      filterState.setFilterType(selectedValue);

      RestaurantList().reRender();
    }
  });
};

export const changeSorting = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const sortFilter = document.getElementById("sorting-filter");
    if (sortFilter) {
      sortHandler(sortFilter);
    }
  });
};

const sortHandler = (sortFilter: HTMLElement) => {
  sortFilter.addEventListener("change", (event) => {
    if (event.target instanceof HTMLSelectElement) {
      const selectedValue = event.target.value as IsortType;
      filterState.setSortType(selectedValue);

      RestaurantList().reRender();
    }
  });
};
