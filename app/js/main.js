"use strict";


/* ================================
   ELEMENTS
================================ */

const openGiftButton =
    document.getElementById("openGiftButton");


/* ================================
   OPEN GIFT
================================ */

openGiftButton.addEventListener("click", () => {

    openGiftButton.disabled = true;

    openGiftButton.querySelector("span:first-child").textContent =
        "در حال باز شدن...";

    setTimeout(() => {

        window.location.href = "gift.html";

    }, 500);

});