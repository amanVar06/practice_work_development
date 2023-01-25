const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

const step_buttons = document.querySelectorAll(".step_button");
let formStepsNum = 0;

step_buttons.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    this.classList.add("step_button_active");

    formStepsNum = i;
    updateFormSteps();
    updateProgressbar();
    updateStepButton();

    for (let i = 0; i < step_buttons.length; i++) {
      if (
        !step_buttons[i].isSameNode(this) &&
        step_buttons[i].classList.contains("step_button_active")
      ) {
        step_buttons[i].classList.remove("step_button_active");
      }
    }
  });
});

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
    updateStepButton();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
    updateStepButton();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateStepButton() {
  step_buttons.forEach((stepButton) => {
    stepButton.classList.contains("step_button_active") &&
      stepButton.classList.remove("step_button_active");
  });

  step_buttons[formStepsNum].classList.add("step_button_active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

const dropAreas = document.querySelectorAll(".drop_box");

dropAreas.forEach((dropArea) => {
  const button = dropArea.lastElementChild;
  const input = dropArea.children[1];
  // console.log(button, input);
  button.onclick = () => {
    input.click();
  };

  input.addEventListener("change", function (e) {
    var fileName = e.target.files[0].name;
    let filedata = `
      <form action="" method="post">
      <div class="form">
      <h4>${fileName}</h4>
  
      <button class="btn">Upload</button>
      </div>
      </form>`;
    dropArea.innerHTML = filedata;
  });
});

const verifyPhone = document.querySelector(".verify-phone");
const verifyEmail = document.querySelector(".verify-email");

const phoneBoxModal = document.querySelector(".phone-box-modal");
const phoneInnerBodyModal = document.querySelector(".phone-inner-body-modal");
const phoneOverlay = document.querySelector(".phone-overlay");
const customBtnPhone = document.querySelector(".customBtnPhone");

const emailBoxModal = document.querySelector(".email-box-modal");
const emailInnerBodyModal = document.querySelector(".email-inner-body-modal");
const emailOverlay = document.querySelector(".email-overlay");
const customBtnEmail = document.querySelector(".customBtnEmail");

const mobile_field = document.getElementById("contact_person_mobile");
const email_field = document.getElementById("contact_person_email");

verifyPhone.addEventListener("click", function () {
  document.body.classList.add("active-modal");
  phoneBoxModal.classList.add("phone-modal-show");
});

verifyEmail.addEventListener("click", function () {
  document.body.classList.add("active-modal");
  emailBoxModal.classList.add("email-modal-show");
});

phoneOverlay.addEventListener("click", function () {
  document.body.classList.remove("active-modal");
  phoneBoxModal.classList.remove("phone-modal-show");
});

emailOverlay.addEventListener("click", function () {
  document.body.classList.remove("active-modal");
  emailBoxModal.classList.remove("email-modal-show");
});

customBtnPhone.addEventListener("click", function () {
  phoneInnerBodyModal.innerHTML = `<div class="title" style="color: green">Verification Successful!!</div>`;
  mobile_field.disabled = true;
  verifyPhone.style.backgroundColor = "rgb(11, 78, 179, 0.7)";
  verifyPhone.disabled = true;
});

customBtnEmail.addEventListener("click", function () {
  emailInnerBodyModal.innerHTML = `<div class="title" style="color: green">Verification Successful!!</div>`;
  email_field.disabled = true;
  verifyEmail.style.backgroundColor = "rgb(11, 78, 179, 0.7)";
  verifyEmail.disabled = true;
});

let digitValidate = function (ele) {
  console.log(ele.value);
  ele.value = ele.value.replace(/[^0-9]/g, "");
};

let tabChange = function (val) {
  let ele = document.querySelectorAll("input");
  if (ele[val - 1].value != "") {
    ele[val].focus();
  } else if (ele[val - 1].value == "") {
    ele[val - 2].focus();
  }
};
