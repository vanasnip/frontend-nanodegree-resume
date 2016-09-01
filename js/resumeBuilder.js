var bio = {
  'name': 'Ivan Mamenemuno',
  'role': 'Front-End Web Developer',
  'welcomeMessage': 'Welcome to my resume. I hope you see my credintials not just as merits, but as an opportunity and as an asset to your company, thank you',
  'biopic': 'images/ivan.png',
  'skills': ['HTML5', 'CSS3', 'Bootstrap', 'Javascript', 'Photoshop', 'Illustrator', 'Inkscape', 'Grunt', 'git', 'GitHub'],
  'contacts': {
    'mobile': '07746969638',
    'email': 'ivan.mamenemuno@gmail.com',
    'github': 'vanasnip',
    'location': 'Wixams, bedforshire',
  },
  'display': function() {
    bioDisplay(bio);
    contactDisplay(bio.contacts);
  },


};

var work = {
  'jobs': [
    {
      'employer': 'Ark-H Handling',
      'title': 'Sale and Marketing Executive',
      'location': 'Unit 1, Kenneth Way, Wilstead Industrial Park, Wilstead MK45 3PD',
      'dates': 'Sep-2015 to Current',
      'description': 'My role involved developing a new front-end for the website. A good opportuinity to implement contemporary web technologies and techniques.',

    },
    {
      'employer': 'Self Employed',
      'title': 'Graphic Designer',
      'location': 'Luton',
      'dates': 'Sep-2009 to Sep-2015',
      'description': 'Working to client specification on flyers, posters, leaflets, brochures and other literature for print. As well as logo design and branding development for start-ups, I also worked on desgn for the web and email. ',
    },
    {
      'employer': 'Self Employed',
      'title': 'Photographer',
      'location': 'Luton',
      'dates': 'Sep-2009 to Sep-2015',
      'description': 'My photography included portaits, coorperate events, weddings, parties, fashion and products. I worked on refferal and I developed a lot from what was just a hobby to begin with.',
    },
  ],
  'display': function() {
    workDisplay(work);
  },
};

var projects = {
  'projects' : [
    {
      'title': 'Chess Action',
      'dates': 'Feb-2016 to Apr-2016',
      'description': 'Some awesome project I havent done yet but its gonna be EPIC!',
      'images': ['images/proj1-01.png', 'images/proj1-02.png', 'images/proj1-03.png', 'images/proj1-04.png']
    }
  ],
  'display': function() {
    projectsDisplay(projects);
  },
};

var education = {
  'schools': [
    {
      'name': 'Barnfield College',
      'location': 'Luton, UK',
      'degrees': 'National Diploma',
      'majors': ['Information Technology'],
      'dates': 'Sep-2007 to July-2009',
      'url': 'http://www.barnfield.ac.uk/'
    },
    {
      'name': 'Coventry University',
      'location': 'Coventry, UK',
      'degrees': 'Foundation Degree',
      'majors': ['Art and Design'],
      'dates': 'Sep-2005 to Jul-2006',
      'url': 'http://www.coventry.ac.uk/'
    }
  ],
  'onlineCourses': [
    {
      'title': 'Front-End Developer Nanodegree',
      'school': 'Udacity.com',
      'dates': 'Jun-2016 to Nov-2016',
      'url': 'https://www.udacity.com/'
    },
    {
      'title': 'Introduction to JavaScript',
      'school': 'Codecademy.com',
      'dates': 'Aug-2015 to Dec-2015',
      'url': 'https://www.codecademy.com/'
    }
  ],
  'display': function() {
    educationDisplay(education);
  },
};

var bioDisplay = function(bioObj) {
  var formattedName = HTMLheaderName.replace('%data%', bioObj.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bioObj.role);
  var formattedBiopic = HTMLbioPic.replace('%data%', bioObj.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bioObj.welcomeMessage);
  $('#banner').prepend(formattedBiopic, formattedName, formattedRole, formattedWelcomeMsg);
  if (bioObj.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    var i = 0;
    while (i < bioObj.skills.length) {
      var formattedSkill = HTMLskills.replace('%data%', bioObj.skills[i]);
      $('#skills').append(formattedSkill);
      i++;
    }
  }
};

var workDisplay = function(workj){
  $('#workExperience').append(HTMLworkStart);
  for (var jobs = 0; jobs < workj.jobs.length; jobs++){
    if(workj.jobs.hasOwnProperty(jobs)){
      var formattedEmployer;
      var formattedRole;
      var formattedLocation;
      var formattedDates;
      var formattedDescription;
      formattedEmployer = HTMLworkEmployer.replace('%data%', workj.jobs[jobs].employer);
      $('.work-entry').append(formattedEmployer);
      formattedRole = HTMLworkTitle.replace('%data%', workj.jobs[jobs].title);
      $('.work-entry').append(formattedRole);
      formattedLocation = HTMLworkLocation.replace('%data%', workj.jobs[jobs].location);
      $('.work-entry').append(formattedLocation);
      formattedDates = HTMLworkDates.replace('%data%', workj.jobs[jobs].dates);
      $('.work-entry').append(formattedDates);
      formattedDescription = HTMLworkDescription.replace('%data%', workj.jobs[jobs].description);
      $('.work-entry').append(formattedDescription);
    }
  }
};

var projectsDisplay = function(proj) {
  var formattedProjectTitle;
  var formattedProjectDates;
  var formattedProjectDescription;
  var formattedProjectImage;
  for (var project = 0; project < proj.projects.length; project++) {
    if(proj.projects.hasOwnProperty(project)) {
      $('#projects').append(HTMLprojectStart);
      formattedProjectTitle = HTMLprojectTitle.replace('%data%', proj.projects[project].title);
      $('.project-entry:last').append(formattedProjectTitle);
      formattedProjectDates = HTMLprojectDates.replace('%data%', proj.projects[project].dates);
      $('.project-entry:last').append(formattedProjectDates);
      formattedProjectDescription = HTMLprojectDescription.replace('%data%', proj.projects[project].description);
      $('.project-entry:last').append(formattedProjectDescription);
      if (proj.projects[project].images.length > 1){
        for (var image = 0; image < proj.projects[project].images.length; image++){
          if(proj.projects[project].images.hasOwnProperty(image)) {
            formattedProjectImage = HTMLprojectImage.replace('%data%', proj.projects[project].images[image]);
            $('.project-entry:last').append(formattedProjectImage);
          }
        }
      } else {
        $('.project-entry:last').append(formattedProjectImage);
      }
    }
  }
};

var contactDisplay = function(bioContact) {
  var formattedMobile;
  var formattedEmail;
  var formattedGithub;
  var formattedLocation;
  formattedMobile = HTMLmobile.replace('%data%', bioContact.mobile);
  $('#topContacts').append(formattedMobile);
  $('#footerContacts').append(formattedMobile);
  formattedEmail = HTMLemail.replace('%data%', bioContact.email);
  $('#topContacts').append(formattedEmail);
  $('#footerContacts').append(formattedEmail);
  formattedGithub = HTMLgithub.replace('%data%', bioContact.github);
  $('#topContacts').append(formattedGithub);
  $('#footerContacts').append(formattedGithub);
  formattedLocation = HTMLlocation.replace('%data%', bioContact.location);
  $('#topContacts').append(formattedLocation);
  $('#footerContacts').append(formattedLocation);

};

var educationDisplay = function(eduObj) {
  $('#education').append(HTMLschoolStart);
  var formattedSchoolName;
  var formattedSchoolDegree;
  var formattedSchoolDates;
  var formattedSchoolLocation;
  var formattedSchoolMajor;
  var formattedSchoolURL;
  for (var school = 0; school < eduObj.schools.length; school++){
    if(eduObj.schools.hasOwnProperty(school)){
      formattedSchoolName = HTMLschoolName.replace('%data%', eduObj.schools[school].name);
      $('.education-entry').append(formattedSchoolName);
      formattedSchoolDegree = HTMLschoolDegree.replace('%data%', eduObj.schools[school].degrees);
      $('.education-entry').append(formattedSchoolDegree);
      formattedSchoolLocation = HTMLschoolLocation.replace('%data%', eduObj.schools[school].location);
      $('.education-entry').append(formattedSchoolLocation);
      formattedSchoolDates = HTMLschoolDates.replace('%data%', eduObj.schools[school].dates);
      $('.education-entry').append(formattedSchoolDates);
      formattedSchoolURL = HTMLschoolURL.replace('%data%', eduObj.schools[school].url);
      $('.education-entry').append(formattedSchoolURL);
      for(var major = 0; major < eduObj.schools[school].majors.length; major++) {
        if(eduObj.schools[school].majors.hasOwnProperty(major)) {
          formattedSchoolMajor = HTMLschoolMajor.replace('%data%', eduObj.schools[school].majors[major]);
          $('.education-entry').append(formattedSchoolMajor);
        }
      }
    }
  }
  onlineEducation(eduObj);
};

var onlineEducation = function(eduObj) {
  $('#education').append(HTMLonlineStart);
  $('.online-entry').append(HTMLonlineClasses);
  var formattedOnlineTitle;
  var formattedOnlineSchool;
  var formattedOnlineDates;
  var formattedOnlineURL;
  for(var course = 0; course < eduObj.onlineCourses.length; course++){
    if(eduObj.onlineCourses.hasOwnProperty(course)){
      formattedOnlineTitle = HTMLonlineTitle.replace('%data%', eduObj.onlineCourses[course].title);
      $('.online-entry').append(formattedOnlineTitle);
      formattedOnlineSchool = HTMLonlineSchool.replace('%data%', eduObj.onlineCourses[course].school);
      $('.online-entry').append(formattedOnlineSchool);
      formattedOnlineDates = HTMLonlineDates.replace('%data%', eduObj.onlineCourses[course].dates);
      $('.online-entry').append(formattedOnlineDates);
      formattedOnlineURL = HTMLonlineURL.replace('%data%', eduObj.onlineCourses[course].url);
      $('.online-entry').append(formattedOnlineURL);
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();
//you want to see a map? here's a map.
$('#mapDiv').append(googleMap);
