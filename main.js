function playSound(event) {
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
        key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.add('playing');
    audio.play();
    audio.currentTime = 0;
}

window.addEventListener('keydown', playSound);


//CSS
var keys = Array.from(document.querySelectorAll('.key'));

function removeTransition(event) {
    event.target.classList.remove('playing');
}

keys.forEach(function (key) {
    key.addEventListener('transitionend', removeTransition);
});
























////
