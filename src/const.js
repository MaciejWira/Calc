import dom from './dom.js';

let num = dom._qAll(".button--number"),
    op = dom._qAll(".button--operation"),
    numA = [],
    opA = [];

for (let i = 0; i < num.length; i++){
  numA.push(num[i]);
}

for (let i = 0; i < op.length; i++){
  opA.push(op[i]);
}

const cons =  {
  history: dom._id("screen-history"),
  out: dom._id("screen-output"),
  operator: dom._id("screen-operator"),
  in: dom._id("screen-input"),
  num: numA,
  op: opA,
  res: dom._id("result"),
  pre: dom._id("preloader"),
  alert: dom._id("alert-box")
}

export default cons;
