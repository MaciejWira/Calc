import cons from './const.js';
import dom from './dom.js';
import fadeOut from './fadeOut.js';

const showAlert = () => {
  cons.alert.style.display = "block";
  setTimeout(function(){
    cons.alert.style.opacity = 1;
  },10)

  cons.alert.addEventListener("click", function(){
    fadeOut(cons.alert);
  });

};

export default showAlert;
