/* ============================================================
   PORTFOLIO SCRIPT
   Sections: Data -> Renderers -> Nav -> Theme -> Scroll spy ->
   Reveal-on-scroll -> Init
   ============================================================ */

/* ---------- 1. DATA ----------
   Edit these arrays to add/update content. For any "photo"/"media"
   field: swap null for a real path (e.g. "assets/projects/nyokkey.jpg")
   once you have a file to drop in. Videos: set "video" to an mp4 path
   and (optionally) "media" to an image path to use as its poster. */

/* Hero profile photo — set to e.g. "assets/profile/nilupul.jpg" once ready. */
const PROFILE_PHOTO = "assets/profile/nilupul.jpg";

/* Sliding photo strip right below the hero. Add paths like
   "assets/marquee/photo1.jpg" as you drop files into assets/marquee/.
   Needs at least 4-5 images for a smooth-looking loop. */
const MARQUEE_IMAGES = ["assets/marquee/photo1.jpg", "assets/marquee/photo2.jpg", "assets/marquee/photo3.jpg", "assets/marquee/photo4.jpg", "assets/marquee/photo5.jpg","assets/marquee/photo6.jpg", "assets/marquee/photo7.jpg", "assets/marquee/photo8.jpg", "assets/marquee/photo9.jpg", "assets/marquee/photo10.jpg"];

const PROJECTS = [
  {
    tag: "Teleoperation",
    title: "Robot teleoperation with motion capture",
    desc: "Teleoperation pipeline built on OptiTrack and Sony Mocopi motion capture, feeding real-time control to robotic arms.",
    media: "assets/projects/Robot_teleoperation_mocopi.jpg",
    video: "assets/projects/Robot_teleoperation_mocopi.mp4",
    link: null,
    featured: true
  },
  {
    tag: "Motion Capture",
    title: "External Position Estimation System for drone with optical tracking setup",
    desc: "An external position estimation system for drones built on an optical motion-capture setup, providing precise ground-truth localization for indoor flight and control experiments.",
    media: "assets/projects/optical_tracking_drone.jpg",
    video: "assets/projects/optical_tracking_drone.mp4",
    link: null,
    featured: true
  },
  {
    tag: "Current — TsukArm",
    title: "Nyokkey robot development",
    desc: "Ongoing contribution to the Nyokkey robot platform at TsukArm, spanning mechanical design, control, and integration.",
    media: "assets/projects/nyokkey.jpg",
    video: "assets/projects/nyokkey_demo.mp4",
    link: null,
    featured: true
  },
  {
    tag: "Drones + Manipulation",
    title: "Drone-mounted dual-arm shovel system",
    desc: "Imitation-learning-guided dual-arm shovel system for grasping flat objects with minimal gripping surfaces, mounted on a UAV. Currently under review at IEEE/ASME Transactions on Mechatronics.",
    media: "assets/projects/dual-arm-shovel-drone.jpg",
    video: "assets/projects/Imitation-learning-drone.mp4",
    link: null,
    featured: true
  },
  {
    tag: "Imitation Learning",
    title: "Imitation-learning-powered robotic systems using stacks like LeRobot",
    desc: "Robotic systems that learn manipulation behaviors directly from demonstration data, built on imitation-learning stacks such as LeRobot.",
    media: "assets/projects/lerobot_demo.jpg",
    video: "assets/projects/lerobot_demo.mp4",
    link: null,
    featured: true
  },
  {
    tag: "Social Impact",
    title: "Automated Hand Sanitizer Dispenser",
    desc: "Prototype-to-product device donated to quarantine centers and hospitals during COVID-19. Recognized by Sri Lanka's health sector, the Prime Minister, and the Minister of Technology and Research.",
    media: "assets/projects/sanitizer_dispenser.jpg",
    video: null,
    link: "http://slic.gov.lk/automatic-hand-sanitizer/",
    featured: true
  },
  {
    tag: "Aerial Manipulation — ICRA",
    title: "The Flying dual arm shovel gripper",
    desc: "A drone-mounted, shovel-based rotational dual-arm system for picking up indeterminate objects. Poster presentation, ICRA 2024, Yokohama.",
    media: "assets/projects/shovel_gripper_drone.jpg",
    video: "assets/projects/shovel_gripper_drone.mp4",
    link: null,
    featured: true
  },
  {
    tag: "Electronics",
    title: "Low-cost LPG gas detector",
    desc: "A low-cost LPG gas detector device for early leak detection and safety monitoring. (2022)",
    media: "assets/projects/LPG_gas_detector.jpg",
    video: null,
    link: null,
    featured: true
  },
];

const PROJECTS_MORE = [
  "<a href=\"https://ieeexplore.ieee.org/document/10487948\" target=\"_blank\" rel=\"noopener\">Stretchable jamming gripper — grasping flat plates (IEEE Access)</a>",
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
  "Low-cost pulse oximeter, prototype attempt (2021)",
  "Custom-built drones",
  "\"WANDA\" insect robot",
];

const PUBLICATIONS = [
  { date: "2026/06", type: "journal", status: "In review", title: "Drone-Mounted Rotational Dual-Arm Shovel-Gripper System for Post-Landing Object Collection", venue: "IEEE Transactions on Systems, Man and Cybernetics: Systems" },
  { date: "2026/05", type: "journal", status: "In review", title: "Vision-Guided Dual-Shovel Platform for Pick-and-Transport of Multi-Shape Objects by UAVs", venue: "IEEE Transactions on Human-Machine Systems" },
  { date: "2026/04", type: "journal", status: "In review", title: "A Drone-Mounted Dual-Arm Shovel System Guided by Imitation Learning for Grasping Flat Objects with Minimal Gripping Surfaces", venue: "IEEE/ASME Transactions on Mechatronics" },
  { date: "2026/03", type: "conference", status: "Published", title: "An Autonomous Advance-Scout Platform for Vision-Based Railway Obstacle Detection and Driver Assistance", venue: "ICIPRoB 2026", link: "https://ieeexplore.ieee.org/document/11497807/" },
  { date: "2025/05", type: "conference", status: "Published", title: "Understanding Spatial Relationships with Spherical Image Data for Manipulating Intelligent Robotic Wheelchairs", venue: "ICRA 2025 (poster)", link: "https://events.infovaya.com/presentation?id=153011" },
  { date: "2025/05", type: "conference", status: "Published", title: "Integrated Aerial Manipulation: A Dual-Shovel Drone System for Object Detection and Retrieval", venue: "ICRA 2025 (poster)", link: "https://events.infovaya.com/presentation?id=150605" },
  { date: "2025/03", type: "journal", status: "Published", title: "REoOS: Rapid Estimation of Open Space in Complex and Dynamic Environments Using Depth Sensor-Based 3D Analysis", venue: "IEEE Sensors Letters", link: "https://ieeexplore.ieee.org/document/11036621" },
  { date: "2024/05", type: "conference", status: "Published", title: "The Flying Shovel Picker: A Drone-Mounted Shovel-Based Rotational Dual Arm System for Picking Up Indeterminate Objects", venue: "ICRA 2024 (poster)", link: "https://events.infovaya.com/presentation?id=123467" },
  { date: "2024/04", type: "conference", status: "Published", title: "Visible Light Communication Based User Verification System for Drone Delivery", venue: "ICIPRoB 2024", link: "https://ieeexplore.ieee.org/document/10543428" },
  { date: "2024/03", type: "conference", status: "Published", title: "Image Classification Method to Identify Mature Coconut", venue: "ICIPRoB 2024", link: "https://ieeexplore.ieee.org/document/10543979" },
  { date: "2024/01", type: "journal", status: "Published", title: "A Stretchable Jamming Gripper Grasping Flat Plates", venue: "IEEE Access, Vol. 12", link: "https://ieeexplore.ieee.org/document/10487948" },
  { date: "2022/10", type: "conference", status: "Published", title: "Development of a Smart Stock Assistant for Industries", venue: "GCCE 2022, Osaka", link: "https://ieeexplore.ieee.org/document/10014251" },
  { date: "2021/10", type: "conference", status: "Published", title: "Development of a Raspberry Pi Based Soil Nutrient Analyzing System for Crop Cultivation", venue: "GCCE 2021, Kyoto", link: "https://ieeexplore.ieee.org/document/9621360" },
  { date: "2020/03", type: "conference", status: "Published", title: "Low-cost Talking Calculator for Visually Impaired People in Sri Lanka", venue: "ICIPRob 2020, Negombo", link: "https://www.researchgate.net/publication/353767286_Low-cost_Talking_Calculator_for_Visually_Impaired_People_in_Sri_Lanka" },
  { date: "2019/10", type: "conference", status: "Published", title: "Smart Home Energy Management System to Reduce Monthly Electricity Bill", venue: "GCCE 2019, Osaka", link: "https://ieeexplore.ieee.org/document/9015221" },
];

const SKILLS = [
  { title: "Robotic systems", list: "UFactory xArm, Realman arms, OpenArm, LeRobot, Dobot, Unitree robots, DH-Robotics & OnRobot grippers, AgileX UGVs, LiDAR, ROS1/ROS2", photo:  "assets/skills/Robotic_systems.jpg"},
  { title: "Programming", list: "Python, C++, Java, Android, Git, Arduino, VS Code", photo: null },
  { title: "Single-board computers", list: "Raspberry Pi, Jetson Nano/Orin Nano, Seeed Odyssey, Asus Tinker, Linux/Ubuntu, Raspbian", photo: "assets/skills/Raspberry.jpg"},
  { title: "Microcontrollers", list: "Arduino, ESP32/8266, STM32, ARM, PIC, AVR, PlatformIO", photo: null },
  { title: "3D CAD & fabrication", list: "Fusion 360, UltiMaker Cura, FlashForge, Creality Ender", photo: "assets/skills/3D_CAD.jpg" },
  { title: "Electronics", list: "Circuit design, PCB creation, SMD soldering", photo: null },
  { title: "Drones & flight controllers", list: "Cube Pilot/Orange Cube, Navio, Pixhawk, Naze32, SP, CC3D, KK, ArduPilot, LibrePilot, OpenPilot, iNav", photo: "assets/skills/Drones.jpg" },
  { title: "Motion capture & teleoperation", list: "OptiTrack, Sony Mocopi, imitation learning pipelines, robot teleoperation", photo: null },
];

const EXPERIENCE = [
  { date: "Nov 2023 – Present", title: "Robotics Engineer (part-time) — TsukArm", org: "Contributing to ongoing robotics research and development, including the Nyokkey robot, drone-arm integration, motion-capture teleoperation, and imitation-learning systems.", photo: "assets/experience/TsukArm.jpg", active: true },
  { date: "Apr – Oct 2023", title: "Assistant Robotics Engineer (part-time) — TechShare Inc., Japan", org: "Physical Computing Lab: Dobot industrial arms (Nova, MG400, Magician), Unitree quadrupeds, DH-Robotics/OnRobot grippers, AgileX UGVs, custom end-effector development.", photo: "assets/experience/TechShare.jpg", active: false },
  { date: "2023 – 2024", title: "Robotics Teacher (part-time) — Primavera Robotics School", org: "Teaching basic robotics for primary school students on weekends.", photo: "assets/experience/Primavera.jpg", active: false },
  { date: "Jun – Sep 2022", title: "Research Engineer — University of Peradeniya, Sri Lanka", org: "IoT dynamic line rating network for 33kV transmission lines; solar PV grid/off-grid changeover system.", photo: "assets/experience/Peradeniya.jpg", active: false },
  { date: "2022", title: "Guest Lecturer — University of Vocational Technology, Sri Lanka", org: "IoT device programming, Arduino & Raspberry Pi for IT undergraduates.", photo: "assets/experience/Vocational.jpg", active: false },
];

const RECOGNITION = [
  { type: "Patent", title: "Cylindrical Gas Saving System", desc: "National patent (LK/P/1/19868); selected to provincial level, National Exhibition for Inventions & Innovations, 2018.", photo: "assets/recognition/Cylindrical_Gas_ National_Exhibition.jpg" },
  { type: "Award", title: "Laser Beam Distance Meter", desc: "Bronze medal, all-island National Exhibition for Inventions & Innovations, 2018.", photo:"assets/recognition/Laser_Beam_Distance_Meter.jpg" },
  { type: "Invited talk", title: "2025 IEEE ICDTDA, Sendai", desc: "\"Robotics for Smart Society\" session — robotic teleoperation, AI, and imitation learning.", photo: "assets/recognition/2025_IEEE_ICDTDA_Sendai.jpg" },
  { type: "Invited talk", title: "Online PCB Design workshop", desc: "Electronics Society, Wayamba University of Sri Lanka.", photo: "assets/recognition/PCB_Design_workshop.jpg" },
  { type: "Invited talk", title: "XCHANGING IDEAS #34", desc: "Global 5G Evolution.", photo: "assets/recognition/XCHANGING_IDEAS.jpg" },
  { type: "Media", title: "Sri Lankan national television feature", desc: "Coverage of the Automated Hand Sanitizer Dispenser.", photo: "assets/recognition/national_television.jpg" },
  { type: "Media", title: "Newspaper coverage", desc: "Sri Lankan press coverage of innovation work.", photo: "assets/recognition/news_paper_innovation.jpg" },
];

/* ---------- 2. SHARED MEDIA PLACEHOLDER ---------- */

function placeholderHtml(label = "Photo coming soon") {
  return `
    <div class="media-placeholder">
      <svg class="icon" viewBox="0 0 24 24" width="24" height="24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg>
      <span>${label}</span>
    </div>`;
}

/* ---------- 3. RENDERERS ---------- */

function renderHeroPhoto() {
  const el = document.getElementById("hero-photo");
  if (!el) return;
  el.innerHTML = PROFILE_PHOTO
    ? `<img src="${PROFILE_PHOTO}" alt="Nilupul Nuwan Senevirathna" loading="eager">`
    : placeholderHtml("Profile photo coming soon");
}

function renderMarquee() {
  const section = document.getElementById("marquee");
  const track = document.getElementById("marquee-track");
  if (!section || !track) return;

  const hasImages = MARQUEE_IMAGES.length > 0;
  const items = hasImages
    ? MARQUEE_IMAGES
    : ["", "", "", "", ""]; // placeholder slots until photos are added

  const itemHtml = (src) => `
    <div class="marquee__item">
      ${src ? `<img src="${src}" alt="" loading="lazy">` : placeholderHtml("Photo coming soon")}
    </div>`;

  // Duplicate the sequence so the CSS animation (translateX -50%) loops seamlessly.
  const sequence = [...items, ...items].map(itemHtml).join("");
  track.innerHTML = sequence;
  section.classList.toggle("marquee--placeholder", !hasImages);
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => {
    let mediaHtml;
    if (p.video) {
      const posterStyle = p.media ? ` style="background-image:url('${p.media}')"` : "";
      mediaHtml = `
        <div class="project-card__video-trigger" data-video="${p.video}"${posterStyle} role="button" tabindex="0" aria-label="Play video: ${p.title}">
          <span class="project-card__play" aria-hidden="true">
            <svg class="icon" viewBox="0 0 24 24" width="20" height="20"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
          </span>
        </div>`;
    } else if (p.media) {
      mediaHtml = `<img src="${p.media}" alt="${p.title}" loading="lazy">`;
    } else {
      mediaHtml = placeholderHtml("Media coming soon");
    }

    return `
      <article class="project-card reveal">
        <div class="project-card__media">${mediaHtml}</div>
        <div class="project-card__body">
          <p class="project-card__tag">${p.tag}</p>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__desc">${p.desc}</p>
          ${p.link ? `<a class="project-card__link" href="${p.link}" target="_blank" rel="noopener">View details →</a>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function initProjectVideoTriggers() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const play = (trigger) => {
    const src = trigger.dataset.video;
    const media = trigger.closest(".project-card__media");
    if (!media || !src) return;
    media.innerHTML = `<video controls autoplay playsinline><source src="${src}" type="video/mp4">Your browser doesn't support embedded video.</video>`;
  };

  grid.addEventListener("click", (e) => {
    const trigger = e.target.closest(".project-card__video-trigger");
    if (trigger) play(trigger);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const trigger = e.target.closest(".project-card__video-trigger");
    if (trigger) {
      e.preventDefault();
      play(trigger);
    }
  });
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
        <p class="pub-item__title">${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="pub-item__link">${p.title}<span class="pub-item__ext" aria-hidden="true">↗</span></a>` : p.title}</p>
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

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map((s) => `
    <div class="skill-card reveal">
      <div class="skill-card__media">
        ${s.photo ? `<img src="${s.photo}" alt="${s.title}" loading="lazy">` : placeholderHtml()}
      </div>
      <div class="skill-card__body">
        <h3 class="skill-card__title">${s.title}</h3>
        <p class="skill-card__list">${s.list}</p>
      </div>
    </div>
  `).join("");
}

function renderExperience() {
  const list = document.getElementById("experience-timeline");
  if (!list) return;

  list.innerHTML = EXPERIENCE.map((e) => `
    <li class="timeline__item reveal">
      <span class="timeline__dot ${e.active ? "timeline__dot--active" : ""}"></span>
      <div class="timeline__content">
        <p class="timeline__date">${e.date}</p>
        <p class="timeline__title">${e.title}</p>
        <p class="timeline__org">${e.org}</p>
        <div class="timeline__media">
          ${e.photo ? `<img src="${e.photo}" alt="${e.title}" loading="lazy">` : placeholderHtml()}
        </div>
      </div>
    </li>
  `).join("");
}

function renderRecognition() {
  const grid = document.getElementById("recognition-grid");
  if (!grid) return;

  grid.innerHTML = RECOGNITION.map((r) => `
    <article class="recognition-item reveal">
      <div class="recognition-item__media">
        ${r.photo ? `<img src="${r.photo}" alt="${r.title}" loading="lazy">` : placeholderHtml()}
      </div>
      <div class="recognition-item__body">
        <p class="recognition-item__tag">${r.type}</p>
        <h3 class="recognition-item__title">${r.title}</h3>
        <p class="recognition-item__desc">${r.desc}</p>
      </div>
    </article>
  `).join("");
}

/* ---------- 4. NAV (mobile toggle) ---------- */

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

/* ---------- 5. THEME TOGGLE ---------- */

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

/* ---------- 6. SCROLL SPY (highlight active nav link) ---------- */

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

/* ---------- 7. REVEAL ON SCROLL ---------- */

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

/* ---------- 8. INIT ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initThemeToggle();
  initNavToggle();
  initScrollSpy();

  renderHeroPhoto();
  renderMarquee();

  renderProjects();
  initProjectVideoTriggers();
  document.getElementById("load-more-projects")?.addEventListener("click", renderMoreProjects);

  renderPublications();
  initPublicationFilters();

  renderSkills();
  renderExperience();
  renderRecognition();

  initReveal();
});
