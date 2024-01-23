//Start Screen
document.addEventListener('DOMContentLoaded', function() {
    const startButton =  document.getElementById('startButton');
    const gameContainer = document.getElementById('trivia');
    const startScreen = document.getElementById('startScreen');

    const questionEl = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer');
    const pointsEl = document.getElementById('pointsCounter');
    let points = 0; //point counter
    let timer; //timer function
    let countdown;
    let timeLeft = 30;

    let questions = [
        {
            question: "What year was the Godfather released?",
            answers: ["1969", "1972", "1978", "1980"],
            correctAnswer: "1972",
            image: "https://images5.alphacoders.com/615/615040.jpg" //place gf image here
        },
    
        {
            question: "Who directed 'Pulp Fiction'?",
            answers: ["Steven Spielberg", "James Cameron", "Martin Scorcesse", "Quentin Tarantino"],
            correctAnswer: "Quentin Tarantino",
            image: "https://filmcolossus.com/wp-content/uploads/2023/05/VideoScreenshot-File1Jz369WSLD80-Vidcloud-6542-e1684891485948.jpg"//pulp fiction image
        },
    
        {
            question: "What does Jack Burton like to say in 'Big Trouble in Little China'?",
            answers: ["It's all in the reflexes.", "I love the smell of Napalm in the morning.", "All work and no play makes Jack a dull boy.", "I'm too old for this..."],
            correctAnswer: "It's all in the reflexes.",
            image: "https://worldfilmgeek.files.wordpress.com/2019/04/bigtroubleinlittlechina-still.jpg"
        },
    
        {
            question: "What is Darth Vader's famous line from 'The Empire Strikes Back'?",
            answers: ["Luke, I am your father.", "Luke, I'm your father.", "No, I am your father.", "I ain't your daddy!"],
            correctAnswer: "No, I am your father.",
            image: "https://images6.alphacoders.com/584/584828.jpg"
        },
    
        {
            question: "Who was almost cast to star in the Terminator before Arnold Schwarzenegger got the role?",
            answers: ["Sylvester Stallone", "Jean-Claude Van Damme", "O.J. Simpson", "Hulk Hogan"],
            correctAnswer: "O.J. Simpson",
            image: "https://images.squarespace-cdn.com/content/v1/59e512ddf43b55c29c71b996/3f10e1fc-e608-49af-86ce-b86d7ccadf73/TERMSE_SIDEA-22.jpg?format=1500w"
    
        }
    ];


    

    function updatePointsDisplay() {
        pointsEl.textContent = 'Points: ' + points;
    
    }
    
   
    
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

        let imageEl = document.getElementById('questionImage');
        imageEl.src = currentQuestion.image;

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

        let currentQuestionIndex = 0;

    startButton.addEventListener('click', function() {
        startScreen.style.display = 'none';
        gameContainer.style.display = 'block';
        setQuestion();
    });





//Movie Triva Game Code


 





updatePointsDisplay();

});


  