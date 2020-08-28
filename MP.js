const songTitle = document.querySelector('.song-title');
const thumbnail = document.querySelector('#thumbnail');
const bg = document.querySelector("#bg");
const pp = document.querySelector("#pp");
const progressBar = document.querySelector("#progressBar");
const song = document.querySelector("#song");
var playing = true;
var songs = ['badguy.mp3','playdate.mp3','memories.mp3'], songIndex=0;
(thumbnails = ['badguyimg.jpg','download.jpg','memories.jpg']),
(names = ['Badguy - Billie Eilish','Play Date - Melanie Martinez','Memories - Maroon 5']);

function playPause() {
   if(playing) {

    const song = document.querySelector("#song"),
     pp = document.querySelector("#pp"),
     thumbnail = document.querySelector('#thumbnail');
    pp.src='pause.png';
    song.play(); //plays the song
    playing=false;
    thumbnail.style.width = "160%";
   }

   else{
    pp.src="play.png";
    song.pause(); //pauses the song
    playing=true;
    thumbnail.style.width = "130%";
    
   }
}

function nextSong() {
    songIndex++;
    if(songIndex > songs.length-1) songIndex=0;
    document.querySelector("#song").src =songs[songIndex];
    document.querySelector('#thumbnail').src = thumbnails[songIndex];
    document.querySelector("#bg").src = thumbnails[songIndex];
    playPause();
    document.querySelector(".song-title").innerHTML = names[songIndex];
    
}

function prevSong() {
    songIndex--;
    if(songIndex < 0) songIndex=songs.length-1;
    document.querySelector("#song").src = songs[songIndex];
    document.querySelector('#thumbnail').src = thumbnails[songIndex];
    document.querySelector("#bg").src = thumbnails[songIndex];
     playPause();
     document.querySelector(".song-title").innerHTML = names[songIndex];

}

function updateProgressValue() {
    const progressBar = document.querySelector("#progressBar");
    progressBar.max = document.querySelector("#song").duration;
    progressBar.value = document.querySelector("#song").currentTime;
}

setInterval(updateProgressValue, 700);

