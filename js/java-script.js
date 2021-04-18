


var number_plus = document.getElementById("plus"),
  number_minus = document.getElementById("minus");


number_plus.onclick = function () {
  "use strict"
  var my_number = document.getElementById("my_number"),
    plus = parseInt(my_number.innerHTML) + 1;
    my_number.innerHTML = plus;

    if( plus >= 0){
      my_number.style.color = "#fff"
    }
}

number_minus.onclick = function () {
  var my_number = document.getElementById("my_number"),
    minus = parseInt(my_number.innerHTML) - 1;
    my_number.innerHTML = minus;

  if( minus < 0){
    my_number.style.color = "#F51A37"
  }
 
 
}