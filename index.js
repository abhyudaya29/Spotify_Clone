console.log("Welcome to spotify")
let songindex=0;
let audioelement = new Audio('songs/og.mp3');
// let AudioElement=document.getElementById('audio_element')
let masterplay=document.getElementById('masterplay')
let progressbar=document.getElementById('progressbar')
let gif=document.getElementById("gif")
gif.style.opacity=0
let songitem=Array.from(document.getElementsByClassName('songitem'))
let songs=[
    {songname:"OG",filePath:"songs/1.mp3",coverPath:"covers/og.jpg"},
    {songname:"cheques",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songname:"level",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songname:"kyu mai jagoon",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"}
]


songitem.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 

})

// audio_element.pla
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-circle-play")
        gif.style.opacity=0
    }
});
audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress)
    progressbar.value=progress
})

progressbar.addEventListener('change',()=>{
    audioelement.currentTime =progressbar.value*audioelement.duration/100
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeAllplays()
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-pause-circle')
        audioelement.src=`songs/${songindex+1}.mp3`
        audioelement.currentTime=0;
        audioelement.play()
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-pause-circle")
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=4){
        songindex=0;

    }
    else{
        songindex+=1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`
    audioelement.currentTime=0;
    audioelement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-pause-circle")
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;

    }
    else{
        songindex-=1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`
    audioelement.currentTime=0;
    audioelement.play()
    masterplay.classList.remove("fa-circle-play")
    masterplay.classList.add("fa-pause-circle")
})