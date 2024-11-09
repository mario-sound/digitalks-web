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
    //event.preventDefault();
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
        // event.preventDefault(); // Evitar el envío real del formulario

        // Eliminar mensajes de confirmación anteriores (opcional)
        const existingConfirmation = form.querySelector(".confirmation");
        if (existingConfirmation) {
            existingConfirmation.remove();
        }

        // Crear y mostrar el mensaje de confirmación
        const confirmation = document.createElement("p");
        confirmation.textContent = "¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.";
        confirmation.style.color = "green";
        confirmation.style.marginTop = "1rem";
        confirmation.classList.add("confirmation");
        form.appendChild(confirmation);

        // Limpiar los campos del formulario
        form.reset();
    });

    // Agregar evento click al botón "Ver más"
    const openModalButton = document.querySelector(".cta-button");
    const modal = document.getElementById("info-modal");
    const closeModalButton = modal.querySelector(".close-button");

    if (openModalButton) {
        openModalButton.addEventListener("click", () => {
            // Muestra el modal
            modal.style.display = "block";
        });
    } else {
        console.error("No se encontró el botón 'Ver más'.");
    }

    // Cerrar el modal al hacer clic en la "X"
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none"; // Oculta el modal
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Oculta el modal
        }
    });

    // Modales para "Soy Profesional" y "Soy Empresa"
    const professionalButton = document.querySelector(".cta-button-professional");
    const companyButton = document.querySelector(".cta-button-company");

    const professionalModal = document.getElementById("modal-professional");
    const companyModal = document.getElementById("modal-company");

    const closeButtons = document.querySelectorAll(".close-button");

    // Abrir el modal correspondiente
    professionalButton.addEventListener("click", () => {
        professionalModal.style.display = "block";
    });

    companyButton.addEventListener("click", () => {
        companyModal.style.display = "block";
    });

    // Cerrar los modales al hacer clic en la "X"
    closeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const modalId = event.target.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    // Cerrar los modales al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});

// Desplazamiento suave para enlaces ancla
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