const questionsArray = [
  {
    questionText: 'How many NHL teams are located in California?',
    questionChoices: ['One', 'Two', 'Three', 'Four', 'Five'],
    questionCorrectChoice: 2
  },
  {
    questionText: 'Which city will soon get its own NHL team?',
    questionChoices:['Seattle', 'Cleveland', 'Austin', 'Halifax', 'Portland'],
    questionCorrectChoice: 0
  },
  {
    questionText: 'Which player leads the league in points for the 2019/2020 season?',
    questionChoices: ['Connor McDavid', 'David Pastrnak', 'Alexander Ovechkin', 'Leon Draisaitl', 'Artemi Panarin'],
    questionCorrectChoice: 3
  },
  {
    questionText: 'Who is the Florida Panther\'s all-time leading scorer?',
    questionChoices: ['Pavel Bure', 'Olli Jokinen', 'Scott Mellanby', 'Alexander Barkov', 'Jonathan Huberdeau'],
    questionCorrectChoice: 4
  },
  {
    questionText: 'Who is the NHL\'s all-time leading goal scorer?',
    questionChoices: ['Phil Esposito', 'Alexander Ovechkin', 'Gordie Howe', 'Jaromir Jagr', 'Wayne Gretzky'],
    questionCorrectChoice: 4
  }
];

let currentQuestionNumber = 0;
let totalNumberOfQuestions = questionsArray.length;
let totalNumberOfCorrectAnswers = 0;

function questionDisplay(){
  $('#question').text(questionsArray[currentQuestionNumber].questionText);
  $('#choices').empty();
  let totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;
  for (let i = 0; i < totalNumberOfChoices; i++) {
    let buildEachChoiceHTML = `<input type='radio' class='option' value= ${(i)}>${questionsArray[currentQuestionNumber].questionChoices[i]}<br>`;
    $('#choices').append(buildEachChoiceHTML);
  }
  $('#questionNumberDisplay').text(`Question ${currentQuestionNumber + 1} of ${totalNumberOfQuestions}`);
}

function startQuiz(){
  $('#startQuizButton').click(function(){
    $('.result-section').hide();
    $('.start-section').hide();
    $('.quiz-section').show();
    $('#result_msg').empty();
    questionDisplay();
  });
}

function answerQuestions(){
  $('.quiz-section').on('click', '.option', function(){
    let userAnswer = $('input[class="option"]:checked').val();
    userAnswer = Number(userAnswer);
    console.log(typeof userAnswer);
    let correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
    if (userAnswer === correctAnswer){
      totalNumberOfCorrectAnswers++;
      $('#images').html('<h3>Correct!</h3><img class=\'celly\' src=\'images/celebration.jpg\'>');
    }
    
    else {
      const creditedResponse = questionsArray[currentQuestionNumber].questionChoices[correctAnswer];
      $('#images').html('<h3>The correct answer was ' + creditedResponse +'.</h3><img class=\'celly\' src=\'images/bodycheck.jpg\'>');
      $('#result_message').html('<h3>The correct answer was ' + creditedResponse + '.</h3>');
    }

    if ((currentQuestionNumber + 1) === totalNumberOfQuestions){
      $('.final-score').text(`${totalNumberOfCorrectAnswers}/${totalNumberOfQuestions}`);
      $('.quiz-section').hide();
      $('.start-section').hide();
      $('.result-section').show();
    }
    
    else {
      currentQuestionNumber++;
      $('#scoreDisplay').html(`Your Score Is ${totalNumberOfCorrectAnswers}/${currentQuestionNumber}`);      
      questionDisplay();
    }
  });
}

function restartQuiz(){
  $('.result-section').on('click', '#tryagain', function(){
    $('.start-section').show();
    $('.quiz-section').hide();
    $('.result-section').hide();
    $('#images').html('');
    $('#scoreDisplay').html('');
    currentQuestionNumber = 0;
    totalNumberOfCorrectAnswers = 0;
  }
  );
}

function handleQuizApp(){
  startQuiz();
  answerQuestions();
  restartQuiz();
}

$(handleQuizApp());