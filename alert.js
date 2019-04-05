if ( document.readyState == 'loading' ) {
    addEventListener('DOMContentLoaded', ready)
}

function ready(){
var alertBtn = document.getElementsByClassName('alert-button')[0];
    alertBtn.addEventListener('click', doAlert);
}
function doAlert(){
alert('This is dope');
}
