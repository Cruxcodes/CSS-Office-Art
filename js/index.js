const goHomeBtn = document.getElementById("go-home");
const personLaptop = document.querySelector(".person__laptop");
const coffee = document.querySelector(".coffee");
const mouth = document.querySelector(".mouth");
const buttonInfo = document.querySelector(".banner h3");
const banner = document.querySelector(".banner");

const audio = new Audio("../assets/home.mp3");
audio.loop = true;

goHomeBtn.addEventListener("click", () => {
  if (goHomeBtn.textContent === "Let me go home") {
    // Move out and play song
    if (personLaptop && coffee && mouth) {
      personLaptop.classList.add("move-out-laptop");
      personLaptop.classList.remove("move-in-laptop");

      coffee.classList.add("move-out-coffee");
      coffee.classList.remove("move-in-coffee");

      mouth.classList.add("sing-mouth");
      //   mouth.classList.remove("move-in-mouth");
    }
    audio.play();
    goHomeBtn.textContent = "Go to work";
    buttonInfo.textContent = "Yay no more work but I'm still here";
  } else {
    // Move in and stop song
    if (personLaptop) {
      personLaptop.classList.remove("move-out-laptop");
      personLaptop.classList.add("move-in-laptop");

      coffee.classList.remove("move-out-coffee");
      coffee.classList.add("move-in-coffee");

      mouth.classList.remove("sing-mouth");
    }
    audio.pause();
    audio.currentTime = 0;
    goHomeBtn.textContent = "Let me go home";
    buttonInfo.textContent = "Sometimes life if just work and worke";
  }
});
