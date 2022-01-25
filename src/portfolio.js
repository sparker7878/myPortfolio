/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section
const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Sydney Parker",
  title: "About Me",
  subTitle:
  "Sydney Parker is a 23-year-old product designer from Washington, DC. Her career trajectory involves bridging the divide between sensible design and intuitive usability. She seeks to combine her interests in frontend web development, user psychology, and digital design into a fruitful UX design career.",
  resumeLink:
    "https://docs.google.com/document/d/18QrcCdhRJ-VwDUWsfALm-MTTtfTWg61FFMmT0JCwjig/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/sparker7878",
  linkedin: "https://www.linkedin.com/in/sparker7878/",
  gmail: "sparker7878@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "My Skills",
  subTitle: "",
  skills: [
  //  emoji(
  //    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
  //  ),
  //  emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      ""
    )
  ],

  /* Make sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS4",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    /*
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },*/
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "George Mason University",
      logo: require("./assets/images/gmu_logo.png"),
      subHeader: "B.S. in Applied Computer Science with a Concentration in Software Engineering",
      duration: "August 2016 - May 2022",
      desc: "A first-generation college student, Parker has accomplished much during her undergraduate years, including:",
      descBullets: [
        "Completing the Honors College curriculum",
        "Earning a spot onto the Dean's List during fall 2016 semester",
        "Being invited into the Louis Stokes Alliance for Minority Participation (LSAMP) program",
        "Getting her poetry published in the Fall 2018 edition (Volume 26) of Volition",
        "Serving as Public Relations Chair of Honors College Multicultural Alliance (HCMA) from May 2019 to May 2020",
        "Serving as Vice President of Information Technology for Black, African-Heritage, Caribbean Coalition (BLACC) from May 2020 to May 2021",
        "Participating in Society of Women Engineers (SWE), National Society of Black Engineers (NSBE), and Women of Color in STEM (WOCSTEM)"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Digital Media Accounts Coordinator",
      company: "CarVer Communicatoins",
      companylogo: require("./assets/images/CarVerLogo.png"),
      date: "March 2020 – Present",
      descBullets: [
        "Pitch social-media content ideas directly to the CEO.",
        "Promote the company’s events that have received 500+ people in attendance.",
        "Support clients and attendees at the company’s in-person events for 6+ hours."

      ]
    },
    {
      role: "Vice President of Information Technology",
      company: "BLACC",
      companylogo: require("./assets/images/blacc_logo.jpeg"),
      date: "June 2018 – August 2019",
      descBullets: [
        "Created high-fidelity mockups of the website’s redesign using GIMP and Adobe XD.",
        "Utilized project-management software to enforce Agile principles.",
        "Developed and maintained organization website according to needs of other board members.",
        "Documented technical decisions for the organization using Slite and Notion.",
        "Conducted daily stand-ups with the organization’s president and webmaster about my progress."
      ]
    },
    {
      role: "Application Development Intern",
      company: "Internal Revenue Service",
      companylogo: require("./assets/images/irs_logo.png"),
      date: "June 2018 – August 2019",
      descBullets: [
        "Developed a command-line, Java application that efficiently organized tax codes.",
        "Implemented and maintained a Kanban to manage the department's tasks.",
        "Proofread technical documents for colleagues via Microsoft SharePoint and Word.",
        "Led discussions of team progress at the end of each two-week sprint."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "FloorSeats",
      projectDesc: "A prototype of an entertainment-streaming platform that allows viewers to host virtual watch parties",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://xd.adobe.com/view/850763bb-020a-435a-8dae-7a004b89822c-d054/screen/41a1e29d-728b-4383-81c4-54ba9e85454b"
        }
        //  you can add extra buttons here.
      ]
    },
    /*{
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }*/
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Feel free to reach out to me!",
  number: "",
  email_address: "sparker7878@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
