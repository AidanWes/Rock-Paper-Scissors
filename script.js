let robot;
let player;

function handSelect(hand, flag){
    let choice = document.querySelector("." + hand.toLowerCase());
    choice.style.backgroundColor = handColor(hand.toLowerCase());
    
    if(!flag)
    {
        let output = document.querySelector(".your-choice");
        output.innerHTML = hand;
        output.style.color = handColor(hand.toLowerCase());
        player = hand;
        setTimeout(robotMove, 2000);
    }
    else
    {
        let output = document.querySelector(".bot-choice");
        output.innerHTML = hand;
        output.style.color = handColor(hand.toLowerCase());
        robot = hand;
        winner(player, robot);
    }
}


function handColor(hand) {
    switch (hand) {
        case "rock":
            return "rgba(169, 67, 67, 0.5)";
        case "paper":
            return "rgba(64, 131, 176, 0.5)";
        case "scissors":
            return "rgba(188, 138, 78, 0.5)";
    }
}

function robotMove() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand){
        case 0:
            handSelect('Rock', 1);
            break;
        case 1:
            handSelect('Paper', 1);
            break;
        case 2:
            handSelect('Scissors', 1);
            break;
    }
}

function winner(player, robot) {
    if (player === robot)
        win(0);
    else if(player === 'Rock' && robot === 'Paper' ||
            player === 'Paper' && robot === 'Scissors' ||
            player === 'Scissors' && robot === 'Rock')
        win(1);
    else
        win(2);
}

function win(outcome) {
    switch (outcome) {
        case 0:
            alert('Tie');
            break;
        case 1:
            alert("Robot Win");
            break;
        case 2:
            alert(`Player Win`);
            break;
    }
    reset();
}

function reset() {
    document.querySelector(".your-choice").innerHTML = "";
    document.querySelector(".bot-choice").innerHTML = "";
    document.querySelector('.rock').style.backgroundColor = "transparent";
    document.querySelector('.paper').style.backgroundColor = "transparent";
    document.querySelector('.scissors').style.backgroundColor = "transparent";
}