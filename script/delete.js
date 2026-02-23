function updateCounterDisplay() {

    const totalCards = document
    .getElementsByClassName("full-card").length;

    document.getElementById("display-count").innerText = totalCards;
    
    document.getElementById("display-count-2").innerText = totalCards;
}

const cardContainer = document
.getElementById("card-wrapper");

cardContainer.addEventListener("click", function (event) {

    const clickedElement = event.target.closest("button");
    if (clickedElement) {

        if (clickedElement.id.includes("delete")) {

            const targetCard = clickedElement.closest(".full-card");
            if (targetCard) {

                targetCard.remove();
                updateCounterDisplay();
            }
        }
    }
});

updateCounterDisplay();