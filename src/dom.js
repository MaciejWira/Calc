const dom = {
  _id: (id) => document.getElementById(id),
  _q: (el) => document.querySelector(el),
  _qAll: (el) => document.querySelectorAll(el)
}

export default dom;
