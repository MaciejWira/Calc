import dom from './dom.js';
import cons from './const.js';
import action from './action.js';
import toFixed from './toFixed.js';
import showAlert from './showAlert.js';

const output = () => {

  let switcher = false,
      zeroDivide = false,
      result = 0,
      waitingOperator = "",
      actualOperator = "",
      historyClear = false;

  function drawInput(){
    zeroDivide = false;
    if (historyClear) cons.out.innerHTML = "0";
    clearHistory();
    if (cons.in.innerHTML == "0" ) cons.in.innerHTML = this.value;
    else cons.in.innerHTML += this.value;
    switcher = false;
  }

  function drawOperator(){
    zeroDivide = false;
    clearHistory();
    if (switcher){ // zmiana znaku
      cons.operator.innerHTML = this.value;
    } else {
      doMath();
      if (!zeroDivide){
        drawCalc();
        cons.operator.innerHTML = this.value;
        if (zeroDivide){
          zeroDivide = false;
          cons.operator.innerHTML = "/";
          }
        };
        switcher = true;
      };
      toFixed();
    }

  function doMath(){
    let operator = cons.operator.innerHTML;
    if (operator == "") result = cons.in.innerHTML;
    else if (operator == "/" && cons.in.innerHTML == "0"){
      showAlert();
      zeroDivide = true;
    } else {
        result = waitingAction(Number(cons.out.innerHTML), Number(cons.in.innerHTML));
    };
  }

  function drawCalc(){
    drawHistory();
    cons.in.innerHTML = "0";
    cons.out.innerHTML = result;
  };

  function drawHistory(){
    if (zeroDivide){
      zeroDivide = false;
    };
    if (!switcher){
      if (cons.history.innerHTML == "0") cons.history.innerHTML = result;
      else cons.history.innerHTML += " " + cons.operator.innerHTML + " " + cons.in.innerHTML;
    };
    if (historyClear) cons.history.innerHTML += " =";
  }

  const showResult = () => {
    if (!historyClear){
      doMath();
      if (!zeroDivide){
        historyClear = true;
        drawHistory();
        cons.in.innerHTML = "0";
        cons.operator.innerHTML = "";
        cons.out.innerHTML = result;
      } else {
        zeroDivide = false;
        switcher = true;
      }
    };
    toFixed();
  };

  const clearHistory = () => {
    if (historyClear){
      historyClear = false;
      cons.history.innerHTML = cons.out.innerHTML;
      switcher = true;
    };
  };

  // wprowadzanie liczb

    cons.num.forEach((number) => {
      number.addEventListener("click", drawInput);
    });

  // wprowadzanie operatora

    cons.op.forEach((operation) => {
      operation.addEventListener("click", drawOperator);
    });

// obliczenia w tle

  const waitingAction = (a,b) => {
    if (cons.operator.innerHTML == "+") return action.add(a,b);
    if (cons.operator.innerHTML == "-") return action.subtract(a,b);
    if (cons.operator.innerHTML == "x") return action.multiply(a,b);
    if (cons.operator.innerHTML == "/") return action.divide(a,b);
  };

// znak =

  cons.res.addEventListener("click", showResult);

// resetowanie kalkulatora

  dom._id("clear").addEventListener("click",function(){
    cons.in.innerHTML = "0";
    switcher = true;
    zeroDivide = true;
  });

  dom._id("reset").addEventListener("click",function(){
    clearHistory();
    cons.in.innerHTML = "0";
    cons.out.innerHTML = "0";
    cons.history.innerHTML = "0";
    cons.operator.innerHTML = "";
    result = 0;
    switcher = true;
    zeroDivide = true;
  });

};

export default output;
