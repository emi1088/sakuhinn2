// スクロール
const targets = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.85;

    targets.forEach((target) => {
        const top = target.getBoundingClientRect().top;

        if (top < trigger) {
            target.classList.add("show");
        }
    });
});
