const audio = document.querySelector('audio'),
    songLength = document.getElementById('SongLength'),
    currentTime = document.getElementById('CurrentSongTime');

const calculateTime = (secs) =>{
    const minutes = Math.floor(secs / 60),
        seconds = Math.floor(secs % 60),
        returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}}`;

}    

const displayDuration = () =>{
    songLength.innerHTML = calculateTime(audio.duration);
}

if(audio.readyState > 0){
    displayDuration();
    currentTime.innerHTML = calculateTime(audio.currentTime);
}else{
    audio.addEventListener('loadedmetadata', () =>{
        displayDuration();
    })
}

audio.ontimeupdate = function(){
    currentTime.innerHTML = calculateTime(audio.currentTime);
    setProgress();
}

function setProgress(){
    let percentage = (audio.currentTime / audio.duration) *100;
    document.querySelector('.progress').style.width = percentage + '%';
}

//Controles de Audio
const playPause = document.getElementById('PlayPause'),
    plus10 = document.getElementById('Plus10'),
    back10 = document.getElementById('Back10');

playPause.addEventListener('click', ()=>{
    if(audio.paused){
        playPause.src = 'pause2.svg'
        audio.play();
    }else{
        playPause.src = 'play.svg'
        audio.pause();
    }
})    

plus10.addEventListener('click', ()=>{
    audio.currentTime +=10;
})

back10.addEventListener('click', ()=>{
    audio.currentTime -=10;
})


        document.getElementById("downloadButton").addEventListener("click", function() {
            // Crea un enlace <a> para la descarga
            var downloadLink = document.createElement("a");
            downloadLink.href = "/music/NATA 1.mp3"; // Ruta del archivo a descargar
            downloadLink.download = "Mi bello Angel.mp3"; // Nombre del archivo a descargar
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });




