// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Sections
const question = document.querySelector(".question");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");

// ❌ NO button bhagta rahe
function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 60 - 30;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop + Mobile
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

// ✅ YES click logic
yesBtn.addEventListener("click", () => {
  // Question hide
  question.classList.remove("active");

  // Loading show (heart animation yahin chalegi)
  loading.classList.add("active");

  // Animation complete hone ke baad result
  setTimeout(() => {
    loading.classList.remove("active");
    result.classList.add("active");
  }, 2000); // ⏱ same as CSS animation duration
});
