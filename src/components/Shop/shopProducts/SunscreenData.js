import { v4 as uuidv4 } from "uuid";

const SunscreenData = [
  {
    key: uuidv4(),
    id: "1",
    title: "Nivea sunscreen",
    src: "sunscreen/pic-1.png",
    subTitle: {
      1: "OIL-FREE",
      2: "Dry touch sunscreen",
      3: "With CELL-OX SHIELD XL, UVA/UVB protection",
    },
  },
  {
    key: uuidv4(),
    id: "2",
    title: "Cerave Hydrating Sunscreen",
    src: "heroSliderPics/pic-2.png",
    price: 33,

    subTitle: {
      1: "Light weight",
      2: "None-greasy feel",
      3: "3 Essential ceramides & niacinamida",
    },
  },
  {
    key: uuidv4(),
    id: "3",
    title: "HydroBoost SPF30",
    price: 33,

    src: "heroSliderPics/pic-3.png",
    subTitle: {
      1: "Light weight",
      2: "None-greasy feel",
      3: "3 Essential ceramides & niacinamida",
    },
  },
  {
    key: uuidv4(),
    id: "4",
    title: "Cerave Foaming Cleanser",
    price: 33,
    src: "heroSliderPics/pic-4.png",
    subTitle: {
      1: "Light weight",
      2: "None-greasy feel",
      3: "3 Essential ceramides & niacinamida",
    },
  },
];

export default SunscreenData;
