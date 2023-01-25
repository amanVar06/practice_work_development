const toggler = document.querySelector(".toggler");
// const togglerCircle = document.querySelector(".toggle-circle");
const toggleContainer = document.querySelector(".toggler-circle-container");

toggleContainer.addEventListener("click", () => {
  //   toggleContainer.classList.add("dark");
  //   togglerCircle.classList.add("dark");
  toggler.classList.toggle("dark");
  if (toggler.classList.contains("dark")) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
