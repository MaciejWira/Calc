
  const addClass = (element, addedClass) => {
    const updated = element.getAttribute("class") + " " + addedClass;
    element.setAttribute("class", updated);
  };

  const removeClass = (element, removedClass) => {
    const updated = element.getAttribute("class")
                      .replace(removedClass, "")
                      .replace("  ", " ");
    element.setAttribute("class", updated);
  };

export default {addClass, removeClass};
