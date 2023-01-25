const steps = document.querySelectorAll(".step-button");
const sections = document.querySelectorAll(".step-section");

// console.log(sections, steps);

steps.forEach((step) => {
  step.addEventListener("click", () => {
    // sections[0].style.display = null;
    let index = +step.value;
    // console.log(index);

    if (!sections[index].style.display) {
      hideIfAlreadyblock(sections[index]);
      sections[index].style.display = "block";
    }
  });
});

function hideIfAlreadyblock(node1) {
  sections.forEach((section) => {
    if (section.style.display && !section.isSameNode(node1)) {
      section.style.display = null;
    }
  });
}
