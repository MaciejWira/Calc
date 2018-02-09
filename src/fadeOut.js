function fadeOut(element){
  element.style.opacity = 0;
  setTimeout(function(){
    element.style.display = "none";
  },1000)
};

export default fadeOut;
