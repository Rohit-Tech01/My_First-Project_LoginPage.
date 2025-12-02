const input = document.getElementById("password");
const toggle = document.getElementById("toggle-password");

toggle.addEventListener("click", function () {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    toggle.classList.toggle("ri-eye-fill");
    toggle.classList.toggle("ri-eye-off-fill");
});