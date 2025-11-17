const container = document.querySelector(".container-card-image");
const overlay = document.querySelector(".overlay-card-image");
const overlayIcon = document.querySelector(".overlay-icon");

container.addEventListener("mouseenter", function () {
  overlay.removeAttribute("hidden", "");
  overlayIcon.removeAttribute("hidden", "");
});

container.addEventListener("mouseleave", function () {
  overlay.setAttribute("hidden", "");
  overlayIcon.setAttribute("hidden", "");
});

container.addEventListener("focus", function () {
  overlay.removeAttribute("hidden", "");
  overlayIcon.removeAttribute("hidden", "");
});

container.addEventListener("blur", function () {
  overlay.setAttribute("hidden", "");
  overlayIcon.setAttribute("hidden", "");
});
