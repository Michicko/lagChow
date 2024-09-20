import ElementClass from "./elementClass";
import section1Image from "./images/dapur-melodi-cuisine.jpg";
import section3Image from "./images/allan-carvalho-restaurant.jpg";
import { createElement, createFeature, createSection } from "./utils";

const section1TextBoxTree = {
  classList: "",
  children: [
    {
      element: "h1",
      text: "",
      classList: "",
      children: [
        {
          element: "span",
          text: "You have to try",
          classList: "",
        },
        {
          element: "span",
          text: "us!",
          classList: "",
        },
      ],
    },
    {
      element: "p",
      text: "We invite you to our restaurant",
      classList: "lead",
    },
  ],
};

const createSection2 = () => {
  const section2Tree = {
    classList: "gray-bg center",
    children: [
      {
        element: "span",
        text: "WE COOK FOR YOU EVERY DAY",
        classList: "section-lead",
      },
      {
        element: "h2",
        text: "Cooking is our greatest passion, and we prove it every day",
        classList: "",
      },
      {
        element: "p",
        text: "We love surprising our guests, so every day we serve new dishes inspired by recipes from many countries. Our restaurant combines Polish cuisine with Mexican, Italian or French specialties. See what we have prepared for you today!",
        classList: "",
      },
      {
        element: "button",
        text: "Order online",
        classList: "btn btn-outline",
      },
    ],
  };

  const section2Children = section2Tree.children.map((el) => {
    return createElement(el);
  });

  const section2ContentBox = new ElementClass("div")
    .addClassList("content-box")
    .appendChildren([...section2Children])
    .getElement();

  const section2 = new ElementClass("section")
    .addClassList(section2Tree.classList)
    .appendChildren([section2ContentBox])
    .getElement();

  return section2;
};

const features = [
  {
    title: "Your place in the city",
    text: "",
    icon: "mdi mdi-cards-heart-outline feature-icon",
  },
  {
    title: "The highest standards of service",
    text: "",
    icon: "mdi mdi-shower feature-icon",
  },
  {
    title: "Aromatic coffee and chef's dishes",
    text: "",
    icon: "mdi mdi-coffee-maker feature-icon",
  },
  {
    title: "Unique decor and atmosphere",
    text: "",
    icon: "mdi mdi-pine-tree feature-icon",
  },
];

const featuresElements = features.map((feature) => {
  return createFeature(feature);
});

const section3TextBoxTree = {
  classList: "box-flex",
  children: [
    {
      element: "span",
      text: "WE FOCUS ON NEW TASTE SENSATIONS AND A PLEASANT ATMOSPHERE",
      classList: "section-lead",
    },
    {
      element: "h2",
      text: "",
      classList: "",
      children: [
        {
          element: "span",
          text: "We guarantee delicious",
          classList: "",
        },
        {
          element: "span",
          text: "food and a unique",
          classList: "",
        },
        {
          element: "span",
          text: "atmosphere",
          classList: "",
        },
      ],
    },
    {
      element: "p",
      text: "In our restaurant, you will sit comfortably in an armchair and relax after a hard day. In addition to the original and unique cuisine, smiling staff and a great atmosphere await you.",
      classList: "",
    },
    {
      element: "button",
      text: "Order now",
      classList: "btn btn-outline",
    },
  ],
};

const createSection4 = () => {
  const section4Tree = {
    classList: "",
    children: [
      {
        element: "div",
        text: "",
        classList: "review-box",
        children: [
          {
            element: "blockquote",
            text: '"It is really a wonderful place. They serve aromatic and stunning food for every palate. The restaurant is elegant, and the service is charming. The dishes are invented by the Chef on a daily basis. Once you try his dishes, you won\'t want to eat them elsewhere Also, the prices are not too high. I can honestly recommend this restaurant."',
            classList: "review",
          },
          {
            element: "h5",
            text: "John Doe",
            classList: "review-author",
          },
        ],
      },
    ],
  };

  const section4Chilren = section4Tree.children.map((el) => {
    let elChildren;
    if (el.children) {
      elChildren = el.children.map((elChild) => {
        return createElement(elChild);
      });
    }
    const newEl = new ElementClass("div")
      .appendChildren([...elChildren])
      .getElement();
    return newEl;
  });

  const section = new ElementClass("section")
    .addClassList("reviews")
    .appendChildren([...section4Chilren])
    .getElement();

  return section;
};

const about = () => {
  const section1 = createSection(
    "grid welcome big-left",
    section1TextBoxTree,
    section1Image,
    "About lagchow",
    "curved-img"
  );

  const featureSection = new ElementClass("section")
    .addClassList("features el-4")
    .appendChildren([...featuresElements])
    .getElement();

  const section3 = createSection(
    "grid welcome big-left grey",
    section3TextBoxTree,
    section3Image,
    "Interior section of our restaurant",
    "curved-img"
  );

  return [
    section1,
    createSection2(),
    featureSection,
    section3,
    createSection4(),
  ];
};

export default about;
