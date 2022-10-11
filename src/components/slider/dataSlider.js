import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: "1",
    key: uuidv4(),
    title: "Cerave Moisturizing Lotion",
    price: 15,
    src: "heroSliderPics/pic-1.png",
    subTitle: {
      1: "For Normal To Dry Skin",
      2: "Light Weight",
      3: "With 3 Essential Ceramides & Hyaluronic Acid",
    },
  },
  {
    id: "2",
    key: uuidv4(),

    price: 12,
    title: "Cerave Hydrating Sunscreen",
    src: "heroSliderPics/pic-2.png",
    subTitle: {
      1: "Light weight",
      2: "None-greasy feel",
      3: "3 Essential ceramides & niacinamida",
    },
  },
];

export default dataSlider;
