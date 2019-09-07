
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]





document.onkeyup = function(event) {

    //variable userChoice gets event.key
    var userChoice = event.key;

    var computerChoiceMath = Math.floor(Math.random() * 26);
    var computerChoice = alphabet[computerChoiceMath];
    console.log(computerChoice);

     
    // var userChoiceWriter gets userChoice element ID 
    var userChoiceWriter = document.getElementById("userChoice");
    // var userChoiceWriter's text gets userchoice, which got event.key
    // for some reason, the writer's assignment always goes after
    userChoiceWriter.textContent = userChoice;
    
    // DOESNT MATTER WHAT LOOP's MAX IS---  WHAT?!? 
    for (i = 0; i < 2; i++) {
        if (userChoice === computerChoice) {
            wins++;
        }
        else if (guessesLeft < 1) {
          losses++;
          guessesLeft = 9;
        }
        
        else {
            guessesLeft --;
        }

        var guessLeftWriter = document.getElementById("guessesLeft");
        guessLeftWriter.textContent = guessesLeft  
    
        var winsWriter = document.getElementById("victories");
        winsWriter.textContent = wins

        var lossesWriter = document.getElementById("defeats");
        lossesWriter.textContent = losses;

        break 
    }
    // Create a for loop for your guesses, but end the for loop if 


        


}

