import section1Image from "./images/sina-gh-pasta.jpg";
import section2Image from "./images/polina-tankilevitch-menu.jpg";
import { createElement, createImageBox, createSection } from "./utils";
import { decode } from "html-entities";
import ElementClass from "./elementClass";

const section1TextBoxTree = {
  classList: "",
  children: [
    {
      element: "h1",
      text: "Our menu",
      classList: "",
    },
    {
      element: "p",
      text: "Check our offer and order online",
      classList: "",
    },
  ],
};

const menuList = [
  {
    item: "Lasagna with Veal and Mushrooms",
    price: 15,
  },
  {
    item: "Bacon Carbonara",
    price: 12,
  },
  {
    item: "Frittata with Beans and Tomatoes",
    price: 17,
  },
  {
    item: "Chicken and Mushroom Fettuccini Pasta",
    price: 21,
  },
  {
    item: "Vitello Tonato",
    price: 14,
  },
  {
    item: "Tortellini with Spinach and Cheese",
    price: 13,
  },
  {
    item: "Spicy Penne Pasta Arabiata",
    price: 11,
  },
  {
    item: "Frittata with Beans and Tomatoes",
    price: 17,
  },
  {
    item: "Chicken and Mushroom Fettuccini Pasta",
    price: 21,
  },
  {
    item: "Vitello Tonato",
    price: 14,
  },
  {
    item: "Tortellini with Spinach and Cheese",
    price: 13,
  },
  {
    item: "Spicy Penne Pasta Arabiata",
    price: 11,
  },
];

const createMenuItem = (menuItem) => {
  const menuItemTree = {
    element: "li",
    classList: "menu-item",
    children: [
      {
        element: "h3",
        text: menuItem.item,
        classList: "",
      },
      {
        element: "p",
        text: `${decode("&euro;")}${menuItem.price}`,
        classList: "",
      },
    ],
  };

  const menuItemChildren = menuItemTree.children.map((el) => {
    return createElement(el);
  });

  const menuItemElement = new ElementClass(menuItemTree.element)
    .addClassList(menuItemTree.classList)
    .appendChildren([...menuItemChildren])
    .getElement();

  return menuItemElement;
};

const createMenuListElements = () => {
  const menuListElementsChildren = menuList.map((el) => {
    return createMenuItem(el);
  });

  const menuListElements = new ElementClass("ul")
    .addClassList("menu-list")
    .appendChildren([...menuListElementsChildren])
    .getElement();

  return menuListElements;
};

const createMenuSection = () => {
  const imgBox = createImageBox(section2Image, "our dish", "full-img");
  
  const moreMenuBtn = new ElementClass("button")
  .addClassList("more-menu-btn")
  .addTextContent("See All Menu").getElement();

  const textBox = new ElementClass("div")
    .appendChildren([createMenuListElements(), moreMenuBtn])
    .getElement();
  const menuSection = new ElementClass("section")
    .addClassList("grid menu")
    .appendChildren([imgBox, textBox])
    .getElement();

  return menuSection;
};

const menu = () => {
  const section1 = createSection(
    "grid welcome big-left",
    section1TextBoxTree,
    section1Image,
    "lagchow menu",
    "curved-img"
  );

  const section2 = createMenuSection();

  return [section1, section2];
};

export default menu;
