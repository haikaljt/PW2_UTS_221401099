var audio = document.getElementById('audio');

    function playSong(song) {
      audio.src = song;
      audio.play();
    }