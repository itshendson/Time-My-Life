"use strict";
var infoButton = document.getElementById('info-button');
var infoModal = document.getElementById('info-modal');
var overlay = document.getElementById('overlay');
infoButton.addEventListener('click', openInfoModal);
overlay.addEventListener('click', function () {
    var modals = document.querySelectorAll('.modal.active');
    modals.forEach(function () {
        closeInfoModal();
    });
});
function openInfoModal() {
    infoModal.classList.add('active');
    overlay.classList.add('active');
}
function closeInfoModal() {
    infoModal.classList.remove('active');
    overlay.classList.remove('active');
}
