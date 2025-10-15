document.getElementById("passwordForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const website = document.getElementById("website").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("PasswordServlet", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `website=${website}&username=${username}&password=${password}`
  })
  .then(() => loadPasswords());
});

function loadPasswords() {
  fetch("PasswordServlet")
    .then(response => response.text())
    .then(data => {
      document.getElementById("passwordList").innerHTML = data;
    });
}

loadPasswords();
