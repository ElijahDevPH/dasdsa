const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

document.addEventListener("DOMContentLoaded", function () {

    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});

yesBtn.addEventListener("click", function () {
    window.location.href = "index2.html"; 
});

