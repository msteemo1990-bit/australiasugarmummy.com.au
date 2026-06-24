document.documentElement.classList.add("js");

const navToggle = document.querySelector("[data-nav-toggle]");
const siteHeader = document.querySelector(".site-header");

if (navToggle && siteHeader) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}


document.querySelectorAll("[data-random-images]").forEach((image) => {
  const sources = image.dataset.randomImages.split("|").filter(Boolean);
  if (!sources.length) return;
  image.src = sources[Math.floor(Math.random() * sources.length)];
});
