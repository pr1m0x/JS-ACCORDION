// ========================
// Variables
// ========================

const accordion = document.querySelectorAll(".segment__head");
const minusIcon = document.querySelectorAll(".minus__icon");
const plusIcon = document.querySelectorAll(".plus__icon");
const bodyWrap = document.querySelectorAll(".body__wrap");

// ========================
// Functions
// ========================

accordion.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e.currentTarget.nextElementSibling);
    e.currentTarget.nextElementSibling.classList.toggle("active");
    if (e.currentTarget.nextElementSibling.classList.contains("active")) {
      e.currentTarget.nextElementSibling.setAttribute(
        "style",
        `max-height:${e.currentTarget.nextElementSibling.scrollHeight}px`
      );
    } else {
      e.currentTarget.nextElementSibling.setAttribute("style", `max-height:0px`);
    }
    e.currentTarget.children[1].classList.toggle("visible");
    e.currentTarget.children[2].classList.toggle("hide");
  });
});

// ========================
// Loops
// ========================

// ========================
// Events
// ========================

// accordion.addEventListener("click", (e) => {
//   if (e.target.closest(".segment__head")) {
//     console.log(e.target);
//   }
// });

// ========================
// Execution
// ========================
