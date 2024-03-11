import filterState from '../../store/FilterStateStore';
import { Category, SortType } from '../../types';
import RestaurantList from '../restaurantList/RestaurantList';

const categoryFilterHandler = (categoryFilter: HTMLElement) => {
  categoryFilter.addEventListener('change', (event) => {
    if (event.target instanceof HTMLSelectElement) {
      const selectedValue = event.target.value as Category;
      filterState.setFilterType(selectedValue);

      RestaurantList().render();
    }
  });
};

export const selectOptionByFoodCategory = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
      categoryFilterHandler(categoryFilter);
    }
  });
};

const sortHandler = (sortFilter: HTMLElement) => {
  sortFilter.addEventListener('change', (event) => {
    if (event.target instanceof HTMLSelectElement) {
      const selectedValue = event.target.value as SortType;
      filterState.setSortType(selectedValue);

      RestaurantList().render();
    }
  });
};

export const selectOptionByNameOrDistance = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const sortFilter = document.getElementById('sorting-filter');
    if (sortFilter) {
      sortHandler(sortFilter);
    }
  });
};