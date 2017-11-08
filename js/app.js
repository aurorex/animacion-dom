window.onload = function() {
 var box = document.getElementsByClassName('box');

 box.addEventListener('mouseover',addX);

 function addX(event) {
   event.target.style.backgroundColor = 'yellow';
 }

 
}
