function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3);

        if (choice === 0) {
            return "Rock";
        } else if (choice === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    // Function to get human's choice
    function getHumanChoice() {
        let choice = prompt("Please make your selection");

        if (choice === null) {
            // User clicked cancel or closed the prompt
            // Handle this case as needed, e.g., return a default choice or ask again
            return "Cancel";
        }

        return choice.toLowerCase(); // Convert to lowercase for case insensitivity
    }

    // Function to play a single round
    function playRound(humanSelection, computerSelection) {
        humanSelection = humanSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (humanSelection === computerSelection) {
            return "It's a tie!";
        } else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper")
        ) {
            return "Human Wins!";
        } else {
            return "Computer Wins!";
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1}: ${roundResult}`);

        // Update scores based on round result
        if (roundResult === "Human Wins!") {
            humanScore++;
        } else if (roundResult === "Computer Wins!") {
            computerScore++;
        }
    }

    // Declare winner based on scores
    if (humanScore > computerScore) {
        console.log(`Human wins the game with a score of ${humanScore}-${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game with a score of ${computerScore}-${humanScore}`);
    } else {
        console.log(`It's a tie game with a score of ${humanScore}-${computerScore}`);
    }
}

// Start the game
playGame();
