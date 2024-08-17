const click = document.querySelector(".click");
const giftBox = document.querySelector(".gift-box");
const shadow = document.querySelector(".shadow");
const giftContainer = document.querySelector(".gift-container");
const text = document.querySelector(".text");
const birthdayMusic = document.getElementById("birthdayMusic");
const coFFeti = document.getElementById("birthdayBallon");

click.addEventListener("click", () => {
  if (click.className === "click") {
    click.classList.add("active");
    giftBox.classList.add("active");
    shadow.classList.add("active");
    giftContainer.classList.add("active");
    text.classList.add("active");
    text.classList.remove("active2");
    birthdayMusic.play(); // Pause the audio if it's playing
    coFFeti.classList.remove("d-none");

    birthdayMusic.play(); // Play the audio if it's paused
  } else {
    click.classList.remove("active");
    giftBox.classList.remove("active");
    shadow.classList.remove("active");
    giftContainer.classList.remove("active");
    text.classList.remove("active");
    text.classList.add("activ2");
    birthdayMusic.pause(); // Pause the audio if it's playing
    coFFeti.classList.add("d-none");
    birthdayMusic.currentTime = 0; // Optionally, reset the audio to the beginning
  }
});
