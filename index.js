let firstIntro;
let workRoles;
let typedEmail;
let downloadCV;

const EXPERIENCES = [
  {
    title: "Test Engineer",
    company: "Sopra Steria / Telenet",
    location: "Brussels & Mechelen, BE",
    start: "2023-09",
    end: "2025-08",
    summary: "Consultant test engineer for Telenet: frontend QA on Horizon Go (mobile, web, TV box & 3rd-party hardware), test automation in Java (Cucumber, Selenium, Tequila), plus API testing. ISTQB & Agile/Scrum certified.",
    tags: ["QA", "Automation", "Java", "Cucumber", "Selenium", "Agile"]
  },
  {
    title: "Full-stack Developer",
    company: "Omina Technologies / Univ. Lyon 1",
    location: "Brussels & Lyon",
    start: "2022-06",
    end: "2023-09",
    summary: "Django development with frontend focus: Python, HTML/CSS/JS, HTMX & Bootstrap. UX work in Figma with product managers; research data tools and XML/database apps using Django and Postgres.",
    tags: ["Python", "Django", "Frontend", "Postgres", "UX"]
  },
  {
    title: "Vehicle Operations → Repair Partner",
    company: "VOI Technology",
    location: "France",
    start: "2019-06",
    end: "2020-08",
    summary: "Logistics and technical ops for e-scooters, then process manager rolling out and evolving repair processes across French cities. Coordination with Stockholm HQ, new tools/processes, and support for new facility setups.",
    tags: ["Operations", "Logistics", "Processes", "E-mobility"]
  },
  {
    title: "Content Manager",
    company: "Lyreco Scandinavia",
    location: "Roskilde, DK",
    start: "2018-01",
    end: "2018-10",
    summary: "Digital content management for the Scandinavian webshop: leading data collection projects, improving online product presentation, and coordinating with digital, communications, graphic, and product teams.",
    tags: ["Content", "E-commerce", "Digital", "Projects"]
  },
  {
    title: "Product Assistant",
    company: "Lyreco Scandinavia",
    location: "Roskilde, DK",
    start: "2017-07",
    end: "2017-12",
    summary: "Product data & documentation project for Scandinavia and Finland: safety/technical information, product bibles, daily supplier contact, and close collaboration with multiple internal departments.",
    tags: ["Products", "Documentation", "Suppliers"]
  },

  // Additional experience
  {
    title: "Market Analyst Intern",
    company: "Tværfagligt Forum, Kursus & Tema",
    location: "Virum, DK",
    start: "2017-01",
    end: "2017-03",
    summary: "Market and SEO analysis, customer database creation, project plan and campaigns on Google/Facebook, plus website maintenance and promotional material design.",
    tags: ["Market analysis", "SEO", "Campaigns"]
  },
  {
    title: "Vehicle Operations Specialist",
    company: "VOI Technology",
    location: "Lyon, FR",
    start: "2019-06",
    end: "2020-01",
    summary: "Scooter logistics, diagnostics, hard repairs, software installs/updates, deployment and collecting. Team-lead style role in close collaboration with warehouse and city operations; work carried out in French.",
    tags: ["Operations", "Logistics", "Repairs", "Team lead"]
  },
  {
    title: "Volunteering",
    company: "Summer Park Equestrian (Ranch Hand)",
    location: "Upper Coomera, QLD, AU",
    start: "2019-01",
    end: "2019-01",
    summary: "Volunteer ranch hand: horse care, building and repairing fences, installing waterlines and solar panels, extending hilly access roads, and general maintenance of the ranch.",
    tags: ["Volunteering", "Hands-on", "Maintenance"]
  },
  {
    title: "English Teacher",
    company: "Mabuchi / Epion & schools in Shanghai",
    location: "Osaka & Shanghai",
    start: "2014-03",
    end: "2016-10",
    summary: "English instructor for children and teens: 1-to-1 and small groups, homework, testing and grading, presentations, and ongoing parent communication in Japan and China.",
    tags: ["Teaching", "Education", "Kids & teens"]
  },
  {
    title: "Guitar Teacher",
    company: "Fudan University",
    location: "Shanghai, CN",
    start: "2014-09",
    end: "2014-12",
    summary: "Group guitar classes for high-school students (3–8 per group) with a focus on rhythm, coordination, and playing together.",
    tags: ["Music", "Teaching", "Guitar"]
  },
  {
    title: "Mandarin Studies",
    company: "Fudan University",
    location: "Shanghai, CN",
    start: "2014-02",
    end: "2014-07",
    summary: "Intensive Mandarin language course (C–E level) and Chinese area studies at Fudan University.",
    tags: ["Mandarin", "China", "Language"]
  }
];


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
    forceCloseExperience(); // ensure modal never overlaps mobile nav

    if (document.body.classList.contains('nav-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Clicking on the dark overlay closes the menu
  navOverlay.addEventListener('click', () => {
    forceCloseExperience();
    closeNav();
  });

  // Clicking a link: fade out then close
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      forceCloseExperience();
      closeNav(true);
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

                // ensure experience modal is closed when changing sections
                forceCloseExperience();
    
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

    const experienceOverlay = document.getElementById('experienceOverlay');
    if (experienceOverlay) {
    experienceOverlay.addEventListener('click', () => {
        forceCloseExperience();
    });
    }

      // --- Mobile experience toggle ---
  const toggleButtons = document.querySelectorAll('.experience-toggle button');
  const mainCol = document.querySelector('.experience-main');
  const addCol = document.querySelector('.experience-additional');

  if (toggleButtons.length && mainCol && addCol) {
    // Default: main experience active on mobile
    if (window.innerWidth < 992) {
      mainCol.classList.add('is-mobile-active');
    }

    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // update button states
        toggleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const target = btn.getAttribute('data-exp');

        if (target === 'main') {
          mainCol.classList.add('is-mobile-active');
          addCol.classList.remove('is-mobile-active');
        } else {
          addCol.classList.add('is-mobile-active');
          mainCol.classList.remove('is-mobile-active');
        }
      });
    });

    // Keep things sane when resizing between mobile and desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        // desktop: show both columns, don't rely on mobile classes
        mainCol.classList.remove('is-mobile-active');
        addCol.classList.remove('is-mobile-active');
      } else {
        // mobile: ensure at least one is active
        if (
          !mainCol.classList.contains('is-mobile-active') &&
          !addCol.classList.contains('is-mobile-active')
        ) {
          mainCol.classList.add('is-mobile-active');
        }
      }
    });
  }

});

// function to start the typing on the home page
function homeTyped() {
    workRoles = new Typed("#workRoles", {
        strings: ["Online Profile"],
        typeSpeed: 10,
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

function forceCloseExperience() {
    const box = document.querySelector('.experience');
    if (box && box.classList.contains('show')) {
        closeInformation();
    }
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
