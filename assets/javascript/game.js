
var wins = 0
var losses = 0
var guessesLeft = 9
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var userChoiceArray = []

var invalidEntry = "Invalid Entry"

//General formula is for writing a variable to the screen

// OUTSIDE OF FUCNTION 
// 1.  Make sure variable is initially defined by something, but that will change (i.e. computed number, a string, a computed selection from an array)
//      myVar = 7
// THEN IN FUNCTION, AFTER THINGS HAPPEN TO VARIABLE:

// 2. do myVarWriter = document.getElementById("spanIdName")
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



    if (alphabet.includes(userChoice)) { // If my array alphabet includes my guess, then
        invalidEntryWriter = document.getElementById("invalidEntry");
        invalidEntryWriter.textContent = ""; // so if you DO put a valid letter, string with nothing writes into the span
        game();  //enters the game 
    }

    else {
        invalidEntryWriter = document.getElementById("invalidEntry"); 
        invalidEntryWriter.textContent = invalidEntry;  // so if you DON'T put a valid letter, string with "Invalid Entry" writes into the span
        
    }

/* Not Quite........... couldn't get this to work, but the above does
 
        if (userChoice !== alphabet.indexOf("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")) {
        invalidEntryWriter = document.getElementById("invalidEntry"); // so if you DON'T put a valid letter, string with "Invalid Entry" writes into the span
        invalidEntryWriter.textContent = invalidEntry;  
        guessesLeft = guessesLeft;
        }

       else if (userChoice === alphabet.indexOf("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")) {
            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = ""; // so if you DO put a valid letter, string with nothing writes into the span
            game();
        }
*/ 

 /* 1st version........ works but is ineffecient (not DRY safe)       
 
 if (userChoice !== "a" && userChoice !== "b" && userChoice !== "c" && userChoice !== "d" && userChoice !== "e" && userChoice !== "f" && userChoice !== "g" && userChoice !== "h" && userChoice !== "i" && userChoice !== "j" && userChoice !== "k" && userChoice !== "l" && userChoice !== "m" && userChoice !== "n" && userChoice !== "o" && userChoice !== "p" && userChoice !==
        "q" && userChoice !== "r" && userChoice !== "s" && userChoice !== "t" && userChoice !== "u" && userChoice !== "v" && userChoice !== "w" && userChoice !== "x" && userChoice !== "y" && userChoice !== "z") {
            
            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = invalidEntry;  // so if you DON'T put a valid letter, string with "Invalid Entry" writes into the span
            guessesLeft = guessesLeft; // so that guessesLeft isn't affected (somehow it is still accessing the game guessesLeft variable if I don't do this)
            
        }
        else if  (userChoice === "a" || userChoice === "b" || userChoice === "c" || userChoice === "d" || userChoice === "e" || userChoice === "f" || userChoice === "g" || userChoice === "h" || userChoice === "i" || userChoice === "j" || userChoice === "k" || userChoice === "l" || userChoice === "m" || userChoice === "n" || userChoice === "o" || userChoice === "p" || userChoice ===
        "q" || userChoice === "r" || userChoice === "s" || userChoice === "t" || userChoice === "u" || userChoice === "v" || userChoice === "w" || userChoice === "x" || userChoice === "y" || userChoice === "z") {

            invalidEntryWriter = document.getElementById("invalidEntry");
            invalidEntryWriter.textContent = ""; // so if you DO put a valid letter, string with nothing writes into the span
            game(); // enter the game
        }
    
    */    

        function game() {
            if (userChoice === computerChoice) {
                wins++; 
                userChoiceArray.length = 0; // game ends, so clears the user choice history
                guessesLeft = 9; // game ends so refreshes this
                
            }
            
            else if (guessesLeft === 0) {
                losses++;
                userChoiceArray.length = 0; // game ends, so clears the user choice history
                guessesLeft = 9; //game ends so refreshes this
            }
            else {
                guessesLeft --;
                var userChoiceArrayWriter = document.getElementById("userChoiceArray"); //created an array for user selection
                userChoiceArray.push(userChoice); //pushing userChoice from above onto the end of an array
                userChoiceArrayWriter.textContent = userChoiceArray;
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

