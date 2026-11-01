// Title
document.title = `${portfolioData.name} - ${portfolioData.role}`;

/* Header scroll state + scroll progress */
var header = document.getElementById('header');
var progress = document.getElementById('progress');

function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle('scrolled', y > 12);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Logo name
document.getElementById("logoName").textContent =
    portfolioData.name;

// Header links
const navLinks = document.getElementById("navLinks");

portfolioData.header.forEach(item => {
    const link = document.createElement("a");

    link.textContent = item.label;
    link.href = item.href;

    if (item.className) {
        link.classList.add(item.className);
    }

    navLinks.appendChild(link);
});

// Hero
document.getElementById("heroName").textContent = portfolioData.name;
document.getElementById("heroRole").textContent = `${portfolioData.role} (${portfolioData.specialization})`;
document.getElementById("heroDescription").innerHTML = portfolioData.heroDescription;

// Stats
function renderStats() {
    const statsContainer = document.getElementById("heroStats");

    statsContainer.innerHTML = portfolioData.stats
        .map(stat => `
            <div class="stat">
                <b data-count="${stat.count}" data-suffix="${stat.suffix}">0</b>
                <span>${stat.label}</span>
            </div>
        `)
        .join("");
}

renderStats();

// Counters
var counters = document.querySelectorAll('[data-count]');

function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1500;
    var start = null;

    function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                co.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { co.observe(c); });
} else {
    counters.forEach(function (c) {
        c.textContent = c.getAttribute('data-count') + (c.getAttribute('data-suffix') || '');
    });
}

// Code window
document.getElementById("codeName").textContent = portfolioData.name;
document.getElementById("codeRole").textContent = portfolioData.specialization;
document.getElementById("codeExperience").textContent = portfolioData.experience;

// About
function renderAbout() {
    const about = portfolioData.about;
    document.getElementById("aboutEyebrow").textContent = about.eyebrow;
    document.getElementById("aboutTitle").innerHTML = about.title;
    document.getElementById("aboutParagraphs").innerHTML = about.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
    document.getElementById("aboutHighlights").innerHTML =
        about.highlights
            .map(item => `
                <div class="highlight">
                    <div class="ico">${item.icon}</div>
                    <div>
                        <b>${item.title}</b>
                        <p>${item.description}</p>
                    </div>
                </div>
            `)
            .join("");

    document.getElementById("contactTitle").textContent = about.contact.title;
    document.getElementById("contactDescription").textContent = about.contact.description;
    const contact = about.contact;
}
renderAbout();

document.getElementById("emailLink").href = `mailto:${portfolioData.about.contact.email}`;
document.getElementById("emailText").textContent = portfolioData.about.contact.email;
document.getElementById("phoneLink").href = `tel:${portfolioData.about.contact.phone}`;
document.getElementById("phoneText").textContent = portfolioData.about.contact.phone;
document.getElementById("linkedinLink").href = `https://${portfolioData.about.contact.linkedin}`;
document.getElementById("linkedinText").textContent = portfolioData.about.contact.linkedin;
document.getElementById("githubLink").href = `https://${portfolioData.about.contact.github}`;
document.getElementById("githubText").textContent = portfolioData.about.contact.github;

// Skills
function renderSkills() {
    document.getElementById("skillsEyebrow").textContent = portfolioData.skills.skillsEyebrow;
    document.getElementById("skillsTitle").innerHTML = portfolioData.skills.skillsTitle;
    document.getElementById("skillsDescription").textContent = portfolioData.skills.skillsDescription;

    const skillsGrid = document.getElementById("skillsGrid");

    skillsGrid.innerHTML = portfolioData.skills.categories.map(category => `
        <div class="skill-card reveal">

            <div class="skill-head">
                <span class="si">${category.icon}</span>
                <h3>${category.title}</h3>
            </div>

            <div class="chips">
                ${category.items.map(item => `
                    <span class="chip">${item}</span>
                `).join("")}
            </div>

        </div>
    `).join("");
}

renderSkills();

// Scroll reveal
var revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el, i) {
        el.style.transitionDelay = (i % 4) * 70 + 'ms';
        io.observe(el);
    });
} else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
}