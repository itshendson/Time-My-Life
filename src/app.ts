const createTimerBtn = document.getElementById('create-timer-button')!;
const titleInput = <HTMLInputElement>document.querySelector('#create-timer-input')!;

const everythingContainer = document.getElementById('everything-container')!;

createTimerBtn.addEventListener('click', createTimer);

let counter: number = 0;

class Timer {
    id: number;
    isRunning: boolean;
    startTime: number;
    savedTime: number;
    elapsedTime: number;
    tick: any;
    timerButton: HTMLButtonElement;
    timerDelete: HTMLButtonElement;
    timerEdit: HTMLButtonElement;
    timerDiv: HTMLDivElement;
    timerHeader: HTMLHeadingElement;
    timerDisplay: HTMLHeadingElement;
    editModal: HTMLDivElement;
    inputForEditModal: HTMLInputElement;
    buttonForEditModal: HTMLButtonElement;

    constructor(id: number, title: string, parent: HTMLElement) {
        this.id = id;
        this.startTime = 0;
        this.isRunning = false;
        this.savedTime = 0;
        this.elapsedTime = 0;
        this.tick;

        // Create elements for timer button
        this.timerButton = document.createElement("button");
        this.timerButton.classList.add("timer-button", "generic-button")
        this.timerButton.innerHTML = '<i class="fas fa-stopwatch fa-5x"></i>';
        this.timerButton.addEventListener('click', () => this.toggleTimer());

        // Create elements for delete button
        this.timerDelete = document.createElement("button");
        this.timerDelete.classList.add("delete-button", "generic-button");
        this.timerDelete.innerHTML = '<i class="fas fa-trash"></i>';
        this.timerDelete.addEventListener('click', () => this.deleteTimer());

        // Create elements for edit button
        this.timerEdit = document.createElement("button");
        this.timerEdit.classList.add("edit-button", "generic-button");
        this.timerEdit.innerHTML = '<i class="fas fa-pen"></i></i>';
        this.timerEdit.addEventListener('click', () => this.openEditModal());

        // Create elements for timer-activity-header
        this.timerHeader = document.createElement("div");
        this.timerHeader.classList.add("timer-activity-header");
        this.timerHeader.innerHTML = title;
        
        // Create elements for timer-div
        this.timerDiv = document.createElement("div");
        this.timerDiv.classList.add("timer-div", "container");

        // Create elemens for timer-display
        this.timerDisplay = document.createElement("h6");
        this.timerDisplay.classList.add("timer-display");
        this.timerDisplay.innerHTML = "00:00:00"

        // Append elements to timerDiv
        parent.appendChild(this.timerDiv);
        this.timerDiv.appendChild(this.timerButton);
        this.timerDiv.appendChild(this.timerDisplay);
        this.timerDiv.appendChild(this.timerHeader);
        this.timerDiv.appendChild(this.timerDelete);
        this.timerDiv.appendChild(this.timerEdit);

        // Create elements for edit modal
        this.editModal = document.createElement("div");
        this.editModal.classList.add("edit-modal");
        this.inputForEditModal = document.createElement("input");
        this.inputForEditModal.setAttribute("maxlength", "25");
        this.inputForEditModal.setAttribute("placeholder", "Rename your activity");
        this.buttonForEditModal = document.createElement("button");
        this.buttonForEditModal.innerHTML = "Rename";
        this.buttonForEditModal.addEventListener('click', () => this.renameTitle());

        // Append edit modal to documents
        this.editModal.appendChild(this.inputForEditModal);
        this.editModal.appendChild(this.buttonForEditModal);
        document.body.appendChild(this.editModal);

        // An event listener that closes to overlay whenever you click outside the edit-modal
        overlay.addEventListener('click', () => {
            this.closeEditModal();
        })
    }

    toggleTimer() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.tick);
            this.savedTime = this.elapsedTime;
        } else {
            this.isRunning = true;
            this.startTime = Date.now();
            this.tick = setInterval(() => this.tock(), 1000);
        }
    }

    tock() {
        let spotTime = Date.now(); 
        this.elapsedTime = (spotTime - this.startTime) + this.savedTime;
        this.displayTime(this.elapsedTime);
    }

    displayTime(milliseconds: number) {
        const timeInSeconds = milliseconds / 1000;
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = Math.floor((timeInSeconds % 3600) % 60);
        this.timerDisplay.textContent = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
    }

    deleteTimer() {
        var confirmDelete = confirm("Are you sure you want to delete this?")

        if (confirmDelete) {
            clearInterval(this.tick);
            this.timerDiv.remove();
            this.editModal.remove();
        }
    }

    openEditModal() {
        this.editModal.classList.add("active");
        overlay.classList.add('active');
    }

    closeEditModal() {
        this.editModal.classList.remove("active");
        overlay.classList.remove('active');
    }

    renameTitle() {
        const newTitle = this.inputForEditModal.value;
        this.timerHeader.innerHTML = newTitle;
        this.closeEditModal();
    }
}

function createTimer() {
    let activityTitle = titleInput.value || "";
    new Timer(counter, activityTitle, everythingContainer);
    titleInput.value = "";
    counter++;
}