const CSS_DELAY_VAR = `--_delay`;

window.onload = () => {
  setupObservers();
  //   createDelay();
};

function setupObservers() {
  const animationTarget = document.querySelectorAll(".animate-fade-in-up");
  for (let i = 0; i < animationTarget.length; i++) {
    observer.observe(animationTarget[i]);
  }
}

function addDelayToElement(element, index) {
  const delayClass = `${CSS_DELAY_VAR}:${index};`;
  element.style = delayClass;
}
function createDelay() {
  const staggered = document.querySelectorAll(".animate-fade-in-up");

  staggered.forEach((elements) => {
    let i = 0;
    for (child of elements.children) {
      addDelayToElement(child, i);
      i++;
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      for (child of entry.target.children) {
        child.classList.add("animate-fade-in-up");
      }
    } else {
      //   entry.target.classList.remove("scroll-animation");
    }
  });
});
