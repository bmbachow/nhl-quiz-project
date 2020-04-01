const STORE = {
  questions: [
    {
      question: 'How many NHL teams are located in California?',
      options: ['One', 'Two', 'Three', 'Four', 'Five'],
      answer: 2
    },
    {
      question: 'Which city will soon get its own NHL team?',
      options:['Seattle', 'Cleveland', 'Austin', 'Halifax', 'Portland'],
      answer: 0
    },
    {
      question: 'Which player leads the league in points for the 2019/2020 season?',
      options: ['Connor McDavid', 'David Pastrnak', 'Alexander Ovechkin', 'Leon Draisaitl', 'Artemi Panarin'],
      answer: 3
    },
    {
      question: 'Who is the Florida Panther\'s all-time leading scorer?',
      options: ['Pavel Bure', 'Olli Jokinen', 'Scott Mellanby', 'Alexander Barkov', 'Jonathan Huberdeau'],
      answer: 4
    },
    {
      question: 'Who is the NHL\'s all-time leading goal scorer?',
      options: ['Phil Esposito', 'Alexander Ovechkin', 'Gordie Howe', 'Jaromir Jagr', 'Wayne Gretzky'],
      answer: 4
    },
  ],
  currentQuestion: 0,
  score: 0
};

let totalNumberOfQuestions = STORE.questions.length;

