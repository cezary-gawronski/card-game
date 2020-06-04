

let startGame = false;
let startButton = document.querySelector(".gameButton");

let cards = document.querySelectorAll(".card");
let randomCard = cards[Math.floor(Math.random() * cards.length)];
// console.log(randomCard);

let positiveScore = document.querySelector(".face--positiveScore");
console.log(positiveScore);
let negativeScore = document.querySelector(".face--negativeScore");
console.log(negativeScore);
let successAnim = document.querySelector(".card");
console.log(successAnim);


let positiveScores = 0;
let negativeScores = 0;

for (let card of cards) {
    card.addEventListener("click", () => {
        card.classList.remove("card--cardSuccess");
        if (startGame) {
            let randomCard = cards[Math.floor(Math.random() * cards.length)];
            console.log(randomCard);
            let drawnCard = randomCard.classList;
            // console.log(`Wylosowana karta to ${drawnCard}`);
            // console.log(`${card.classList}`);
            if (drawnCard == card.classList) {
                console.log("SUKCESS");
                positiveScores += 1;
                positiveScore.innerText = positiveScores;
                randomCard.classList.add("card--cardSuccess");
            } else {
                negativeScores += 1;
                negativeScore.innerText = negativeScores;
                console.log("PORAŻKA");
                card.classList.remove("card--cardSuccess");

            }
        } else {
            document.documentElement.style.setProperty('--bgcAllert', 'red');
            document.documentElement.style.setProperty('--colorAllert', 'yellow');
        }
    });
}

startButton.addEventListener("click", () => {
    startGame = true;
    document.querySelector(".gameBox__command").innerText = "GRAMY! Wybierz Kartę!";
    document.documentElement.style.setProperty('--bgcAllert', 'unset');
    document.documentElement.style.setProperty('--colorAllert', 'unset');
    console.log(startGame);

});



// console.log(startGame);

