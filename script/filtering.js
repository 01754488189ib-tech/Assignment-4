document.addEventListener("click", function (event) {
    const clickedElement = event.target.closest("button");
    if (!clickedElement) return;

    const targetCard = clickedElement.closest(".full-card");
    if (!targetCard) return;

    if (clickedElement.id.includes("delete")) {
        targetCard.remove();
        updateAllCounts();
        return;
    }

    const statusLabel = targetCard.querySelector('button[id^="status-label"]');
    let buttonText = clickedElement.innerText.trim();

    if (buttonText === "INTERVIEW") {
        statusLabel.innerText = "INTERVIEW";
        
        const targetSection = document
        .getElementById("jobs-interview");

        let emptyMsg = targetSection.querySelector('#jobs-available-card');
        if (emptyMsg) {
            emptyMsg.classList.add('hidden');
        }

        targetSection.appendChild(targetCard);
        updateAllCounts();
    }

    if (buttonText === "REJECTED") {

        statusLabel.innerText = "REJECTED";

        const targetSection = document
        .getElementById("jobs-rejected");

        let emptyMsg = targetSection.querySelector('#jobs-available-card');

        if (emptyMsg) {
            emptyMsg.classList.add('hidden');
        }

        targetSection.appendChild(targetCard);
        updateAllCounts();
    }
});

function updateAllCounts() {

    let total = document
        .getElementsByClassName("full-card").length;

    let iCount = document
        .getElementById("jobs-interview")
        .getElementsByClassName("full-card").length;

    let rCount = document
        .getElementById("jobs-rejected")
        .getElementsByClassName("full-card").length;

    document.getElementById("display-count").innerText = total;

    document.getElementById("display-count-2").innerText = total;

    document.getElementById("interview-card").innerText = iCount;

    document.getElementById("rejected-card").innerText = rCount;

}