window.onload = () => {
  removeJSCheck();
  setupObservers();
};

function removeJSCheck() {
  const elements = document.querySelectorAll(".no-js");
  elements.forEach((element) => {
    element.classList.remove("no-js");
  });
}

function setupObservers() {
  const items = document.querySelectorAll(".stagger-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${index * 0.2}s`;
          entry.target.classList.remove(
            "js-enabled:opacity-0",
            "js-enabled:translate-y-20",
          );
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.2 },
  );

  items.forEach((item) => observer.observe(item));
}
