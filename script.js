let QuizData = [{
        question: "What is the capital of pakistan",
        choice: ["Karachi", "Islamabad", "Peshawar", "Lahore"],
        correct: 1
    },

    {
        question: "Number of Provinces in Pakistan?",
        choice: [4, 3, 6, 5],
        correct: 0
    },

    {
        question: "Number of District in khyber Pakhtonkhwa?",
        choice: [31, 35, 37, 41],
        correct: 2
    }
];


let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let questionElement = document.getElementById("question");

    document.getElementById("score").textContent = "Your Score: " + score;

    questionElement.textContent = QuizData[currentQuestion].question;
    document.getElementById("choice1").textContent = QuizData[currentQuestion].choice[0];
    document.getElementById("choice2").textContent = QuizData[currentQuestion].choice[1];
    document.getElementById("choice3").textContent = QuizData[currentQuestion].choice[2];
    document.getElementById("choice4").textContent = QuizData[currentQuestion].choice[3];
}
showQuestion();

function correctAns(selectedOptionIndex) {
    if (currentQuestion < QuizData.length) {
        if (selectedOptionIndex === QuizData[currentQuestion].correct) {
            alert("you got right")
            currentQuestion++;
            score++;
            showQuestion();
        } else {
            alert("you got wrong")
            currentQuestion++;
            showQuestion();
        }
    }
}