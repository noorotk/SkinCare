import { v4 as uuidv4 } from "uuid";

const SerumData = [
  {
    key: uuidv4(),
    id: "1",
    title: "Cerave Resurfacing Retinol Serum",
    src: "serum/pic-1.png",
    subTitle: {
      1: "With 3 essential ceramides and niacinamide",
    },
  },
  {
    key: uuidv4(),
    id: "2",
    title: "the ordinary ",
    src: "serum/pic-2.png",
    price: 33,

    subTitle: {
      1: "Resveratrol 3%",
      2: "ferulic Acid 3%",
      3: "water-free high-potency",
    },
  },
  {
    key: uuidv4(),
    id: "3",
    title: "Laroch posay hyalu serum",
    price: 33,

    src: "serum/pic-3.png",
    subTitle: {
      1: "hyaluronic acid",
      2: "vitamin B5",
    },
  },
  {
    key: uuidv4(),
    id: "4",
    title: "Cerave Foaming Cleanser",
    price: 33,
    src: "serum/pic-4.png",
    subTitle: {
      1: "Light weight",
      2: "None-greasy feel",
      3: "3 Essential ceramides & niacinamida",
    },
  },
];

export default SerumData;
