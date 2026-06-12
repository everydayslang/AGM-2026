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
  { name: "Reid Hoffman", title: "Co-Founder, LinkedIn", photo: "images/speakers/Reid%20Hoffman.png" },
  { name: "Scott Kupor", title: "COO & Managing Partner, A16Z", photo: "images/speakers/Scott%20Kupor.png" },
  { name: "Roger Ferguson", title: "CEO of TIAA & Former Vice Chairman, Federal Reserve", photo: "images/speakers/Roger%20Ferguson.png" },
  { name: "Ken Chenault", title: "Chairman and Managing Director, General Catalyst", photo: "images/speakers/Ken%20Chenault.png" },
  { name: "Dr. Elizabeth Alexander", title: "President, Andrew W. Mellon Foundation", photo: "images/speakers/Dr.%20Elizabeth%20Alexander.png" },
  { name: "Brendan Carr, MD", title: "CEO, Mount Sinai Health Systems", photo: "images/speakers/Brendan%20Carr.png" },
  { name: "Kenneth C. Frazier", title: "Former Chairman and CEO, Merck", photo: "images/speakers/Kenneth%20C.%20Frazier.png" },
  { name: "Howard Morgan", title: "Co-Founder, First Round Capital & Chairman, B Capital Group", photo: "images/speakers/Howard%20Morgan.png" },
  { name: "Scott Maxwell", title: "Senior Managing Director, OpenView Venture Partners", photo: "images/speakers/Scott%20Maxwell.png" },
  { name: "Andrew Golden", title: "President, PRINCO", photo: "images/speakers/Andrew%20Golden.png" },
  { name: "Jeremy Levine", title: "Partner, Bessemer Venture Partners", photo: "images/speakers/Jeremy%20Levine.png" },
  { name: "Kim Lew", title: "President & CEO, Columbia Investment Management Company", photo: "images/speakers/Kim%20Lew.png" },
  { name: "Hemant Taneja", title: "CEO & Managing Director, General Catalyst", photo: "images/speakers/Hemant%20Taneja.png" },
  { name: "Cassie Kozyrkov", title: "Chief Decision Scientist, Google", photo: "images/speakers/Cassie%20Kozyrkov.png" },
  { name: "Greg Morrisett", title: "Dean and Vice Provost, Cornell Tech", photo: "images/speakers/Greg%20Morrisett.png" },
  { name: "Kathy Wylde", title: "President & CEO, Partnership for New York City", photo: "images/speakers/Kathy%20Wylde.png" },
  { name: "Tarek Sherif", title: "CEO & Co-Founder, Medidata", photo: "images/speakers/Tarek%20Sherif.png" },
  { name: "J. Christopher Giancarlo", title: "Former Chairman, US Commodity Futures Trading Commission", photo: "images/speakers/Chris%20Giancarlo.png" },
  { name: "Leo Schwartz", title: "Senior Reporter, Fortune", photo: "images/speakers/Leo%20Schwartz.png" },
  { name: "Shmuel Kliger", title: "Founder, Causely; Former Founder, Turbonomic ($2 billion acq. by IBM)", photo: "images/speakers/Shmuel%20Kliger.png" },
  { name: "Ran Reske", title: "Co-Founder & President, Inner Balance; Former Co-Founder & CEO, Resident ($1 billion acq. by Ashley Furniture)", photo: "images/speakers/Ran%20Reske.png" },
  { name: "Sarah Daccarett, MD", title: "Founder & CEO, Inner Balance", photo: "images/speakers/Sarah%20Daccarette,%20MD.png" },
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
    // Names with a suffix ("Brendan Carr, MD") split at the first space so the
    // suffix stays with the surname; otherwise the last word is the surname and
    // everything before it (initials, given names) goes on the top line.
    const hasSuffix = s.name.includes(",");
    const firstName = hasSuffix ? parts[0] : parts.slice(0, -1).join(" ");
    const lastName  = hasSuffix ? parts.slice(1).join(" ") : parts[parts.length - 1];
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

  // One "period" = the width of the original set of cards.
  const originals = Array.from(trackEl.children);
  requestAnimationFrame(() => {
    const period = trackEl.scrollWidth;
    if (period === 0) return;

    // Clone the set until there's a full period of identical content buffering
    // each side of a viewport-wide window — enough for seamless wrapping in
    // both directions whether scrolling manually or via the auto-advance.
    const minWidth = period * 2 + containerEl.clientWidth + period;
    let guard = 0;
    while (trackEl.scrollWidth < minWidth && guard++ < 20) {
      originals.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        trackEl.appendChild(clone);
      });
    }

    let pos = period;
    const step = direction === "left" ? speed : -speed;

    // Normalize into the seamless window [period, 2*period). Every set is
    // identical, so snapping by a whole period is visually invisible.
    const norm = v => {
      while (v >= 2 * period) v -= period;
      while (v < period) v += period;
      return v;
    };

    containerEl.scrollLeft = pos;

    // Manual (trackpad/drag) scrolling still loops infinitely: when scrollLeft
    // crosses the window edge, snap it back by a period and keep the accumulator
    // in sync. Programmatic writes stay in-range, so this is a no-op for them.
    containerEl.addEventListener("scroll", () => {
      const sl = containerEl.scrollLeft;
      if (sl >= 2 * period) { containerEl.scrollLeft = sl - period; pos -= period; }
      else if (sl < period) { containerEl.scrollLeft = sl + period; pos += period; }
    }, { passive: true });

    let paused = false;
    containerEl.addEventListener("mouseenter", () => { paused = true; });
    containerEl.addEventListener("mouseleave", () => { paused = false; });

    // Accumulate position as a float and write it every frame — reading
    // scrollLeft back would round to an integer and stall the sub-pixel step.
    function tick() {
      if (!paused) {
        // Adopt the user's position if they scrolled manually since last frame.
        if (Math.abs(containerEl.scrollLeft - pos) > 1.5) pos = norm(containerEl.scrollLeft);
        pos = norm(pos + step);
        containerEl.scrollLeft = pos;
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
  "images/water/Coastline%201.avif",
  "images/water/Coastline%202.avif",
  "images/water/Coastline%203.avif",
  "images/water/Coastline%204.avif",
  "images/water/Coastline%205.avif",
  "images/water/Coastline%206.avif",
  "images/water/Coastline%207.avif",
  "images/water/Coastline%208.avif",
  "images/water/Coastline%209.avif",
  "images/water/Coastline%2010.avif",
];

// Scale .fit-width headers toward the full container width, capped at the
// element's --fit-max so short titles don't blow up on wide screens.
function fitHeaders() {
  document.querySelectorAll(".fit-width").forEach(el => {
    const target = el.clientWidth; // block width = container content width
    el.style.fontSize = "100px";
    el.style.display = "inline-block"; // shrink/overflow to true text width
    const textW = el.scrollWidth;
    el.style.display = "";
    if (!textW) return;
    const fitPx = 100 * target / textW;
    const maxPx = parseFloat(getComputedStyle(el).getPropertyValue("--fit-max")) || Infinity;
    el.style.fontSize = `${Math.floor(Math.min(fitPx, maxPx) * 10) / 10}px`;
  });
}
window.addEventListener("resize", fitHeaders);
if (document.fonts?.ready) document.fonts.ready.then(fitHeaders);

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
  fitHeaders();

  makeMarquee(
    document.getElementById("speakers-h-sticky"),
    document.getElementById("featured-speakers-grid"),
    "left", 0.1
  );
  makeMarquee(
    document.querySelector(".prev-scroll-outer"),
    document.getElementById("previous-speakers-scroll"),
    "right", 0.1
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
