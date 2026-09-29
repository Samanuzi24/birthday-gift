"use strict";


/* ================================
   ELEMENTS
================================ */

const giftBox =
    document.getElementById("giftBox");

const giftHint =
    document.getElementById("giftHint");

const giftMessage =
    document.getElementById("giftMessage");

const continueButton =
    document.getElementById("continueButton");


/* ================================
   OPEN GIFT
================================ */

function openGift() {

    // جلوگیری از اجرای دوباره
    if (giftBox.classList.contains("opened")) {
        return;
    }

    // باز شدن کادو
    giftBox.classList.add("opened");
	
	// شروع آهنگ
    playBirthdayMusic();

    // تغییر متن راهنما
    giftHint.textContent =
        "یه لحظه... ❤️";

    // نمایش پیام
    setTimeout(() => {

        giftMessage.classList.add("show");

        giftMessage.setAttribute(
            "aria-hidden",
            "false"
        );

    }, 800);
}


/* ================================
   CLICK
================================ */

giftBox.addEventListener(
    "click",
    openGift
);


/* ================================
   KEYBOARD
================================ */

giftBox.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openGift();
        }

    }
);


/* ================================
   CONTINUE
================================ */

continueButton.addEventListener(
    "click",
    () => {

        if (
            typeof birthdayMusic !== "undefined" &&
            !birthdayMusic.paused
        ) {
            sessionStorage.setItem(
                "musicTime",
                birthdayMusic.currentTime
            );
        }

        window.location.href =
            "letter.html";

    }
);