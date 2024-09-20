class ElementClass {
  constructor(element) {
    this.element = document.createElement(element);
  }

  addTextContent(textNode) {
    this.element.textContent = textNode;
    return this;
  }

  addClassList = (classList) => {
    this.element.classList += classList;
    return this;
  };

  appendChildren(children) {
    this.element.append(...children);
    return this;
  }

  addProps(src, alt) {
    this.element.src = src;
    this.element.setAttribute("alt", alt);
    return this;
  }

  getElement() {
    return this.element;
  }
}

export default ElementClass;
