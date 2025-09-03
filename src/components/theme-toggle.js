const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
root.setAttribute("data-theme", "dark");
toggleBtn.textContent = "☀";
}

toggleBtn.addEventListener("click", () => {
const isDark = root.getAttribute("data-theme") === "dark";
if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☾";
} else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀";
}
});