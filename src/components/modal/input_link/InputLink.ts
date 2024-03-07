import { inputLinkTemplate } from "./template";
import restaurantStateStore from "../../../store/RestaurantStateStore";
import convertHTMLStringToDOM from "../../../utils/convertHTMLStringToDOM";

function InputLink() {
  const render = (form: Element) => {
    form.appendChild(convertHTMLStringToDOM(inputLinkTemplate));

    inputLinkHandler();
  };

  const inputLinkHandler = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const link = document.getElementById("link");

      if (link) {
        link.addEventListener("input", (e) => {
          const target = e.target as HTMLInputElement;
          if (target) {
            restaurantStateStore.setLink(target.value);
            console.log(restaurantStateStore.getRestaurantInfo());
          }
        });
      }
    });
  };

  return {
    render,
  };
}

export default InputLink;
