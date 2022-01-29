const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');


const handlePlay = ()=>{
    $video.play();

    $play.hidden = true;
    $pause.hidden = false;
}

const handlePause = ()=>{
    $video.pause();

    $play.hidden = false;
    $pause.hidden = true;
}

const handleBackward = ()=>{
    console.log('back', $video.currentTime);
    $video.currentTime -= 10;
}

const handleForward = ()=>{
    console.log('for', $video.currentTime);
    $video.currentTime += 10;
}

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
