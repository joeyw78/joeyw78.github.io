// JavaScript Document

function check(){
	

var question1= document.quiz.question1.value;
var question2= document.quiz.question2.value;
var question3= document.quiz.question3.value;	
var question4= document.quiz.question4.value;
var question5= document.quiz.question5.value;
var question6= document.quiz.question6.value;
var question7= document.quiz.question7.value;
var question8= document.quiz.question8.value;
var question9= document.quiz.question9.value;
var question10= document.quiz.question10.value;
var correct = 0;

	if (question1 === "88"){
		correct++;
	}

	if (question2 === "0"){
		correct++;
	}

	if (question3 === "hammers"){
		correct++;
	}

	if (question4 === "whole tone"){
		correct++;
	}
	
	if (question5 === "4"){
		correct++;
	}
	
	if (question6 === "softly"){
		correct++;
	}
	
	if (question7 === "4"){
		correct++;
	}
	
	if (question8 === "A B C D E F G"){
		correct++;
	}
	
	if (question9 === "stem"){
		correct++;
	}
	
	if (question10 === "The number of beats to a measure"){
		correct++;
	}
	
	
var pictures =["img/leonardo.gif", "img/bart.gif", "img/itsok.gif"];	
var messages = ["Amazing!", "Not too bad!", "You can do better!"];	
var score;
	
	if (correct <= 3) {
		score = 2;
	}
	
	if (correct>3 && correct <7){
		
		score=1;
	}


	if (correct<=10 && correct>=7) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}