import { v4 as uuidv4 } from "uuid";

const SerumData = [
  {
    key: uuidv4(),
    id: "1",
    title: "Cerave Moisturizing Lotion",
    src: "moist/pic-1.png",
    subTitle: {
      1: "For Normal To Dry Skin",
      2: "Light Weight",
      3: "With 3 Essential Ceramides & Hyaluronic Acid",
    },
  },
  {
    key: uuidv4(),
    id: "2",
    title: "Laroch posay toleriane sensitive",
    src: "moist/pic-2.png",
    price: 33,

    subTitle: {
      1: "with Meadowfoam oil",
      2: "dry, sensitive skin",
    },
  },
  {
    key: uuidv4(),
    id: "3",
    title: "the ordianry Resveratrol",
    price: 33,

    src: "moist/pic-3.png",
    subTitle: {
      1: "protective soothing moisturiser",
    },
  },
  {
    key: uuidv4(),
    id: "4",
    title: "the ordinary retinol",
    price: 33,
    src: "moist/pic-4.png",
    subTitle: {
      1: "Light weight",
      2: "None-greasy feel",
      3: "3 Essential ceramides & niacinamida",
    },
  },
];

export default SerumData;
