let credits = 500000;

const creditText = document.querySelector("p");
const yesBtn = document.getElementById("yesButton");
const noBtn = document.getElementById("nopeButton");
const escapeBtn = document.getElementById("escapeButton");

function updateCredits() {
    if (credits <= 0) {
        creditText.textContent = "you got arested";
    } else {
        creditText.textContent = credits;
    }
}

yesBtn.addEventListener("click", () => {
    credits += 30;
    updateCredits();
});

noBtn.addEventListener("click", () => {
    credits -= 100000;
    updateCredits();
});

escapeBtn.addEventListener("click", () => {
    if (credits <= 0) {
        creditText.textContent = "you got arested!";
        return;
    }

    let chance = Math.random(); // 0 a 1

    if (chance < 0.5) {

        document.body.innerHTML = "";
        document.body.style.background = "white";
        document.body.style.color = "black";
        document.body.style.textAlign = "center";

        const msg = document.createElement("h1");
        msg.textContent = "You escaped!";
        msg.style.marginTop = "200px";
        msg.style.fontSize = "60px";

        document.body.appendChild(msg);

    } else {
        creditText.textContent = "You got arested!";
        credits = 0;
    }
});