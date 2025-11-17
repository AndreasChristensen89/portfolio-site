let firstIntro;
let workRoles;
let typedEmail;
let downloadCV;

const EXPERIENCES = [
  {
    "title": "Test Engineer",
    "company": "Sopra Steria",
    "location": "Brussels, BE",
    "start": "2023-09",
    "end": "2025-03",
    "summary": "Mobile/TV streaming QA · test automation & manual testing · Agile · ISTQB.",
    "tags": ["QA", "Automation", "Agile", "Streaming"]
  },
  {
    "title": "Full-stack Developer",
    "company": "Omina / Claude Bernard Univ.",
    "location": "Brussels & Lyon",
    "start": "2021-06",
    "end": "2022-04",
    "summary": "Python/Django front-leaning work; product features & UI integration.",
    "tags": ["Python", "Django", "Frontend"]
  },
  {
    "title": "Vehicle Operations → Repair Partner",
    "company": "VOI Technology",
    "location": "France",
    "start": "2019-06",
    "end": "2020-02",
    "summary": "Ops performance, partner coordination, issue management.",
    "tags": ["Operations", "Logistics", "Partners"]
  },
  {
    "title": "Content Manager",
    "company": "Roskilde Office",
    "location": "Denmark",
    "start": "2017-01",
    "end": "2017-11",
    "summary": "Content ops, coordination between teams, delivery to deadlines.",
    "tags": ["Content", "Coordination"]
  },
  {
    "title": "Product Assistant",
    "company": "Nordic Project (Finland/DK)",
    "location": "Nordics",
    "start": "2016-06",
    "end": "2016-12",
    "summary": "Product update project across sites; data clean-up; release support.",
    "tags": ["Products", "Excel", "Ops"]
  },
  {
    "title": "English Teacher",
    "company": "Japan (ALT)",
    "location": "Japan",
    "start": "2015-01",
    "end": "2015-10",
    "summary": "Classroom instruction and language coaching.",
    "tags": ["Teaching", "Education"]
  },
  {
    "title": "Mandarin Studies",
    "company": "Fudan University",
    "location": "Shanghai, CN",
    "start": "2013-09",
    "end": "2014-06",
    "summary": "Intensive Chinese; HSK track.",
    "tags": ["Mandarin", "HSK"]
  }
]

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reloadPage').addEventListener('click', function() {
        location.reload();
    });

    const burger = document.querySelector('.navbar-burger');
  const navOverlay = document.getElementById('navOverlay');
  const navList = document.querySelector('.navbar-nav');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function openNav() {
    document.body.classList.add('nav-open');
    navOverlay.classList.add('active');
  }

  function closeNav(withFade = false) {
    if (withFade) {
      // fade out links first
      navList.classList.add('nav-fade');
      setTimeout(() => {
        document.body.classList.remove('nav-open');
        navOverlay.classList.remove('active');
        navList.classList.remove('nav-fade');
      }, 300); // should match CSS transition duration
    } else {
      document.body.classList.remove('nav-open');
      navOverlay.classList.remove('active');
    }
  }

  // Toggle when clicking burger
  burger.addEventListener('click', () => {
    if (document.body.classList.contains('nav-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Clicking on the dark overlay closes the menu
  navOverlay.addEventListener('click', () => closeNav());

  // Clicking a link: fade out then close
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeNav(true);
      // You likely already scroll to sections in another handler;
      // this just handles the animation/closing.
    });
  });
  
    // activate typed.js object for home page
    homeTyped();
    const paragraphs = document.querySelectorAll(".jump");

    // set eventlister on all links to have them switch between sections
    const links = document.querySelectorAll('.nav-link');
    const darkFade = document.getElementById("darkBackground");

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            // Get the target section ID from the clicked link
            const targetSectionID = link.getAttribute('data-section');

            // Locate the corresponding section element
            const correspondingSection = document.getElementById(`section-${targetSectionID}`);

            // Check if the corresponding section is already active
            if (correspondingSection && correspondingSection.classList.contains('active')) {
                // Exit the function early if the section is already active
                return;
            }

            event.preventDefault();
            // expose black background and trigger fadein animation
            darkFade.classList.remove("d-none");
            darkFade.classList.add("active");
            const sections = document.querySelectorAll('.section');
            let currentSection;

            // add dark layer
            // remove the active class from whatever element is active
            setTimeout(function () {
                darkFade.classList.add("d-none");
                darkFade.classList.remove("active");
                for (section of sections) {
                    if (section.classList.contains("active")) {
                        currentSection = section.id;
                        section.classList.remove("active");
                        break;
                    }
                }

                // activate the specified section via the attribute
                const targetSectionID = link.getAttribute('data-section');
                const sectionToBeActive = document.getElementById(`section-${targetSectionID}`);
                if (sectionToBeActive) {
                    sectionToBeActive.classList.add('active');
                }
                // handleTypedobjects(currentSection);
                switch (currentSection) {
                    // destroy typed.js objects if home or about
                    case 'section-home':
                        workRoles.destroy();
                        workRoles = null;
                        document.getElementById("workRoles").textContent = "";
                        break;
                    case 'section-about':
                        firstIntro.destroy();
                        firstIntro = null;
                        document.getElementById("firstIntro").textContent = "";
                        document.getElementById("secondIntro").textContent = "";
                        break;
                    case 'section-skills':
                        paragraphs.forEach(p => p.classList.remove('jumpy'));
                        break;
                    case 'section-contact':
                        typedEmail.destroy();
                        typedEmail = null;
                        downloadCV.destroy();
                        downloadCV = null;
                        document.getElementById("email").textContent = "";
                        document.getElementById("downloadCV").textContent = "";
                        break;
                    default:
                        break;
                }

                // initiate animations according to page
                switch (targetSectionID) {
                    // destroy typed.js objects if home or about
                    case 'home':
                        setTimeout(homeTyped(), 3000);
                        break;
                    case 'about':
                        aboutTyped();
                        break;
                    case 'skills':
                        setTimeout(function() {
                            paragraphs.forEach((paragraph) => {
                                paragraph.classList.add("jumpy");
                            });
                        }, 2000)
                        break;
                    case 'contact':
                        contactTyped();
                        downloadCVTyped();
                        break;
                    default:
                        break;
                }

            }, 500)
            
        });
    });

});

function handleTypedobjects() {
    
}

// function to start the typing on the home page
function homeTyped() {
    workRoles = new Typed("#workRoles", {
        strings: ["Online Profile"],
        typeSpeed: 50,
        startDelay: 3000,
        showCursor: true,
    })
}
 
// function to start the typing on the about page
function aboutTyped() {
    firstIntro = new Typed("#firstIntro", {
        strings: [
            "Currently living in Brussels with my partner and our two boys.^500 I have a wide background that spans teaching, process, operations, and web development.^500",
        ],
        typeSpeed: 10,
        // backSpeed: 2,
        // backDelay: 1000,
        startDelay: 2000,
        showCursor: false,
        onComplete: function() {
            new Typed("#secondIntro", {
                strings: [
                    "I'm a friendly spirit, always up for chat. Please don't hesitate to reach out."
                ],
                typeSpeed: 5,
                // backSpeed: 2,
                // backDelay: 500,
                startDelay: 500,
                loop: false,
                showCursor: false,
            })
        },
    })
}

// function to start the typing on the contact page
function contactTyped() {
    typedEmail = new Typed("#email", {
        strings: [
            "brogaard89@gmail.com",
        ],
        typeSpeed: 30,
        startDelay: 1000,
        showCursor: false,
    })
}

function downloadCVTyped() {
    downloadCV = new Typed("#downloadCV", {
        strings: [
            "Also, download my CV !",
        ],
        typeSpeed: 20,
        startDelay: 2500,
        showCursor: false,
    })
}

function formatDates(start, end) {
    // Simple YYYY-MM → "2023-09 – 2025-03"
    // You can get fancier later with month names
    if (!start && !end) return "";
    if (start && !end) return `${start} – Present`;
    return `${start} – ${end}`;
}

function showDetails(passedTitle) {
    const data = EXPERIENCES.find(x => x.title === passedTitle);
    if (!data) return;

    const box = document.querySelector('.experience');

    box.querySelector('.experience-title').textContent = data.title;
    box.querySelector('.experience-company').textContent = data.company;
    box.querySelector('.experience-location').textContent = data.location;
    box.querySelector('.experience-dates').textContent = formatDates(data.start, data.end);
    box.querySelector('.experience-summary').textContent = data.summary;

    // tags
    const tagsWrapper = box.querySelector('.experience-tags');
    tagsWrapper.innerHTML = "";
    if (Array.isArray(data.tags)) {
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'experience-tag';
            span.textContent = tag;
            tagsWrapper.appendChild(span);
        });
    }

    box.classList.add('show');
}

function closeInformation() {
    document.querySelector('.experience').classList.remove('show');
}
