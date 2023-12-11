import './styles.scss';

"use strict";

window.addEventListener("load", () => {

    // Variables
    const choices = document.querySelectorAll("li");
    const submit = document.querySelector("button");
    const ratingComponent = document.querySelector(".rating-component");
    const resultComponent = document.querySelector(".result-component");
    let ratingChosen;

    function selectChoice(e) {
        for (const choice of choices) {
            choice.classList.remove("active");
        }
        e.target.classList.add("active");
        ratingChosen = e.target.getAttribute("data-value")
    }

    function submitRating() {
        if (ratingChosen !== undefined) {
            hideComponent();
            showComponent();
        }
    }

    function showComponent() {
        let finalResult = document.querySelector(".final-result");
        finalResult.textContent = `You selected ${ratingChosen} out of 5`;
        resultComponent.classList.remove("hidden");
    }

    function hideComponent() {
        ratingComponent.classList.toggle("hidden");
    }

    // Event listeners
    submit.addEventListener("click", submitRating);

    for (const choice of choices) {
        choice.addEventListener("click", selectChoice)
    }
}); // End load event listener