// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Provoje perseri</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
    new Question(
        "Cili eshte Hyper Text Markup Language?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
    ),
    new Question(
        "Cili eshte Cascading Style Sheet?", ["HTML", "JQuery", "CSS", "XML"], "CSS"
    ),
    new Question(
        "Cili eshte JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"
    ),
    new Question(
        "Cila eshte backend language?", ["PHP", "HTML", "React", "All"], "PHP"
    ),
    new Question(
        "Cila eshte Artificial intelligence?", ["React", "Laravel", "Python", "Sass"], "Python"
    ),
    new Question(
        "Kush i bën standardet e Uebit?", ["WWW", "Mozilla", "Google", "Microsoft"], "WWW"
    ),
    new Question(
        "Zgjidhni elementin e duhur HTML për titullin më të madh", ["h6", "head", "title", "h1"], "h1"
    ),
    new Question(
        "Cili është elementi i duhur HTML për të futur një rrjesht te ri?", ["ib", "br", "td", "tr"], "br"
    ),
    new Question(
        "Zgjidhni elementin e duhur HTML për të përcaktuar tekstin e rëndësishëm?", ["strong", "i", "b", "e"], "strong"
    ),
    new Question(
        "Cili karakter përdoret për të treguar një etiketë fundore?", ["^", "<", "*", "/"], "/"
    ),
    new Question(
        "Elementet inline zakonisht shfaqen pa nisur një linjë të re?", ["E vertet","E gabuar"], "E vertet"
    ),
    new Question(
        "Cili eshte elementi per krijimin e listes se renditur?", ["li","ol","dl","ul"], "ol"
    ),
    new Question(
        "Cili eshte elementi per krijimin e listes pa renditur?", ["li","ol","dl","ul"], "ul"
    ),
    new Question(
        "Cila eshte e sakte per te krijuar checkbox", ["input type='textfield'","textinput type='text'","textfield","input type='text'"], "input type='text'"
    ),
    new Question(
        "Cili është HTML-ja e duhur për të krijuar një zonë teksti??", ["input type='textarea'","input type='textbox'","textarea"], "input type='textarea'"
    ),
    
   

];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add A CountDown for the Quiz
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCountdown();
