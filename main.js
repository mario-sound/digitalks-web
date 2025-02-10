import "./sass/style.scss";
console.log("El script whatsappButton.js se ha cargado correctamente.");

document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsapp-btn");
  const footer = document.querySelector("site-footer");

  function adjustWhatsAppButton() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.body.offsetHeight;
    const footerOffsetTop = footer.offsetTop;

    if (scrollY + windowHeight >= footerOffsetTop) {
      whatsappBtn.style.bottom = `${windowHeight - footerOffsetTop + 20}px`;
    } else {
      whatsappBtn.style.bottom = "20px";
    }
  }
  window.addEventListener("scroll", adjustWhatsAppButton);
});
