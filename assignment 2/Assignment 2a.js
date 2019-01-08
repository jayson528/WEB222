/*******************************************************************************
* WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Jayson Sherry_______ Student ID: 141056176_____ Date: 2018/06/08______
*
******************************************************************************/



/*****************************
* step 1
 *****************************/

var e1,e2,e3,e4,e5,e6,e7,str;

/*****************************
* step 2
 *****************************/

function capFirstLetter(str){
  var strArr = []
  var strArr2 = []
  
  strArr = str.split(' ')
  
  for (let i = 0; i < strArr.length; i++){
    strArr2 = []
    strArr2 = strArr[i].split('')
    strArr2[0] = strArr2[0].toUpperCase() 
    for (let i = 1; i < strArr2.length; i++){
      strArr2[i] = strArr2[i].toLowerCase()
    }
    strArr[i] = strArr2.join('')
  } 
  str = strArr.join(' ')
  return str
}

e1 = prompt('Please enter your first name','jayson')
e1 = capFirstLetter(e1)


/*****************************
* step 3
 *****************************/

var getAge = function(num){
  num = ((new Date().getFullYear()) - num)
  return num
}

e2 = prompt('please enter birth year',1989)
e2 = getAge(e2)

/*****************************
* step 4
 *****************************/

e3 = prompt('Please enter college name','Seneca College')

var e3Arr = [] 
e3Arr = e3.split(' ')

for (let i = 0; i < e3Arr.length; i++){
  e3Arr[i] = capFirstLetter(e3Arr[i])
}

e3 = e3Arr.join(' ')

/*****************************
* step 5
 *****************************/

e4 = prompt('Please enter 5 of your favorite sports.','hockey,football,basketball,tennis,golf')

var patt = /football/ig
e4 = e4.split(',')

for (let i = 0; i < e4.length; i++){
  if (patt.test(e4[i])){
    e4[i] = 'soccer'
  }  
}

e5 = prompt('Please enter one more favorite sport','formula 1')

e4.push(e5)

/*****************************
* step 6
 *****************************/

for(let i = 0; i < e4.length; i++){
  e4[i] = capFirstLetter(e4[i]) 
}

e4 = e4.sort()

/*****************************
* step 7
 *****************************/

e6 = new Date()

function getDateString(date){
  var result = []
  result[0] = date.getFullYear()
  result[1] = (date.getMonth() + 1) 
  result[2] = date.getDate()
  
  for (let i = 0; i < 3; i++){
    if (result[i] < 10){
      result[i] = '0' + result[i]
    }
  }
  result = result.join('-')
  return result
}

e7 = getDateString(e6)

/*****************************
* step 8
 *****************************/

var str

str = ('User info:\n\n' 
       + 'name (e1): ' + e1 
       + '\nage (e2): ' + e2 
       + '\nschool (e3): ' + e3
       + '\nfavorite sports (e4):\n'
       + '\t' + e4[0] + '\n'
       + '\t' + e4[1] + '\n'
       + '\t' + e4[2] + '\n'
       + '\t' + e4[3] + '\n'
       + '\t' + e4[4] + '\n'
       + '\t' + e4[5] + '\n'
       + 'current date (e7): ' + e7
      )

console.log(str)
