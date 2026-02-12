const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const year = document.getElementById("year");
const sendBtn = document.getElementById("sendBtn");
const hint = document.getElementById("hint");

year.textContent = new Date().getFullYear();

burger?.addEventListener("click", () => {
  menu.classList.toggle("open");
});

sendBtn?.addEventListener("click", () => {
  hint.textContent = "Message saved (demo). You can connect this form later to a real email service.";
});
