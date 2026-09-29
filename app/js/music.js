"use strict";


/* ================================
   MUSIC
================================ */

const birthdayMusic = new Audio(
    "assets/audio/birthday-song.mp3"
);


/* ================================
   SETTINGS
================================ */

birthdayMusic.loop = false;

birthdayMusic.preload = "auto";

birthdayMusic.volume = 0.8;


/* ================================
   PLAY MUSIC
================================ */

function playBirthdayMusic() {

    birthdayMusic.currentTime = 0;

    const playPromise =
        birthdayMusic.play();

    if (playPromise !== undefined) {

        playPromise
            .catch((error) => {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    }
}


/* ================================
   EXPORT
================================ */

window.playBirthdayMusic =
    playBirthdayMusic;