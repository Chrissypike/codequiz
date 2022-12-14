let question = document.querySelector('#question');
let options = Array.from(document.querySelectorAll('.optiontext'));
let progressItems = document.querySelector('#progressItems');
let scoreText = document.querySelector('#score');
let progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acquireAnswers = true
let score = 0
let questionTally = 0
let availiableQuestions = []

let questions = [
    {
        question: 'Commonly used data types DO Not Include:',
        option1: 'strings',
        option2: 'booleans',
        option3: 'alerts',
        option4: 'numbers',
        answer: 'numbers',
    },

    {
        question: 'The condition in an if/else statement is enclosed with ___',
        option1: 'quotes',
        option2: 'curly brackets',
        option3: 'paranthesis',
        option4: 'square brackets',
        answer: paranthesis,
    },
    {
        question: 'Arrays in JavaScript can be used to store ___',
        option1: 'numbers and strings',
        option2: 'other arrays',
        option3: 'booleans',
        option4: 'all of the above',
        answer: 'all of the above',
    },
    {
        question: 'String values must be enclosed with ___ when being assigned to variables.',
        option1: 'commas',
        option2: 'curly brackets',
        option3: 'quotes',
        option4: 'paranthesis',
        answer: '',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        option1: 'JavaScript',
        option2: 'terminal/bash',
        option3: 'for loops',
        option4: 'console.log',
        answer: '',
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionTally = 0
    score = 0
    availiableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availiableQuestions.length === 0 || questionTally > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assigned('/end.html')
    }

    questionCounter ++
    progressItems.innerText = `Question ${questionTally} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questiontally/MAX_QUESTIONS) *100}%`

    options.forEach(option => {
        const number = choice.dataset['number']
        option.innerText = currentQuestion['option' + number]
    })

    availiableQuestions.splice(questionIndex, 1)
    acquireAnswers = true

}

options.forEach(choice => {
    option.addEventListener('click', e => {
        if(!acquireAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selctedAnswer = selectedChoice.dataset['number']

        let classToApply = selctedAnswer == currentQuestion.answer ? 'correct':
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice = parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion ()

        }, 1000)

    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame ();

