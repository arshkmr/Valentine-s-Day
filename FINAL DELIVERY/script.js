document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // remove active
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // activate tab
      tab.classList.add("active");
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });
});


const termsLink = document.querySelector(".terms-link");
const overlay = document.getElementById("termsOverlay");
const closeBtn = document.querySelector(".close-btn");

termsLink.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});

// =========active tab schedule demo=============

document.addEventListener("DOMContentLoaded", function () {

  const setupBtn = document.getElementById("setupMeetingBtn");
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");
  const meetingTabBtn = document.querySelector('.tab[data-tab="meeting"]');
  const meetingSection = document.getElementById("meeting");

  if (!setupBtn || !meetingTabBtn || !meetingSection) return;

  setupBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // 1️⃣ Deactivate all tabs & contents
    tabs.forEach(tab => tab.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // 2️⃣ Activate Schedule Meeting tab
    meetingTabBtn.classList.add("active");
    meetingSection.classList.add("active");

    // 3️⃣ Smooth scroll to tabs container
    document.querySelector(".tabs").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

});