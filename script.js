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

const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/xkgqkjdp', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      statusMessage.textContent = "Message sent successfully!";
      statusMessage.style.color = "#00fffb";
      statusMessage.style.fontSize = "18px";
      form.reset();
    } else {
      statusMessage.textContent = "Oops! Something went wrong.";
      statusMessage.style.color = "#ff4d4d";
    }
  } catch (error) {
    statusMessage.textContent = "Error sending message!";
    statusMessage.style.color = "#ff4d4d";
  }
});