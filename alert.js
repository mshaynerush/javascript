if ( document.readyState == 'loading' ) {
    window.addEventListener('DOMContentLoaded', ready)
}

function ready(){
var alertBtn = document.getElementById('alertOne');
    alertBtn.addEventListener('click', doAlert);
}
function doAlert(){
alert('This is dope');
}
