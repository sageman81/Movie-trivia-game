//Movie Triva Start

document.addEventListener('DOMContentLoaded', function() {
    const questionEl = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer');
    const pointsEl = document.getElementById('pointsCounter');
    let points = 0; //point counter
    let timer; //timer function

let questions = [
    {
        question: "What year was the Godfather released?",
        answers: ["1969", "1972", "1978", "1980"],
        correctAnswer: "1972"
    },

    {
        question: "Who directed 'Pulp Fiction'?",
        answers: ["Steven Spielberg", "James Cameron", "Martin Scorcesse", "Quentin Tarantino"],
        correctAnswer: "Quentin Tarantino"
    },

    {
        question: "What does Jack Burton like to say in 'Big Trouble in Little China'?",
        answers: ["It's all in the reflexes.", "I love the smell of Napalm in the morning.", "All work and no play makes Jack a dull boy.", "I'm too old for this..."],
        correctAnswer: "It's all in the reflexes."
    },

    {
        question: "What is Darth Vader's famous line from 'The Empire Strikes Back'?",
        answers: ["Luke, I am your father.", "Luke, I'm your father.", "No, I am your father.", "I ain't your daddy!"],
        correctAnswer: "No, I am your father."
    },

    {
        question: "Who was almost cast to star in the Terminator before Arnold Schwarzenegger got the role?",
        answers: ["Sylvester Stallone", "Jean-Claude Van Damme", "O.J. Simpson", "Hulk Hogan"],
        correctAnswer: "O.J. Simpson"

    }


];

let currentQuestionIndex = 0;

function updatePointsDisplay() {
    pointsEl.textContent = 'Points: ' + points;

}

let countdown;
let timeLeft = 30;

function updateTimerDisplay() {
    document.getElementById('timerDisplay').textContent = timeLeft;
}

function startTimer() {
    timeLeft =  30; 
    updateTimerDisplay();

    countdown = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            moveToNextQuestion();
        }
    }, 1000);
    }



function setQuestion() {
    clearInterval(countdown);//clears the timer
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.onclick = function() { selectAnswer(currentQuestion.answers[index]);}
    });
    startTimer(); //start timer for new section
}

function selectAnswer(answer) {
    let currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        points++;
        alert("Correct! Your points: " + points); //***return to main screen or show results*/
        
    } else {
        points--;
        alert("Incorrect! You lost a point! Your points: " + points);
    }
    updatePointsDisplay();
    moveToNextQuestion();
}


function moveToNextQuestion() {
    clearInterval(countdown);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setQuestion();
    } else {
        alert("Quiz complete! Total Score : " + points);
    }
    }

updatePointsDisplay();
setQuestion();

});
  