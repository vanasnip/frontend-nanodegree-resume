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
var skills = ["HTML5", "CSS3", "Bootstrap", "Javascript", "Photoshop", "Illustrator", "Inkscape", "Grunt", "git", "GitHub", "Udacity Graduate" ];
var bio = {
  "name" : "Ivan Mamenemuno",
  "role" : "Web Developer",
  "contacts" : {
    "email" : "ivan.mamenemuno@gmail.com",
    "location" : "Wixams, bedforshire"
  },
  "skills" : skills,
};
bio.bioPic = "images/ivan.png";
bio.contacts.github = "vanasnip";

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.skills);

var work = {};
work.position = "Sale and Marketing Executive";
work.employer = "Ark-H Handling";
work.city = "Bedford";

var education = {};
education["college"] = "Barnfield College";
education["years"] = "2007 - 2009";

$("#main").append(work["position"]);
$("#main").append(education.college);
