const counterElement = document
.getElementById("display-count");

const counterElement2 = document
.getElementById("display-count-2");

const cardWrapper = document
.getElementById("card-wrapper");

const totalCards = cardWrapper
.getElementsByClassName("full-card").length;

counterElement.innerText = totalCards;

counterElement2.innerText = totalCards;