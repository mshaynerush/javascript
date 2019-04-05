if ( document.readyState == 'loading' ) {
    document.addEventListener('DOMContentLoaded', ready)
}

function ready(){
var alertBtn = document.getElementByID('alertOne');
    alertBtn.addEventListener('click', doAlert);
}
function doAlert(){
alert('This is dope');
}
