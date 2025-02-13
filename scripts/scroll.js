document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.scroll-btn').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.dataset.target;

            if (targetId === "hero") {
                // Scroll to the top of the page if Home is clicked
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
