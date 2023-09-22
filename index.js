let firstIntro;
let workRoles;
let typedEmail;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reloadPage').addEventListener('click', function() {
        location.reload();
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
                handleTypedobjects(currentSection);
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
        strings: ["Full-Stack Developer"],
        typeSpeed: 50,
        startDelay: 3000,
        showCursor: true,
    })
}
 
// function to start the typing on the about page
function aboutTyped() {
    firstIntro = new Typed("#firstIntro", {
        strings: [
            "Born and raised in Denmark, currently living in Brussels, Belgium.^500 I started coding in 2020, and I have since then specialized in Django.",
            "I currently work with Django, mostly focused on frontend where I do Figma design, design implementations, and demos.",
        ],
        typeSpeed: 10,
        backSpeed: 2,
        backDelay: 1000,
        startDelay: 2000,
        showCursor: false,
        onComplete: function() {
            new Typed("#secondIntro", {
                strings: [
                    "My background is broad and involves process management, teaching, communication, and content management^500",
                    "I'm a friendly spirit, always up for chat. Please don't hesitate to reach out."
                ],
                typeSpeed: 5,
                backSpeed: 2,
                backDelay: 500,
                startDelay: 500,
                loop: false,
                showCursor: false,
            })
        },
    })
}

// function to start the typing on the about page
function contactTyped() {
    typedEmail = new Typed("#email", {
        strings: [
            "brogaard89@gmail.com",
        ],
        typeSpeed: 30,
        startDelay: 1000,
        showCursor: false,
        onComplete: function() {
            new Typed("#downloadCV", {
                strings: [
                    "Also, download my CV !",
                ],
                typeSpeed: 20,
                startDelay: 500,
                loop: false,
                showCursor: false,
            })
        },
    })
}

