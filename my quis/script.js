
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getDatabase  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCFWmhgD7rva6eWDQ20NikBDe23y02zfSI",
    authDomain: "hcj-quiz.firebaseapp.com",
    projectId: "hcj-quiz",
    storageBucket: "hcj-quiz.firebasestorage.app",
    messagingSenderId: "759837039959",
    appId: "1:759837039959:web:400a559153315c67993212",
    measurementId: "G-CFFY8XEHS9"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  var db = getDatabase(app);
  
console.log(db)

var quizData = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
        correct: 0
    },
    {
        question: "Which HTML element is used to define the largest heading?",
        choices: ["<h1>", "<heading>", "<h6>", "<head>"],
        correct: 0
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        choices: ["color", "font-color", "text-color", "background-color"],
        correct: 0
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        choices: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script file='script.js'>"],
        correct: 0
    },
    {
        question: "Which of the following is the correct way to add a background color in CSS?",
        choices: ["background-color: blue;", "color: blue;", "background: blue-color;", "bgcolor: blue;"],
        correct: 0
    },
    {
        question: "What does the 'var' keyword do in JavaScript?",
        choices: ["Declares a variable", "Creates a function", "Styles an element", "None of the above"],
        correct: 0
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        choices: ["style", "class", "styles", "font"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
        correct: 0
    },
    {
        question: "Which method is used to write a message to the browser's console in JavaScript?",
        choices: ["console.log()", "print()", "echo()", "console.write()"],
        correct: 0
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onmouseover", "onchange", "onclick"],
        correct: 3
    }
];

var currentQuestionIndex = 0;
var score = 0;

var questionEl = document.querySelector('.question');
var choicesEl = document.querySelector('.choices');
var submitButton = document.getElementById('submit');
var resultEl = document.getElementById('result');
var scoreEl = document.getElementById('score');
var restartButton = document.getElementById('restart');
var quizEl = document.getElementById('quiz');

function loadQuestion() {
    var currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(function(choice, index) {
        var li = document.createElement('li');
        li.textContent = choice;
        li.onclick = function() {
            var choices = document.querySelectorAll('.choices li');
            for (var i = 0; i < choices.length; i++) {
                choices[i].classList.remove('selected');
            }
            li.classList.add('selected');
        };
        choicesEl.appendChild(li);
    });
}

submitButton.onclick = function() {
    var selectedChoice = document.querySelector('.choices .selected');
    if (selectedChoice) {
        var answerIndex = Array.prototype.indexOf.call(choicesEl.children, selectedChoice);
        if (answerIndex === quizData[currentQuestionIndex].correct) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            quizEl.classList.add('hidden');
            resultEl.classList.remove('hidden');
            scoreEl.textContent = score + ' / ' + quizData.length;
        }
    } else {
        alert('Please select an answer!');
    }
};

restartButton.onclick = function() {
    currentQuestionIndex = 0;
    score = 0;
    resultEl.classList.add('hidden');
    quizEl.classList.remove('hidden');
    loadQuestion();
};

// Load the first question on page load
loadQuestion();
