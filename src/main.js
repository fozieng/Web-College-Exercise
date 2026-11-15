// Shared entry script, loaded by every page: Tailwind styles, theme toggle and responsive menu.
import "./style.css";

// Keep the chosen theme when moving between pages (default: dark, as set on <html>).
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
}

document.addEventListener("DOMContentLoaded", function () {
  const btnTheme = document.getElementById("btnTheme");
  const updateThemeLabel = () => {
    btnTheme.innerText = document.documentElement.classList.contains("dark")
      ? "Light"
      : "Dark";
  };
  updateThemeLabel();

  btnTheme.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
    updateThemeLabel();
  });

  // Small screens: the Menu button opens/closes the popup menu (on lg+ the menu is always visible).
  document.getElementById("btnMenu").addEventListener("click", function () {
    document.getElementById("popUpMenu").classList.toggle("hidden");
  });
});
