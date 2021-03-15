$('#btn1').on('click', blueDown);

function blueDown(){
  $('.blue').addClass('down')
  setTimeout(reset, 1000);
}

  
$('#btn2').on('click', whiteDown);

function whiteDown(){
  $('.white').addClass('down')
  setTimeout(reset, 1000);
}


$('#btn3').on('click', bluedotDown);

function bluedotDown(){
  $('.blue.dot').addClass('down')
  setTimeout(reset, 1000);
}

function reset() {
  $('.flag').removeClass('down');
}