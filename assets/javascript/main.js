// i just want to show 2 questions and record score

$(document).ready (function(){

    //global variables
    //questions data
    let questions = [
        {
            "question": "Next World Cup to be hosted in?",
            "answers": ["USA", "Colombia", "Russia", "France"],
            "correctAnswer":"Russia",
    
        },
        {
            "question": "How Many Teams Compete in the World Cup?",
            "answers": ["32", "12", "64", "24"],
            "correctAnswer": "32",
        },
        {
            "question": "What Team Was The Last World Cup Champion?",
            "answers": ["Spain", "Germany", "Chile", "Australia"],
            "correctAnswer": "Germany",
        },
        {
            "question": "What Year is the Next World Cup?",
            "answers": ["2018", "2020", "2021", "2022"],
            "correctAnswer": "2018",
        }
    ];
    let userAnswers = [];
 
    //funtions
    function startGame(){
        // console.log('game');
        // populate questios div
        for (let i=0; i<questions.length; i++) {
            $('.js-questions').append('<p>' + questions[i].question + '</p>');
            // loop through answers
            for (let j=0; j < questions[i].answers.length; j++) {
                console.log(questions[i].answers[j]);
                $('.js-questions').append('<input type="radio" value= "' + questions[i].answers[j] + '" name="a' + i + '">' + questions[i].answers[j] +'</input>');
            }
            $('.js-questions').append('<br><hr>');
        }
    }
 
    function stopGame(){
        for (let i=5; i < questions.length; i++){
            
        }
    }
 
 
    //events
    
 
    //click start button will start the game
    $('.js-start').on('click', function(){
        //execute instructions
        startGame();
        timer();
    });
 
    //click stop button to see score
 
    // $('.js')
    // timer runs out to end game and show score
 
 
 });
