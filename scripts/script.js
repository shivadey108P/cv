document.getElementById('downloadBtn').addEventListener('click', function () {
    window.open('https://github.com/shivadey108P/cv/raw/refs/heads/main/assets/resume-shiva-dey.docx', '_blank');
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


document.getElementById('hamburger-menu').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
});


