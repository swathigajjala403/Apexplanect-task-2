document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you! Your message has been submitted.");
  document.getElementById("contactForm").reset();
});
