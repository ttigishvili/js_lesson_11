
let passwordInput = document.getElementById("showpassword");
let toggleIconShow = document.getElementById("toggleIcon");

toggleIconShow.addEventListener("click", () => {
  if (passwordInput.type == "password") {
    passwordInput.setAttribute("type", "text");
    toggleIconShow.classList.add("fa-eye-slash");
  } else {
    toggleIconShow.classList.remove("fa-eye-slash");
    passwordInput.setAttribute("type", "password");
  }
});






