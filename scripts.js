const featuredSpeakers = [
  // Add 2026 speakers here. Example:
  // { name: "Speaker Name", title: "Title, Organization", photo: "images/speakers/speaker.jpg" },
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
  { time: "8:30 AM", event: "Breakfast & Registration", speakers: "" },
  { time: "9:00 AM", event: "645 Strategy & Performance Discussion", speakers: "<strong>Nnamdi Okike</strong>, Co-Founder & Managing Partner, 645 Ventures<br/><strong>Aaron Holiday</strong>, Co-Founder & Managing Partner, 645 Ventures" },
  { time: "10:15 AM", event: "Super Founders: Building & Scaling Companies to $1B Exits", speakers: "<strong>Shmuel Kliger</strong>, Founder, Causely; Former Founder, Turbonomic ($2 billion acq. by IBM)<br/><strong>Ran Reske</strong>, Co-Founder & President, Inner Balance; Former Co-Founder & CEO, Resident ($1 billion acq. by Ashley Furniture)<br/><strong>Vardan Gattani</strong>, Partner, 645 Ventures" },
  { time: "11:00 AM", event: "The Role Endowments & Foundations Play in Creating Balance and Positive Impact in An Ever-Changing World", speakers: "<strong>Dr. Elizabeth Alexander</strong>, President, Andrew W. Mellon Foundation<br/><strong>Aaron Holiday</strong>, Co-Founder & Managing Partner, 645 Ventures" },
  { time: "11:45 AM", event: "Networking Lunch", speakers: "" },
  { time: "1:15 PM", event: "Healthcare Founders: Innovation in Women's Health & Trends Reshaping Industry Outcomes", speakers: "<strong>Sarah Daccarett, MD</strong>, Founder & CEO, Inner Balance<br/><strong>Jake Rothstein</strong>, Founder & CEO, Upside<br/><strong>Jon Smith</strong>, Principal, 645 Ventures" },
  { time: "1:45 PM", event: "Healthcare & The Future of AI in Care Delivery, Health Equity & Drug Development", speakers: "<strong>Brendan Carr, MD, MA, MS</strong>, CEO, Mount Sinai Health Systems<br/><strong>Kenneth C. Frazier</strong>, Former Chairman and CEO, Merck; Chairman, Health Assurance Initiatives at General Catalyst<br/><strong>Nnamdi Okike</strong>, Co-Founder & Managing Partner, 645 Ventures" },
  { time: "2:30 PM", event: "The Changing US Regulatory and Policy Landscape for Financial Technology", speakers: "<strong>J. Christopher Giancarlo</strong>, Former Chairman, US Commodity Futures Trading Commission<br/><strong>Leo Schwartz</strong>, Senior Reporter, Fortune" },
  { time: "3:15 PM", event: "Closing Remarks", speakers: "" },
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
        : `<div style="width:120px;height:120px;border-radius:50%;background:#ddd;margin:0 auto 16px;"></div>`}
      <div class="speaker-name">${s.name}</div>
      <div class="speaker-title">${s.title}</div>
    </div>
  `).join("");
}

function renderPreviousSpeakers() {
  const container = document.getElementById("previous-speakers-scroll");
  if (!container) return;

  container.innerHTML = previousSpeakers.map(s => `
    <div class="prev-speaker">
      ${s.photo
        ? `<img src="${s.photo}" alt="${s.name}" />`
        : `<div style="width:80px;height:80px;border-radius:50%;background:#ddd;margin:0 auto 10px;"></div>`}
      <div class="speaker-name">${s.name}</div>
      <div class="speaker-title">${s.title}</div>
    </div>
  `).join("");
}

function renderSchedule() {
  const list = document.getElementById("schedule-list");
  if (!list) return;

  if (scheduleItems.length === 0) {
    list.innerHTML = `<div class="schedule-row"><div class="schedule-time">TBD</div><div class="schedule-event" style="color:#888;font-style:italic;">Schedule will be announced soon.</div><div></div></div>`;
    return;
  }

  list.innerHTML = scheduleItems.map(item => `
    <div class="schedule-row">
      <div class="schedule-time">${item.time}</div>
      <div class="schedule-event">${item.event}</div>
      <div class="schedule-speakers">${item.speakers}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedSpeakers();
  renderPreviousSpeakers();
  renderSchedule();

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
