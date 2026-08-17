/* ============================================================
   PORTFOLIO SCRIPT
   Sections: Data -> Renderers -> Nav -> Theme -> Scroll spy ->
   Reveal-on-scroll -> Init
   ============================================================ */

/* ---------- 1. DATA ----------
   Edit these arrays to add/update projects and publications.
   Swap "media: null" for a real path (e.g. "assets/projects/nyokkey.jpg")
   once you have photos/videos to drop in. */

const PROJECTS = [
  {
    tag: "Current — TsukArm",
    title: "Nyokkey robot development",
    desc: "Ongoing contribution to the Nyokkey robot platform at TsukArm, spanning mechanical design, control, and integration.",
    media: "assets/projects/nyokkey.jpg",
    link: null,
    featured: true
  },
  {
    tag: "Drones + Manipulation",
    title: "Drone-mounted dual-arm shovel system",
    desc: "Imitation-learning-guided dual-arm shovel system for grasping flat objects with minimal gripping surfaces, mounted on a UAV. Currently under review at IEEE/ASME Transactions on Mechatronics.",
    media: "assets/projects/dual-arm-shovel-drone.jpg",
    link: null,
    featured: true
  },
  {
    tag: "Teleoperation",
    title: "Robot teleoperation with motion capture",
    desc: "Teleoperation pipeline built on OptiTrack and Sony Mocopi motion capture, feeding real-time control to robotic arms.",
    media: null,
    link: null,
    featured: true
  },
  {
    tag: "Soft Robotics — IEEE Access",
    title: "Stretchable jamming gripper",
    desc: "A stretchable jamming gripper capable of grasping flat plates, published in IEEE Access (Vol. 12).",
    media: null,
    link: "https://ieeexplore.ieee.org/document/10487948",
    featured: true
  },
  {
    tag: "Aerial Manipulation — ICRA",
    title: "The Flying Shovel Picker",
    desc: "A drone-mounted, shovel-based rotational dual-arm system for picking up indeterminate objects. Poster presentation, ICRA 2024, Yokohama.",
    media: null,
    link: null,
    featured: true
  },
  {
    tag: "Social Impact",
    title: "Automated Hand Sanitizer Dispenser",
    desc: "Prototype-to-product device donated to quarantine centers and hospitals during COVID-19. Recognized by Sri Lanka's health sector, the Prime Minister, and the Minister of Technology and Research.",
    media: "assets/projects/sanitizer_dispenser.jpg",
    link: "http://slic.gov.lk/automatic-hand-sanitizer/",
    featured: true
  },
];

const PROJECTS_MORE = [
  "Imitation-learning-powered robotic systems using stacks like LeRobot",
  "Robotic arm integrated with drones",
  "Sensor data collector & dynamic line rating IoT network for 33kV transmission lines (Univ. of Peradeniya, 2022)",
  "Drone + hardware contribution to \"Eagle Eye for ER Doctor\" tele-monitoring research (Mie University, 2019–2020)",
  "Automated drone landing system using Intel RealSense + Raspberry Pi (Shibaura IT, 2019)",
  "Solar PV grid/off-grid changeover system (Univ. of Peradeniya, 2022)",
  "Hand-sign recognition software for speech-impaired users (2020)",
  "Arduino-based 4-DOF programmable robotic arm (2018)",
  "Bottom-up juice filling machine, supervised (Wayamba University, 2020–2021)",
  "Low-cost automated solar dryer optimization, supervised (Wayamba University, 2020–2021)",
  "Arduino-based item counter for a steel manufacturing client, Wadduwa (2021)",
  "Power backup system for Engenia Solutions Lanka (2022)",
  "\"Man-day calculator\" mobile app for audit time tracking (Ind-Expo Certification, 2021)",
  "Nitrogen fixation via high-voltage synthetic lightning (2021–2022)",
  "Low-cost LPG gas detector (2022)",
  "Low-cost pulse oximeter, prototype attempt (2021)",
  "Custom-built drones",
  "\"WANDA\" insect robot",
];

const PUBLICATIONS = [
  { date: "2026/06", type: "journal", status: "In review", title: "Drone-Mounted Rotational Dual-Arm Shovel-Gripper System for Post-Landing Object Collection", venue: "IEEE Transactions on Systems, Man and Cybernetics: Systems" },
  { date: "2026/05", type: "journal", status: "In review", title: "Vision-Guided Dual-Shovel Platform for Pick-and-Transport of Multi-Shape Objects by UAVs", venue: "IEEE Transactions on Human-Machine Systems" },
  { date: "2026/04", type: "journal", status: "In review", title: "A Drone-Mounted Dual-Arm Shovel System Guided by Imitation Learning for Grasping Flat Objects with Minimal Gripping Surfaces", venue: "IEEE/ASME Transactions on Mechatronics" },
  { date: "2026/03", type: "conference", status: "Published", title: "An Autonomous Advance-Scout Platform for Vision-Based Railway Obstacle Detection and Driver Assistance", venue: "ICIPRoB 2026" },
  { date: "2025/05", type: "conference", status: "Published", title: "Understanding Spatial Relationships with Spherical Image Data for Manipulating Intelligent Robotic Wheelchairs", venue: "ICRA 2025 (poster)" },
  { date: "2025/05", type: "conference", status: "Published", title: "Integrated Aerial Manipulation: A Dual-Shovel Drone System for Object Detection and Retrieval", venue: "ICRA 2025 (poster)" },
  { date: "2025/03", type: "journal", status: "Published", title: "REoOS: Rapid Estimation of Open Space in Complex and Dynamic Environments Using Depth Sensor-Based 3D Analysis", venue: "IEEE Sensors Letters" },
  { date: "2024/05", type: "conference", status: "Published", title: "The Flying Shovel Picker: A Drone-Mounted Shovel-Based Rotational Dual Arm System for Picking Up Indeterminate Objects", venue: "ICRA 2024 (poster)" },
  { date: "2024/04", type: "conference", status: "Published", title: "Visible Light Communication Based User Verification System for Drone Delivery", venue: "ICIPRoB 2024", link: "https://ieeexplore.ieee.org/document/10543428" },
  { date: "2024/03", type: "conference", status: "Published", title: "Image Classification Method to Identify Mature Coconut", venue: "ICIPRoB 2024", link: "https://ieeexplore.ieee.org/document/10543979" },
  { date: "2024/01", type: "journal", status: "Published", title: "A Stretchable Jamming Gripper Grasping Flat Plates", venue: "IEEE Access, Vol. 12", link: "https://ieeexplore.ieee.org/document/10487948" },
  { date: "2022/10", type: "conference", status: "Published", title: "Development of a Smart Stock Assistant for Industries", venue: "GCCE 2022, Osaka", link: "https://ieeexplore.ieee.org/document/10014251" },
  { date: "2021/10", type: "conference", status: "Published", title: "Development of a Raspberry Pi Based Soil Nutrient Analyzing System for Crop Cultivation", venue: "GCCE 2021, Kyoto", link: "https://ieeexplore.ieee.org/document/9621360" },
  { date: "2020/03", type: "conference", status: "Published", title: "Low-cost Talking Calculator for Visually Impaired People in Sri Lanka", venue: "ICIPRob 2020, Negombo" },
  { date: "2019/10", type: "conference", status: "Published", title: "Smart Home Energy Management System to Reduce Monthly Electricity Bill", venue: "GCCE 2019, Osaka", link: "https://ieeexplore.ieee.org/document/9015221" },
];

/* ---------- 2. RENDERERS ---------- */

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => `
    <article class="project-card reveal">
      <div class="project-card__media">
        ${p.media
          ? `<img src="${p.media}" alt="${p.title}" loading="lazy">`
          : `<div class="project-card__placeholder">
               <svg class="icon" viewBox="0 0 24 24" width="28" height="28"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg>
               <span>Media coming soon</span>
             </div>`
        }
      </div>
      <div class="project-card__body">
        <p class="project-card__tag">${p.tag}</p>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.desc}</p>
        ${p.link ? `<a class="project-card__link" href="${p.link}" target="_blank" rel="noopener">View details →</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderMoreProjects() {
  const grid = document.getElementById("project-grid");
  const btn = document.getElementById("load-more-projects");
  if (!grid || !btn) return;

  const list = document.createElement("ul");
  list.className = "project-list-extra reveal";
  list.innerHTML = PROJECTS_MORE.map((item) => `<li>${item}</li>`).join("");
  grid.insertAdjacentElement("afterend", list);
  btn.remove();
  observeReveal(list);
}

function renderPublications(filter = "all") {
  const list = document.getElementById("pub-list");
  if (!list) return;

  const items = PUBLICATIONS.filter((p) => filter === "all" || p.type === filter);

  list.innerHTML = items.map((p) => `
    <li class="pub-item reveal">
      <span class="pub-item__date">${p.date}</span>
      <div>
        <p class="pub-item__title">${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</p>
        <p class="pub-item__venue">${p.venue}</p>
      </div>
      <span class="pub-item__status ${p.status === "Published" ? "pub-item__status--published" : ""}">${p.status}</span>
    </li>
  `).join("");

  items.forEach((_, i) => {
    const el = list.children[i];
    observeReveal(el);
  });
}

function initPublicationFilters() {
  const tabs = document.querySelectorAll(".pub-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("pub-tab--active"));
      tab.classList.add("pub-tab--active");
      renderPublications(tab.dataset.filter);
    });
  });
}

/* ---------- 3. NAV (mobile toggle) ---------- */

function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- 4. THEME TOGGLE ---------- */

function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const stored = localStorage.getItem("portfolio-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = stored || (prefersLight ? "light" : "dark");
  if (initial === "light") document.documentElement.setAttribute("data-theme", "light");

  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("portfolio-theme", "light");
    }
  });
}

/* ---------- 5. SCROLL SPY (highlight active nav link) ---------- */

function initScrollSpy() {
  const sections = document.querySelectorAll("main .section, .hero");
  const links = document.querySelectorAll(".nav__link");
  if (!sections.length || !links.length) return;

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => spy.observe(section));
}

/* ---------- 6. REVEAL ON SCROLL ---------- */

let revealObserver;
function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  }
  return revealObserver;
}

function observeReveal(el) {
  if (el) getRevealObserver().observe(el);
}

function initReveal() {
  document.querySelectorAll(".reveal").forEach(observeReveal);
}

/* ---------- 7. INIT ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initThemeToggle();
  initNavToggle();
  initScrollSpy();

  renderProjects();
  document.getElementById("load-more-projects")?.addEventListener("click", renderMoreProjects);

  renderPublications();
  initPublicationFilters();

  initReveal();
});
