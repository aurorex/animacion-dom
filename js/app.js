var box = document.querySelectorAll('.box')
var position = 0;
box[0].style.background = 'red';

document.addEventListener('keyup',paint);
function paint(event){

    var door= true;

    if(door == true &&  position === 0 && event.which === 39 ){
      box[0].style.background = 'white';
      box[1].style.background = 'red';
      position = 1;
      door = false;
    };
    if(door == true && position === 0 && event.which === 40 ){
      box[0].style.background = 'white';
      box[3].style.background = 'red';
      position = 3;
      door = false;
    };
    if(door == true && position === 1 && event.which === 37 ){
      box[1].style.background = 'white';
      box[0].style.background = 'red';
      position = 0;
      door = false;
    };
    if(door == true && position === 1 && event.which === 39 ){
      box[1].style.background = 'white';
      box[2].style.background = 'red';
      position = 2;
      door = false;
    };
    if(door == true && position === 1 && event.which === 40 ){
      box[1].style.background = 'white';
      box[4].style.background = 'red';
      position = 4;
      door = false;
    };
    if(door == true && position === 2 && event.which === 37 ){
      box[2].style.background = 'white';
      box[1].style.background = 'red';
      position = 1;
      door= false;
    };
    if(door == true && position === 2 && event.which === 40 ){
      box[2].style.background = 'white';
      box[5].style.background = 'red';
      position = 5;
      door = false;
    };
    if(door == true && position === 3 && event.which === 38 ){
      box[3].style.background = 'white';
      box[0].style.background = 'red';
      position = 0;
      door = false;
    };
    if(door == true && position === 3 && event.which === 39 ){
      box[3].style.background = 'white';
      box[4].style.background = 'red';
      position = 4;
      door = false;
    };
    if(door == true && position === 3 && event.which === 40 ){
      box[3].style.background = 'white';
      box[6].style.background = 'red';
      position = 6;
      door = false;
    };
    if(door == true && position === 4 && event.which === 37 ){
      box[4].style.background = 'white';
      box[3].style.background = 'red';
      position = 3;
      door = false;
    };
    if(door == true && position === 4 && event.which === 38 ){
      box[4].style.background = 'white';
      box[1].style.background = 'red';
      position = 1;
      door = false;
    };
    if(door == true && position === 4 && event.which === 39 ){
      box[4].style.background = 'white';
      box[5].style.background = 'red';
      position = 5;
      door = false;
    };
    if(door == true && position === 4 && event.which === 40 ){
      box[4].style.background = 'white';
      box[7].style.background = 'red';
      position = 7;
      door = false;
    };
    if(door == true && position === 5 && event.which === 37 ){
      box[5].style.background = 'white';
      box[4].style.background = 'red';
      position = 4;
      door = false;
    };
    if(door == true && position === 5 && event.which === 38 ){
      box[5].style.background = 'white';
      box[2].style.background = 'red';
      position = 2;
      door = false;
    };
    if(door == true && position === 5 && event.which === 40 ){
      box[5].style.background = 'white';
      box[8].style.background = 'red';
      position = 8;
      door = false;
    };
    if(door == true && position === 6 && event.which === 38 ){
      box[6].style.background = 'white';
      box[3].style.background = 'red';
      position = 3;
      door = false;
    };
    if(door == true && position === 6 && event.which === 39 ){
      box[6].style.background = 'white';
      box[7].style.background = 'red';
      position = 7;
      door = false;
    };
    if(door == true && position === 7 && event.which === 37 ){
      box[7].style.background = 'white';
      box[6].style.background = 'red';
      position = 6;
      door = false;
    };
    if(door == true && position === 7 && event.which === 38 ){
      box[7].style.background = 'white';
      box[4].style.background = 'red';
      position = 4;
      door = false;
    };
    if(door == true && position === 7 && event.which === 39 ){
      box[7].style.background = 'white';
      box[8].style.background = 'red';
      position = 8;
      door = false;
    };
    if(door == true && position === 8 && event.which === 37 ){
      box[8].style.background = 'white';
      box[7].style.background = 'red';
      position = 7;
      door = false;
    };
    if(door == true && position === 8 && event.which === 38 ){
      box[8].style.background = 'white';
      box[5].style.background = 'red';
      position = 5;
      door = false;
    };

};
