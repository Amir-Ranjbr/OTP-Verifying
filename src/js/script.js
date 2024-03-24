import SubscriptionView from "./components/SubscriptionView.js";
import SuccessView from "./components/SuccessView.js";

// Selections
const body = document.querySelector("body");

// States
let state = "subscription";

function createView() {
  body.innerHTML = "";
  const view = state === "subscription" ? SubscriptionView() : SuccessView();
  body.insertAdjacentHTML("afterbegin", view);
  // Subscription state
  if (state === "subscription") {
    const otpInputs = document.querySelectorAll(".otp-input");
    const verifyBtn = document.querySelector("#verify-btn");
    const failed = document.querySelector(".failed");
    // Swap in input
    otpInputs.forEach((input, index) => {
      input.value = "";
      input.addEventListener("input", () => {
        const nextInput = otpInputs[index + 1];
        if (input.value && nextInput) nextInput.focus();
      });
      // When deleted
      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
          const prevInput = otpInputs[index - 1];
          if (prevInput && !input.value) {
            prevInput.value = "";
            prevInput.focus();
          }
        }
      });
    });
    // Verify Btn
    verifyBtn.addEventListener("click", () => {
      const isAllNumeric = Array.from(otpInputs).every((input) =>
        isNumeric(input.value)
      );
      // Failed Style
      failed.style.display = isAllNumeric ? "none" : "block";
      // When numeric true
      if (isAllNumeric) {
        state = "success";
        setTimeout(() => createView(), 1000);
      }
    });
  } else {
    // When Success
    const form = document.querySelector(".success-box");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      state = "subscription";
      setTimeout(() => createView(), 1000);
    });
  }
}
// CheckNumeric
const isNumeric = function (value) {
  return /^\d+$/.test(value);
};
// Initialize View
createView();
