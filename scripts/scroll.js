document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const offset = 70;

        if (targetId === "") {
            // If href is "#", scroll to the top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ 
                    top: elementPosition - offset, 
                    behavior: 'smooth' 
                });
            }
        }
    });
});
