var audio_files = [
"audio/1999/1.mp3",
"audio/1999/2.mp3",
"audio/1999/3.mp3"
]

function random_file(){
  return audio_files[Math.floor(Math.random() * audio_files.length)];
}

var audio = new Audio( random_file() );

audio.play();

audio.addEventListener('ended', function(){
  audio.play( random_file() );
})
