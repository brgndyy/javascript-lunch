import FilterBar from "../filter_bar/FilterBar";
import Header from "../header/Header";
import Modal from "../modal/Modal";
import RestaurantList from "../restaurant_list/RestaurantList";

function App() {
  const render = () => {
    Modal().render();
    Header().render();
    FilterBar().render();
    RestaurantList().init();
  };

  render();
}

export default App;