"use strict";

var userName = prompt('what is your first name?');
console.log('user name:', userName);
alert('Hi there ' + userName + ' I\'m going to ask you few questions.');


var questions = ['Do you like to code in Java? Please answer yes/no Or y/n',
                'Do you know what is Google Guice? Please answer yes/no Or y/n?',
                'Do you know how to use JOOQ? Please answer yes/no Or y/n?',
                'Do you know any design pattern?  Please answer yes/no Or y/n?',
                'Do you have mobile phone?  Please answer yes/no Or y/n?'
]

var aboveExpectations =['Welcome to Java World, You are qualified to take object oriented exam',
			'You are selected for the Grade 2.',
			'You can skip Grade 3 and join the database team directly.',
			'You are selected to teach one hour daily to junior team',
			'Please share your phone number to operation support team'
];

var meetExpectations=['Welcome to Java World, You are required to take object oriented online session',
		      'Google Guice is one of the requirement to code in the integration team, Please visit online training',
		      'JOOQ is required skill for database team, Please visit online training before taking the test.',
		      'You are selected to do one hour on job training with senior team',
		      'Please visit online benefits page and apply for corporate phone'
];
var answer;
for (var counter = 0; counter < questions.length; counter++) {
   
    answer = prompt(questions[counter]);
    if (answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'YES' ) {
        console.log(aboveExpectations[counter]);
        alert(aboveExpectations[counter]);        
    } else {
        console.log(meetExpectations[counter]);
        alert(meetExpectations[counter]);
    }
}


var number;
for (var counter = 0; counter < 4; counter++) {
    number = parseInt(prompt('What is my favorite number (1 to 10)?'));
    if (number===6) {
        alert('You entered correct number');
        console.log('You entered correct number');
        break;
    } else if (number < 10) {
        alert('sorry you guessed too low');
        console.log('sorry you guessed too low');
        
    } else if (number > 10) {
        alert('you guessed too high');
        console.log('you guessed too high');
        
    } else if (isNaN(number) || number === null) {
        alert('please enter an actual number');
        console.log('please enter an actual number');
        
    } 
}


var validLocation=['Bothell','Edmond','Seattle','Orlando','Miami']
var correctAnswerCounter=0;
var flagGetOut='N';
for (var counter = 0; counter < 6; counter++) {
    answer = prompt('Guess my location?');
    
    for(var arrayCounter=0;arrayCounter<5;arrayCounter++) {
        if (answer.toUpperCase() === validLocation[arrayCounter]) {
            console.log('You got the correct answer');                        
            flagGetOut='Y'
            break;
        } 
    }
    if (flagGetOut === 'Y') {
        correctAnswerCounter++;
        break;
    } else {
        console.log('Wrong answer, try again');  
        correctAnswerCounter++;
    }
   
}

if (correctAnswerCounter > 0) {
    console.log('You got ',correctAnswerCounter, ' out of 6');
    alert('You got ',correctAnswerCounter, ' out of 6');
}
