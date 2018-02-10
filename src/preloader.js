import cons from './const.js';
import classToggle from './classToggle.js';

const preloader = () => {
  window.onload = () => {
    setTimeout(function(){
      classToggle.addClass(cons.pre, "fade-out")
    },1000)
  };
};

export default preloader;
