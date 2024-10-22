let overlay = document.getElementById("overlay");
let numberDisplay = overlay.querySelector('.number');

function diceGame() {
    const lastPlayed = localStorage.getItem('lastPlayedDate');
    const currentDate = new Date().toDateString();

    if (lastPlayed === currentDate) {
        alert("¡Ya has jugado hoy! Vuelve mañana para seguir divirtiéndote.");
        return;
    }else{
        localStorage.setItem('lastPlayedDate', currentDate);
    }
    startCountdown();
    let randomNum1=Math.floor(Math.random()*6)+1;
    let randomNum2=Math.floor(Math.random()*6)+1;

    let randomDice1= `./img/dice${randomNum1}.png`;
    let randomDice2= `./img/dice${randomNum2}.png`;

    let diceImage1= document.getElementById("p1");
    let diceImage2= document.getElementById("p2");

    diceImage1.setAttribute("src", randomDice1);
    diceImage2.setAttribute("src", randomDice2);

    let result = document.getElementById("result");
    let p1_Box = document.querySelector(".player-1");
    let p2_Box = document.querySelector(".player-2");

    if (randomNum1 > randomNum2) {
        result.innerHTML = "You Win !";
        result.style.color="#05BFDB";
        p1_Box.style.borderColor = "#05BFDB";
        p2_Box.style.borderColor = "#2C2C2C";
        
    }else if (randomNum1 == randomNum2) {
        result.innerHTML = "Draw !";
        result.style.color="yellowgreen";
        p1_Box.style.borderColor = "yellowgreen";
        p2_Box.style.borderColor = "yellowgreen";
        
    }else{
        result.innerHTML = "Computer Win !";
        result.style.color="darkorange";
        p2_Box.style.borderColor = "darkorange";
        p1_Box.style.borderColor = "#2C2C2C";
    }

}

function startCountdown() {
    let countdownNumbers = [3, 2, 1];
    let countdownIndex = 0;

    overlay.style.display = "flex";  // Mostrar overlay
    numberDisplay.textContent = countdownNumbers[countdownIndex];

    let countdownInterval = setInterval(function() {
        countdownIndex++;
        if (countdownIndex < countdownNumbers.length) {
            numberDisplay.textContent = countdownNumbers[countdownIndex];
        } else {
            clearInterval(countdownInterval);
            overlay.style.display = "none";  // Ocultar overlay
        }
    }, 1000);  // Cambiar número cada segundo
}