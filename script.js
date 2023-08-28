//Bubbles

function bubbleMaker() {
    var clutter = '';//This is a empty string,if you did not mention this then on the screen 'undefined' will show up.
    for (var i = 1; i <= (216); i++) {
        var random = Math.floor(Math.random() * 10);
        clutter = clutter + `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#panel-bottom").innerHTML = clutter;
}
bubbleMaker();
// Clock

function clock() {
    var timer = 60;
    var timerVal = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector(".clock").textContent = timer;
        } else {
            clearInterval(timerVal);
            document.querySelector("#panel-bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}
clock();

//Hit
var hit
function getNewHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector(".hitVal").textContent = hit;
}
getNewHit();

//Score
var score = 0
function getScore() {
    score += 10;
    document.querySelector(".score").textContent = score;
}

// Event Bubbling

//Jispe Click karoge wo element par event raise hoga, aur event listener na milne par event element ke parent par listener dhundega uha bhi na milne par event parent ke parent ke parent par listener dhundega.

document.querySelector("#panel-bottom").addEventListener("click", (dets) => {
    var dets1 = (Number((dets.target).innerHTML));
    if (hit === dets1) {
        getScore();
        bubbleMaker();
        getNewHit();
    }
});
