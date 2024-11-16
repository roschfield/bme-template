
document.addEventListener("DOMContentLoaded", function () {
  // Get the toggle button and the menu
  const toggleButton = document.getElementById("navbar-toggle");
  const navbarMenu = document.getElementById("navbar-menu");

  // Add event listener for the toggle button
  toggleButton.addEventListener("click", function () {
    // Check if the menu is open and apply the relevant classes
    if (navbarMenu.classList.contains("max-h-0")) {
      navbarMenu.classList.remove("max-h-0", "opacity-0", "scale-y-0");
      navbarMenu.classList.add(
        "max-h-screen",
        "opacity-100",
        "scale-y-100"
      );
    } else {
      navbarMenu.classList.remove(
        "max-h-screen",
        "opacity-100",
        "scale-y-100"
      );
      navbarMenu.classList.add("max-h-0", "opacity-0", "scale-y-0");
    }
  });
});
