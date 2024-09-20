import section1Image from "./images/polina-tankilevitch-pasta.jpg";
import section2Image from "./images/lum3n-cuisine.jpg";
import section4Image from "./images/william-choquette-cuisine.jpg";
import { createElement, createFeature, createSection } from "./utils";
import ElementClass from "./elementClass";

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
          text: "Welcome to our",
          classList: "",
        },
        {
          element: "span",
          text: "Restaurant",
          classList: "",
        },
      ],
    },
    {
      element: "p",
      text: "New restaurant in Lagos,",
      classList: "lead",
      children: [
        {
          element: "span",
          text: "NG.",
          classList: "",
        },
      ],
    },
  ],
};

const section2TextBoxTree = {
  classList: "box-flex",
  children: [
    {
      element: "span",
      text: "Taste the world's cuisine",
      classList: "section-lead",
    },
    {
      element: "h2",
      text: "It will delight you!",
      classList: "",
    },
    {
      element: "p",
      text: "We are not afraid to experiment. Our Chef combines carefully selected ingredients and serves them on your plate in an out-of-the-ordinary form.",
      classList: "",
    },
    {
      element: "button",
      text: "Order online",
      classList: "btn btn-outline",
    },
  ],
};

const features = [
  {
    title: "Excellent coffee",
    text: "We offer only the finest coffee from the finest beans.",
    icon: "mdi mdi-coffee feature-icon",
  },
  {
    title: "Rest comfortably",
    text: "We offer guest rooms for travelers.",
    icon: "mdi mdi-bed feature-icon",
  },
  {
    title: "Delicious food",
    text: "Original cuisine at will",
    icon: "mdi mdi-food-fork-drink feature-icon",
  },
];

const section4TextBoxTree = {
  classList: "box-flex",
  children: [
    {
      element: "span",
      text: "Original cuisine",
      classList: "section-lead",
    },
    {
      element: "h2",
      text: "Only the best seasonal",
      classList: "",
      children: [
        {
          element: "span",
          text: "Ingredients",
          classList: "",
        },
      ],
    },
    {
      element: "p",
      text: " You are only one step away from a real feast for the eyes and palate. We offer delicious dishes based on the best recipes from around the world. These are unique flavor compositions that will satisfy everyone.",
      classList: "",
    },
    {
      element: "button",
      text: "Order online",
      classList: "btn btn-outline",
    },
  ],
};

const featuresElements = features.map((feature) => {
  return createFeature(feature);
});

const createCaSection = () => {
  const caTree = {
    classList: "",
    children: [
      {
        element: "h4",
        text: "Visit us!",
      },
      {
        element: "p",
        text: "We are waiting for you from Monday to Sunday! You can also place your order online.",
      },
      {
        element: "button",
        text: "Order now",
        classList: "btn btn-light",
      },
    ],
  };

  const caChildren = caTree.children.map((el) => {
    return createElement(el);
  });

  const caSection = new ElementClass("section")
    .addClassList("ca")
    .appendChildren([...caChildren])
    .getElement();

  return caSection;
};

const homepage = function () {
  const section1 = createSection(
    "grid welcome big-left",
    section1TextBoxTree,
    section1Image,
    "welcome image of pasta",
    "curved-img"
  );

  const section2 = createSection(
    "grid big-right grey",
    section2TextBoxTree,
    section2Image,
    "our cuisine",
    "curved-img",
    "curved-img"
  );

  const featureSection = new ElementClass("section")
    .addClassList("features")
    .appendChildren([...featuresElements])
    .getElement();

  const section4 = createSection(
    "grid big-left grey",
    section4TextBoxTree,
    section4Image,
    "our cuisine",
    "curved-img",
    "curved-img"
  );

  const sectionCa = createCaSection();

  return [section1, section2, featureSection, section4, sectionCa];
};

export default homepage;
