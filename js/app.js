window.onload = function() {
  var divElement = document.querySelector(".container");
  var divChilds = divElement.children;

  divChilds.addEventListener('mouseup',addX);

  function addX(event) {
    event.target.style.backgroundColor = 'yellow';
  }

}
