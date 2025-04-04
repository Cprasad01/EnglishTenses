// Quiz Data for Each Tense
const quizzes = {
    "future-simple": {
        title: "Simple Future Quiz",
        questions: [
            {
                question: "Which sentence is in the Simple Future tense?",
                options: [
                    "She is going to the store later.",
                    "They will visit us next week.",
                    "I have finished my homework.",
                    "We were watching a movie."
                ],
                correctAnswer: 1,
                explanation: "'They will visit us next week' uses 'will + base verb' which is the structure for Simple Future."
            },
            {
                question: "What is the correct negative form of: 'I will call you tomorrow'?",
                options: [
                    "I will not call you tomorrow.",
                    "I do not call you tomorrow.",
                    "I am not calling you tomorrow.",
                    "I have not called you tomorrow."
                ],
                correctAnswer: 0,
                explanation: "The negative form of Simple Future is 'will not' or 'won't' + base verb(v1)."
            },
            {
                question: "Which sentence correctly uses Simple Future for a promise?",
                options: [
                    "I will help you with your project.",
                    "She is helping with the project.",
                    "They helped with the project.",
                    "We have helped with the project."
                ],
                correctAnswer: 0,
                explanation: "'I will help you with your project' uses Simple Future to make a promise."
            },
            {
                question: "What is the question form of: 'You will enjoy the party'?",
                options: [
                    "Will you enjoy the party?",
                    "Do you enjoy the party?",
                    "Are you enjoying the party?",
                    "Have you enjoyed the party?"
                ],
                correctAnswer: 0,
                explanation: "The question form of Simple Future is 'Will + subject + base verb(v1)?'"
            },
            {
                question: "Which sentence shows the correct negative form?",
                options: [
                    "I will to not go there.",
                    "I will not going there.",
                    "I won't go there.",
                    "I will not goes there."
                ],
                correctAnswer: 2,
                explanation: "The correct negative form is 'won't go' or 'will not go'."
            }
        ]
    },
    "future-continuous": {
        title: "Future Continuous Quiz",
        questions: [
            {
                question: "Which sentence is in the Future Continuous tense?",
                options: [
                    "She will bake a cake.",
                    "They will be traveling this time next week.",
                    "I have been working all day.",
                    "We were playing tennis."
                ],
                correctAnswer: 1,
                explanation: "'They will be traveling' uses 'will be + v4(-ing)' which is the structure for Future Continuous."
            },
            {
                question: "Which sentence is in the Future Continuous tense?",
                options: [
                    "Leninkrishna will be debugging the code at 10 AM tomorrow.", 

                    "Lepakshi attends the weekly meeting every Monday.",

                     "Harshavardhan fixed the server issue yesterday.",    

                     "Leninkrishna and Lepakshi have worked on this project before." 
                ],
                correctAnswer: 0,
                explanation:" The option1 uses 'will be + v4(-ing)', the correct structure for Future Continuous. The other options use different tenses."
            },
            {
                question: "When do we use Future Continuous tense?",
                options: [
                    "For completed actions in the future",
                    "For actions that will be in progress at a specific future time",
                    "For past habits",
                    "For general truths"
                ],
                correctAnswer: 1,
                explanation: "Future Continuous is used for actions that will be in progress at a specific future time."
            },
            {
                question: "What is the negative form of: 'We will be studying at 8pm'?",
                options: [
                    "We will not be studying at 8pm.",
                    "We do not be studying at 8pm.",
                    "We are not studying at 8pm.",
                    "We have not been studying at 8pm."
                ],
                correctAnswer: 0,
                explanation: "The negative form is 'will not be + present participle'."
            },
            {
                question: "Which negative sentence is correct?",
                options: [
                    "I will not be work tomorrow.",
                    "I won't be working tomorrow.",
                    "I will not being working tomorrow.",
                    "I won't be work tomorrow."
                ],
                correctAnswer: 1,
                explanation: "The correct negative form is 'won't be working'."
            }
        ]
    },
    "future-perfect": {
        title: "Future Perfect Quiz",
        questions: [
            {
                question: "Which sentence is in the Future Perfect tense?",
                options: [
                    "I will finish my work soon.",
                    "She will have completed the project by Friday.",
                    "They are going to the party.",
                    "We were studying all night."
                ],
                correctAnswer: 1,
                explanation: "'She will have completed' uses 'will have + past participle' which is the structure for Future Perfect."
            },
            {
                question: "What is the negative form of: 'They will have arrived by noon'?",
                options: [
                    "They will not have arrived by noon.",
                    "They do not have arrived by noon.",
                    "They are not arriving by noon.",
                    "They have not arrived by noon."
                ],
                correctAnswer: 0,
                explanation: "The negative form of Future Perfect is 'will not have + past participle'."
            },
            {
                question: "Which phrase typically indicates the need for Future Perfect tense?",
                options: [
                    "Right now",
                    "By this time tomorrow",
                    "Every day",
                    "Last week"
                ],
                correctAnswer: 1,
                explanation: "'By this time tomorrow' indicates a time before which something will be completed, requiring Future Perfect."
            },
            {
                question: "What is the question form of: 'You will have finished the report by Monday'?",
                options: [
                    "Will you have finished the report by Monday?",
                    "Do you have finished the report by Monday?",
                    "Are you finishing the report by Monday?",
                    "Have you finished the report by Monday?"
                ],
                correctAnswer: 0,
                explanation: "The question form is 'Will + subject + have + past participle?'"
            },
            {
                question: "Which negative sentence is correct?",
                options: [
                    "I will not have finish by then.",
                    "I won't have finished by then.",
                    "I will not has finished by then.",
                    "I won't have finish by then."
                ],
                correctAnswer: 1,
                explanation: "The correct negative form is 'won't have finished'."
            }
        ]
    },
    "future-perfect-continuous": {
        title: "Future Perfect Continuous Quiz",
        questions: [
            {
                question: "Which sentence is in the Future Perfect Continuous tense?",
                options: [
                    "I will be working all day.",
                    "She will have been working here for 5 years next month.",
                    "They have been waiting for hours.",
                    "We were playing soccer."
                ],
                correctAnswer: 1,
                explanation: "'She will have been working' uses 'will have been + present participle' which is the structure for Future Perfect Continuous."
            },
            {
                question: "What is the main purpose of Future Perfect Continuous tense?",
                options: [
                    "To describe completed actions",
                    "To emphasize the duration of an action up to a future point",
                    "To talk about past experiences",
                    "To describe current habits"
                ],
                correctAnswer: 1,
                explanation: "Future Perfect Continuous emphasizes the duration of an action that will continue up to a future point."
            },
            {
                question: "What is the negative form of: 'They will have been living here for 10 years'?",
                options: [
                    "They will not have been living here for 10 years.",
                    "They do not have been living here for 10 years.",
                    "They are not living here for 10 years.",
                    "They have not been living here for 10 years."
                ],
                correctAnswer: 0,
                explanation: "The negative form is 'will not have been + present participle'."
            },
            {
                question: "Which sentence correctly emphasizes duration with Future Perfect Continuous?",
                options: [
                    "By June, we will have been dating for two years.",
                    "We will date next summer.",
                    "We have dated for two years.",
                    "We were dating for two years."
                ],
                correctAnswer: 0,
                explanation: "This sentence emphasizes the duration (two years) of an action continuing up to a future point (by June)."
            },
            {
                question: "Which negative sentence is correct?",
                options: [
                    "I will not have been work here long.",
                    "I won't have been working here long.",
                    "I will not have being working here long.",
                    "I won't have been work here long."
                ],
                correctAnswer: 1,
                explanation: "The correct negative form is 'won't have been working'."
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize quizzes when the page loads
    initializeAllQuizzes();
    
    // Set up tense navigation
    const tenseBtns = document.querySelectorAll('.tense-btn');
    tenseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tenseId = this.dataset.tense;
            showTense(tenseId);
        });
    });
    
    // Initialize touch support
    initializeTouchSupport();
    
    // Show the first tense by default
    showTense('future-simple');
});

function showTense(tenseId) {
    // Hide all tense contents
    document.querySelectorAll('.tense-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tense content
    document.getElementById(tenseId).classList.add('active');
    
    // Update active button
    document.querySelectorAll('.tense-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tense === tenseId);
    });
}

function initializeAllQuizzes() {
    // Initialize each quiz
    for (const tenseId in quizzes) {
        initializeQuiz(tenseId);
    }
}

function initializeTouchSupport() {
    // Better touch feedback for options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('touchstart', function() {
            this.classList.add('touching');
        });
        
        option.addEventListener('touchend', function() {
            this.classList.remove('touching');
        });
    });
    
    // Prevent accidental zooming
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
}

function initializeQuiz(tenseId) {
    const quizData = quizzes[tenseId];
    const questionContainer = document.getElementById(`${tenseId}-question`);
    const progressBar = document.getElementById(`${tenseId}-progress`);
    const prevBtn = document.getElementById(`${tenseId}-prev`);
    const nextBtn = document.getElementById(`${tenseId}-next`);
    const submitBtn = document.getElementById(`${tenseId}-submit`);
    const scoreContainer = document.getElementById(`${tenseId}-score`);
    const scoreValue = document.getElementById(`${tenseId}-score-value`);
    const scoreDetails = document.getElementById(`${tenseId}-score-details`);
    const restartBtn = document.getElementById(`${tenseId}-restart`);
    const dangerBtn = document.getElementById(`${tenseId}-danger`);
    const successBtn = document.getElementById(`${tenseId}-success`);

    let currentQuestionIndex = 0;
    let selectedAnswers = Array(quizData.questions.length).fill(null);
    let score = 0;
    let isSubmitted = false;

    // Hide result buttons initially
    dangerBtn.style.display = 'none';
    successBtn.style.display = 'none';
    submitBtn.style.display = 'none';

    function showQuestion() {
        const currentQuestion = quizData.questions[currentQuestionIndex];
        const questionNumber = currentQuestionIndex + 1;
        
        // Update progress bar
        progressBar.style.width = `${(questionNumber / quizData.questions.length) * 100}%`;
        
        // Display question
        questionContainer.innerHTML = `
            <div class="question-text">${questionNumber}. ${currentQuestion.question}</div>
            <div class="options-container">
                ${currentQuestion.options.map((option, index) => `
                    <div class="option" data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
            ${selectedAnswers[currentQuestionIndex] !== null ? `
                <div class="explanation">
                    <strong>Explanation:</strong> ${currentQuestion.explanation}
                </div>
            ` : ''}
        `;
        
        // Highlight selected answer if exists
        if (selectedAnswers[currentQuestionIndex] !== null) {
            const options = questionContainer.querySelectorAll('.option');
            options[selectedAnswers[currentQuestionIndex]].classList.add('selected');
            
            // Show correct/incorrect
            const correctIndex = currentQuestion.correctAnswer;
            if (selectedAnswers[currentQuestionIndex] === correctIndex) {
                options[correctIndex].classList.add('correct');
            } else {
                options[selectedAnswers[currentQuestionIndex]].classList.add('incorrect');
                options[correctIndex].classList.add('correct');
            }
        }
        
        // Set up option selection if not submitted
        if (!isSubmitted) {
            questionContainer.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', function() {
                    if (selectedAnswers[currentQuestionIndex] === null) {
                        const selectedIndex = parseInt(this.dataset.index);
                        selectedAnswers[currentQuestionIndex] = selectedIndex;
                        showQuestion(); // Refresh to show selection
                    }
                });
            });
        }
        
        // Update navigation buttons
        prevBtn.disabled = currentQuestionIndex === 0;
        
        if (currentQuestionIndex === quizData.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = isSubmitted ? 'none' : 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }
    }

    function showNextQuestion() {
        if (currentQuestionIndex < quizData.questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        }
    }

    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion();
        }
    }

    function submitQuiz() {
        // Calculate score
        score = 0;
        quizData.questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.correctAnswer) {
                score++;
            }
        });
        
        const percentage = Math.round((score / quizData.questions.length) * 100);
        
        // Show score
        questionContainer.style.display = 'none';
        progressBar.style.display = 'none';
        document.querySelector(`#${tenseId} .quiz-navigation`).style.display = 'none';
        scoreValue.textContent = `${percentage}%`;
        
        // Set color based on score
        if (percentage >= 70) {
            scoreValue.style.color = 'var(--secondary)';
            successBtn.style.display = 'inline-block';
            dangerBtn.style.display = 'none';
        } else {
            scoreValue.style.color = 'var(--accent)';
            successBtn.style.display = 'none';
            dangerBtn.style.display = 'inline-block';
        }
        
        // Generate score details
        scoreDetails.innerHTML = '';
        quizData.questions.forEach((question, index) => {
            const li = document.createElement('li');
            const isCorrect = selectedAnswers[index] === question.correctAnswer;
            li.innerHTML = `
                <strong>Q${index + 1}:</strong> ${question.question}<br>
                <span style="color: ${isCorrect ? 'var(--secondary)' : 'var(--accent)'}">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span> - ${question.explanation}
            `;
            scoreDetails.appendChild(li);
        });
        
        scoreContainer.style.display = 'block';
        isSubmitted = true;
    }

    function restartQuiz() {
        // Reset quiz state
        currentQuestionIndex = 0;
        selectedAnswers = Array(quizData.questions.length).fill(null);
        score = 0;
        isSubmitted = false;
        
        // Show the first question again
        questionContainer.style.display = 'block';
        progressBar.style.display = 'block';
        document.querySelector(`#${tenseId} .quiz-navigation`).style.display = 'flex';
        scoreContainer.style.display = 'none';
        
        // Reset navigation buttons
        prevBtn.disabled = true;
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
        
        // Hide result buttons
        dangerBtn.style.display = 'none';
        successBtn.style.display = 'none';
        
        showQuestion();
    }

    // Add event listeners
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    restartBtn.addEventListener('click', restartQuiz);

    // Initialize the first question
    showQuestion();
}
