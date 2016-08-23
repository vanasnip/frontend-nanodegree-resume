/*
This is empty on purpose! Your code to build the resume will go here.
 */

/******************************************************************************/
// var name = "Ivan Mamenemuno";
// var formattedName = HTMLheaderName.replace("%data%", name);
//
//
// var role = "Front-End Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
//
//
//
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

/******************************************************************************/
// var skills = ["Awesomeness", "Programming", "Design", "Github"];
// $("#main").append(skills.length);

/******************************************************************************/


// var sampleArray = [0,0,7, 7, 5];
//
// var incrementLastArrayElement = function(_array) {
//     var newArray = [];
//     // Your code should make newArray equal to an array that has the same
//     // values as _array, but the last number has increased by one.
//
//     // For example:
//     // _array = [1, 2, 3];
//     // turns into:
//
//     // Your code goes in here!
//
//     var lastNo = _array.pop();
//     _array[_array.length] = lastNo + 1;
//     newArray = _array;
//
//
//     // Don't delete this line!
//     return newArray;
// };
//
// // Did your code work? The line below will tell you!
// console.log(incrementLastArrayElement(sampleArray));

/******************************************************************************/
// var name = "ALBERT EINstEiN";
//
// function nameChanger(oldName) {
//     var finalName = oldName;
//     // Your code goes here!
//     var space = oldName.indexOf(" ");
//     var surname =  oldName.slice(space+1);
//     var firstName = oldName.slice(0, -surname.length -1);
//     console.log(space + " space");
//     finalName = firstName[0].toUpperCase() + firstName.slice(1, firstName.length).toLowerCase() + " " + surname.toUpperCase();
//
//
//     // Don't delete this line!
//     return finalName;
// }
//
// // Did your code work? The line below will tell you!
// console.log(nameChanger(name));
/******************************************************************************/
var bio = {
  "name": "Ivan Mamenemuno",
  "role": "Web Developer",
  "contacts": {
    "email": "ivan.mamenemuno@gmail.com",
    "github": "vanasnip",
    "location": "Wixams, bedforshire"
  },
  "skills": ["HTML5", "CSS3", "Bootstrap", "Javascript", "Photoshop", "Illustrator", "Inkscape", "Grunt", "git", "GitHub", "Udacity Graduate" ],
  "bioPic": "images/ivan.png"
};





var work = {};
work.position = "Sale and Marketing Executive";
work.employer = "Ark-H Handling";
work.city = "Bedford";


var education = {
  "schools": [
    {
      "institute": "Barnfield College",
      "city": "Luton, UK",
      "level": "National Diploma",
      "subject": "Information Technology",
      "modules": ["Programming", "Networking", "Web Development", "Database"],
      "startDate": [9,  2007],
      "endDate": [7, 2009],
      "acheived": "Distinction"
    },
    {
      "institute": "Coventry University",
      "city": "Coventry, UK",
      "level": "Foundation Degree",
      "subject": "Art and Design",
      "modules": ["Programming", "Networking", "Web Development", "Database"],
      "startDate": [9,  2005],
      "endDate": [7, 2006],
      "achieved": "Merit"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Developer Nanodegree",
      "site": "Udacity.com",
      "modules": ["Developer Mindset", "Responisive Web Design", "JQuery", "Object Oriented JavaScript", "HTML5 Canvas", "Web Performance Optimisation", "Browser Rendering Optimisation", "AJAX", "JavaScript Design Patterns"],
      "startDate": [6, 2016],
      "endDate": [11, 2016]
    },
    {
      "title": "Introduction to JavaScript",
      "site": "Codecademy.com",
      "modules": ["Functions", "Loops and Conditionals", "Data Structures", "Objects"],
      "startDate": [8, 2015],
      "endDate": [12, 2015]
    }
  ]
};
