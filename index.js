// --- Experience data (all roles) ---

const EXPERIENCES = [
  {
    title: "Test Engineer Consultant",
    company: "Sopra Steria",
    location: "Brussels, Belgium",
    period: "Sep 2023 – Aug 2025",
    order: 202309,
    category: "it",
    summary:
      "Consultant test engineer for Telenet with focus on frontend quality for Horizon Go (mobile, web, TV box & 3rd-party hardware) and API testing.",
    tags: ["Test automation", "Java", "Cucumber", "Selenium", "Agile", "ISTQB"]
  },
  {
    title: "Test Engineer",
    company: "Telenet",
    location: "Mechelen, Belgium",
    period: "Oct 2023 – May 2024",
    order: 202310,
    category: "it",
    summary:
      "Frontend QA for Horizon Go across devices, including test automation using Java, Cucumber and the Tequyla framework.",
    tags: ["Frontend QA", "Java", "Cucumber", "Tequyla", "TV & streaming"]
  },
  {
    title: "Django Developer",
    company: "Omina Technologies",
    location: "Brussels, Belgium",
    period: "Feb 2023 – Sep 2023",
    order: 202302,
    category: "it",
    summary:
      "Django application development with a frontend focus: Python, HTML/CSS/JS, Bootstrap, HTMX and UX collaboration in Figma.",
    tags: ["Python", "Django", "Frontend", "UX", "HTMX"]
  },
  {
    title: "Full-stack Developer",
    company: "Université Claude Bernard Lyon 1",
    location: "Lyon, France",
    period: "Jun 2022 – Dec 2022",
    order: 202206,
    category: "it",
    summary:
      "Built Django applications for research databases, including XML generation tools, complex forms and data-driven views using Postgres and mapping tools.",
    tags: ["Django", "Postgres", "XML tooling", "Leaflet", "Research data"]
  },
  {
    title: "Repair Partner (Process Manager)",
    company: "Voi Technology",
    location: "Lyon, Paris, Marseille, Bordeaux (FR)",
    period: "Jan 2020 – Aug 2020",
    order: 202001,
    category: "operations",
    summary:
      "Process manager for repair operations in the French market: implementation, evolution and synchronization of repair processes, tools and facilities.",
    tags: ["Process management", "Operations", "Data review", "Stakeholder coordination"]
  },
  {
    title: "Vehicle Operations Specialist",
    company: "Voi Technology",
    location: "Lyon, France",
    period: "Jun 2019 – Jan 2020",
    order: 201906,
    category: "operations",
    summary:
      "Hands-on operations: logistics, diagnostics, hard repairs, software updates and deployment/collection of e-scooters, working closely with warehouse and city operations.",
    tags: ["Logistics", "Technical repairs", "Team lead style", "E-mobility"]
  },
  {
    title: "Ranch Hand (Volunteer)",
    company: "Summer Park Equestrian",
    location: "Upper Coomera, QLD, Australia",
    period: "Jan 2019 – Jan 2019",
    order: 201901,
    category: "other",
    summary:
      "Volunteer ranch work: horse care, building and repairing fences, installing waterlines and solar panels, and maintaining access roads.",
    tags: ["Volunteering", "Hands-on work", "Maintenance"]
  },
  {
    title: "Content Manager",
    company: "Lyreco Scandinavia",
    location: "Roskilde, Denmark",
    period: "Jan 2018 – Oct 2018",
    order: 201801,
    category: "operations",
    summary:
      "Managed digital product content for the Scandinavian webshop, led data collection projects and supported digital transformation initiatives.",
    tags: ["Content management", "E-commerce", "Project coordination", "Digital transformation"]
  },
  {
    title: "Product Assistant",
    company: "Lyreco Scandinavia",
    location: "Roskilde, Denmark",
    period: "Jul 2017 – Dec 2017",
    order: 201707,
    category: "operations",
    summary:
      "Managed product documentation and safety/technical information, built product bibles and handled daily supplier communication.",
    tags: ["Product data", "Documentation", "Suppliers"]
  },
  {
    title: "Market Analyst Intern",
    company: "Tværfagligt Forum, Kursus & Tema",
    location: "Virum, Denmark",
    period: "Jan 2017 – Mar 2017",
    order: 201701,
    category: "other",
    summary:
      "Performed market and SEO analysis, created a customer database, planned campaigns and maintained the company website.",
    tags: ["Market analysis", "SEO", "Campaigns", "Web content"]
  },
  {
    title: "English Instructor",
    company: "Mabuchi / Epion",
    location: "Osaka, Japan",
    period: "Jan 2016 – Oct 2016",
    order: 201601,
    category: "teaching",
    summary:
      "Taught 27 weekly classes to children aged 3–13, from beginners to conversational level, with responsibility for homework, testing and parent communication.",
    tags: ["Teaching", "Kids & teens", "Lesson planning"]
  },
  {
    title: "Guitar Teacher",
    company: "Fudan University",
    location: "Shanghai, China",
    period: "Sep 2014 – Dec 2014",
    order: 201409,
    category: "teaching",
    summary:
      "Group guitar classes (3–8 students) for high-school level, focused on rhythm, coordination and playing together.",
    tags: ["Teaching", "Music", "Group classes"]
  },
  {
    title: "English Instructor",
    company: "Kirin Academy",
    location: "Shanghai, China",
    period: "Sep 2014 – Dec 2014",
    order: 201409,
    category: "teaching",
    summary:
      "Private tutoring in conversational English and homework help for young learners.",
    tags: ["Teaching", "Private tutoring", "Kids"]
  },
  {
    title: "English Instructor",
    company: "IVY Prep",
    location: "Shanghai, China",
    period: "Mar 2014 – Jul 2014",
    order: 201403,
    category: "teaching",
    summary:
      "Taught small group classes to children aged 7–12, including homework correction, presentations and progress evaluation.",
    tags: ["Teaching", "Small groups", "Presentations"]
  },
  {
    title: "Communication Intern",
    company: "Nordic Centre, Fudan University",
    location: "Shanghai, China",
    period: "Sep 2013 – Jan 2014",
    order: 201309,
    category: "other",
    summary:
      "Worked on newsletters, promotion, event logistics, and communication with 26 member universities.",
    tags: ["Communication", "Events", "International environment"]
  },
  {
    title: "Personal Helper",
    company: "Rebild Kommune",
    location: "Skørping, Denmark",
    period: "Aug 2011 – Aug 2013",
    order: 201108,
    category: "other",
    summary:
      "Personal helper for a teenager with muscular dystrophy, supporting daily activities and night shifts in a high-trust role.",
    tags: ["Care", "Responsibility", "Trust-based work"]
  },
  {
    title: "Nursery Assistant",
    company: "SFO Skattekisten",
    location: "Denmark",
    period: "Aug 2008 – Feb 2009",
    order: 200808,
    category: "teaching",
    summary:
      "Support role in a nursery environment, assisting with daily activities and child supervision.",
    tags: ["Childcare", "Support role"]
  },
  {
    title: "Mandarin Studies",
    company: "Fudan University",
    location: "Shanghai, China",
    period: "2014",
    order: 201401,
    category: "other",
    summary:
      "Intensive Mandarin language course and Chinese area studies, forming the foundation for later China-related roles.",
    tags: ["Mandarin", "China", "Language studies"]
  }
];

// --- Theme handling ---

function applyTheme(themeClass) {
  const body = document.body;
  const toggleIcon = document.querySelector(".theme-toggle i");

  body.classList.remove("theme-dark", "theme-light");
  body.classList.add(themeClass);
  localStorage.setItem("theme", themeClass);

  if (toggleIcon) {
    // icon: moon when dark, sun when light
    if (themeClass === "theme-light") {
      toggleIcon.className = "bx bx-sun";
    } else {
      toggleIcon.className = "bx bx-moon";
    }
  }
}

function setupThemeToggle() {
  const btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.body.classList.contains("theme-light")
      ? "theme-light"
      : "theme-dark";
    const next = current === "theme-light" ? "theme-dark" : "theme-light";
    applyTheme(next);
  });
}

function initThemeFromPreference() {
  const stored = localStorage.getItem("theme");
  if (stored === "theme-light" || stored === "theme-dark") {
    applyTheme(stored);
    return;
  }

  // fall back to user system preference
  const prefersLight = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight ? "theme-light" : "theme-dark");
}

// --- Navigation: smooth scroll & active link on scroll ---

function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = [...document.querySelectorAll("section")];

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href").replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const offset = window.scrollY + rect.top - 72; // account for header height
      window.scrollTo({ top: offset, behavior: "smooth" });

      // Close mobile nav if open
      closeMobileNav();
    });
  });

  // Highlight active link on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    {
      rootMargin: "-55% 0px -40% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// --- Mobile nav toggle ---

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open", !isOpen);
  });
}

function closeMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}

// --- Experience rendering and filtering ---

function createExperienceCard(exp) {
  const card = document.createElement("article");
  card.className = "exp-card";
  card.dataset.category = exp.category;

  card.innerHTML = `
    <div class="exp-main">
      <h3>${exp.title}</h3>
      <p class="exp-meta">
        <span>${exp.company}</span> ·
        <span>${exp.location}</span>
      </p>
      <p class="exp-summary">${exp.summary}</p>
    </div>
    <div class="exp-aside">
      <p class="exp-period">${exp.period}</p>
      <div class="exp-tags">
        ${exp.tags.map((tag) => `<span class="exp-tag">${tag}</span>`).join("")}
      </div>
    </div>
    <span class="exp-pill ${exp.category}">
      ${categoryLabel(exp.category)}
    </span>
  `;

  return card;
}

function categoryLabel(cat) {
  switch (cat) {
    case "it":
      return "IT & Digital";
    case "operations":
      return "Operations";
    case "teaching":
      return "Teaching";
    default:
      return "Other";
  }
}

function renderExperiences() {
  const container = document.getElementById("experience-list");
  if (!container) return;

  const sorted = [...EXPERIENCES].sort((a, b) => b.order - a.order);
  sorted.forEach((exp) => {
    const card = createExperienceCard(exp);
    container.appendChild(card);
  });
}

function setupExperienceFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".exp-card");

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.filter;
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      cards.forEach((card) => {
        const cat = card.dataset.category;
        const show = value === "all" || value === cat;
        card.style.display = show ? "grid" : "none";
      });
    });
  });
}

// --- Footer year ---

function setCurrentYear() {
  const span = document.getElementById("year");
  if (!span) return;
  span.textContent = new Date().getFullYear();
}

// --- Init ---

document.addEventListener("DOMContentLoaded", () => {
  initThemeFromPreference();
  setupThemeToggle();
  setupNavigation();
  setupMobileNav();
  renderExperiences();
  setupExperienceFilters();
  setCurrentYear();
});
