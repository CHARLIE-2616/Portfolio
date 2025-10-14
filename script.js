const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  navbar.classList.add("active");
  hamburger.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  hamburger.style.display = "flex"; 
});
