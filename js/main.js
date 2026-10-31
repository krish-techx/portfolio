// Title
document.title = `${portfolioData.name} - ${portfolioData.role}`;

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