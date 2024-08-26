const quizQuestions = [
    {
        question: "Which animal is known as the 'Ship of the Desert ?",
        options: [
            { option1: "Lion", correct: false },
            { option2: "Camel", correct: true },
            { option3: "Elephant", correct: false },
            { option4: "Tiger", correct: false },
        ]
    },
    {
        question: "Name the biggest continent in the world ?",
        options: [
            { option1: "Europe", correct: false },
            { option2: "Antarctica", correct: false },
            { option3: "Asia", correct: true },
            { option4: "Africa", correct: false },
        ]
    },
    {
        question: "Name the largest mammal ?",
        options: [
            { option1: "Blue Whale", correct: true },
            { option2: "Elephant", correct: false },
            { option3: "Monkey", correct: false },
            { option4: "Human", correct: false },
        ]
    },
    {
        question: "Name the largest planet of our Solar System?",
        options: [
            { option1: "Venus", correct: false },
            { option2: "Earth", correct: false },
            { option3: "Mars", correct: false },
            { option4: "Jupiter", correct: true },
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: [
            { option1: "Pandit Jawaharlal Nehru", correct: true },
            { option2: "Indira Gandhi", correct: false },
            { option3: "Dr. Rajendra Prasad", correct: false },
            { option4: "Mahatma Gandhi", correct: false },
        ]
    },
    {
        question: "How many states are there in India?",
        options: [
            { option1: "28", correct: true },
            { option2: "26", correct: false },
            { option3: "29", correct: false },
            { option4: "27", correct: false },
        ]
    },
    {
        question: "Name a bird that lays the largest eggs ?",
        options: [
            { option1: "Ostrich", correct: true },
            { option2: "Crow", correct: false },
            { option3: "Sparrow", correct: false },
            { option4: "Duck", correct: false },
        ]
    },
    {
        question: "Which is the tallest mountain in the world ?",
        options: [
            { option1: "Kangchenjunga", correct: false },
            { option2: "K2", correct: false },
            { option3: "Mount Everest", correct: true },
            { option4: "Himalaya", correct: false },
        ]
    },
    {
        question: "How many bones are there in the Human Body?",
        options: [
            { option1: "200", correct: false },
            { option2: "208", correct: false },
            { option3: "207", correct: false },
            { option4: "206", correct: true },
        ]
    },
    {
        question: "What is the launch date for Chandrayaan 3 mission ?",
        options: [
            { option1: "July 14, 2023", correct: true },
            { option2: "June 14, 2023", correct: false },
            { option3: "July 14, 2022", correct: false },
            { option4: "June 14, 2022", correct: false },
        ]
    },
    {
        question: "Who is the Father of our Nation ?",
        options: [
            { option1: "Mahatma Gandhi", correct: true },
            { option2: "B.R. Ambedkar", correct: false },
            { option3: "Dr. Rajendra Prasad", correct: false },
            { option4: "Subhash Chandra Bose", correct: false },
        ]
    },
    {
        question: "Highest dam of India is?",
        options: [
            { option1: "Mettur Dam", correct: false },
            { option2: "Indira Sagar Dam", correct: false },
            { option3: "Tehri Dam", correct: true },
            { option4: "Cheruthoni Dam", correct: false },
        ]
    },
    {
        question: "Smallest state of India is ?",
        options: [
            { option1: "Goa", correct: true },
            { option2: "Maharashtra", correct: false },
            { option3: "Rajasthan", correct: false },
            { option4: "Odisha", correct: false },
        ]
    },
    {
        question: "Who is the current President of India ?",
        options: [
            { option1: "Narendra Modi", correct: false },
            { option2: "Amit Shah", correct: false },
            { option3: "Arvind Kejriwal", correct: false },
            { option4: "Droupadi Murmu", correct: true },
        ]
    },
    {
        question: "What is the Full form of ISRO ?",
        options: [
            { option1: "Indian Space Research Organization", correct: true },
            { option2: "International Space Research Organization", correct: false },
            { option3: "International Space Retail Organization", correct: false },
            { option4: "India Spain Russia Oman", correct: false },
        ]
    }
];

let appendQuestion = () => {
    let count = 0; // Initialize count
    let getQuestionDiv = document.getElementById("display-question");
    let randomIndex = Math.floor(Math.random() * quizQuestions.length);
    let question = quizQuestions[randomIndex];

    getQuestionDiv.innerHTML = `
        <h1>${count + 1}/10 ${question.question}<br></br>
        <input type="checkbox" id="1" name="option" value="${question.options[0].option1}">
        <label for="1">${question.options[0].option1}</label><br>
        <input type="checkbox" id="2" name="option" value="${question.options[1].option2}">
        <label for="2">${question.options[1].option2}</label><br>
        <input type="checkbox" id="3" name="option" value="${question.options[2].option3}">
        <label for="3">${question.options[2].option3}</label><br><br>
        <input type="checkbox" id="4" name="option" value="${question.options[3].option4}">
        <label for="4">${question.options[3].option4}</label><br><br>
        </h1>`;
};

// Signup form code
// document.getElementById('signupForm').addEventListener('submit', function (event) {
//     event.preventDefault();
 function validateSignup(event){
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
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
    } else {
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
    window.location.href = "http://127.0.0.1:5501/login.html";

}

// signup code ends

// login code start

// document.getElementById("loginForm").addEventListener('submit', function (event) {
//     event.preventDefault();

function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let invalidMsgPassword = document.getElementById("invalid-password");
    let invalidMsgEmail = document.getElementById("invalid-email");

    // Retrieve stored user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and the password matches
    const user = storedUserData.find(user => user.email === email);
    if (email == ""){
        invalidMsgEmail = "Please enter your email"
    }

    else if (password == ""){
        invalidMsgPassword = "Please enter your password"
    }

    else if (!user){
        invalidMsgEmail.innerHTML = "Email not registered";
        return;
    }

    else if (user.password !== password){
        invalidMsgPassword.innerHTML = "Incorrect password";
        return;
    }

    else {
        // If login is successful
        invalidMsgEmail.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        invalidMsgPassword.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;

        // Set a flag to indicate that the user is logged in
        localStorage.setItem("isLoggedin", "true");

        // Redirect to the quiz page
        window.location.href = "http://127.0.0.1:5501/quiz.html";

        document.addEventListener('DOMContentLoaded', function() {
        let avatar =  document.getElementById(avatar);
        avatar.innerHTML = localStorage.getItem(fullName)

        })

    }
};

// login code ends 

// quiz page

// to get Avatar at top

