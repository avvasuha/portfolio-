document.addEventListener("DOMContentLoaded", function() {
    const heroDescription = document.getElementById("dynamic-text");
    const texts = [
        "I am a fresher coder.",
        "I am a full-stack developer.",
        "I am a web developer.",
        "I am a video editor.",
        "I am an animation trainer.",
        "I am a graphic designer.",
        "I am an artist."
    ];
    
    let currentIndex = 0;

    function changeText() {
        heroDescription.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    changeText(); // Initial text
    setInterval(changeText, 2000); // Change text every 2 seconds

    // Parallax effect
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.5 + "px";
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('.nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});
