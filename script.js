// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ANIMAÇÃO DAS SEÇÕES
    // ==========================

    const sections = document.querySelectorAll(".section-content, .video-container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // ==========================
    // MENU ATIVO AUTOMÁTICO
    // ==========================

    const navLinks = document.querySelectorAll(".navbar-menu a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        document.querySelectorAll("section").forEach((section) => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active");
            }
        });
    });

    // ==========================
    // ROLAGEM SUAVE
    // ==========================

    navLinks.forEach((link) => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const targetId = link.getAttribute("href");

            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        });
    });

    // ==========================
    // ANIMAÇÃO DAS BARRAS
    // ==========================

    const bars = document.querySelectorAll(".chart-bars li");

    bars.forEach((bar) => {

        const finalHeight =
            bar.style.getPropertyValue("--bar-height");

        bar.style.height = "0";

        setTimeout(() => {
            bar.style.height = finalHeight;
        }, 500);
    });

});