import dom from './dom.js';

let num = dom._qAll(".number"),
    op = dom._qAll(".operation"),
    numA = [],
    opA = [];

for (let i = 0; i < num.length; i++){
  numA.push(num[i]);
}

for (let i = 0; i < op.length; i++){
  opA.push(op[i]);
}

const cons =  {
  history: dom._id("history-output"),
  out: dom._id("main-output"),
  operator: dom._id("operator"),
  in: dom._id("input"),
  num: numA,
  op: opA,
  res: dom._id("result"),
  pre: dom._id("preloader"),
  alert: dom._id("alert-box")
}

export default cons;
