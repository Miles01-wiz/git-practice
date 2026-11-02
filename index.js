// document.addEventListener("DOMContentLoaded", function () {
//   // ---------- 1. Mobile menu ----------
//   const menuButton = document.querySelector(".menu-toggle");
//   const closeButton = document.querySelector(".menu-close");
//   const siteNav = document.querySelector("#site-nav");

//   function setMenu(isOpen) {
//     siteNav.classList.toggle("open", isOpen);
//     menuButton.setAttribute("aria-expanded", String(isOpen));
//   }

//   menuButton.addEventListener("click", function () {
//     setMenu(!siteNav.classList.contains("open"));
//   });

//   closeButton.addEventListener("click", function () {
//     setMenu(false);
//     menuButton.focus();
//   });

//   siteNav.addEventListener("click", function (event) {
//     if (event.target.closest("a")) {
//       setMenu(false);
//     }
//   });

//   document.addEventListener("keydown", function (event) {
//     if (event.key === "Escape" && siteNav.classList.contains("open")) {
//       setMenu(false);
//       menuButton.focus();
//     }
//   });

//   const tabs = document.querySelectorAll(".tab");
//   const panels = document.querySelectorAll(".tab-panel");

//   function showTab(selectedTab) {
//     tabs.forEach(function (tab) {
//       const isSelected = tab === selectedTab;
//       tab.setAttribute("aria-selected", String(isSelected));
//       tab.setAttribute("tabindex", isSelected ? "0" : "-1");
//     });

//     panels.forEach(function (panel) {
//       panel.hidden = panel.id !== selectedTab.getAttribute("aria-controls");
//     });
//   }

//   tabs.forEach(function (tab, index) {
//     tab.addEventListener("click", function () {
//       showTab(tab);
//     });

//     tab.addEventListener("keydown", function (event) {
//       if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
//         const step = event.key === "ArrowRight" ? 1 : -1;
//         const nextIndex = (index + step + tabs.length) % tabs.length;
//         tabs[nextIndex].focus();
//         showTab(tabs[nextIndex]);
//       }
//     });
//   });

//   const faqButtons = document.querySelectorAll(".faq-button");

//   faqButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       const answer = document.getElementById(
//         button.getAttribute("aria-controls"),
//       );
//       const isOpen = button.getAttribute("aria-expanded") === "true";

//       faqButtons.forEach(function (otherButton) {
//         otherButton.setAttribute("aria-expanded", "false");
//         document.getElementById(
//           otherButton.getAttribute("aria-controls"),
//         ).hidden = true;
//       });

//       if (!isOpen) {
//         button.setAttribute("aria-expanded", "true");
//         answer.hidden = false;
//       }
//     });
//   });

//   const form = document.querySelector("#signup-form");
//   const emailInput = document.querySelector("#email");
//   const fieldWrapper = emailInput.closest(".field");
//   const errorMessage = document.querySelector("#email-error");
//   const successMessage = document.querySelector("#form-success");

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const email = emailInput.value.trim();

//     if (emailPattern.test(email)) {
//       fieldWrapper.classList.remove("invalid");
//       errorMessage.hidden = true;
//       successMessage.hidden = false;
//       form.reset();
//     } else {
//       fieldWrapper.classList.add("invalid");
//       errorMessage.hidden = false;
//       successMessage.hidden = true;
//       emailInput.focus();
//     }
//   });

//   emailInput.addEventListener("input", function () {
//     fieldWrapper.classList.remove("invalid");
//     errorMessage.hidden = true;
//   });
// });

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const closeButton = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll("a");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

menuButton.addEventListener("click", function () {
  siteNav.classList.toggle("open");
});

closeButton.addEventListener("click", function () {
  siteNav.classList.remove("open");
});
1;
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    siteNav.classList.remove("open");
  });
});

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const panelID = tab.getAttribute("aria-controls");

    tabs.forEach(function (otherTabs) {
      otherTabs.setAttribute(
        "aria-selected",
        otherTabs === tab ? "true" : "false",
      );
    });

    panels.forEach(function (panel) {
      panel.hidden = panel.id !== panelID;
    });
  });
});

const signupForm = document.getElementById("signup-form");
const emailField = document.getElementById("email");
const errorText = document.querySelector("#email-error");
const successText = document.querySelector("#form-success");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailField.value.trim();
  console.log("Typed :", email);

  if (email === "") {
    errorText.hidden = false;
    emailField.parentElement.classList.add("invalid");
    return;
  }

  errorText.hidden = true;
  emailField.parentElement.classList.remove("invaild");
  successText.hidden = false;
  signupForm.reset();

  emailField.addEventListener("input", function () {
    errorText.hidden = true;
    emailField.parentElement.classList.remove("invalid");
  });
});

// .carousel { position: relative; max-width: 500px; margin: 0 auto; padding: 24px; }

// /* Every slide is hidden, except the one with the class 'active' */
// .slide { display: none; }
// .slide.active { display: block; }

// .prev, .next {
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 44px;
//   height: 44px;
//   border-radius: 50%;
//   border: 1px solid #ccc;
//   background: #fff;
//   font-size: 18px;
//   cursor: pointer;
// }
// .prev { left: 0; }
// .next { right: 0; }
// .prev:hover, .next:hover { background: #5368df; color: #fff; }

// /* Keyboard users see where they are */
// button:focus-visible { outline: 3px solid #5368df; outline-offset: 2px; }

// <div class="carousel" id="carousel">
//   <div class="slide active">
//     <p>"TEKHUB delivered an outstanding website."</p>
//     <strong>Chinyere Okafor</strong>
//   </div>
//   <div class="slide">
//     <p>"Professional, creative and reliable."</p>
//     <strong>Emeka Nwosu</strong>
//   </div>
//   <div class="slide">
//     <p>"Amazing attention to detail."</p>
//     <strong>Adaeze Umeh</strong>
//   </div>

//   <button class="prev" type="button" aria-label="Previous testimonial">&larr;</button>
//   <button class="next" type="button" aria-label="Next testimonial">&rarr;</button>
// </div>

// function isValidEmail(email) {
//   if (email.includes(' ')) return false;          // rule 1: no spaces

//   const at = email.indexOf('@');                  // position of the @
//   if (at < 1) return false;                       // rule 2: needs text before @

//   const dot = email.lastIndexOf('.');             // position of the last dot
//   if (dot <= at + 1) return false;                // rule 3: dot must come after @ with text between
//   if (dot === email.length - 1) return false;     // rule 3: must have text after the dot

//   return true;                                    // passed every rule
// }

// Step 1: Find the parts of the form
// Inside your DOMContentLoaded wrapper, add:
// const signupForm = document.querySelector('#signup-form');
// const emailField = document.querySelector('#email');
// const errorText = document.querySelector('#email-error');
// const successText = document.querySelector('#form-success');
// Test it: add console.log(signupForm); and check the Console. If you see null, the name doesn't match the HTML.
// Step 2: Stop the page from reloading
// Forms reload the page when submitted by default. Add this:
// signupForm.addEventListener('submit', function (event) {
//   event.preventDefault(); // stop the page reloading
//   console.log('Form submitted');
// });
// Test it: type anything and press Contact Us. The Console should print "Form submitted", and the page should stay where it is.
// Step 3: Read what the user typed
// Replace the console.log with:
// const email = emailField.value.trim();
// console.log('Typed:', email);
// .trim() removes spaces at the start and end, so a space alone counts as empty.
// Test it: type some text and submit. The Console should show what you typed.
// Step 4: Show an error for a bad email
// Below the line from Step 3, add a check. Start with the empty case:
// if (email === '') {
//   errorText.hidden = false;      // show the message
//   emailField.parentElement.classList.add('invalid');
//   return;                        // stop here
// }
// Test it: submit with the box empty. The red error should appear.
// Then add the format check after that block:
// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Put that pattern near the top (outside the submit function), then add:
// if (!emailPattern.test(email)) {
//   errorText.hidden = false;
//   emailField.parentElement.classList.add('invalid');
//   return;
// }
// Test it: type hello and submit. The error should appear. Type hello@test.com and submit. Nothing should show yet, because the success step isn't written.
// Step 5: Show success for a good email
// After the checks, add:
// errorText.hidden = true;
// emailField.parentElement.classList.remove('invalid');
// successText.hidden = false;
// signupForm.reset();
// reset() clears the box after a successful submit.
// Test it: submit hello@test.com. The success message should appear, and the box should empty.
// Step 6: Clear the error while typing
// This makes the page feel responsive. Add:
// emailField.addEventListener('input', function () {
//   errorText.hidden = true;
//   emailField.parentElement.classList.remove('invalid');
// });
// Test it: trigger the error, then start typing. The red message should disappear.
// Write these steps yourself, testing after each one. Tell me which step you're on, and paste any Console error if something fails. I'll point to the line, not rewrite the code.

// /* Pattern 1: centred container, keeps content from stretching too wide */
// .container { width: 90%; max-width: 1100px; margin: 0 auto; }

// /* Pattern 2: sections get the same spacing */
// section { padding: 60px 0; }

// /* Pattern 3: two columns (text and image), stacked on phones */
// .two-col { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }

// /* Pattern 4: a row of cards, one per row on phones */
// .cards { display: grid; grid-template-columns: 1fr; gap: 24px; }

// /* Pattern 5: a vertical stack of items, like FAQ or a menu */
// .stack { display: flex; flex-direction: column; gap: 16px; }

// /* Bigger screens: switch the patterns to side-by-side */
// @media (min-width: 768px) {
//   .two-col { grid-template-columns: 1fr 1fr; }
//   .cards { grid-template-columns: repeat(2, 1fr); }
// }
// @media (min-width: 960px) {
//   .cards { grid-template-columns: repeat(3, 1fr); }
// }

const carousel = document.querySelector("#carousel");
const slides = carousel.querySelectorAll(".slide");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");
let currentSlide = 0;

function showSlide(newIndex) {
  slides[currentSlide].classList.remove("active"); // hide the old one

  // Wrap around: after the last slide comes the first, and before the first comes the last
  currentSlide = (newIndex + slides.length) % slides.length;

  slides[currentSlide].classList.add("active"); // show the new one
}

prevButton.addEventListener("click", function () {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", function () {
  showSlide(currentSlide + 1);
});

// Keyboard: left and right arrows also move the carousel
carousel.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") showSlide(currentSlide + 1);
  if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
});
