import Restaurant from "../domain/Restaurant";
import { Icategory, Idistance, Irestaurant } from "../types";

class StateStore {
  #restaurantState: Irestaurant = {
    category: "기타",
    name: "",
    distance: 5,
    description: undefined,
    link: undefined,
  };

  setCategory(selectCategory: Icategory) {
    this.#restaurantState.category = selectCategory as Icategory;
  }

  setName(inputName: string) {
    this.#restaurantState.name = inputName;
  }

  setDistance(selectDistance: Idistance) {
    this.#restaurantState.distance = selectDistance;
  }

  setDescription(inputDescription: string) {
    this.#restaurantState.description = inputDescription;
  }

  setLink(inputLink: string) {
    this.#restaurantState.link = inputLink;
  }

  getRestaurantInfo() {
    return Restaurant(this.#restaurantState);
    // return this.#restaurantState;
  }
}

const stateStore = new StateStore();

export default stateStore;
