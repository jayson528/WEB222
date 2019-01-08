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






// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
/*****************************
* Task 1
 *****************************/

console.log('\n\n*** Task 1 ***\n\n')

console.log('Course ' + courses[courses.length - 1].code + ' was deleted from the array (courses)')

var removedObject = courses.pop()

console.log('Adding new course objects into the array (courses)\n\n')

var ibc233 = {
    code: 'IBC233', name: 'iSeries Business Computing', hours: 4, url: 'https://ict.senecacollege.ca/course/int222?q=course/ibc233'
}

var oop244 = {
    code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'https://ict.senecacollege.ca/course/oop244?q=course/oop244'
}

var web222 = {
    code: 'WEB222', name: 'Web Programming Principles', hours: 4, url: 'https://ict.senecacollege.ca/course/WEB222?q=course/WEB222'
}

var dbs201 = {
    code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://ict.senecacollege.ca/course/dbs201?q=course/dbs201'
}

courses.push(ibc233)
courses.push(oop244)
courses.push(web222)
courses.push(dbs201)

console.log('Course objects in the array (courses):')

for (var i = 0; i < courses.length; i++){
    console.log('"' + courses[i].code + ', ' + courses[i].name + ', ' + courses[i].hours + ' hours/week, ' + 'website: ' + courses[i].url + '"')
}

/*****************************
* Task 2
 *****************************/

var student1 = { 
    name: 'John Smith', 
    dob: new Date(1999,8,10),
    sid: '010456101',
    program: 'CPA', 
    gpa: 4,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var student2 = { 
    name: 'Jim Carrey', 
    dob: new Date(1992,0,17),
    sid: '0123456789',
    program: 'CPD', 
    gpa: 3.5,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var student3 = { 
    name: 'Justin Bieber', 
    dob: new Date(1994,2,1),
    sid: '0987654321',
    program: 'CAN', 
    gpa: 3,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var student4 = { 
    name: 'Justin Trudeau', 
    dob: new Date(1992,0,12),
    sid: '123456789',
    program: 'CAN', 
    gpa: 4,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
}

var students = [
    student1,
    student2,
    student3,
    student4    
]

console.log('\n\n*** Task 2 ***\n\n')

console.log('Student objects in the array (students):')
students.forEach((student, index) => {
    console.log(index + ': ' + student.toString())
})


