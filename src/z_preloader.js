import cons from './const.js';
import fadeOut from './fadeOut.js';

const preloader = () => {

  window.onload = () => {
    setTimeout(function(){
      fadeOut(cons.pre)
    },500)
  };
};

export default preloader;
