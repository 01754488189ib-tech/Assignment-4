document.addEventListener("click", function (event) {
    const clickedElement = event.target.closest("button");
    if (!clickedElement) return;

    const targetCard = clickedElement.closest(".full-card");
    if (!targetCard) return;

    const buttonText = clickedElement.innerText.trim().toUpperCase();

    if (clickedElement.id.includes("delete")) {
        targetCard.remove();
        updateAllCounts();
        return;
    }

    if (buttonText === "INTERVIEW" || buttonText === "REJECTED") {

        const targetSectionId = buttonText === "INTERVIEW" ? "jobs-interview" : "jobs-rejected";

        const targetSection = document
            .getElementById(targetSectionId)

        const statusLabel = targetCard
            .querySelector('button[id^="status-label"]');

        const isAlreadyClone = targetCard.parentElement.id === "jobs-interview" || targetCard.parentElement.id === "jobs-rejected";

        if (isAlreadyClone) {

            if (statusLabel) statusLabel.innerText = buttonText;
            targetSection.appendChild(targetCard);
        } else {

            if (targetCard.getAttribute("data-has-clone") === "true") {

                const cardTitle = targetCard
                    .querySelector("h1")?.innerText;

                const existingClone = Array.from(document
                    .querySelectorAll("#jobs-interview .full-card, #jobs-rejected .full-card"))

                    .find(c => c.querySelector("h1")?.innerText === cardTitle);

                if (existingClone) {

                    existingClone
                        .querySelector('button[id^="status-label"]')
                        .innerText = buttonText;

                    targetSection.appendChild(existingClone);
                }
            } else {

                const cardClone = targetCard.cloneNode(true);
                cardClone.querySelector('button[id^="status-label"]')
                    .innerText = buttonText;

                targetCard.setAttribute("data-has-clone", "true");

                targetSection.appendChild(cardClone);
            }

            if (statusLabel) statusLabel
                .innerText = buttonText;
        }

        const emptyMsg = targetSection
            .querySelector('#jobs-available-card');

        if (emptyMsg) emptyMsg.classList.add('hidden');

        updateAllCounts();
    }
});

function updateAllCounts() {

    const total = document
        .getElementById("jobs-all")
        .querySelectorAll(".full-card").length;

    const iCount = document
        .getElementById("jobs-interview")
        .querySelectorAll(".full-card").length;

    const rCount = document
        .getElementById("jobs-rejected")
        .querySelectorAll(".full-card").length;

    document.getElementById("display-count").innerText = total;

    document.getElementById("display-count-2").innerText = total;

    document.getElementById("interview-card").innerText = iCount;

    document.getElementById("rejected-card").innerText = rCount;

}