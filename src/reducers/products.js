import { SET_PRODUCTS } from "../actions/types";

const initialState = {
  milk: [
    {
      id: 85485,
      title: "PET Evaporated Milk, 5 oz",
      image: "https://spoonacular.com/productImages/85485-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 52089,
      title: "Hood 2% Reduced Fat Milk, Gallon",
      image: "https://spoonacular.com/productImages/52089-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 29250,
      title: "Hood Whole Milk, Gallon",
      image: "https://spoonacular.com/productImages/29250-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 137406,
      title: "Hood Coffee Flavor Lowfat Milk 14 Oz Plastic Bottle",
      image: "https://spoonacular.com/productImages/137406-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 38552,
      title: "Hood Fat Free Milk, Gallon",
      image: "https://spoonacular.com/productImages/38552-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 42245,
      title: "Hood Whole Milk, Half Gallon",
      image: "https://spoonacular.com/productImages/42245-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 25142,
      title: "Hood Fat Free Milk, Half Gallon",
      image: "https://spoonacular.com/productImages/25142-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 136399,
      title: "Hood 1% Lowfat Milk, Half Gallon",
      image: "https://spoonacular.com/productImages/136399-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 29277,
      title: "Hood Milk Chocolate",
      image: "https://spoonacular.com/productImages/29277-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 29273,
      title: "Hood Chocolate Whole Milk",
      image: "https://spoonacular.com/productImages/29273-312x231.png",
      imageType: "png",
    },
    {
      id: 212522,
      title: "Hood® Vitamins C & D Milk 0.5 Gallon Carton",
      image: "https://spoonacular.com/productImages/212522-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 90727,
      title: "Hood Vitamins C & D Milk 14 Oz Plastic Bottle",
      image: "https://spoonacular.com/productImages/90727-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 29194,
      title: "Hood Chocolate Lowfat Milk .5 Gal Carton",
      image: "https://spoonacular.com/productImages/29194-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 193783,
      title: "Kemps 2% Reduced Fat Milk, 1 gal",
      image: "https://spoonacular.com/productImages/193783-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 200505,
      title: "Kemps 1% Lowfat Select Milk .5 Gal Jug",
      image: "https://spoonacular.com/productImages/200505-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 213575,
      title: "Kemps® Organic Fat Free Skim Milk 1 gal. Jug",
      image: "https://spoonacular.com/productImages/213575-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 126282,
      title: "M&M's Milk Chocolate Minis Candy Tube, 1.77 oz",
      image: "https://spoonacular.com/productImages/126282-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 413384,
      title: "M&amp;M's Crispy Chocolate Candy, 9.9 Oz.",
      image: "https://spoonacular.com/productImages/413384-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 213591,
      title: "Kemps Milk Lactose Free Skim Pahg",
      image: "https://spoonacular.com/productImages/213591-312x231.jpeg",
      imageType: "jpeg",
    },
    {
      id: 213544,
      title: "Kemps",
      image: "https://spoonacular.com/productImages/213544-312x231.jpeg",
      imageType: "jpeg",
    },
  ],
};

export default function setProducts(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        [payload.category]: payload.products,
      };

    default:
      return state;
  }
}
