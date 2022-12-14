import { v4 as uuidv4 } from "uuid";

const data = [
  {
    key: uuidv4(),
    id: "1",
    title: "Cerave Foaming facial cleanser",
    src: "cleanser/pic-1.png",
    subTitle: {
      1: "For Normal To Oily Skin",
      2: "Cleanse & remove oil without disturpting the protective sking",
      3: "With 3 Essential Ceramides & Hyaluronic Acid",
    },
  },
  {
    key: uuidv4(),
    id: "2",
    title: "Cerave resurfacing retinol",
    src: "cleanser/pic-2.png",
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
    title: "the ordianry Resveratrol ",
    price: 33,

    src: "cleanser/pic-3.png",
    subTitle: {
      1: "Light weight",
      2: "None-greasy feel",
      3: "3 Essential ceramides & niacinamida",
    },
  },
  {
    key: uuidv4(),
    id: "4",
    title: "Hydro boost 30SPF",
    price: 33,
    src: "cleanser/pic-4.png",
    subTitle: {
      1: "Light weight",
      2: "None-greasy feel",
      3: "3 Essential ceramides & niacinamida",
    },
  },
];

export default data;
