function updateProgress(taskNumber) {
    const progressInput = document.getElementById(`input${taskNumber}`);
    const progressValue = progressInput.value;

    const progressBar = document.getElementById(`progress${taskNumber}`);
    progressBar.style.width = progressValue + '%';

    // Add a color change based on progress value
    if (progressValue < 50) {
        progressBar.style.backgroundColor = '#e74c3c';  // Red
    } else if (progressValue < 80) {
        progressBar.style.backgroundColor = '#f39c12';  // Orange
    } else {
        progressBar.style.backgroundColor = '#27ae60';  // Green
    }
}

function updateAllProgress() {
    for (let i = 1; i <= 5; i++) {
        updateProgress(i);
    }
}
