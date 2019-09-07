
var wins = 0
var losses = 0
var guessesLeft = 9
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var invalidEntry = "Invalid Entry"

//General formula is for writing a variable to the screen

// 1.  Make sure variable is defined by something (i.e. computed number, a string, a computed selection from an array)
//      myVar = 7
// 2. then do myVarWriter = document.getElementById("spanIdName")
// 3. then do myVarWriter.textContet = myVar

document.onkeyup = function(event) {

    //variable userChoice gets event.key
    var userChoice = event.key;

    var computerChoiceMath = Math.floor(Math.random() * 26); //chooses a number between 0 - 25 
    var computerChoice = alphabet[computerChoiceMath]; // uses number from above to select a letter from the alphabet
    console.log(computerChoice);

     
    // var userChoiceWriter gets userChoice element ID 
    var userChoiceWriter = document.getElementById("userChoice");
    // var userChoiceWriter's text gets userchoice, which got event.key
    // for some reason, the writer's assignment always goes after
    userChoiceWriter.textContent = userChoice;
    
    // Found out I don't even need a loop to do this

    //for (i = 0; i < 2; i++) {

        
        if (userChoice !== "a" && userChoice !== "b" && userChoice !== "c" && userChoice !== "d" && userChoice !== "e" && userChoice !== "f" && userChoice !== "g" && userChoice !== "h" && userChoice !== "i" && userChoice !== "j" && userChoice !== "k" && userChoice !== "l" && userChoice !== "m" && userChoice !== "n" && userChoice !== "o" && userChoice !== "p" && userChoice !==
        "q" && userChoice !== "r" && userChoice !== "s" && userChoice !== "t" && userChoice !== "u" && userChoice !== "v" && userChoice !== "w" && userChoice !== "x" && userChoice !== "y" && userChoice !== "z") {
            
            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = invalidEntry;  // so if you DON'T put a valid letter, string with "Invalid Entry" writes into the span
            guessesLeft = guessesLeft; // so that guessesLeft isn't affected (somehow it is still accessing the game variable if I don't do this)
            
        }
        else if  (userChoice === "a" || userChoice === "b" || userChoice === "c" || userChoice === "d" || userChoice === "e" || userChoice === "f" || userChoice === "g" || userChoice === "h" || userChoice === "i" || userChoice === "j" || userChoice === "k" || userChoice === "l" || userChoice === "m" || userChoice === "n" || userChoice === "o" || userChoice === "p" || userChoice ===
        "q" || userChoice === "r" || userChoice === "s" || userChoice === "t" || userChoice === "u" || userChoice === "v" || userChoice === "w" || userChoice === "x" || userChoice === "y" || userChoice === "z") {

            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = ""; // so if you DO put a valid letter, string with nothing writes into the span
            game(); // enter the game
        }
        

        function game() {
            if (userChoice === computerChoice) {
                wins++;
                guessesLeft = 9;
                
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
        }
       

        //break 
    //}
}

