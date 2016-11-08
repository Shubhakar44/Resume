var bio = {
  "name": "Shubhakar Ananth",
  "role": "Front-End Developer",
  "contacts": {
    "mobile": "8553153506",
    "email": "shubhakarananth913@gmail.com",
    "location": "Bangalore",
    "twitter" : "@shubhakar",
    "github" : "https://github.com/Shubhakar44"
  },
  "welcomeMessage": "I look forward to talking with you.",
  "skills": ["Team Player, ", "C/C++ Programming, ","Communication"],
  "biopic": "images/biopic.png" };

var work = {
  "jobs" : [{
    "employer" : "Infosys",
    "title" : "System-Engineer",
    "dates" : "2016-Present",
    "location" : "Mysore",
    "description" : "Trainee System-Engineer"
  },
  {
    "employer" : "IGeekS Technologies",
    "title" : "proj-intern",
    "dates" : "2015-2016",
    "location" : "Malleshwaram,Bangalore,India",
    "description" : "Sentiment Analysis and Feature Polarity Evaluation of Mobile Product’s Review"
  }]
};

var education = {
     "schools":[{
      "name": "Vijaya Composite P.U College",
      "location" : "Jayanagar,Bangalore",
      "degree" : "Pre-university",
      "majors" : "Electronics",
      "dates" : "2010-2012"
    },
    {
      "name": "B.I.T",
      "location": "V.V.Puram,Bangalore",
      "degree": "B.E",
      "majors": "Information Technology",
      "dates": "2012-2116"
    }],
    "onlinecourses" : [
    {
    "title" : "Front-End Web Developer Nanodegree",
    "school" : "udacity",
    "dates" : "2016",
    "url" : "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
    }]
    };

var projects = {
  "projects" : [{
    "title" : "PORTFOLIO",
    "dates" : "2016 September",
    "description" : "Created portfolio with Udacity Nanodegree Program",
    "images" : ["images/portfolio.png"]
  },
  {
    "title" : "ONLINE RESUME",
    "dates" : "2016 September",
    "description" : " Built Resume using javascript and Jquery to visualize the profile",
    "images" : ["images/resume.png"]
  }]
};

bio.display = function() {
  var headerrole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(headerrole);
  var headername = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend(headername);
  var headerbio = HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(headerbio);
  var headermwel = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(headermwel);
  $("#header").append(HTMLskillsStart);
  for(var skill=0;skill<bio.skills.length;skill++) {
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
    $("#skills").append(formattedSkills);
  }
  var headermobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var headeremail = HTMLemail.replace("%data%",bio.contacts.email);
  var headerlocation = HTMLlocation.replace("%data%",bio.contacts.location);
  var headertotal = headermobile + headeremail + headerlocation;
    var footer1 = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var footer2 = HTMLgithub.replace("%data%",bio.contacts.github);
    var footer3 = footer1 + footer2;
     $("#topContacts,#footerContacts").append(headertotal);
    $("#topContacts,#footerContacts").append(footer3);
};


work.display = function() {
  for(var job=0;job<work.jobs.length;job++) {

  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%",
    work.jobs[job].employer);

  var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);

  $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

  $(".work-entry:last").append(formattedDescription);
}
};

projects.display = function() {
for(var item=0;item<projects.projects.length;item++) {
  $("#projects").append(HTMLprojectStart);
  var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[item].title);
  $(".project-entry:last").append(formattedTitle);

  var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[item].dates);
  $(".project-entry:last").append(formattedDates);

  var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[item].description);
  $(".project-entry:last").append(formattedDescription);

   if (projects.projects[item].images.length > 0) {
      for (var image=0;image<projects.projects[item].images.length;image++) {
      var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
    }
  }
};
education.display = function() {

  for(var school=0;school<education.schools.length;school++) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
    $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
  }
  for(var i=0;i<education.onlinecourses.length;i++) {
    $(".education-entry:last").append(HTMLonlineClasses);
    var formattedtitle = HTMLonlineTitle.replace("%data%",education.onlinecourses[i].title);
    var formattedschool = HTMLonlineSchool.replace("%data%",education.onlinecourses[i].school);
    var formatteddates = HTMLonlineDates.replace("%data%",education.onlinecourses[i].dates);
    var formatted = formattedtitle + formattedschool + formatteddates;
    $(".education-entry:last").append(formatted);
var formattedurl = HTMLonlineURL.replace("%data%",education.onlinecourses[i].url);
    $(".education-entry:last").append(formattedurl);
  }
};

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

