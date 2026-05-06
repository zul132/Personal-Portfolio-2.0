document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButtons = document.querySelectorAll(".theme-toggle-btn");
  const themeIcons = document.querySelectorAll(".theme-icon");

  const setThemeIcon = (darkMode) => {
    themeIcons.forEach((icon) => {
      if (darkMode) {
        icon.classList.replace("fa-moon", "fa-sun");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
      }
    });
  };

  const isDark = localStorage.getItem("theme") === "dark";
  if (isDark) {
    document.body.classList.add("dark-mode");
    setThemeIcon(true);
  }

  themeToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const darkModeActive = document.body.classList.toggle("dark-mode");
      setThemeIcon(darkModeActive);
      localStorage.setItem("theme", darkModeActive ? "dark" : "light");
    });
  });
});
