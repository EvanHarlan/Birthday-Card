// script.js

let currentCardIndex = 0;
const cardsData = [
    { number: 1, text: "Description #1" },
    { number: 2, text: "Description #2" },
    { number: 3, text: "Description #3" },
    { number: 4, text: "Description #4" },
    { number: 5, text: "Description #5" },
    { number: 6, text: "Description #6" },
    { number: 7, text: "Description #7" },
    { number: 8, text: "Description #8" },
    { number: 9, text: "Description #9" },
    { number: 10, text: "Description #10" },
    { number: 11, text: "Description #11" },
    { number: 12, text: "Description #12" },
    { number: 13, text: "Description #13" },
    { number: 14, text: "Description #14" },
    { number: 15, text: "Description #15" },
    { number: 16, text: "Description #16" },
    { number: 17, text: "Description #17" },
    { number: 18, text: "Description #18" },
    { number: 19, text: "Description #19" },
    { number: 20, text: "Description #20" },
    { number: 21, text: "Description #21" },
    { number: 22, text: "Description #22" },
    { number: 23, text: "Description #23" },
    { number: 24, text: "Description #24" },
    { number: 25, text: "Description #25" },
    { number: 26, text: "Description #26" },
    { number: 27, text: "Description #27" },
    { number: 28, text: "Description #28" },
    { number: 29, text: "Description #29" },
    { number: 30, text: "Description #30" },
    { number: 31, text: "Description #31" },
    { number: 32, text: "Description #32" },
    { number: 33, text: "Description #33" },
    { number: 34, text: "Description #34" },
    { number: 35, text: "Description #35" },
    { number: 36, text: "Description #36" },
    { number: 37, text: "Description #37" },
    { number: 38, text: "Description #38" },
    { number: 39, text: "Description #39" },
    { number: 40, text: "Description #40" },
    { number: 41, text: "Description #41" },
    { number: 42, text: "Description #42" },
    { number: 43, text: "Description #43" },
    { number: 44, text: "Description #44" },
    { number: 45, text: "Description #45" },
    { number: 46, text: "Description #46" },
    { number: 47, text: "Description #47" },
    { number: 48, text: "Description #48" },
    { number: 49, text: "Description #49" },
    { number: 50, text: "Description #50" },
    { number: 51, text: "Description #51" },
    { number: 52, text: "Description #52" },
    { number: 53, text: "Description #53" },
    { number: 54, text: "Description #54" },
    { number: 55, text: "Description #55" },
    { number: 56, text: "Description #56" },
    { number: 57, text: "Description #57" },
    { number: 58, text: "Description #58" },
    { number: 59, text: "Description #59" },
    { number: 60, text: "Description #60" },
    { number: 61, text: "Description #61" },
    { number: 62, text: "Description #62" },
    { number: 63, text: "Description #63" },
    { number: 64, text: "Description #64" },
    { number: 65, text: "Description #65" },
    { number: 66, text: "Description #66" },
    { number: 67, text: "Description #67" },
    { number: 68, text: "Description #68" },
    { number: 69, text: "Description #69" },
    { number: 70, text: "Description #70" },
    { number: 71, text: "Description #71" },
    { number: 72, text: "Description #72" },
    { number: 73, text: "Description #73" },
    { number: 74, text: "Description #74" },
    { number: 75, text: "Description #75" },
    { number: 76, text: "Description #76" },
    { number: 77, text: "Description #77" },
    { number: 78, text: "Description #78" },
    { number: 79, text: "Description #79" },
    { number: 80, text: "Description #80" },
    { number: 81, text: "Description #81" },
    { number: 82, text: "Description #82" },
    { number: 83, text: "Description #83" },
    { number: 84, text: "Description #84" },
    { number: 85, text: "Description #85" },
    { number: 86, text: "Description #86" },
    { number: 87, text: "Description #87" },
    { number: 88, text: "Description #88" },
    { number: 89, text: "Description #89" },
    { number: 90, text: "Description #90" },
    { number: 91, text: "Description #91" },
    { number: 92, text: "Description #92" },
    { number: 93, text: "Description #93" },
    { number: 94, text: "Description #94" },
    { number: 95, text: "Description #95" },
    { number: 96, text: "Description #96" },
    { number: 97, text: "Description #97" },
    { number: 98, text: "Description #98" },
    { number: 99, text: "Description #99" },
    { number: 100, text: "Description #100" }
];



function flipCard(card) {
    card.classList.toggle('flipped');
}

function updateCard() {
    const cardContainer = document.querySelector('.card-container');
    const card = cardContainer.querySelector('.card');
    const front = card.querySelector('.front h2');
    const back = card.querySelector('.back p');

    front.innerText = cardsData[currentCardIndex].number;
    back.innerText = cardsData[currentCardIndex].text;
}

function showNextCard() {
    const cardContainer = document.querySelector('.card-container');
    const card = cardContainer.querySelector('.card');

    // Flip current card to front
    if (card.classList.contains('flipped')) {
        setTimeout(flipCard(card), 1000);
    }

    // Move to next card
    if (currentCardIndex < cardsData.length - 1) {
        currentCardIndex++;
        setTimeout(updateCard(), 1000);
    }
}

function showPreviousCard() {
    const cardContainer = document.querySelector('.card-container');
    const card = cardContainer.querySelector('.card');

    // Flip current card to front
    if (card.classList.contains('flipped')) {
        setTimeout(flipCard(card), 1000);
    }

    // Move to previous card
    if (currentCardIndex > 0) {
        currentCardIndex--;
        setTimeout(updateCard(),100);
    }
}

// Initialize the first card
document.addEventListener('DOMContentLoaded', updateCard);

