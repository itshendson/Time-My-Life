const infoButton = document.getElementById('info-button')!;
const infoModal = document.getElementById('info-modal')!;
const overlay = document.getElementById('overlay')!;

infoButton.addEventListener('click', openInfoModal);

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(() => {
        closeInfoModal();
    })
})

function openInfoModal() {
    infoModal.classList.add('active');
    overlay.classList.add('active');
}

function closeInfoModal() {
    infoModal.classList.remove('active');
    overlay.classList.remove('active');
}

