var questions = [{
	"question": "The first mechanical computer designed by Charles Babbage was called ?",
	"option1": "Abacus",
	"option2": "Analytical Engine",
	"option3": "Calculator",
	"option4": "Processor",
	"answer": "2"
}, {
	"question": "Which of the following is the most powerful type of computer ?",
	"option1": "Super-micro",
	"option2": "Super conductor",
	"option3": "Super computer",
	"option4": "Megaframe",
	"answer": "3"
}, {
    "question":"The average adult has a blood volume of about ________ liters.",
    "option1": "4",
    "option2": "5",
    "option3": "6",
    "option4": "7",
    "answer" : "2"
 },{
    "question":"The most abundant element in the universe is",
    "option1": "Oxygen",
    "option2": "Hydrogen",
    "option3": "Carbon Dioxide",
    "option4": "Silicon",
    "answer" : "2"
 },{
    "question":"Each day human body breathe in ________ liters of air.",
    "option1": "5,000 to 10,000",
    "option2": "10,000 to 15,000",
    "option3": "15,000 to 20,000",
    "option4": "20,000 to 25,000",
    "answer" : "3"
 },{
    "question":"Radioactivity was discovered by",
    "option1": "Lord Kelvin",
    "option2": "J. J. Thomson",
    "option3": "Ernest Rutherford",
    "option4": "Henri Becquerel",
    "answer" : "4"
 },{
    "question":"A device which converts chemical energy into electrical energy is called",
    "option1": "motor",
    "option2": "generator",
    "option3": "moving-coil meter",
    "option4": "battery",
    "answer" : "4"
 },{
    "question":"The lifespan of Red Blood Cells is __________ days.",
    "option1": "60",
    "option2": "120",
    "option3": " 180",
    "option4": "240",
    "answer" : "2"
 },{
    "question":" Deficiency of Vitamin-D results in",
    "option1": "night blindness",
    "option2": "rickets",
    "option3": " scurvy",
    "option4": "hair fall",
    "answer" : "2"
 },{
    "question":"Which from the following is NOT a conductor?",
    "option1": "Aluminium",
    "option2": "Silicon",
    "option3": " Graphite",
    "option4": "All are conductors",
    "answer" : "4"
}];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

