const featuredSpeakers = [
  { name: "Josh Wolfe", title: "Partner and Co-Founder, Lux Capital", photo: "images/featured-speakers/Josh%20Wolfe.png", bio: "Josh Wolfe is Co-Founder of Lux.\n\nHe is a generalist at Lux, which has $7 billion under management and has been the first investor in category-defining companies across AI, automation, biotech, compute, defense, energy, infrastructure, robotics, and beyond — including Anduril, Applied Intuition, Auris, Chronosphere, Cognition, Eikon, Erebor, Hadrian, Hugging Face, Impulse Space, Osmo, Physical Intelligence, Runway, Sakana, Together, and Variant Bio. Josh has co-founded over 20 Lux companies from scratch.\n\nHe is a published scientist, Cornell alum, and Trustee of the Santa Fe Institute. He co-founded and chaired Coney Island Prep charter school, where he grew up in Brooklyn. He lives in Tribeca, NYC, with his wife and three children." },
  { name: "Raymond J. McGuire", title: "President, Lazard", photo: "images/featured-speakers/Ray%20Mcguire.png", bio: "Raymond J. McGuire is the President and Co-Head of Financial Advisory in North America at Lazard. As a member of Lazard's senior leadership team, he strengthens key stakeholder relationships, counsels on complex transactions, and drives the firm's domestic and international growth. In November 2025, he joined the Board of Directors of Harvard Management Company, which oversees Harvard University's endowment and related assets.\n\nPrior to Lazard, Mr. McGuire spent 13 years as Citigroup's Global Head of Corporate and Investment Banking, leading a $20 billion+ global business and holding the longest tenure in that role in Wall Street history. He later served as Citigroup Vice Chairman and Chairman of its Banking, Capital Markets, and Advisory business. His earlier career included being the Co-Global Head of Mergers & Acquisitions at Morgan Stanley and senior roles at Merrill Lynch and was one of the early Partners at Wasserstein Perella. He began his career in the Mergers & Acquisitions Group at The First Boston Corporation. He has advised on transactions exceeding $800 billion, across global industries and geographies.\n\nMr. McGuire serves on the board of Vornado Realty Trust and has held prior corporate directorships at Hess Corporation and KKR & Co. In 2026, he was appointed to the inaugural Board of Advisors of Black Entertainment Television (BET). Mr. McGuire also holds leadership positions on several nonprofit boards, including the Harvard Management Company, the American Museum of Natural History (Treasurer), the Black Trustee Alliance for Art Museums (Co-Chair), the Hotchkiss School (Vice President), the New York Public Library (Chair Executive-Committee), the Regional Plan Association (Chairman), the Trinity School and the Whitney Museum of American Art. As the 22-year Chairman of the Board of the Studio Museum in Harlem, he led a transformative $300 million capital campaign culminating in its historic November 2025 reopening in its critically acclaimed new building on 125th Street in Harlem, NY.\n\nMr. McGuire earned his M.B.A. and J.D. from Harvard Business School and Harvard Law School, and his A.B. from Harvard College. He is a graduate of the Hotchkiss School." },
  { name: "Albert Wenger & Gigi Danziger", title: "Investors & Co-Founders", photo: "images/featured-speakers/Albert%20Wenger%20and%20Gigi%20Danziger.png", bio: "Albert Wenger is Managing Partner at Union Square Ventures (USV). Before joining USV, Albert was the president of del.icio.us through the company's sale to Yahoo and an angel investor (Etsy, Tumblr). Albert is the author of the book The World After Capital. On his blog Continuations he writes about technology, science, philosophy and more. Albert is an investor and co-founder of Eutopia, The Spark of Hudson, HudsonUP, HudsonDots and Wally Farms. Albert graduated from Harvard College in economics and computer science and holds a Ph.D. in Information Technology from MIT. Albert is married to Gigi Danziger. They have three grown children and live in New York City.\n\nGigi Danziger is an entrepreneur, investor, and co-founder of Eutopia. She also co-founded The Spark of Hudson, HudsonUP, HudsonDots and Wally Farms and previously founded (and sold) two technology companies. A Fellow of the Royal Society of Arts, Gigi holds a BA from Cornell University and JD from New York University School of Law." },
  { name: "Andrew Yang", title: "Founder of Venture for America & Forward Party, CEO of Noble Mobile", photo: "images/featured-speakers/Andrew%20Yang.png", bio: "Andrew Yang is an entrepreneur, author, and former 2020 Democratic presidential candidate. He is the founder of Humanity Forward, Venture for America, and the Forward Party, and currently serves as CEO of Noble Mobile. His New York Times bestseller The War on Normal People helped introduce the idea of universal basic income into the mainstream, and his most recent book, Hey Yang, Where's My Thousand Bucks?, is a collection of stories and reflections from his life in the public eye." },
  // Hidden for now — uncomment to restore in the featured marquee (positions 3 & 4):
  // { name: "Andrew Yang", title: "Founder, Forward Party", photo: "images/featured-speakers/Andrew%20Yang.png", bio: "Entrepreneur, 2020 U.S. presidential candidate, and founder of Venture for America and the Forward Party. A leading voice on the future of work, automation, and economic policy." },
  // { name: "Albert Wenger", title: "Managing Partner, Union Square Ventures", photo: "images/featured-speakers/Albert%20Wenger.png", bio: "Managing Partner at Union Square Ventures and author of The World After Capital. He invests in companies whose technology broadens access to knowledge, capital, and opportunity." },
  { name: "Natalie Serrino", title: "Co-Founder, Gimlet Labs", photo: "images/featured-speakers/Natalie%20Serrino.png", bio: "Natalie Serrino is a co-founder of Gimlet Labs. Gimlet Labs is a multi-silicon neocloud built for fast, efficient inference, leveraging and distributing workloads across GPUs, CPUs, and specialized accelerators to improve latency, efficiency, and cost. Previously, Natalie was a visiting scholar at Stanford, a founding engineer at Pixie Labs (acquired by New Relic), and an entrepreneur-in-residence at Benchmark." },
  { name: "Spencer Fallek", title: "Co-Founder, Lepton Quantum", photo: "images/featured-speakers/Spencer%20Fallek.png", bio: "Spencer Fallek, PhD, is a leading expert in quantum computing and the co-founder of Lepton Quantum, where he is reimagining the path to utility-scale quantum computing. The company is focused on stripping away the architectural complexities that have historically bottlenecked hardware scaling.\n\nPrior to founding Lepton, Spencer served as the Quantum Devices Branch Head at the Georgia Tech Research Institute and held advanced research roles at Raytheon BBN Technologies. He set a world record for quantum gate performance and has led a series of first-ever technology demonstrations aimed at scaling quantum hardware." },
  { name: "Luca Cartechini", title: "Co-Founder & CEO, Circeus", photo: "images/featured-speakers/Luca%20Cartechini.png", bio: "Luca Cartechini is the Co-Founder and CEO of Circeus, an AI-native holding for mission-critical software. Circeus has completed 20+ acquisitions, raised $250M from global investors, and serves 200,000+ businesses worldwide.\n\nCirceus acquires and evolves the software that runs the physical world. A centralised AI team rebuilds these products around frontier models, embedding intelligence and deploying agentic workflows that expand TAM and improve margins, bringing the capabilities of AI to everyday businesses.\n\nEarlier, Luca worked in Research at Jefferies covering European technology and in Venture Capital backing high-growth B2B software, and served as an Adjunct Professor of Entrepreneurship and Corporate Finance at ESCP Business School for 5 years." },
  { name: "Snehal Fulzele", title: "Founder & CEO, Uptiq", photo: "images/featured-speakers/Snehal%20Fulzele.png", bio: "Snehal Fulzele is the Founder and CEO of Uptiq, an enterprise AI platform purpose-built for financial services. Uptiq helps banks, credit unions, wealth management firms, and fintech companies deploy AI agents and intelligent workflows across lending, onboarding, document intelligence, compliance, and customer engagement. A serial entrepreneur, Snehal previously founded Cloud Lending Solutions, which was acquired by Q2 Holdings. He brings deep experience building vertical software companies at the intersection of financial services, automation, and AI, and is focused on making AI practical, reliable, and production-ready for highly regulated industries." },
  { name: "Stuart Wall", title: "CEO & Co-Founder, Setpoint", photo: "images/featured-speakers/Stuart%20Wall.png", bio: "Stuart Wall is the CEO and Co-Founder of Setpoint, a leading fintech that aims to streamline the hidden, cumbersome processes behind billions in daily financial transactions. Backed by a16z, Wells Fargo and Citi, Setpoint is pioneering the transformation of capital markets from outdated manual systems to efficient, automated technology, significantly reducing costs and enhancing speed for both borrowers and lenders. Previously, Stuart was the founder of Signpost.com, a CRM platform tailor-made for service firms. Stuart scaled Signpost to 300 employees before a successful private equity sale in 2019. Stuart began his career in Bain & Company's Private Equity Group, where he assessed large buyout transactions, and honed his expertise in financial operations. Stu is an alumnus of Harvard Business School (MBA, Distinction) and Miami University (BS in Finance). He's been recognized as a top 25 North American CEO by Glassdoor and contributes his insights to TechCrunch and Business Insider, shaping the conversation on fintech innovation." },
  { name: "Parul Singh", title: "Investment Partner, 645 Ventures", photo: "images/featured-speakers/Parul%20Singh.png", bio: "Parul Singh is an Investment Partner on 645 Ventures' Investment & Research team. She invests across the AI stack — software, developer tools, and infrastructure. She writes checks, and code.\n\nParul is a builder who wandered into venture capital. She spent a decade as a full-stack developer and product manager, including stints at the New York Times, Inc. Magazine, and Fast Company, and founded a learning analytics company along the way. She's had beeper duty. She moved into investing at Founder Collective, where she sourced or led investments in Verkada, Pillpack, Flatfile, and Smalls. As a Partner at Initialized Capital, she invested in Cofertility, Glass Health, Stellar Sleep, and Paradime. True to form, she's spent the last year deep in the agent stack — tinkering with AI agents and standing up a founder marketing agency from scratch. When she's not building, Parul is eating her way across the Bay Area, hiking NorCal trails, and making video games with her tweens (who are tougher code reviewers than any engineer she's worked with)." },
  { name: "Aaron Holiday", title: "Co-Founder & Managing Partner, 645 Ventures", photo: "images/645-team/Aaron%20Holiday.png", bio: "Aaron Holiday is the co-founder and Managing Partner at 645 Ventures. He oversees the firm's investing approach, strategy, investor relations, and governance.\n\nSince founding 645 Ventures in 2014, Aaron has worked closely with portfolio company founders to strengthen, grow, and scale businesses. Aaron led 645 Ventures early-stage investments in several breakout successes, including Goldbelly, Iterable, FiscalNote, Squire, Resident/Nectar Sleep (acquired by Ashley Furniture), FLY Labs (acquired by Google), Source3 (acquired by Facebook), and several other category-defining companies.\n\nIn 2021, Aaron made the Midas Brink List of VC investor up-and-comers to watch for his involvement and investments in startup companies that have scaled to hundreds of millions in revenues and unicorn status.\n\nGrowing up in New Orleans, Aaron was enamored by math and science as a child, gravitating to computer science and programming, and leading to a career building deep finance and technology expertise. Prior to 645, he developed advanced equities program trading and foreign exchange derivatives software at Goldman Sachs and GFI Group, and he established operational experience working with CEOs to build high-growth tech companies.\n\nAs the first Managing Entrepreneurial Officer at Cornell Tech, Aaron worked in tandem with Greg Pass (former Chief Technology Officer of Twitter) to create and pioneer the campus Studio culture and pedagogy. He also guided complex technology startups toward commercial success, including companies like Nanit, where he led 645's seed stage investment. Aaron is now on the governing board of Cornell Tech, alongside a small group of tech and business leaders including Former New York City Mayor Michael Bloomberg, Eric Schmidt, David Siegel, Robert Smith, and Ursula Burns. Aaron is also a current member of the metro chapter of Young Presidents Organization (YPO), a global leadership community of chief executives driven by the shared belief that the world needs better leaders.\n\nAaron received a B.S. in Computer Science with honors from Morehouse College and an MBA from Cornell University's Johnson School of Management." },
  { name: "Nnamdi Okike", title: "Co-Founder & Managing Partner, 645 Ventures", photo: "images/645-team/Nnamdi%20Okike.png", bio: "Nnamdi Okike is Co-Founder and Managing Partner of 645 Ventures. He oversees the firm's investing strategy, governance, and compliance.\n\nSince co-founding the firm in 2014, Nnamdi has invested in and worked closely with several companies that have reached large scale and provided significant value for customers. Those companies include Iterable, Overtime, LeagueApps (acquired by Accel-KKR), Oort (acquired by Cisco), RentSpree, Setpoint, Order, Vividly and Panther Labs.\n\nBefore 645, Nnamdi worked at Insight Partners, where he invested in 19 companies and had nine exits, with exit value exceeding $9 billion. Those companies included Mimecast (IPO, acquired for $5.8 billion) and Privalia (acquired for $560 million). Nnamdi helped the firm pioneer a global outbound sourcing model targeting software companies.\n\nNnamdi was named to the Midas Brink List in 2023, recognizing the investing track record he has established, as well as the success of the companies that 645 has been privileged to partner with.\n\nNnamdi grew up in Massachusetts as the child of immigrants from Nigeria and Germany, giving him a unique worldview and appreciation for diversity. He's been an avid Boston sports fan since he was a kid, attending many games during championship seasons for the Patriots, Celtics, and Red Sox.\n\nHe attended Harvard for college, competing in track and field in the 400 and 800 meters. At Harvard, he discovered his love for tech entrepreneurship and investing.\n\nNnamdi is a Board Member of the National Venture Capital Association, which unites the U.S. venture ecosystem to support the formation of high-growth companies. He serves alongside members from firms such as Benchmark Capital, Sequoia, a16z and Accel.\n\nNnamdi also serves on the Boards of the New York Roadrunners, Mount Sinai, the Partnership Fund of New York City, and the Investment Committee of Phillips Andover Academy.\n\nNnamdi received his BA, JD, and MBA, all with honors from Harvard University." },
];

const previousSpeakers = [
  { name: "Reid Hoffman", title: "Co-Founder, LinkedIn", photo: "images/previous-speakers/Reid%20Hoffman.png" },
  { name: "Scott Kupor", title: "COO & Managing Partner, a16z", photo: "images/previous-speakers/Scott%20Kupor.png" },
  { name: "Roger Ferguson", title: "CEO of TIAA & Former Vice Chairman, Federal Reserve", photo: "images/previous-speakers/Roger%20Ferguson.png" },
  { name: "Ken Chenault", title: "Chairman and Managing Director, General Catalyst", photo: "images/previous-speakers/Ken%20Chenault.png" },
  { name: "Dr. Elizabeth Alexander", title: "President, Andrew W. Mellon Foundation", photo: "images/previous-speakers/Dr.%20Elizabeth%20Alexander.png" },
  { name: "Brendan Carr, MD", title: "CEO, Mount Sinai Health System", photo: "images/previous-speakers/Brendan%20Carr.png" },
  { name: "Kenneth C. Frazier", title: "Former Chairman and CEO, Merck", photo: "images/previous-speakers/Kenneth%20C.%20Frazier.png" },
  { name: "Howard Morgan", title: "Co-Founder, First Round Capital & Chairman, B Capital Group", photo: "images/previous-speakers/Howard%20Morgan.png" },
  { name: "Scott Maxwell", title: "Senior Managing Director, OpenView Venture Partners", photo: "images/previous-speakers/Scott%20Maxwell.png" },
  { name: "Andrew Golden", title: "President, PRINCO", photo: "images/previous-speakers/Andrew%20Golden.png" },
  { name: "Jeremy Levine", title: "Partner, Bessemer Venture Partners", photo: "images/previous-speakers/Jeremy%20Levine.png" },
  { name: "Kim Lew", title: "President & CEO, Columbia Investment Management Company", photo: "images/previous-speakers/Kim%20Lew.png" },
  { name: "Hemant Taneja", title: "CEO & Managing Director, General Catalyst", photo: "images/previous-speakers/Hemant%20Taneja.png" },
  { name: "Cassie Kozyrkov", title: "Chief Decision Scientist, Google", photo: "images/previous-speakers/Cassie%20Kozyrkov.png" },
  { name: "Greg Morrisett", title: "Dean and Vice Provost, Cornell Tech", photo: "images/previous-speakers/Greg%20Morrisett.png" },
  { name: "Kathy Wylde", title: "President & CEO, Partnership for New York City", photo: "images/previous-speakers/Kathy%20Wylde.png" },
  { name: "Tarek Sherif", title: "CEO & Co-Founder, Medidata", photo: "images/previous-speakers/Tarek%20Sherif.png" },
  { name: "J. Christopher Giancarlo", title: "Former Chairman, US Commodity Futures Trading Commission", photo: "images/previous-speakers/Chris%20Giancarlo.png" },
];

const scheduleItems = [
  { time: "8:30 AM", event: "Breakfast &amp; Registration", speakers: "", lpOnly: true },
  { time: "9:00 – 10:30 AM", event: "645 Strategy and Performance Discussion", speakers: "Where we've been investing, visibility into upcoming liquidity/distributions, organizational growth, and details on the upcoming fundraise for 645 Fund V and Select II. We will dive deep into the portfolio, performance, and the thesis driving the years ahead.", lpOnly: true, people: [
    { name: "Aaron Holiday", role: "Moderator", photo: "images/645-team/Aaron%20Holiday.png" },
    { name: "Nnamdi Okike", role: "Moderator", photo: "images/645-team/Nnamdi%20Okike.png" },
  ] },
  { time: "10:30 – 10:45 AM", event: "Coffee &amp; Networking", speakers: "" },
  { time: "10:45 – 11:30 AM", event: "Beyond the Model Layer — The Deep Tech Frontier", speakers: "The future for durable returns and market growth sits below and beyond the model layer, specifically in deep tech, defense, and the hard physical frontier the market hasn't caught up to yet. A conversation on where the next decade of value gets built, and why it's harder to copy.", people: [
    { name: "Josh Wolfe", role: "Speaker", photo: "images/featured-speakers/Josh%20Wolfe.png" },
    { name: "Aaron Holiday", role: "Moderator", photo: "images/645-team/Aaron%20Holiday.png" },
  ] },
  { time: "11:30 – 12:30 PM", event: "The Application Layer of AI", speakers: "Software is becoming an agent. Where are autonomous systems already rewiring fintech — and what gets rebuilt, automated, or displaced next?", people: [
    { name: "Luca Cartechini", role: "Speaker", photo: "images/featured-speakers/Luca%20Cartechini.png" },
    { name: "Snehal Fulzele", role: "Speaker", photo: "images/featured-speakers/Snehal%20Fulzele.png" },
    { name: "Stuart Wall", role: "Speaker", photo: "images/featured-speakers/Stuart%20Wall.png" },
    { name: "Nnamdi Okike", role: "Moderator", photo: "images/645-team/Nnamdi%20Okike.png" },
  ] },
  { time: "12:30 – 2:00 PM", event: "Networking Lunch", speakers: "" },
  { time: "2:00 – 2:45 PM", event: "AI Impact on Capital and Financial Markets", speakers: "A new class of trillion-dollar AI entrants — SpaceX, Anthropic, OpenAI — is reshaping public market dynamics, how capital is allocated, and how assets are priced. What do the IPO and M&amp;A markets do in response, what can past cycles of transformative innovation teach us, and what does it all mean for GDP and growth in the decade ahead?", people: [
    { name: "Raymond J. McGuire", role: "Speaker", photo: "images/featured-speakers/Ray%20Mcguire.png" },
    { name: "Aaron Holiday", role: "Moderator", photo: "images/645-team/Aaron%20Holiday.png" },
  ] },
  { time: "2:45 – 3:15 PM", event: "Compute, Chips, and Energy Founders: A Glimpse into Necessary Innovations", speakers: "Three founders present on the physical frontier powering AI: the compute, energy, and material breakthroughs that have quietly become the constraint on everything built above them.", people: [
    { name: "Natalie Serrino", role: "Speaker", photo: "images/featured-speakers/Natalie%20Serrino.png" },
    { name: "Spencer Fallek", role: "Speaker", photo: "images/featured-speakers/Spencer%20Fallek.png" },
  ] },
  { time: "3:15 – 3:45 PM", event: "Building the Post-Abundance Economy", speakers: "", people: [
    { name: "Albert Wenger & Gigi Danziger", role: "Speakers", photo: "images/featured-speakers/Albert%20Wenger%20and%20Gigi%20Danziger.png" },
    { name: "Parul Singh", role: "Moderator", photo: "images/featured-speakers/Parul%20Singh.png" },
  ] },
  { time: "3:45 – 4:15 PM", event: "The Future of Human Value: Addressing Economic, Environmental &amp; Labor Market Changes", speakers: "As AI transforms knowledge work, hard questions move to the center: what happens to the social contract, how is the upside distributed, and do ideas like UBI move from the fringe to the mainstream? A conversation on what remains uniquely human — and on the policy and economic choices that will shape the next decade.", people: [
    // Hidden for now — uncomment to restore:
    // { name: "Albert Wenger", role: "Speaker", photo: "images/featured-speakers/Albert%20Wenger.png" },
    { name: "Andrew Yang", role: "Speaker", photo: "images/featured-speakers/Andrew%20Yang.png" },
    { name: "Nnamdi Okike", role: "Moderator", photo: "images/645-team/Nnamdi%20Okike.png" },
  ] },
  { time: "4:15 PM", event: "Closing Remarks", speakers: "" },
];

function renderFeaturedSpeakers() {
  const grid = document.getElementById("featured-speakers-grid");
  if (!grid) return;

  if (featuredSpeakers.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#888;font-style:italic;">Featured speakers will be announced soon.</p>`;
    return;
  }

  grid.innerHTML = featuredSpeakers.map((s, i) => {
    // Split "Role, Company" at the first comma so the company sits on its own
    // line and never dangles after a wrapped role.
    const ci = s.title.indexOf(",");
    const role = ci === -1 ? s.title : s.title.slice(0, ci).trim();
    const company = ci === -1 ? "" : s.title.slice(ci + 1).trim();
    return `
    <div class="speaker-card"${s.bio ? ` data-bio-idx="${i}"` : ``}>
      ${s.photo
        ? `<img src="${s.photo}" alt="${s.name}" />`
        : `<div class="speaker-photo-placeholder"></div>`}
      <div class="speaker-name">${s.name.replace(/ & /g, " & <br>")}</div>
      <div class="speaker-title">
        <span class="speaker-title-role">${role}</span>
        ${company ? `<span class="speaker-title-company">${company}</span>` : ``}
      </div>
      ${s.bio ? `<span class="speaker-bio-cue">Read bio</span>` : ``}
    </div>`;
  }).join("");
}

// Render a bio as paragraphs, bolding (900) the first occurrence of the
// person's name — found via their last name, then extended left across the
// run of capitalized name parts/initials that precede it (e.g. "Raymond J.").
function bioToHTML(bio, fullName) {
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let start = -1, end = -1;
  // Skip name-bolding for combined "A & B" cards — the single-name matcher
  // would bold the wrong span across the two bios.
  if (fullName && !fullName.includes("&")) {
    const last = fullName.trim().split(/\s+/).pop();
    const idx = bio.indexOf(last);
    if (idx !== -1) {
      end = idx + last.length;
      const m = bio.slice(0, idx).match(/(?:[A-Z][\w.''-]*\s+)+$/);
      start = m ? idx - m[0].length : idx;
    }
  }
  const html = start !== -1
    ? esc(bio.slice(0, start)) + '<strong class="bio-name">' + esc(bio.slice(start, end)) + "</strong>" + esc(bio.slice(end))
    : esc(bio);
  return html.split(/\n\s*\n/).map(p => `<p>${p.trim()}</p>`).join("");
}

// Clicking a card slots its bio into the row right after it, widening the
// list. The marquee is locked while open so the card stays put and the
// inserted panel can be scrolled into view without the wrap-snap fighting it.
function initFeaturedBios() {
  const grid = document.getElementById("featured-speakers-grid");
  const sticky = document.getElementById("speakers-h-sticky");
  if (!grid) return;

  let openCard = null;
  let panel = null;

  function close() {
    if (!openCard) return;
    openCard.classList.remove("bio-open");
    const cue = openCard.querySelector(".speaker-bio-cue");
    if (cue) cue.textContent = "Read bio";
    openCard = null;
    if (sticky) delete sticky.dataset.locked;
    if (panel) {
      const el = panel;
      panel = null;
      el.classList.remove("open"); // collapse width back to 0, then remove
      setTimeout(() => el.remove(), 450);
    }
  }

  function open(card) {
    close();
    const idx = card.dataset.bioIdx;
    const data = idx != null ? featuredSpeakers[idx] : null;
    const bio = data ? data.bio : "";
    if (!bio) return;
    openCard = card;
    card.classList.add("bio-open");
    const cue = card.querySelector(".speaker-bio-cue");
    if (cue) cue.textContent = "Close";
    if (sticky) sticky.dataset.locked = "1";

    panel = document.createElement("div");
    panel.className = "speaker-bio-inline";
    const inner = document.createElement("div");
    inner.className = "speaker-bio-inline-inner";
    inner.innerHTML = bioToHTML(bio, data.name);
    panel.appendChild(inner);
    card.after(panel); // slot it into the flex row right after the clicked card

    const el = panel;
    requestAnimationFrame(() => {
      if (panel !== el) return;
      el.classList.add("open");
      // Once it has widened, nudge it into view if it ran off the right edge.
      setTimeout(() => {
        if (panel === el) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
      }, 420);
    });
  }

  // The whole card is clickable.
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".speaker-card[data-bio-idx]");
    if (!card) return;
    e.stopPropagation();
    if (card === openCard) close();
    else open(card);
  });

  // Any click outside a card — including on the drawer itself — closes it.
  document.addEventListener("click", () => {
    if (openCard) close();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
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

  list.innerHTML = items.map(item => {
    const peopleHtml = (item.people && item.people.length)
      ? `<div class="schedule-people">` + item.people.map(p => `
          <div class="schedule-person">
            ${p.photo
              ? `<img class="schedule-avatar" src="${p.photo}" alt="${p.name}" />`
              : `<div class="schedule-avatar schedule-avatar-placeholder"></div>`}
            <div class="schedule-person-info">
              <span class="schedule-person-name">${p.name}</span>
              ${p.role ? `<span class="schedule-person-role">${p.role}</span>` : ``}
            </div>
          </div>`).join("") + `</div>`
      : "";
    return `
    <div class="schedule-row">
      <div class="schedule-time">${item.time}</div>
      <div class="schedule-event">${item.event}</div>
      <div class="schedule-speakers">${item.speakers}${peopleHtml}</div>
    </div>`;
  }).join("");
}

// Clicking an agenda avatar jumps up to the Featured Speakers section and
// scrolls the marquee to that person (only if they have a featured card).
function initScheduleToFeatured() {
  const list = document.getElementById("schedule-list");
  const sticky = document.getElementById("speakers-h-sticky");
  const grid = document.getElementById("featured-speakers-grid");
  const speakers = document.getElementById("speakers");
  if (!list || !speakers) return;

  list.addEventListener("click", (e) => {
    const person = e.target.closest(".schedule-person");
    if (!person) return;
    const name = person.querySelector(".schedule-person-name")?.textContent.trim();
    if (!name) return;

    // Only act when this person actually appears in the featured marquee.
    const cards = grid
      ? [...grid.querySelectorAll(".speaker-card")].filter(c =>
          c.querySelector(".speaker-name")?.textContent.trim() === name)
      : [];
    if (!cards.length) return;

    speakers.scrollIntoView({ behavior: "smooth", block: "start" });

    if (sticky) {
      sticky.dataset.locked = "1"; // pause the auto-scroll while we reposition
      const sRect = sticky.getBoundingClientRect();
      // Center the nearest instance of this person's card (clones included),
      // measured live so it's correct regardless of the card's offsetParent.
      let bestTarget = sticky.scrollLeft, bestAbs = Infinity;
      cards.forEach(card => {
        const r = card.getBoundingClientRect();
        const delta = (r.left - sRect.left) - (sRect.width - r.width) / 2;
        if (Math.abs(delta) < bestAbs) { bestAbs = Math.abs(delta); bestTarget = sticky.scrollLeft + delta; }
      });
      sticky.scrollTo({ left: Math.max(0, bestTarget), behavior: "smooth" });
      setTimeout(() => { delete sticky.dataset.locked; }, 1500);
    }
  });
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
    const dir = direction === "left" ? 1 : -1;
    // `speed` is authored as px-per-frame at 60fps; convert to px-per-ms so the
    // auto-scroll runs at the same wall-clock speed regardless of the display's
    // refresh rate (60Hz vs 120Hz ProMotion, etc.).
    const pxPerMs = speed * 60 / 1000;

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
      // While locked (a bio is open and the row is widened), leave scrollLeft
      // alone so revealing the inline panel doesn't get snapped by a period.
      if (containerEl.dataset.locked === "1") return;
      const sl = containerEl.scrollLeft;
      if (sl >= 2 * period) { containerEl.scrollLeft = sl - period; pos -= period; }
      else if (sl < period) { containerEl.scrollLeft = sl + period; pos += period; }
    }, { passive: true });

    let paused = false;
    containerEl.addEventListener("mouseenter", () => { paused = true; });
    containerEl.addEventListener("mouseleave", () => { paused = false; });

    // Accumulate position as a float and write it every frame — reading
    // scrollLeft back would round to an integer and stall the sub-pixel step.
    let last = null;
    function tick(now) {
      if (last === null) last = now;
      // Clamp dt so a backgrounded tab (rAF paused) doesn't jump on return.
      const dt = Math.min(now - last, 50);
      last = now;
      // dataset.locked is set while a bio panel is open so the card stays put.
      if (!paused && containerEl.dataset.locked !== "1") {
        // Adopt the user's position if they scrolled manually since last frame.
        if (Math.abs(containerEl.scrollLeft - pos) > 1.5) pos = norm(containerEl.scrollLeft);
        pos = norm(pos + dir * pxPerMs * dt);
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
    // Skip elements that are allowed to wrap (e.g. the hero title on mobile);
    // clear any stale inline size so CSS controls them.
    if (getComputedStyle(el).whiteSpace !== "nowrap") { el.style.fontSize = ""; return; }
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

  // Mobile hamburger menu — full-screen blurred overlay
  (function() {
    const navbar = document.getElementById("navbar");
    const hamburger = navbar?.querySelector(".nav-hamburger");
    const navLinks = navbar?.querySelector(".nav-links");
    if (!navbar || !hamburger || !navLinks) return;

    // Build the overlay at body level so it escapes the nav's backdrop-filter
    // containing block and can cover the whole viewport.
    const overlay = document.createElement("div");
    overlay.className = "mobile-menu";
    navLinks.querySelectorAll("a").forEach(a => {
      if (a.closest("li")?.style.display === "none") return; // respect hidden sections
      const link = document.createElement("a");
      link.href = a.getAttribute("href");
      link.textContent = a.textContent;
      overlay.appendChild(link);
    });
    document.body.appendChild(overlay);

    const setOpen = (open) => {
      document.body.classList.toggle("menu-open", open);
      hamburger.textContent = open ? "✕" : "☰";
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      setOpen(!document.body.classList.contains("menu-open"));
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.tagName === "A") setOpen(false);
    });
    document.addEventListener("click", (e) => {
      if (document.body.classList.contains("menu-open") &&
          !navbar.contains(e.target) && !overlay.contains(e.target)) setOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) setOpen(false);
    });
  })();

  initTheme();
  renderFeaturedSpeakers();
  initFeaturedBios();
  renderPreviousSpeakers();
  renderSchedule();
  initScheduleToFeatured();
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
