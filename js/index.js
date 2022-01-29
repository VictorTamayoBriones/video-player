const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');

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

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
