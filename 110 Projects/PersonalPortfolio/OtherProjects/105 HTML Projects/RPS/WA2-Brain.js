var theme = document.getElementById("theme"); 
theme.innerHTML = "Select a Game Theme"; 
    
function pixelStart() {
    // var rock = document.createElement("img");
    // var paper = document.createElement("img");
    // var scissor = document.createElement("img");

    // rock.src = "Pictures/RPS-Rock.png";
    // paper.src = "Pictures/RPS-Paper.png";
    // scissor.src = "Pictures/RPS-Scissors.png";
    
    // document.getElementById("GameBoard").appendChild(rock);
    // document.getElementById("GameBoard").appendChild(paper);
    // document.getElementById("GameBoard").appendChild(scissor);

    document.getElementById("rock").src = "Pictures/RPS-Rock.png";
    document.getElementById("paper").src = "Pictures/RPS-Paper.png";
    document.getElementById("scissor").src = "Pictures/RPS-Scissors.png";
 } 

 var userScore = 0;
 var compScore = 0;

function rando(userPick) {
    var compObj;
    let compPick = Math.floor(Math.random() * 3) + 1;

    if (compPick === 1) { compObj = "rock"; }
    else if (compPick === 2) { compObj = "paper"; }
    else { compObj = "scissor"; }

    console.log(`User Picks: ${userPick}`);
    console.log(`Computer Picks: ${compObj}`); 

    if (userPick === "rock" && compObj === "paper") {
        compScore++;

        let text = document.body.getElementsByTagName("p");
        let neText = document.createTextNode(`User: ${userPick} | Computer: ${compObj} \nUser Score: ${userScore} | Computer Score: ${compScore}`);
        text.parentNode.replaceChild(neText, text);

        console.log(`Comp Win: ${compScore} | User Win: ${userScore}`);
    }
    else if (userPick === "paper" && compObj === "scissor") {
        compScore++;
        console.log(`Comp Win: ${compScore} | User Win: ${userScore}`);
    }
    else if (userPick === "scissor" && compObj === "rock") {
        compScore++;
        console.log(`Comp Win: ${compScore} | User Win: ${userScore}`);
    }
    else if (userPick === "rock" && compObj === "scissor") {
        userScore++;
        console.log(`User Win: ${userScore} | Comp Win: ${compScore}`);
    }
    else if (userPick === "paper" && compObj === "rock") {
        userScore++;
        console.log(`User Win: ${userScore} | Comp Win: ${compScore}`);
    }
    else if (userPick === "scissor" && compObj === "paper") {
        userScore++;
        console.log(`User Win: ${userScore} | Comp Win: ${compScore}`);
    }
    else {
        console.log("TIE")
    }
}