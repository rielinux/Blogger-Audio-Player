const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');

playBtn.addEventListener('click', () => {
    if(audio.paused){
        audio.play();
        playBtn.textContent = '⏸ Pause';
    }else{
        audio.pause();
        playBtn.textContent = '▶ Play';
    }
});

audio.addEventListener('timeupdate', () => {
    const value = (audio.currentTime / audio.duration) * 100;
    progress.value = value;
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
