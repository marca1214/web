const questions = [
    {
        question: "¿Cuantos litros de sangre tiene una persona?",
        answers: [
            { text: "Tiene entre 2 y 4 litros", correct: false },
            { text: "Tiene entre 4 y 6 litros", correct: true },
            { text: "Tiene 10 litros", correct: false },
            { text: "Tiene 7 litros", correct: false }
        ]
    },
    {
        question: "¿Qué es la fotosíntesis?",
        answers: [
            { text: "Un proceso de reproducción", correct: false },
            { text: "Un proceso químico en plantas", correct: true },
            { text: "Una forma de energía", correct: false },
            { text: "Una técnica de cultivo", correct: false }
        ]
    },
    {
        question: "¿Qué facilita el vuelo de las haves?",
        answers: [
            { text: "Las plumas", correct: false },
            { text: "Su anatomia ", correct: false },
            { text: "Los huesos huecos", correct: true },
            { text: "Bolsas de aire", correct: true }
        ]
    },
    {
        question: "¿Qué produce el color verde de las plantas?",
        answers: [
            { text: "La fotosíntesis", correct: false },
            { text: "La polinisacion", correct: false },
            { text: "La clorofila", correct: true },
            { text: "El caroteno", correct: false }
        ]
    },
    {
        question: "¿Cuál es el animal mas nesesario del mundo?",
        answers: [
            { text: "Los capibivaras", correct: false },
            { text: "Los gansos", correct: false },
            { text: "El elefante", correct: false },
            { text: "Las abejas", correct: true }
        ]
    },
    {
        question: "¿Cuantos huesos tiene el ser humano?",
        answers: [
            { text: "300 huesos ", correct: false },
            { text: "207 huesos", correct: false },
            { text: "205 huesos", correct: false },
            { text: "206 huesos", correct: true }
        ]
    },
    {
        question: "¿Cuales son los reinos de la naturaleza ?",
        answers: [
            { text: "son:reino monera, reino protista ", correct: false },
            { text: "son:reino funji, reino protista, reino animalia ", correct: false },
            { text: "son: reino funji, reino protista, reino monera, reino animalia, reino platae", correct: true }
        ]
            
    },
    {
        question: "¿Cual es el organo mas grande del ser humano?",
        answers: [
            { text: "Pulmon", correct: true },
            { text: "Intestino delgado", correct: false },
            { text: "Intestino grueso", correct: false },
            { text: "La piel", correct: true }
        ]
    },
    {
        question: "¿Cual estos animales es un mamifero?",
        answers: [
            { text: "Cocodrillo", correct: false },
            { text: "Pinguino", correct: false},
            { text: "Tortuga", correct: false},
            { text: "Delfin", correct: true}
        ]
    },
    {
        question: "¿Cual es el nombre de la molecula que contiene la imformacion genetica?",
        answers: [
            { text: "ADN", correct: true },
            { text: "ARN", correct: false },
            { text: "Enzima", correct: false},
            { text: "Lipido", correct: false}
        ]
    },       
    {
        question: "¿Que tipo de celula carece el nucleo?",
        answers: [
            { text: "Celula Procariota", correct: true },
            { text: "Celula eucariota", correct: false },
            { text: "Celula vegetal", correct:false}
        ]
    },
    {
        question: "¿Que tipo de organismo es capas de hacer fotosintecis?",
        answers: [
            { text: "Hongos y bacterias", correct: false },
            { text: "Pantas y bacterias", correct: true }
        ]
    },
    {
        question: "¿Cual de estos sistemas del cuerpo humano es responsable de trasnportar la sangre?",
        answers: [
            { text: "Sistema circulatorio", correct: true },
            { text: "Sistema nervioso", correct: false },
            { text: "Sistema digestivo", correct: false},
            { text: "Sistema linfatico", correct: false}
        ]
    },
    {   question: "¿Cuales el organo encargado de filtrar los desechos de la sangre ?",
        answers: [
            { text: "pulmones", correct: false},
            { text: "higado", correct: false},
            { text: "Riñones", correct: true},
            { text: "pacreas", correct: false}

        ]
    },
    {
        question: "¿Que tipo de tejido conecta los musculos con los huesos ?",
        answers: [
            { text: "Tejido epitelial", correct: false},
            { text: "Tejido muscular ", correct: false},
            { text: "Tejido nervioso ", correct: false},
            { text: "Tejido conectivo", correct: true}
        ]
    },
    {
        question:"¿Que tipo de comida comen los herbivoros?",
        answers: [
            { text: "Insectos", correct: false},
            { text: "Carne", correct: false},
            { text: "Plantas", correct: true},
            { text: "Peces", correct: false}
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        score++;
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text && correct) {
            button.style.backgroundColor = 'green';
        } else if (button.innerText === answer.text && !correct) {
            button.style.backgroundColor = 'red';
        }
    });
    nextButton.style.display = 'block';
}

function showScore() {
    questionContainer.style.display = 'none';
    scoreContainer.innerText = `Tu puntaje es: ${score} de ${questions.length}`;
    scoreContainer.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        showScore();
    }
});

startGame();
