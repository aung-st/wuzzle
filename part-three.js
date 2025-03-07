// select modal-btn,modal-overlay,close-btn
// listen for click events on the modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalButton1 = document.querySelector(".modal-button-1");
const modalButton2 = document.querySelector(".modal-button-2");
const modalButton3 = document.querySelector(".modal-button-3");
const modalButton4 = document.querySelector(".modal-button-4");
const modalOverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-button");

modalButton1.addEventListener("click", function () {
    modalOverlay.classList.toggle("open-modal");
});

modalButton2.addEventListener("click", function () {
    modalOverlay.classList.toggle("open-modal");
});

modalButton3.addEventListener("click", function () {
    modalOverlay.classList.toggle("open-modal");
});

modalButton4.addEventListener("click", function () {
    modalOverlay.classList.toggle("open-modal");
});

closeButton.addEventListener("click", function() {
    modalOverlay.classList.remove("open-modal");
});