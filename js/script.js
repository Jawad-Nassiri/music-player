let audioElement = document.querySelector('audio');


let audiosSrc = [
    'media/bazar.m4a',
    'media/html.m4a',
    'media/kar.m4a'
];
let audioIndex = 0;


function previousMusicHandler(){
    audioIndex--;

    if (audioIndex < 0) {
        audioIndex = 2;
    }

    audioElement.setAttribute('src', audiosSrc[audioIndex]);
    playHandler();

}
function nextMusicHandler(){
    audioIndex++;

    if (audioIndex > audiosSrc.length - 1) {
        audioIndex = 0
    }

    audioElement.setAttribute('src', audiosSrc[audioIndex]);
    playHandler();
}


function playHandler(){
    audioElement.play();

    setInterval(function(){
        console.log(Math.floor(audioElement.currentTime));
    }, 1000)
}

function pauseHandler(){
    audioElement.pause();
}

function speedMusicHandler(){
    audioElement.playbackRate = 2;
}

function timePlusMusicHandler(){
    audioElement.currentTime += 5;
}

function timeMinusMusicHandler(){
    audioElement.currentTime -= 5;
}



