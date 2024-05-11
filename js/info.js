const personDetails = {
    personal: {
      firstName: "Neptune",
      lastName: "",
      email: "neptuneforever00@gmail.com",
      age: 16,
      languages: "Portuguese, English & French",
      phone: "N/A",
      contactMail: "neptuneforever00@gmail.com",
      address: "Brazil",
      nationality: "Brazilian",
      freelance: "Yes",
      description: "I'm a VFX Creator & FullStack Developer who is focused on discovering knowlegde, I have the ability to build Discord bots, but i'm not advanced, Apps and Websites. I am passionate about building excellent software that improves the lives of those around me, and making Visual Effects for fun."
    },
    professional: {
      yoe: 4,
      completedProjects: +60,
      happyCustomers: +10,
      awardsWon: 1,
    },
    academic: {
      college: {
        name: "Not Available",
        duration: "2025-2030(expected)",
        course: "Data Science or Data Analyst",
      },
      school: {
        name: "11th grade",
        duration: "2010 - 2026",
        course: "High School"
      }
    },
    skills: {
      // key: skill name
      // value: skill percentage
      "html": 85,
      "javascript": 33,
      "css": 59,
      "php": 33,
      "lua": 90,
      "python": 57,
      "CyberSec": 54,
      "vscode": 62,
      },
    social: {
      github: "https://github.com/neptuneforever",
      linkedin: "https://www.linkedin.com/in/neptuneforever-9825a5304/",
      codepen: "https://codepen.io/neptuneforever",
      telegram: "https://t.me/neptuneforever"
    }
  };

  function setElemAttribute(elemId, elemValue, attr = 'innerText') {
    const elem = document.getElementById(elemId);

    // set value only if element is present
    if (elem) {
      console.log("setting attribute for" + elem, attr, elemValue);
      elem[attr] =  elemValue;
    }
  }

  function setSkillValue(skillName) {
    setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
    const div = document.getElementsByClassName('skill-' + skillName)[0];
    if (div) {
      const className = 'p' + personDetails.skills[skillName];
      div.classList.remove('p0');
      div.classList.add(className);
    }
  }

  // index.html
  setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
  setElemAttribute('person-desc', personDetails.personal.description);

  // about.html
  setElemAttribute('person-fname', personDetails.personal.firstName);
  setElemAttribute('person-lname', personDetails.personal.lastName);
  setElemAttribute('person-age', personDetails.personal.age);
  setElemAttribute('person-address', personDetails.personal.address);
  setElemAttribute('person-nationality', personDetails.personal.nationality);
  setElemAttribute('person-freelance', personDetails.personal.freelance);
  setElemAttribute('person-email', personDetails.personal.email);
  setElemAttribute('person-contactMail', personDetails.personal.contactMail);
  setElemAttribute('person-phone', personDetails.personal.phone);
  setElemAttribute('person-languages', personDetails.personal.languages);
  // professional
  setElemAttribute('person-yoe', personDetails.professional.yoe);
  setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
  setElemAttribute('person-happyCustomers', personDetails.professional.happyCustomers);
  setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
  // academic
  setElemAttribute('school-duration', personDetails.academic.school.duration);
  setElemAttribute('school-name', personDetails.academic.school.name);
  setElemAttribute('school-course', personDetails.academic.school.course);
  setElemAttribute('college-duration', personDetails.academic.college.duration);
  setElemAttribute('college-name', personDetails.academic.college.name);

  // TODO: can be replaced with a loop
  setSkillValue('html');
  setSkillValue('css');
  setSkillValue('javascript');
  setSkillValue('python');
  setSkillValue('lua');
  setSkillValue('php');
  setSkillValue('CyberSec');
  setSkillValue('vscode');

  // contact.html
  setElemAttribute('github', personDetails.social.github, 'href');
  setElemAttribute('codepen', personDetails.social.codepen, 'href');
  setElemAttribute('telegram', personDetails.social.telegram, 'href');
  setElemAttribute('linkedin', personDetails.social.linkedin, 'href');
  setElemAttribute('mail-hyperlink', "mailto:"+personDetails.personal.contactMail, 'href');
