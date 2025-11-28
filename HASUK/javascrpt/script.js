
const colors = ["#ff4757", "#1e90ff", "#2ed573", "#ffa502", "#a55eea"];

function createLines() {
    const top = document.querySelector(".top-lines");
    const bottom = document.querySelector(".bottom-lines");

    for (let i = 0; i < 10; i++) {
        let lineTop = document.createElement("div");
        let lineBottom = document.createElement("div");

        lineTop.className = "line from-left";
        lineBottom.className = "line from-right";

        let color = colors[Math.floor(Math.random() * colors.length)];

        lineTop.style.background = color;
        lineBottom.style.background = color;

        lineTop.style.top = `${i * 20}px`;
        lineBottom.style.bottom = `${i * 20}px`;

        top.appendChild(lineTop);
        bottom.appendChild(lineBottom);
    }
}

createLines();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".from-left")
                .forEach(el => el.classList.add("animate-left"));
            document.querySelectorAll(".from-right")
                .forEach(el => el.classList.add("animate-right"));
        }
    });
}, { threshold: 0.4 });

observer.observe(document.getElementById("pathin"));






























