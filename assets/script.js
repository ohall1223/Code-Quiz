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

// on start quiz button push (event handler)
document.getElementById("startButton").addEventListener("click", function(){
    // hide intro page info
    console.log("It's Working")
    // display first question & choices
    document.getElementById("openers").style.display="none";
    displayNext()
    setInterval(function(){
        
    })

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
        displayNext()
    } else {
        // else 
        // display something to indicate incorrect selection for 3 seconds
        document.getElementById("questions").children[5].textContent="Wrong!"
        // decrement time
        score--
        displayNext()
    }
    index++
}

function displayNext() {
    document.getElementById("questions").children[0].textContent=questions[index]["title"]
    document.getElementById("questions").children[1].textContent=questions[index]["choices"][0]
    document.getElementById("questions").children[2].textContent=questions[index]["choices"][1]
    document.getElementById("questions").children[3].textContent=questions[index]["choices"][2]
    document.getElementById("questions").children[4].textContent=questions[index]["choices"][3]
    
}
 

// for multiple choice selection (event  handler)
// conditional to check if the selected choice matches the answer
// if selected choice matches answer then do something to indicate answer is correct & show next question
// if selected choice does not match answer then decrement 5 seconds from the timer and indicate answer is incorrect

// when we reach the end of our questions array or if score gets to 0 display the score & prompt an initial input & save to the high score board 