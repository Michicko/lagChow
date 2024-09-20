import ElementClass from "./elementClass";

export const createImageBox = (src, alt, classListString) => {
  const image = new ElementClass("img")
    .addProps(src, alt)
    .addClassList(classListString)
    .getElement();
  const imageBox = new ElementClass("div")
    .addClassList("img-box")
    .appendChildren([image])
    .getElement();
  return imageBox;
};

export const createElement = (elObj) => {
  let element = new ElementClass(elObj.element);

  if (elObj.text) {
    element = element.addTextContent(elObj.text);
  }

  if (elObj.classList) {
    element = element.addClassList(elObj.classList);
  }

  return element.getElement();
};

export const createFeature = (feature) => {
  const featureTemplateObj = {
    classList: "feature",
    children: [
      {
        element: "span",
        text: "",
        classList: feature.icon,
      },
      {
        element: "h3",
        text: feature.title,
        classList: "",
      },
      {
        element: "p",
        text: feature.text,
      },
    ],
  };

  let featureTemplateObjChildren = featureTemplateObj.children;

  if (!feature.text) {
    featureTemplateObjChildren = featureTemplateObjChildren.splice(0, 2);
  }

  const featureTemplateChildren = featureTemplateObjChildren.map((el) => {
    let newEl = createElement(el);
    return newEl;
  });

  const featureElement = new ElementClass("div")
    .addClassList(featureTemplateObj.classList)
    .appendChildren([...featureTemplateChildren])
    .getElement();

  return featureElement;
};

export const createTextBox = (textBoxTree) => {
  const children = textBoxTree.children.map((el) => {
    let elChildren;

    if (el.children) {
      elChildren = el.children.map((elChild) => {
        return createElement(elChild);
      });
    }

    let newEl = new ElementClass(el.element).addTextContent(el.text);

    if (elChildren) {
      newEl = newEl.appendChildren([...elChildren]);
    }

    if (el.classList) {
      newEl = newEl.addClassList(el.classList);
    }

    newEl = newEl.getElement();
    return newEl;
  });

  const textBox = new ElementClass("div")
    .appendChildren([...children])
    .addClassList(textBoxTree.classList)
    .getElement();

  return textBox;
};

export const createSection = (
  sectionClassList,
  textBoxTree,
  sectionImage,
  sectionImageAlt,
  sectionImageClassList
) => {
  const section = new ElementClass("section")
    .addClassList(sectionClassList)
    .appendChildren([
      createTextBox(textBoxTree),
      createImageBox(sectionImage, sectionImageAlt, sectionImageClassList),
    ])
    .getElement();

  return section;
};
