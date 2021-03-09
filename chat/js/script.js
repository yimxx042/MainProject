$('#send').on('click',textSent);

function textSent(){
    var newMessage = $('#new-message').val();
    if (newMessage != ''){
    $('.chatbox').append('<div class="my-bubble bubble">' + newMessage + ' </div>')
    $('#new-message').val('');
    }
}


$(document).on('keydown', keyboardInput);
function keyboardInput(e) {
    if (e['key'] === 'Enter') {
        textSent();
    }
  }