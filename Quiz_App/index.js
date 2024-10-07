// Signup form code
// document.getElementById('signupForm').addEventListener('submit', function (event) {
//     event.preventDefault();
function validateSignup(event) {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let invalidMsgFullName = document.getElementById("invalid-msg-fullname");
    let invalidMsgPassword = document.getElementById("invalid-msg-password");
    let invalidMsgEmail = document.getElementById("invalid-msg-email");
    let reEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let rePass = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;

    if (fullName.length === 0) {
        invalidMsgFullName.innerHTML = "Enter a Name";
        return false;
    } else if (!reEmail.test(email)) {
        invalidMsgEmail.innerHTML = "Enter a valid Email";
        return false;
    } else if (!rePass.test(password)) {
        invalidMsgPassword.innerHTML = "Enter a valid Password with one uppercase letter, one lowercase letter, and at least one special character.";
        return false;
    }
    else {
        invalidMsgEmail.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        invalidMsgPassword.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        invalidMsgFullName.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        const userData = {
            fullName: fullName,
            email: email,
            password: password
        };
        saveUserData(userData);
    }

    fullName = "";
    email = "";
};

function saveUserData(userData) {
    const storedUserData = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUserData.some(user => user.email === userData.email);
    if (userExists) {
        alert("User already exists");
        return;
    }
    storedUserData.push(userData);
    localStorage.setItem('users', JSON.stringify(storedUserData));
    alert("Registration Successfully");
    window.location.href = "login.html";
}

function passwordHideShow() {
    let showPassword = document.getElementById("Show-password")
    console.log(showPassword);
    let password = document.querySelector("#password");
    if (password.type === "password") {
        password.type = "text";
        showPassword.style.color = "blue";
    } else if (password.type === "text") {
        password.type = "password";
        showPassword.style.color = "black";
    }
}

// signup code ends

// login code start
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let invalidMsgPassword = document.getElementById("invalid-password");
    let invalidMsgEmail = document.getElementById("invalid-email");

    // Retrieve stored user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('users')) || [];
    console.log(storedUserData)

    // Check if the user exists and the password matches
    const user = storedUserData.find(user => user.email === email);
    console.log(user)

    if (email == "") {
        invalidMsgEmail.innerHTML = "Please enter your email"
    }

    else if (password == "") {
        invalidMsgPassword.innerHTML = "Please enter your password"
    }

    else if (!user) {
        invalidMsgEmail.innerHTML = "Email not registered";
        return;
    }

    else if (user.password !== password) {
        invalidMsgPassword.innerHTML = "Incorrect password";
        return;
    }

    else {
        // If login is successful
        invalidMsgEmail.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        invalidMsgPassword.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;

        // Set a flag to indicate that the user is logged in
        localStorage.setItem("isLoggedin", JSON.stringify(user));

        // Redirect to the quiz page
        window.location.href = "quiz.html";
        window.onload = displayUserInfo(rankDisplay);
    }
};

// login code ends

let userLogedIn = (localStorage.getItem('isLoggedin'));

// getting name and email when user logged in and setting as testUser
let testUser = (JSON.parse(userLogedIn));
console.log(testUser);

// quiz page code to get Name at top starts and log out

// Function to get user initials from full name
function getUserInitials() {
    const names = testUser.fullName.split(' ');
    console.log(names);
    if (names.length >= 2) {
        return names[0][0].toUpperCase() + names[1][0].toUpperCase(); // Initials of first and last name
    } else {
        return names[0][0].toUpperCase(); // Initial if only one name
    }
}

// Function to display the user's name or initials near the logo
function displayUserInfo() {
    if (testUser.fullName) {
        const userNameElement = document.getElementById("userName");
        // const initials = getUserInitials(testUser.fullName);
        // userNameElement.innerHTML = `Welcome, ${initials}`
        userNameElement.innerHTML = `Welcome, ${testUser.fullName}`
    }
}
displayUserInfo()

// Function to handle logout
function logout() {
    localStorage.removeItem("isLoggedin"); // Optionally remove login status
    window.location.href = "login.html"; // Redirect to login page
}

// quiz page code ends

//questions display starts
let quize = JSON.parse(localStorage.getItem("quizQuestions")) || [];

const quizQuestions = [
    {
        question: "Which animal is known as the 'Ship of the Desert ?",
        options: [
            { value: "Lion" },
            { value: "Camel" },
            { value: "Elephant" },
            { value: "Tiger" },
        ],
        rightAns: "Camel"
    },
    {
        question: "Name the biggest continent in the world ?",
        options: [
            { value: "Europe" },
            { value: "Antarctica" },
            { value: "Asia" },
            { value: "Africa" },
        ],
        rightAns: "Asia"
    },
    {
        question: "Name the largest mammal ?",
        options: [
            { value: "Blue Whale" },
            { value: "Elephant" },
            { value: "Monkey" },
            { value: "Human" },
        ],
        rightAns: "Blue Whale"
    },
    {
        question: "Name the largest planet of our Solar System?",
        options: [
            { value: "Venus" },
            { value: "Earth" },
            { value: "Mars" },
            { value: "Jupiter" }
        ],
        rightAns: "Jupiter"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: [
            { value: "Pandit Jawaharlal Nehru" },
            { value: "Indira Gandhi" },
            { value: "Dr. Rajendra Prasad" },
            { value: "Mahatma Gandhi" },
        ],
        rightAns: "Pandit Jawaharlal Nehru"
    },
    {
        question: "How many states are there in India?",
        options: [
            { value: "28" },
            { value: "26" },
            { value: "29" },
            { value: "27" },
        ],
        rightAns: "28"
    },
    {
        question: "Name a bird that lays the largest eggs ?",
        options: [
            { value: "Ostrich" },
            { value: "Crow" },
            { value: "Sparrow" },
            { value: "Duck" },
        ],
        rightAns: "Ostrich"
    },
    {
        question: "Which is the tallest mountain in the world ?",
        options: [
            { value: "Kangchenjunga" },
            { value: "K2" },
            { value: "Mount Everest" },
            { value: "Himalaya" },
        ],
        rightAns: "Mount Everest"
    },
    {
        question: "How many bones are there in the Human Body?",
        options: [
            { value: "200" },
            { value: "208" },
            { value: "207" },
            { value: "206" },
        ],
        rightAns: "206"
    },
    {
        question: "What is the launch date for Chandrayaan 3 mission ?",
        options: [
            { value: "July 14, 2023" },
            { value: "June 14, 2023" },
            { value: "July 14, 2022" },
            { value: "June 14, 2022" },
        ],
        rightAns: "July 14, 2023"
    },
    {
        question: "Who is the Father of our Nation ?",
        options: [
            { value: "Mahatma Gandhi" },
            { value: "B.R. Ambedkar" },
            { value: "Dr. Rajendra Prasad" },
            { value: "Subhash Chandra Bose" },
        ],
        rightAns: "Mahatma Gandhi"
    },
    {
        question: "Highest dam of India is?",
        options: [
            { value: "Mettur Dam" },
            { value: "Indira Sagar Dam" },
            { value: "Tehri Dam" },
            { value: "Cheruthoni Dam" },
        ],
        rightAns: "Tehri Dam"
    },
    {
        question: "Smallest state of India is ?",
        options: [
            { value: "Goa" },
            { value: "Maharashtra" },
            { value: "Rajasthan" },
            { value: "Odisha" },
        ],
        rightAns: "Goa"
    },
    {
        question: "Who is the current President of India ?",
        options: [
            { value: "Narendra Modi" },
            { value: "Amit Shah" },
            { value: "Arvind Kejriwal" },
            { value: "Droupadi Murmu" },
        ],
        rightAns: "Droupadi Murmu"
    },
    {
        question: "What is the Full form of ISRO ?",
        options: [
            { value: "Indian Space Research Organization" },
            { value: "International Space Research Organization" },
            { value: "International Space Retail Organization" },
            { value: "India Spain Russia Oman" },
        ],
        rightAns: "Indian Space Research Organization"
    }
];

let savedInLocal = JSON.stringify(quizQuestions);
localStorage.setItem("quizQuestions", savedInLocal);
const fetchQuize = JSON.parse(localStorage.getItem("quizQuestions"));

let questionNumber = 1;
let totalQuestions = 10;
let quizRandomPosition = 0;
let quizRandomQuestion = [];
let quizUsedIndexes = new Set();
let selectedAnswers = Array(totalQuestions).fill(null); // Store selected answers for all questions

const questionHeading = document.getElementById("questionHead");
const questionNumberElement = document.getElementById("questionNum");
const questionElement = document.getElementById("question");
const optionElement = document.getElementById("options");
const nextoptionElement = document.getElementById("nextquestion");
const previousoptionElement = document.getElementById("previousquestion");
const progressBarElement = document.getElementById("progress");
const displayScore = document.getElementById("displayScore")
let score = 0;
const selectedOption = document.querySelector('input[name="options"]:checked');

//  function to get a random index thats not repeated
function getRandomIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quizQuestions.length);
    } while (quizUsedIndexes.has(randomIndex));
    quizUsedIndexes.add(randomIndex);
    return randomIndex;
}

// Populate quizRandomQuestion with unique questions
for (let i = 0; i < 10; i++) {
    const randomIndex = getRandomIndex();
    quizRandomQuestion.push(quizQuestions[randomIndex]);
    console.log(quizQuestions[randomIndex])
}

// to display quizquestion first time default
if (questionElement && optionElement) {
    questionHeading.innerHTML = `<h1>Question ${questionNumber} of 10`
    questionNumberElement.innerHTML = `${quizRandomPosition + 1}.`;
    questionElement.innerHTML = quizRandomQuestion[quizRandomPosition].question;
    optionElement.innerHTML = `<div class= "optionText">1. <input type="radio" name="options" id="option1" value="${quizRandomQuestion[quizRandomPosition].options[0].value}"/><label for="option1">${quizRandomQuestion[quizRandomPosition].options[0].value}</label></div>`;
    optionElement.innerHTML += `<div class= "optionText">2. <input type="radio" name="options" id="option2" value="${quizRandomQuestion[quizRandomPosition].options[1].value}"/><label for="option2">${quizRandomQuestion[quizRandomPosition].options[1].value}</label> </div>`;
    optionElement.innerHTML += `<div class= "optionText">3. <input type="radio" name="options" id="option3" value="${quizRandomQuestion[quizRandomPosition].options[2].value}"/><label for="option3">${quizRandomQuestion[quizRandomPosition].options[2].value}</label></div>`;
    optionElement.innerHTML += `<div class= "optionText">4. <input type="radio" name="options" id="option4"  value="${quizRandomQuestion[quizRandomPosition].options[3].value}"/><label for="option4">${quizRandomQuestion[quizRandomPosition].options[3].value}</label></div>`;
    nextoptionElement.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`
    previousoptionElement.style.display = "hide"
};
updateProgressBar();


// Function to display the next questions and options
function displayQuestion() {
    for (let i = 0; i < 10; i++) {
        if (questionElement && optionElement && quizRandomPosition > 0) {
            questionHeading.innerHTML = `<h1>Question ${questionNumber + 1} of ${quizRandomQuestion.length}`
            questionNumberElement.innerHTML = `${quizRandomPosition + 1}.`;
            questionElement.innerHTML = quizRandomQuestion[quizRandomPosition].question;
            optionElement.innerHTML = `<div class= "optionText">1. <input type="radio" name="options" id="option1" value="${quizRandomQuestion[quizRandomPosition].options[0].value}"/><label for="option1">${quizRandomQuestion[quizRandomPosition].options[0].value}</label></div>`;
            optionElement.innerHTML += `<div class= "optionText">2. <input type="radio" name="options" id="option2" value="${quizRandomQuestion[quizRandomPosition].options[1].value}"/><label for="option2">${quizRandomQuestion[quizRandomPosition].options[1].value}</label> </div>`;
            optionElement.innerHTML += `<div class= "optionText">3. <input type="radio" name="options" id="option3" value="${quizRandomQuestion[quizRandomPosition].options[2].value}"/><label for="option3">${quizRandomQuestion[quizRandomPosition].options[2].value}</label></div>`;
            optionElement.innerHTML += `<div class= "optionText">4. <input type="radio" name="options" id="option4"  value="${quizRandomQuestion[quizRandomPosition].options[3].value}"/><label for="option4">${quizRandomQuestion[quizRandomPosition].options[3].value}</label></div>`;
            nextoptionElement.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`
            previousoptionElement.style.display = "inline"
            previousoptionElement.innerHTML = `Previous <i class="fa-solid fa-arrow-left"></i>`
        };
        updateProgressBar();
    }
}


// function previousQuestion() {
//     questionNumber--;
//     if(quizRandomPosition  >= 0){
//         quizRandomPosition --;
//         // questionHeading.innerHTML = `<h1>Question ${questionNumber - 1} of ${quizRandomQuestion.length}`
//         displayQuestion();    
//     }
//     else{
//         return;
//     }
//     }

// function saveAnswer() {
//     // Get the selected radio button
//     if (selectedOption) {
//         selectedAnswers[questionNumber - 1] = selectedOption.value;
//     }
// }

// function loadAnswer() {
//     // Clear the previously selected radio button
//     const options = document.querySelectorAll('input[name="options"]');
//     options.forEach(option => {
//         option.checked = false;
//     });

//     // / Load the saved answer for the current question, if any
//     const savedAnswer = selectedAnswers[questionNumber - 1];
//     if (savedAnswer) {
//         document.querySelector(`input[name="options"][value="${savedAnswer}"]`).checked = true;
//     }
// }

// Retrieve score for leaderboard or further usage
function getUserScores() {
    const storedScores = JSON.parse(localStorage.getItem('userScores')) || [];
    console.log(storedScores);
    return storedScores;
}

// Function to show the progress
function updateProgressBar() {
    const progress = (quizRandomPosition / totalQuestions) * 100;
    if (progressBarElement) {
        progressBarElement.style.width = `${progress}%`;
    }
}

// Function to get Score
function updateScore(selectedAnswer) {
    // console.log(quizRandomQuestion)
    // console.log(selectedAnswer)
    // console.log(selectedAnswer.value)
    // console.log(quizRandomQuestion[quizRandomPosition].rightAns)
    let choosedRightAns = (selectedAnswer.value == quizRandomQuestion[quizRandomPosition].rightAns)
    console.log({selectedAnswer, quizRandomQuestion, quizRandomPosition})
    // console.log(choosedRightAns)

    if (choosedRightAns) {
        score +=2;
    }

    console.log({choosedRightAns, score})
    // console.log(`your score is ${score}`);   
}


// function to show top 6 leaderboard
function showLeaderboard() {

    // Sort the users by score in descending order 
    let userScores = JSON.parse(localStorage.getItem('userScores')) || [];
    let sortedUsers = userScores.sort((a, b) => b.score - a.score);

    // elements 
    let top1Name = document.getElementById("top1Name");
    let top1Score = document.getElementById("top1Score");
    let top2Name = document.getElementById("top2Name");
    let top2Score = document.getElementById("top2Score");
    let top3Name = document.getElementById("top3Name");
    let top3Score = document.getElementById("top3Score");
    let top4Name = document.getElementById("top4Name");
    let top4Score = document.getElementById("top4Score");
    let top5Name = document.getElementById("top5Name");
    let top5Score = document.getElementById("top5Score");
    let top6Name = document.getElementById("top6Name");
    let top6Score = document.getElementById("top6Score");

    // let topernames = document.querySelectorAll('.topernames');
    // let topScores = document.querySelectorAll('.topScores');

    let top6 = sortedUsers.slice(0, 6);
    console.log("Leaderboard (Top 6):");
    console.log(top6);
//    console.log(top1Name).value;

    top6.forEach((userScores, index) => {
        // console.log(top1Name);

        if (index == 0) {
            top1Name.innerHTML = `${userScores.testUserName}`
            top1Score.innerHTML = `${userScores.score}`;
        }
        else if (index == 1) {
            top2Name.innerHTML = `${userScores.testUserName}`
            top2Score.innerHTML = `${userScores.score}`;
        }
        else if (index == 2) {
            top3Name.innerHTML = `${userScores.testUserName}`
            top3Score.innerHTML = `${userScores.score}`;
        }
        else if (index == 3) {
            top4Name.innerHTML = `${userScores.testUserName}`
            top4Score.innerHTML = `${userScores.score}`;
        }
        else if (index == 4) {
            top5Name.innerHTML = `${userScores.testUserName}`
            top5Score.innerHTML = `${userScores.score}`;
        }
        else {
            top6Name.innerHTML = `${userScores.testUserName}`
            top6Score.innerHTML = `${userScores.score}`;
        }
    });
}

// Function to show current user's rank
function rankDisplay() {

    let userScores = JSON.parse(localStorage.getItem('userScores')) || [];

    let sortedUsers = userScores.sort((a, b) => b.score - a.score);
    // console.log(sortedUsers)

    let currentUserName = testUser.fullName;
    // console.log(currentUserName);

    let currentUser = sortedUsers.find(user => user.testUserName === currentUserName);
    console.log(currentUser);

    let rankDisplayElement = document.getElementById("rankDisplay");
    let rankScoreElement = document.getElementById("rankScore");


    if (currentUser) {
        //   let userRank = sortedUsers.findIndex(sortedUsers => sortedUsers.score === currentUser.score) + 1;
        let userRank = sortedUsers.findIndex(user => user.testUserName === currentUserName) + 1;

        console.log(currentUser.score);
        console.log(userRank);

        rankDisplayElement.innerHTML = `Wow You Rank ${userRank}`;
        rankScoreElement.innerHTML = `Your Score is ${currentUser.score}`
    } else {
        rankDisplayElement.innerHTML = `User not found.`;
    }
    // debugger
}


function nextQuestion() {
    // saveAnswer();
    
    let selectedOption = document.querySelector('input[name="options"]:checked')
    // let selectedOption = document.querySelector('input[name="options"]:checked').value

    // localStorage.setItem("selectedOption", selectedOption)
    if (!selectedOption) {
        alert("Select a option");
        // return;
    }

    if (questionNumber == 8) {
        quizRandomPosition == 9;
        questionHeading.innerHTML = `<h1>Last 2 Questions left</h1>`
    }

    if (questionNumber == 10) {
        quizRandomPosition == 9;
        nextoptionElement.innerHTML = "submit and continue"
        questionHeading.innerHTML = `<h1>Hey this is last Question</h1>`
    }

   if (quizRandomPosition < quizRandomQuestion.length) {
        updateScore(selectedOption);
        displayQuestion();
        questionNumber++;
        quizRandomPosition++;
    }

    if (quizRandomPosition == quizRandomQuestion.length) {

        //  save score here in localstorage in format

        let userLogedIn = (localStorage.getItem('isLoggedin'));
        console.log(userLogedIn);

        // getting name and email when user logged in
        let testUser = (JSON.parse(userLogedIn));

        // Prepare user score data
        const userScore = {
            testUserName: testUser.fullName,
            testUserEmail: testUser.email,
            score: score,
            selectedQuizQuestion: quizRandomQuestion,
            selectedQuizOption: [{ selectedOption, selectedOption }],
        };

        localStorage.setItem("SelectedOption" , selectedOption) || []

        // Retrieve the stored user score data, or initialize it
        let storedScores = JSON.parse(localStorage.getItem('userScores')) || [];

        // Add the current user's score to the list
        storedScores.push(userScore);

        // Save the updated score list back to localStorage
        localStorage.setItem('userScores', JSON.stringify(storedScores));

        // Redirect to leaderboard or display the result page
        window.location.href = "leaderboard.html";
        console.log("Quiz ended. User's score saved.");
    }
}

// Function to handle the previous button click
function previousQuestion() {
    quizRandomPosition --

    if (quizRandomPosition < quizRandomQuestion.length && quizRandomPosition > 0 && questionNumber > 0) {
        displayQuestion();
        questionNumber--;
    }
}
console.log(selectedOption);
console.log(selectedAnswers);

