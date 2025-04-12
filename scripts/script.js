document.getElementById('downloadBtn').addEventListener('click', function () {
    window.open('assets/resume-shiva-dey.pdf', '_blank');
});


document.querySelector('.dropdown').addEventListener('mouseenter', function () {
    document.querySelector('.dropdown-content').style.display = 'block';
});

document.querySelector('.dropdown').addEventListener('mouseleave', function () {
    document.querySelector('.dropdown-content').style.display = 'none';
});

["summary", "skill", "responsibility", "project", "certificate", "award"].forEach(id => {
    document.getElementById(id).addEventListener("click", function () {
        const icon = this.querySelector(".material-symbols-outlined");
        const content = document.querySelector(`.${id}-content`);
        const isOpen = content.classList.contains("open");

        if (isOpen) {
            // collapse it
            content.style.maxHeight = null;
            content.classList.remove("open");
            icon.classList.remove("open");
        } else {
            // expand it
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("open");
            icon.classList.add("open");
        }
    });
});

document.getElementById('year').textContent = new Date().getFullYear();


const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('open');
    }
});

const nav_elements = document.querySelector('#nav-links').children;

Array.from(nav_elements).forEach(element => {
    element.addEventListener('click', (event) => {
        navLinks.classList.remove('open');
    });
});
