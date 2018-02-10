import cons from './const.js';
import dom from './dom.js';
import classToggle from './classToggle.js';

const showAlert = () => {
  classToggle.addClass(cons.alert, "fade-in");
  cons.alert.addEventListener("click", function(){
    classToggle.removeClass(cons.alert, "fade-in");
  });

};

export default showAlert;
