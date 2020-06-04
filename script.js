

let startGame = false;
let startButton = document.querySelector(".gameButton");

let cards = document.querySelectorAll(".card");
let randomCard = cards[Math.floor(Math.random() * cards.length)];
console.log(randomCard);

for (let card of cards) {
    card.addEventListener("click", () => {
        if (startGame) {
            let randomCard = cards[Math.floor(Math.random() * cards.length)];
            console.log(randomCard);
            let drawnCard = randomCard.classList;
            console.log(`Wylosowana karta to ${drawnCard}`);
            console.log(`${card.classList}`);
            if (drawnCard == card.classList) {
                console.log("SUKCESS");
            } else {
                console.log("PORAŻKA");

            }
        } else {
            document.documentElement.style.setProperty('--bgcAllert', 'red');
            document.documentElement.style.setProperty('--colorAllert', 'yellow');
        }
    });
}

startButton.addEventListener("click", () => {
    startGame = true;
    document.querySelector(".gameBox__command").innerHTML = "GRAMY! Wybierz Kartę!";
    document.documentElement.style.setProperty('--bgcAllert', 'unset');
    document.documentElement.style.setProperty('--colorAllert', 'unset');
    console.log(startGame);

});



console.log(startGame);




    // let cardOneClick =  
    // let cardTwoClick =  
    // let cardThreeClick =  
    // console.log(randomCard);
    // Wybierz jeden z poniższych kartoników
    // console.log(card);
    // console.log(card[0], card[1], card[2]);



