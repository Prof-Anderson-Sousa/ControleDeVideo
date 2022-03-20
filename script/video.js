let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 15;
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function avancar() {
    video.currentTime +=15;
}