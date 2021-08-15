let AllQuestions = [
    {
        no: "01",
        Question: "What does HTML stand for?",
        option_1: 'HighText Machine Language',
        option_2: 'HyperText and links Markup Language',
        option_3: 'HyperText Markup Language',
        option_4: 'None Of them',
        correct: "C"
    },
    {
        no: "02",
        Question: "The correct sequence of HTML tags for starting a webpage is -",
        option_1: 'Head, Title, HTML, body',
        option_2: 'HTML, Body, Title, Head',
        option_3: 'HTML, H1, Title, Body',
        option_4: 'HTML, Head, Title, Body',
        correct: "D"
    },
    {
        no: "03",
        Question: "Which of the following element is responsible for making the text bold in HTML?",
        option_1: '<pre>',
        option_2: '<a>',
        option_3: '<b>',
        option_4: '<br>',
        correct: "C"
    },
    {
        no: "04",
        Question: "Which of the following tag is used for inserting the largest heading in HTML?",
        option_1: '<h2>',
        option_2: '<h4>',
        option_3: '<h1>',
        option_4: '<h6>',
        correct: "C"
    },
    {
        no: "05",
        Question: "How to add a background color in HTML?",
        option_1: '<marquee bg_color: "red">',
        option_2: '<marquee bg-color = "red">',
        option_3: '<marquee bgColor = "red">',
        option_4: '<marquee color = "red"></marquee>',
        correct: "B"
    },
    {
        no: "06",
        Question: "What does CSS stand for?",
        option_1: 'Cascade style sheets',
        option_2: 'Color and style sheets',
        option_3: 'Cascading Style Sheet',
        option_4: 'None of the above',
        correct: "C"
    },
    {
        no: "07",
        Question: "The HTML attribute used to define the internal stylesheet is ",
        option_1: '<style>',
        option_2: 'style',
        option_3: '<script>',
        option_4: '</script>',
        correct: "B"
    },
    {
        no: "08",
        Question: "Are the negative values allowed in padding property?",
        option_1: 'No',
        option_2: 'Yes',
        option_3: 'Can\'t say',
        option_4: 'May be',
        correct: "A"
    },
    {
        no: "09",
        Question: "What does API stand for?",
        option_1: 'Application Program Internet',
        option_2: 'Application Programming Interface',
        option_3: 'Apply Procces and Interact',
        option_4: 'None Of them',
        correct: "B"
    },
    {
        no: "10",
        Question: "What you want to be in future?",
        option_1: 'Doctor',
        option_2: 'Engineer',
        option_3: 'Programmer',
        option_4: 'Web developer',
        correct: "D"
    }
]
const resultSection = document.getElementById('result-section')
const QuizContainer = document.getElementById('Quiz-container');
const StartBtn = document.getElementById('Start-quiz-btn');

StartBtn.addEventListener('click', () => {
    const startSection = document.getElementById('start-Quiz');

    QuizContainer.style.display = 'block';
    startSection.style.display = 'none';
})

const Question_number = document.getElementById('Q-number');
const Question = document.getElementById('Question');

const option_A = document.getElementById('option_A');
const option_B = document.getElementById('option_B');
const option_C = document.getElementById('option_C');
const option_D = document.getElementById('option_D');

const selectInput = document.querySelectorAll("input[name='answer']");

let currentQuestion = 0;
LoadQuiz();

let score = 0;
let studentAnswer;

const SubmitButton = document.getElementById('Submit-Button');
SubmitButton.addEventListener('click', () => {
    IsChecked()

    let correctAnswer = AllQuestions[currentQuestion].correct;
    if(studentAnswer == correctAnswer){
        score++;
    }
    
    currentQuestion++;
    if(currentQuestion < AllQuestions.length){
        LoadQuiz();
    }else{
        QuizContainer.style.display = 'none';
        resultSection.style.display = 'block';

        const result = document.getElementById('result');
        result.innerText = score;

        const total_question = document.getElementById('total-question')
        total_question.innerText = AllQuestions.length
    }
    passOrFail(score)
})

function LoadQuiz() {
    const currentQuizData = AllQuestions[currentQuestion]

    Question.innerText = currentQuizData.Question;
    Question_number.innerText = currentQuizData.no;

    option_A.innerText = currentQuizData.option_1;
    option_B.innerText = currentQuizData.option_2;
    option_C.innerText = currentQuizData.option_3;
    option_D.innerText = currentQuizData.option_4;
}

function IsChecked() {
    selectInput.forEach(answer => {
        const checkedAnswer = answer.checked;

        if(checkedAnswer == true){
            studentAnswer = answer.id
        }   
    })
}

function passOrFail(score) {
    const greatingText = document.getElementById('greating');
    let greating;
    if(score > 5) {
        greating = "WELL DONE";
        greatingText.style.color = "green";
    }else{
        greating = "Low score ! try again";
        greatingText.style.color = "red";
    }
    greatingText.innerText = greating;
}
