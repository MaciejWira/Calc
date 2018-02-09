import cons from './const.js';

const toFixed = () => {
  if (cons.out.innerHTML.length >= 8){
    cons.out.innerHTML = Number(cons.out.innerHTML).toFixed(11);
  }
};

export default toFixed;
