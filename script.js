console.log("Welcome to Beats");

let songIndex = 0;
let audioElement = new Audio('song/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : "Trap-1", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName : "Trap-2", filePath: "song/2.mp3", coverPath:"cover/2.jpg"},
    {songName : "Trap-3", filePath: "song/3.mp3", coverPath:"cover/3.jpg"},
    {songName : "Trap-4", filePath: "song/4.mp3", coverPath:"cover/4.jpg"},
    {songName : "Trap-5", filePath: "song/5.mp3", coverPath:"cover/5.jpg"},
    {songName : "Trap-6", filePath: "song/6.mp3", coverPath:"cover/6.jpg"},
    {songName : "Trap-7", filePath: "song/7.mp3", coverPath:"cover/7.jpg"},

]

songItems.forEach((element, i)=>
{
    element.getElementByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItem.play')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = "songs/${songIndex+1}.mp3";
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = "songs/${songIndex+1}.mp3";
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src = "songs/${songIndex+1}.mp3";
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
})