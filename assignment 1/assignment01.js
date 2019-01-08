/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of 
* this assignment has been copied manually or electronically from any other source (including web sites) 
* or distributed to other students.
*
* Name: Jayson Sherry Student ID: 141056176 Date: May/15/2018
*
********************************************************************************/

/*****************************
* Task 1
*****************************/

var studentName = "jayson";
var numOfCourses = 4;
var program = "CPA";
var partTimeJob = true;
var job;

if (partTimeJob == false){
  job = "dont have"
}
else 
  job = "have"
  
console.log("My name is " + studentName + " and I’m in " + program + " program. I’m taking " + numOfCourses + " course in this semester and i " + job + " a part-time job now.")


/*****************************
* Task 2
*****************************/

var currentYear = 2018;
var usersAge = prompt("Please enter your age.",28);
console.log("You were born in the year of " + (parseInt(currentYear) - parseInt(usersAge)) + ".");
var studyLen = prompt("Enter the number of years you expect to study in college: ",3);
console.log("You will graduate from Seneca college in the year of " + (parseInt(currentYear) + parseInt(studyLen)) + ".");


/*****************************
* Task 3
*****************************/

var tempInC = 0;
var tempInF = 32;
console.log(tempInC + " \xb0C is " + (tempInC * 9/5 + 32) + "\xb0F.")
console.log(tempInF + " \xb0F is " + ((tempInF - 32) * 5/9) + "\xb0C.")            


/*****************************
* Task 4
*****************************/

function isOdd(num) {
  return num % 2 == 1
}

for (var i = 0; i <= 10; i ++){
  if (1 == isOdd(i)){
    console.log(i + " i odd.");
  }
  else 
    console.log(i + " is even.");
}


/*****************************
* Task 5
*****************************/

function largeNum(num1,num2){
  if (num1 > num2){
    return num1
  }
  else 
    return num2
}

var greaterNum = function(num1,num2) {
  if (num1 > num2){
    console.log("The larger number of " +  num1 + " and " + num2 + " is " + num1 + ".")
  }
  else if (num1 < num2){
    console.log("The larger number of " +  num1 + " and " + num2 + " is " + num2 + ".")
  }
}
largeNum(12,34)
largeNum(4454,454532)
largeNum(454,34)
greaterNum(23,67)
greaterNum(45,777)
greaterNum(1,10)

/*****************************
* Task 6
*****************************/

function evaluator(){
  var sum = 0;
  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  var average = sum / arguments.length;
  if (average >= 50){
    console.log("Average grater than or equal to 50: true");
  }
 else 
    console.log("Average grater than or equal to 50: false");
}

evaluator(23,56,44,78,23,12,34);
evaluator(67,87,56,66,98);
evaluator(23,12,34,54,44,33);
evaluator(12,12);


/*****************************
* Task 7
*****************************/

var grader = function(num){
  if (num >= 90 && num <= 100){
    console.log( num + "% is an " + "A+")
  }
  
  else if (num >= 80 && num <= 89){
    console.log( num + "% is an " + "A")
  }
  
  else if (num >= 75 && num <= 79){
    console.log( num + "% is an " + "B+")
  }
  
  if (num >= 70 && num <= 74){
    console.log( num + "% is an " + "B")
  }
  
  if (num >= 65 && num <= 69){
    console.log( num + "% is an " + "C+")
  }
  
  if (num >= 60 && num <= 64){
    console.log( num + "% is an " + "C")
  }
  
  if (num >= 55 && num <= 59){
    console.log( num + "% is an " + "D+")
  }
  
  if (num >= 50 && num <= 54){
    console.log( num + "% is an " + "D")
  }
  
  if (num >= 0 && num <= 49){
    console.log( num + "% is an " + "F")
  }
}

grader(34)
grader(76)
grader(99)
grader(23)
s

/*****************************
* Task 8
*****************************/

function showMultiples(num,numMultiples){
  for (var i = 1; i <= numMultiples; i ++){
    console.log(num + " X " + i + " = " + (num * i));
  }
}

showMultiples(5,4)
showMultiples(6,12)
showMultiples(2,5)






