
// Add scroll effects for header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const h1 = document.querySelector("header h1");
    const highlightBold = document.querySelector(".highlight-bold");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
        h1.classList.add("scrolled");
        highlightBold.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        h1.classList.remove("scrolled");
        highlightBold.classList.remove("scrolled");
    }
});

// Form submission alert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado. ¡Gracias por contactarnos!");
});

document.addEventListener("DOMContentLoaded", () => {
    // Ajustar margen dinámico para el header
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    document.body.style.marginTop = `${headerHeight}px`;

    // Formulario de contacto - Mostrar mensaje de confirmación
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío real del formulario
        const confirmation = document.createElement("p");
        confirmation.textContent = "¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.";
        confirmation.style.color = "green";
        confirmation.style.marginTop = "1rem";
        form.appendChild(confirmation);

        // Opcional: Limpiar los campos después del envío
        form.reset();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector("header").offsetHeight;
            const offsetTop = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    });
});