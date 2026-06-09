const featuredSpeakers = [
  { name: "Ray McGuire", title: "President, Lazard", photo: "" },
  { name: "Speaker Name", title: "Title, Organization", photo: "" },
  { name: "Speaker Name", title: "Title, Organization", photo: "" },
  { name: "Speaker Name", title: "Title, Organization", photo: "" },
  { name: "Speaker Name", title: "Title, Organization", photo: "" },
  { name: "Speaker Name", title: "Title, Organization", photo: "" },
  { name: "Speaker Name", title: "Title, Organization", photo: "" },
  { name: "Speaker Name", title: "Title, Organization", photo: "" },
  { name: "Speaker Name", title: "Title, Organization", photo: "" },
];

const previousSpeakers = [
  { name: "Reid Hoffman", title: "Co-Founder, LinkedIn", photo: "" },
  { name: "Scott Kupor", title: "COO & Managing Partner, A16Z", photo: "" },
  { name: "Roger Ferguson", title: "CEO of TIAA & Former Vice Chairman, Federal Reserve", photo: "" },
  { name: "Ken Chenault", title: "Chairman and Managing Director, General Catalyst", photo: "" },
  { name: "Dr. Elizabeth Alexander", title: "President, Andrew W. Mellon Foundation", photo: "" },
  { name: "Brendan Carr, MD", title: "CEO, Mount Sinai Health Systems", photo: "" },
  { name: "Kenneth C. Frazier", title: "Former Chairman and CEO, Merck", photo: "" },
];

const scheduleItems = [
  { time: "8:30 AM", event: "Doors Open", speakers: "", lpOnly: true },
  { time: "9:00 – 10:30 AM", event: "645 LP Only Presentation: Strategy and Performance", speakers: "Where we have been investing &amp; where we are going<br/><strong>Moderated by</strong> Aaron Holiday &amp; Nnamdi Okike", lpOnly: true },
  { time: "10:30 – 10:45 AM", event: "Coffee &amp; Networking", speakers: "" },
  { time: "10:45 – 11:30 AM", event: "AI Impact on Capital &amp; Financial Markets", speakers: "<strong>Ray McGuire</strong>, President of Lazard<br/>Capital &amp; Financial Markets in a World After AI — what the AI shift means structurally for capital allocation, the institutions that move it, and the cycles ahead.<br/><strong>Moderator:</strong> Aaron Holiday" },
  { time: "11:30 AM – 12:30 PM", event: "AI Applications and Agents in Fintech", speakers: "<strong>Moderator:</strong> Willy" },
  { time: "12:30 – 2:00 PM", event: "Lunch", speakers: "" },
  { time: "2:00 – 2:45 PM", event: "The Future of Work and Society", speakers: "<strong>Andrew Yang</strong><br/>A conversation on AI's impact on employment, regulation, economic mobility, and the institutions that will shape the next decade.<br/><strong>Moderator:</strong> Nnamdi Okike" },
  { time: "2:45 – 3:30 PM", event: "Glimpse into Necessary Innovations in Compute, Chips, and Energy — Founder Lightning Talks", speakers: "<strong>Natalie Serrino</strong>, Gimlet Labs — AI impact on Compute, Inference, and Energy Consumption<br/><strong>Founder 2</strong>, LiptonQ — What is quantum computing and how it changes the game<br/><strong>Founder 3</strong>, Besxar — Reusable orbital foundries and next-generation semiconductor materials<br/><strong>Moderator:</strong> Vardan Gattani" },
  { time: "3:30 – 4:15 PM", event: "The Future of Human Value", speakers: "<strong>Albert Wenger</strong><br/>As AI transforms knowledge work, what remains uniquely human — and where will the next generation of opportunity be created?" },
  { time: "4:15 PM", event: "Closing Remarks", speakers: "" },
];

function renderFeaturedSpeakers() {
  const grid = document.getElementById("featured-speakers-grid");
  if (!grid) return;

  if (featuredSpeakers.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#888;font-style:italic;">Featured speakers will be announced soon.</p>`;
    return;
  }

  grid.innerHTML = featuredSpeakers.map(s => `
    <div class="speaker-card">
      ${s.photo
        ? `<img src="${s.photo}" alt="${s.name}" />`
        : `<div class="speaker-photo-placeholder"></div>`}
      <div class="speaker-name">${s.name}</div>
      <div class="speaker-title">${s.title}</div>
    </div>
  `).join("");
}

function renderPreviousSpeakers() {
  const container = document.getElementById("previous-speakers-scroll");
  if (!container) return;

  container.innerHTML = previousSpeakers.map(s => {
    const parts = s.name.split(" ");
    const prefixes = ["Dr.", "Mr.", "Ms.", "Mrs."];
    const splitAt = prefixes.includes(parts[0]) && parts.length > 2 ? 2 : 1;
    const firstName = parts.slice(0, splitAt).join(" ");
    const lastName  = parts.slice(splitAt).join(" ");
    return `
    <div class="prev-speaker">
      ${s.photo
        ? `<img src="${s.photo}" alt="${s.name}" />`
        : `<div class="prev-photo-placeholder"></div>`}
      <div class="prev-speaker-info">
        <div class="prev-speaker-name">
          <span>${firstName}</span>
          <span>${lastName}</span>
        </div>
        <div class="prev-speaker-title">${s.title}</div>
      </div>
    </div>`;
  }).join("");
}

function renderSchedule() {
  const list = document.getElementById("schedule-list");
  if (!list) return;

  const cfg = window.SITE_CONFIG || {};
  const items = cfg.hideLpItems
    ? scheduleItems.filter(item => !item.lpOnly)
    : scheduleItems;

  if (items.length === 0) {
    list.innerHTML = `<div class="schedule-row"><div class="schedule-time">TBD</div><div class="schedule-event" style="color:#888;font-style:italic;">Schedule will be announced soon.</div><div></div></div>`;
    return;
  }

  list.innerHTML = items.map(item => `
    <div class="schedule-row">
      <div class="schedule-time">${item.time}</div>
      <div class="schedule-event">${item.event}</div>
      <div class="schedule-speakers">${item.speakers}</div>
    </div>
  `).join("");
}

function makeMarquee(containerEl, trackEl, direction, speed) {
  if (!containerEl || !trackEl || trackEl.children.length === 0) return;

  Array.from(trackEl.children).forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    trackEl.appendChild(clone);
  });

  let paused = false;
  containerEl.addEventListener("mouseenter", () => { paused = true; });
  containerEl.addEventListener("mouseleave", () => { paused = false; });

  requestAnimationFrame(() => {
    const halfWidth = trackEl.scrollWidth / 2;
    if (direction === "right") containerEl.scrollLeft = halfWidth;

    function tick() {
      if (!paused) {
        if (direction === "left") {
          containerEl.scrollLeft += speed;
          if (containerEl.scrollLeft >= halfWidth) containerEl.scrollLeft -= halfWidth;
        } else {
          containerEl.scrollLeft -= speed;
          if (containerEl.scrollLeft <= 0) containerEl.scrollLeft += halfWidth;
        }
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

const THEME_ICONS = {
  light: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="1" x2="8" y2="3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="13" x2="8" y2="15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="1" y1="8" x2="3" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="13" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="2.93" y1="2.93" x2="4.34" y2="4.34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="11.66" y1="11.66" x2="13.07" y2="13.07" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="2.93" y1="13.07" x2="4.34" y2="11.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="11.66" y1="4.34" x2="13.07" y2="2.93" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  dark: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 8.5A6 6 0 1 1 7.5 2 4.5 4.5 0 0 0 14 8.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  system: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="2" width="14" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><line x1="5" y1="14" x2="11" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="11" x2="8" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
};

function initTheme() {
  const saved = localStorage.getItem("theme") || "system";
  const currentBtn = document.getElementById("theme-current-btn");
  const dropdown = document.getElementById("theme-dropdown");

  function applyTheme(mode) {
    let resolved = mode;
    if (mode === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    document.documentElement.dataset.theme = resolved;
  }

  function updateToggle(mode) {
    if (currentBtn) currentBtn.innerHTML = THEME_ICONS[mode] || THEME_ICONS.system;
    document.querySelectorAll(".theme-option").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.mode === mode);
    });
  }

  applyTheme(saved);
  updateToggle(saved);

  currentBtn?.addEventListener("click", e => {
    e.stopPropagation();
    dropdown?.classList.toggle("open");
  });

  dropdown?.addEventListener("click", e => {
    const btn = e.target.closest("[data-mode]");
    if (!btn) return;
    const mode = btn.dataset.mode;
    localStorage.setItem("theme", mode);
    applyTheme(mode);
    updateToggle(mode);
    dropdown.classList.remove("open");
  });

  document.addEventListener("click", () => dropdown?.classList.remove("open"));

  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
    if ((localStorage.getItem("theme") || "system") === "system") applyTheme("system");
  });
}

// Cycle hero background image on each page load
const HERO_IMAGES = [
  "images/water/Water%201%20Light.png",
  "images/water/Water%202%20Light.png",
  "images/water/Water%203%20Light.png",
  "images/water/Water%204%20Light.png",
  "images/water/Water%205%20Light.png",
  "images/water/Water%206%20Light.png",
  "images/water/Water%207%20Light.png",
];

function setHeroBg() {
  const last = parseInt(sessionStorage.getItem("heroBgIndex") ?? "-1", 10);
  let next;
  do { next = Math.floor(Math.random() * HERO_IMAGES.length); } while (next === last && HERO_IMAGES.length > 1);
  sessionStorage.setItem("heroBgIndex", next);
  document.getElementById("hero").style.backgroundImage = `url('${HERO_IMAGES[next]}')`;
}

document.addEventListener("DOMContentLoaded", () => {
  setHeroBg();

  // Apply site variant config — hides sections and their nav links
  const cfg = window.SITE_CONFIG || {};
  (cfg.hideSections || []).forEach(id => {
    const section = document.getElementById(id);
    if (section) section.style.display = "none";
    const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (navLink) navLink.closest("li").style.display = "none";
  });

  // Toggle .nav-scrolled once hero scrolls out of view
  (function() {
    const hero = document.getElementById("hero");
    const navbar = document.getElementById("navbar");
    if (!hero || !navbar) return;
    function update() {
      navbar.classList.toggle("nav-scrolled", hero.getBoundingClientRect().bottom <= 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  })();

  initTheme();
  renderFeaturedSpeakers();
  renderPreviousSpeakers();
  renderSchedule();

  makeMarquee(
    document.getElementById("speakers-h-sticky"),
    document.getElementById("featured-speakers-grid"),
    "left", 0.133
  );
  makeMarquee(
    document.querySelector(".prev-scroll-outer"),
    document.getElementById("previous-speakers-scroll"),
    "right", 0.133
  );

  // Venue image fallback
  const venueImg = document.querySelector(".location-image img");
  if (venueImg) {
    venueImg.onerror = () => {
      venueImg.style.display = "none";
      const placeholder = document.createElement("div");
      placeholder.className = "location-image-placeholder";
      venueImg.parentElement.appendChild(placeholder);
    };
  }
});
