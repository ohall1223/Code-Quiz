// an array of objects with questions and answers
var questions = [
    {
        title: "Which of the following is NOT a valid data type in JavaScript",
        choices: ["Boolean", "Number", "String", "Hedgehog"],
        answer: "Hedgehog"
    },
    {
        title: "Which tag is used to write JavaScript code",
        choices: ["<script>", "<head>", "<main>", "<java>"],
        answer: "<script>"
    },
    {
        title: "A conditional statement is wrapped in...",
        choices: ["Parentheses", "Curly Braces", "Brackets", "Quotes"],
        answer: "Curly Braces"
    },
     {
        title: "Which of the following built in function adds one or more elements to the end of an array?",
        choices: ["pop()", "join()", "push()", "map()"],
        answer: "push()"
    },
     {
        title: "Which built-in method returns the character at the specified index?",
        choices: ["charAt()", "getCharAt()", "characterAt()", "None of the above"],
        answer: "charAt()"
    },
]

// Declared variables
var score = 60;
var index = 0;
var finalScore;

// on start quiz button push (event handler)
document.getElementById("startButton").addEventListener("click", function(){
    // hide intro page info
    console.log("It's Working")
    // display first question & choices
    document.getElementById("openers").style.display="none";
    displayNext()
    countDown = setInterval(function(){
        score--;
        document.getElementById("currentTime").textContent="Current remaining time is " + score + " seconds"
        if(score <= 0) {
            clearInterval(countDown)
            if(index < questions.length){
                clearInterval(countDown)
                gameOver()
            }
        }
    }, 1000)

})



document.getElementById("currentTime").textContent="Current remaining time is " + score + " seconds"

document.getElementById("questions").children[1].addEventListener("click", checkAnswer)
document.getElementById("questions").children[2].addEventListener("click", checkAnswer)
document.getElementById("questions").children[3].addEventListener("click", checkAnswer)
document.getElementById("questions").children[4].addEventListener("click", checkAnswer)

function checkAnswer(event){
    if(event.target.textContent === questions[index]["answer"]){
        // display something to indicate correct selectoin for 3 seconds 
        document.getElementById("questions").children[5].textContent="Correct!"
    } else {
        // else 
        // display something to indicate incorrect selection for 3 seconds
        document.getElementById("questions").children[5].textContent="Wrong!"
        // decrement time
        score = score-5
    }
    index++
    if(index < questions.length){
        displayNext()
    } else {
        gameOver()
    }
}

function displayNext() {
    document.getElementById("questions").children[0].textContent=questions[index]["title"]
    document.getElementById("questions").children[1].textContent=questions[index]["choices"][0]
    document.getElementById("questions").children[2].textContent=questions[index]["choices"][1]
    document.getElementById("questions").children[3].textContent=questions[index]["choices"][2]
    document.getElementById("questions").children[4].textContent=questions[index]["choices"][3]
    
}

function gameOver() {
    console.log("Game Over")
    document.getElementById("currentTime").style.display="none"
    document.getElementById("questions").children[0].style.display="none"
    document.getElementById("questions").children[1].style.display="none"
    document.getElementById("questions").children[2].style.display="none"
    document.getElementById("questions").children[3].style.display="none"
    document.getElementById("questions").children[4].style.display="none"
    document.getElementById("questions").children[5].style.display="none"
    document.getElementById("finalScore").textContent= score
    document.getElementById("highScore").textContent= "Game OVER!"
     finalScore=score
    console.log(finalScore)

    var initials = prompt("Please enter your initials to log your high score", "Initials")
    console.log(initials)

    storeHighScores(finalScore, initials)
}
 
function storeHighScores(finalScore, initials) {

    if(initials === ""){
        alert("Please enter your initials!")
        return;
    }

    var highScoreArray=[]

    var userScore = {
        initials: initials,
        score: finalScore
    }

    highScoreArray.push(userScore)

    localStorage.setItem("highScores", JSON.stringify(highScoreArray))

    console.log(userScore)
    console.log(highScoreArray)

    displayHighScores()
}

function displayHighScores() {

    var savedHighScores = localStorage.getItem("highScores")
    
    if(savedHighScores === null) {
        return
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores)

    for(var i = 0; i < storedHighScores.length; i++) {
        var newHighScore = document.createElement("p")
        newHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score
        highScore.appendChild(newHighScore)
    }
}

// for multiple choice selection (event  handler)
// conditional to check if the selected choice matches the answer
// if selected choice matches answer then do something to indicate answer is correct & show next question
// if selected choice does not match answer then decrement 5 seconds from the timer and indicate answer is incorrect

// when we reach the end of our questions array or if score gets to 0 display the score & prompt an initial input & save to the high score board 