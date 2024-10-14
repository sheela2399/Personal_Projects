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
// console.log(testUser);

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

//questions display starts..

let quizQuestions = [
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

localStorage.setItem("quizQuestions", quizQuestions);
// const fetchQuize = JSON.parse(localStorage.getItem("quizQuestions"));

let score = 0;
let questionNumber = 1;
let quizUsedIndexes = new Set();
let randomQuestion = [];
let totalQuestions = 10;
let index = 0;
const progressBarElement = document.getElementById("progress");
const questionHeading = document.getElementById("questionHead");
const questionNumberElement = document.getElementById("questionNum");
const questionElement = document.getElementById("question");
const optionElement = document.getElementById("options");
const nextButton = document.getElementById("nextquestion");
const previousButton = document.getElementById("previousquestion");
const displayScore = document.getElementById("displayScore");

// Fetch the quiz questions from localStorage
const fetchQuize = (localStorage.getItem("quizQuestions"));

//  function to get a random index that's not repeated
function getRandomIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quizQuestions.length);
    } while (quizUsedIndexes.has(randomIndex));
    quizUsedIndexes.add(randomIndex);
    return randomIndex;
}

// Populate randomQuestion with unique questions
for (let i = 0; i < totalQuestions; i++) {
    const randomIndex = getRandomIndex();
    randomQuestion.push(quizQuestions[randomIndex]);
}

// Function to display a question
function displayQuestion() {
    if (questionElement && optionElement) {
        let currentQuestion = randomQuestion[index];

        // Update question heading and question content
        questionHeading.innerHTML = `<h1>Question ${questionNumber} of ${totalQuestions}</h1>`;
        questionNumberElement.innerHTML = `${index + 1}.`;
        questionElement.innerHTML = currentQuestion.question;

        // Display the options dynamically
        optionElement.innerHTML = currentQuestion.options.map((option, index) =>
            `<div class="optionText">
                ${index + 1}. 
                <input type="radio" name="options" id="option${index}" value="${option.value}">
                <label for="option${index}">${option.value}</label>
            </div>`).join("");

        // Handle Next/Previous buttons display logic
        // previousButton.style.display = index > 0 ? 'inline' : 'none';
        // nextButton.innerHTML = index === totalQuestions - 1
        //     ? "Submit and Continue"
        //     : "Next <i class='fa-solid fa-arrow-right'></i>";

        if(index == 0){
            previousButton.style.display = "none"
        }

        if (index > 0) {
            previousButton.style.display = "inline"
            nextButton.innerHTML = "Next <i class='fa-solid fa-arrow-right'></i>"
        }

        if (index == 8) {
            questionHeading.innerHTML = "<h1>Last 2 Questions Left..</h1"
        }

        if (index == 9) {
            questionHeading.innerHTML = "<h1>Hey this is the Last Question </h1>"
            nextButton.innerHTML = "Submit and Continue"
        }
    }

    updateProgressBar();
}

// Function to update the progress bar
function updateProgressBar() {
    const progress = (index / totalQuestions) * 100;
    if (progressBarElement) {
        progressBarElement.style.width = `${progress}%`;
    }
}

// Function to move to the next question
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="options"]:checked');

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    // Save the selected answer
    randomQuestion[index].choosedAnswer = selectedOption.value;

    // Move to the next question or submit the quiz
    if (index < totalQuestions - 1) {
        index++;
        questionNumber++;
        displayQuestion();
    } else {
        submitQuiz();
    }
}

// Function to go back to the previous question
function previousQuestion() {
    if (index > 0) {
        index--;
        questionNumber--;
        displayQuestion();
        showSelectedAnswer();
    }
}

// Function to calculate the score
function updateScore() {
    score = randomQuestion.reduce((acc, question) => {
        return acc + (question.choosedAnswer === question.rightAns ? 2 : 0);
    }, 0);
    console.log(score)
}

// Function to submit the quiz and save the score
function submitQuiz() {
    updateScore();

    let userLogedIn = JSON.parse(localStorage.getItem('isLoggedin'));
    let testUser = userLogedIn;

    // Prepare user score data
    const userScore = {
        testUserName: testUser.fullName,
        testUserEmail: testUser.email,
        score: score,
        selectedQuiz: [{randomQuestion, choosedAnswer}]
    };

    // Retrieve the stored user score data, or initialize it
    let storedScores = JSON.parse(localStorage.getItem('userScores')) || [];
    storedScores.push(userScore);

    // Save the updated score list back to localStorage
    localStorage.setItem('userScores', JSON.stringify(storedScores));

    // Redirect to leaderboard or display the result page
    window.location.href = "leaderboard.html";
}

// Function to show top 6 leaderboard
function showLeaderboard() {
    let userScores = JSON.parse(localStorage.getItem('userScores')) || [];

    // Sort the users by score in descending order
    let sortedUsers = userScores.sort((a, b) => b.score - a.score).slice(0, 6);

    // Update leaderboard display
    sortedUsers.forEach((user, index) => {
        document.getElementById(`top${index + 1}Name`).innerHTML = user.testUserName;
        document.getElementById(`top${index + 1}Score`).innerHTML = user.score;
    });
}

// Function to show the user's rank
function rankDisplay() {
    let userScores = JSON.parse(localStorage.getItem('userScores')) || [];
    let sortedUsers = userScores.sort((a, b) => b.score - a.score);

    let currentUserName = JSON.parse(localStorage.getItem('isLoggedin')).fullName;
    let currentUser = sortedUsers.find(user => user.testUserName === currentUserName);

    if (currentUser) {
        let userRank = sortedUsers.findIndex(user => user.testUserName === currentUserName) + 1;
        document.getElementById("rankDisplay").innerHTML = `Your Rank: ${userRank}`;
        document.getElementById("rankScore").innerHTML = `Your Score: ${currentUser.score}`;
    } else {
        document.getElementById("rankDisplay").innerHTML = "User not found.";
    }
}

// Initial call to display the first question
displayQuestion();

// Function to save the selected answer
function saveSelectedAnswer() {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        selectedAnswers[index] = selectedOption.value; // Save selected answer for this question
    }
}

// Function to show previously selected answer
function showSelectedAnswer() {
    const previousAnswer = selectedAnswers[index];
    if (previousAnswer) {
        // If there's a previously selected answer, mark the corresponding option as checked
        const selectedOption = document.querySelector(`input[value="${previousAnswer}"]`);
        if (selectedOption) {
            selectedOption.checked = true;
        }
    }
}

nextButton.addEventListener('click', () => {
    saveSelectedAnswer(); // Save answer before moving to the next question
    nextQuestion();
});

// Event listener for 'Previous' button
previousButton.addEventListener('click', () => {
    previousQuestion(); // Go to previous question and show answer
});

