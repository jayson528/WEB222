// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){
    //code for listDiv1
    var firstContainer = document.querySelector('#listDiv1')
    var listItems = ''

    for (let i =  0; i < fruits.length;i++){
    listItems +=  '<li>' +  fruits[i] + '</li>'
    }

    firstContainer.innerHTML += '<ol>' + listItems + '</ol>'

    //code for listDiv2
    var secondContainer = document.querySelector('#listDiv2')
    var javaScriptSTR = ''
    var HTMLstr = ''
    var completedString = ''

    for (let  i = 0; i < directory[2].files.length; i++){
        HTMLstr += '<li>' + directory[2].files[i].name + '</li>'
    }

    for (let i = 0; i < directory[4].files.length; i++){
        javaScriptSTR += '<li>' + directory[4].files[i].name + '</li>'
    }

    completedString = 
    '<ul>' + 
        '<li>' + directory[0].name + '</li>' +
        '<li>' + directory[1].name + '</li>' + 
        '<li>' + directory[2].name + '</li>' + 
            '<ul>' + HTMLstr + '</ul>' +  
        '<li>' + directory[3].name + '</li>' + 
        '<li>' + directory[4].name + '</li>' + 
        '<ul>' + javaScriptSTR + '</ul>' + 
    '</ul>'

    secondContainer.innerHTML = completedString
};
