const q = [

    {
        question: "Who first introduced java ?",
        answers:[
            {text:"Charles Babbage", correct: false},
            {text:"Denis Ritchie", correct: false},
            {text:"James Gosling", correct: true},
            {text:"Guido van Rossum", correct: false},

        ]
    },
    {
        question: "Who does HTML stands for ?",
        answers:[
            {text:"Hyper links and text markup language", correct: false},
            {text:"Hyper text Markup language", correct: true},
            {text:"Home tool Markup language", correct: false},
            {text:"Hyper time Markup laguage", correct: false},
        ]
    },
    {
        question: "Arrays in java are- ",
        answers:[
            {text:"Object refrences", correct: false},
            {text:"Objects", correct: true},
            {text:"Primitive data type", correct:false},
            {text:"none", correct: false},
        ]

    },
    {
        question: "When is the object created with new keyword?",
        answers:[
            {text:"At runtime", correct:true},
            {text:"At compile time", correct: false},
            {text:"Depends on the code", correct:false},
            {text:"none", correct: false},
        ]

    }
];
const questionElement = document.getElementById("q");
const answerButton = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = q[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }


        button.addEventListener("click", selectAnswer);
        
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
        }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}
// function showQuestion(){
//     resetState();
//     questionElement.innerHTML = `You Scored ${score} out of ${q.length}!`;
//     nextButton.innerHTML = "Play again";
//     nextButton.style.display = "block";
// }



function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < q.length){
        showQuestion();

    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < q.length){
        handleNextButton();
    }else{
        startQuiz();

    }
});


startQuiz();
