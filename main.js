function playSound(event) {
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
        key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.add('playing'); //add class with animation
    audio.play();
    audio.currentTime = 0;//rewind to the start
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
