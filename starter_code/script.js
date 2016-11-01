// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var array1 =  ["Rock","Paper","Scissors"]
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2.
    var number = Math.floor(Math.random() * 3);
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[ranomNum])
    return array1[number];
    // Task 1, Step 4: return this new value
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    // if (userChoice == "rock" && computerChoice == "rock") {
    //     console.log("User Draw");
    // }
    
    var winner = "";
    
    if(userChoice == "Rock"){
        if(computerChoice == "Rock"){
            console.log("Game Draw");
            winner = "Draw";
        }else if(computerChoice == "Paper"){
            console.log("Computer Wins");
            winner = "Computer";
        }else if(computerChoice == "Scissors"){
            console.log("Player Wins");
            winner = "Player";
        }
    }else if(userChoice == "Paper"){
        if(computerChoice == "Rock"){
            console.log("Player Wins");
             winner = "Player";
        }else if(computerChoice == "Paper"){
            console.log("Game Draw");
             winner = "Draw";
        }else if(computerChoice == "Scissors"){
            console.log("Computer Wins");
             winner = "Computer";
        }
    }else if(userChoice == "Scissors"){
        if(computerChoice == "Rock"){
            console.log("Computer Wins");
             winner = "Computer";
        }else if(computerChoice == "Paper"){
            console.log("Player Wins");
             winner = "Player";
        }else if(computerChoice == "Scissors"){
            console.log("Game Draw");
             winner = "Draw";
        }
    }
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
    $("#computer-choice").html(computerChoice);
    $("#winner").html(winner);
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var computerChoice = null;
    var userChoice = null;
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.
    $(".choice").click(function(){
        computerChoice = generateComputerChoice();
        userChoice = $(this).attr("id");
        console.log(userChoice);
        pickWinner(userChoice, computerChoice);
    });
    // This line callss the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    

});