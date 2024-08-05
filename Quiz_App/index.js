const quizQuestions = [
    {
         question : "Which animal is known as the 'Ship of the Desert ?",
        options : [
            {option1 :"Lion", correct : false },
            {option2 :"camel", correct : true },
            {option3 :"Elephant", correct : false },
            {option4 :"Tiger", correct : false },
        ]
    },
    {
        question : "Name the biggest continent in the world ?",
        options : [
            {option1 :"Europe", correct : false },
            {option2 :"Antarctica", correct : false },
            {option3 :"Asia", correct : true },
            {option4 :"Africa", correct : false },
        ]
    },
    {
        question : "Name the largest mammal ?",
        options : [
            {option1 :"Blue Whale", correct : true },
            {option2 :"Elephant", correct : false },
            {option3 :"Monkey", correct : false },
            {option4 :"Human", correct : false },
        ]
    },
    {
        question : "Name the largest planet of our Solar System?",
        options : [
            {option1 :"Venus", correct : false },
            {option2 :"Earth", correct : false },
            {option3 :"Mars", correct : false },
            {option4 :"Jupiter", correct : true },
        ]
    },
    {  
        question : "Who was the first Prime Minister of India?",
        options : [
            {option1 :"Pandit Jawaharlal Nehru", correct : true },
            {option2 :"Indira gandhi", correct : false },
            {option3 :"Dr. Rajendra Prasad", correct : false },
            {option4 :"Mahatma Gandhi", correct : false },
        ]
    },
    {
        question : "How many states are there in India?",
        options : [
            {option1 :"28", correct : true },
            {option2 :"26", correct : false },
            {option3 :"29", correct : false },
            {option4 :"27", correct : false },
        ]
    },
    {
        question : "Name a bird that lays the largest eggs ?",
        options : [
            {option1 :"Ostrich", correct : true },
            {option2 :"Crow", correct : false },
            {option3 :"sparrow", correct : false },
            {option4 :"Duck", correct : false },
        ]
    },
    {
        question : "Which is the tallest mountain in the world ?",
        options : [
            {option1 :"Kangchenjunga", correct : false },
            {option2 :"K2", correct : false },
            {option3 :"Mount Everest", correct : true },
            {option4 :"Himalaya", correct : false },
        ]
    },
    {
        question : "How many bones are there in the Human Body",
        options : [
            {option1 :"200", correct : false },
            {option2 :"208", correct : false },
            {option3 :"207", correct : false },
            {option4 :"206", correct : true },
        ]
    },
    {
        question : "What is the launch date for Chandrayaan 3 mission ?",
        options : [
            {option1 :"July 14, 2023", correct : true },
            {option2 :"June 14, 2023", correct : false },
            {option3 :"July 14, 2022", correct : false },
            {option4 :"June 14, 2022", correct : false },
        ]
    },
]

// display question part
let appendQuestion = (qQuestions) =>{
    let count = 0;
   let  getQuestionDiv = document.getElementById("display-question");
   for(let i=0; i<quizQuestions.length; i++){
getQuestionDiv.innerHTML =(`<h1>${count}/10 
    ${quizQuestions[i].question}<br></br>
  <input type="checkbox" id="1" name="1">
  <label for="1">${quizQuestions[i].options.option1}</label><br>
  <input type="checkbox" id="2" name="2">
  <label for="2">${quizQuestions[i].options.option2}</label><br>
  <input type="checkbox" id="3" name="3">
  <label for="3">${quizQuestions[i].options.option3}</label><br><br>
  <input type="checkbox" id="4" name="4">
  <label for="4">${quizQuestions[i].options.option4} </label><br><br>
  </h1>`)
}
}