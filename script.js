"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
const openModalButton = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < openModalButton.length; i++) {
  openModalButton[i].addEventListener("click", openModel);
}

closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

// Create guide alert
if (screen.width < 601) {
  alert("Currently this website is only available for computers");
}
if (screen.height < 701) {
  alert("Currently this website is only available for computers");
}
