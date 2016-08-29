
var bio = {
  "name": "Ivan Mamenemuno",
  "role": "Front-End Web Developer",
  "welcomeMessage": "Welcome to my resume. I hope you see my credintials not just as merits, but as an opportunity and as an asset to your company, thank you",
  "biopic": "images/ivan.png",
  "skills": ["HTML5", "CSS3", "Bootstrap", "Javascript", "Photoshop", "Illustrator", "Inkscape", "Grunt", "git", "GitHub", "Udacity Graduate"],
  "contacts": {
    "mobile": "07746969638",
    "email": "ivan.mamenemuno@gmail.com",
    "github": "vanasnip",
    "location": "Wixams, bedforshire"
  },
};

var work = {
    "jobs": [
    {
      "employer": "Ark-H Handling",
      "title": "Sale and Marketing Executive",
      "location": "Unit 1, Kenneth Way, Wilstead Industrial Park, Wilstead MK45 3PD",
      "dates": "Sep-2015 to Current",
      "description": "My role involved developing a new front-end for the website. A good opportuinity to implement contemporary web technologies and techniques.",

    },
    {
      "employer": "Self Employed",
      "title": "Graphic Designer",
      "location": "Luton",
      "dates": "Sep-2009 to Sep-2015",
      "description": "Working to client specification on flyers, posters, leaflets, brochures and other literature for print. As well as logo design and branding development for start-ups, I also worked on desgn for the web and email. ",


    },
    {
      "employer": "Self Employed",
      "title": "Photographer",
      "location": "Luton",
      "dates": "Sep-2009 to Sep-2015",
      "description": "My photography included portaits, coorperate events, weddings, parties, fashion and products. I worked on refferal and I developed a lot from what was just a hobby to begin with.",
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title": "Chess Styles",
      "dates": "Feb-2016 to Apr-2016",
      "description": "users copy and paste algebraic chess notation for popular chess apps like chess.com. Chess styles will take this input and turn into a much more visually apealing, readable and easy to follow design layout. Web responsive and formatted for print",
      "images": ["images/proj1-01.png", "images/proj1-01.png", "images/proj1-01.png"]
    },
    {
      "title": "Ark-H",
      "dates": "May-2016 to Sep-2016",
      "description": "Developing the company website, rebranding, the look the feel. I decided on the art direction, drew all the icons, storyboarded the whole thing and implemented it",
      "images": ["images/proj1-03.png"]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Barnfield College",
      "location": "Luton, UK",
      "degree": "National Diploma",
      "majors": ["Information Technology"],
      "dates": "Sep-2007 to July-2009",

    },
    {
      "name": "Coventry University",
      "location": "Coventry, UK",
      "degree": "Foundation Degree",
      "majors": ["Art and Design"],
      "dates": "Sep-2005 to Jul-2006",
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Developer Nanodegree",
      "school": "Udacity.com",
      "dates": "Jun-2016 to Nov-2016",
      "url": "https://www.udacity.com/"

    },
    {
      "title": "Introduction to JavaScript",
      "school": "Codecademy.com",
      "dates": "Aug-2015 to Dec-2015",
      "url": "https://www.codecademy.com/"

    }
  ]
};

var bioInfo = function(bioObj) {
  var formattedName = HTMLheaderName.replace("%data%", bioObj.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bioObj.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  if (bioObj.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var i = 0;
    while (i < bioObj.skills.length) {
      var formattedSkill = HTMLskills.replace("%data%", bioObj.skills[i]);
      $("#skills").append(formattedSkill);
      i++;
    }
  }
};

var workhistory = function(workj){
  $("#workExperience").append(HTMLworkStart);
  for (var jobs in workj.jobs){
    for (var info in workj.jobs[jobs]){

      var formattedEmployer;
      var formattedRole;
      var formattedLocation;
      var formattedDates;
      var formattedDescription;
      if (info === "employer"){
        formattedJob = HTMLworkEmployer.replace("%data%", workj.jobs[jobs][info]);
      } else if (info === "title"){
        formattedJob = HTMLworkTitle.replace("%data%", workj.jobs[jobs][info]);
      } else if (info === "location"){
        formattedJob = HTMLworkDates.replace("%data%", workj.jobs[jobs][info]);
      }else if (info === "dates"){
        formattedJob = HTMLworkLocation.replace("%data%", workj.jobs[jobs][info]);
      }else if (info === "description"){
        formattedJob = HTMLworkDescription.replace("%data%", workj.jobs[jobs][info]);
      }
      $(".work-entry").append(formattedJob);
    }
  }

};

var display = function(proj) {

  var formattedProjectTitle;
  var formattedProjectDates;
  var formattedProjectDescription;
  var formattedProjectImage;

  for (var project in proj.projects){
    $("#projects").append(HTMLprojectStart);
    formattedProjectTitle = HTMLprojectTitle.replace("%data%", proj.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);
    formattedProjectDates = HTMLprojectDates.replace("%data%", proj.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);
    formattedProjectDescription = HTMLprojectDescription.replace("%data%", proj.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (proj.projects[project].images.length > 1){
      for (var image in proj.projects[project].images){
        formattedProjectImage = HTMLprojectImage.replace("%data%", proj.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    } else {
      $(".project-entry:last").append(formattedProjectImage);
    }
  }
};

var displayWork = function() {
  $("#workExperience").append(HTMLworkStart);
  for (var job in work.jobs){
    for (var info in work.jobs[job]){

      var formattedEmployer;
      var formattedRole;
      var formattedLocation;
      var formattedDates;
      var formattedDescription;
      if (info === "employer"){
        formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job][info]);
      } else if (info === "title"){
        formattedJob = HTMLworkTitle.replace("%data%", work.jobs[job][info]);
      } else if (info === "location"){
        formattedJob = HTMLworkDates.replace("%data%", work.jobs[job][info]);
      }else if (info === "dates"){
        formattedJob = HTMLworkLocation.replace("%data%", work.jobs[job][info]);
      }else if (info === "discription"){
        formattedJob = HTMLworkDescription.replace("%data%", work.jobs[job][info]);
      }
      $(".work-entry").append(formattedJob);
    }
  }
};

bioInfo(bio);
displayWork();
workhistory(work);
display(projects);

//you want to see a map? here's a map.
$("#mapDiv").append(googleMap);
