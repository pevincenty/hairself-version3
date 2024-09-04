// Modal de contacto
const openContactModal = document.querySelector('.btn_mdl');
const contactModal = document.querySelector('.contact-modal');
const contactForm = document.querySelector('.contact-modal form');

openContactModal.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal.style.display = 'block';
    setTimeout(() => {
        contactModal.classList.add('show');
    }, 10);
});

// Manejo del evento de envío del formulario
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Envía los datos del formulario utilizando fetch o XMLHttpRequest (ver ejemplos anteriores)

    // Si el envío es exitoso:
    // Muestra un mensaje de éxito al usuario
    // Cierra el modal: 
    contactModal.classList.remove('show');
    setTimeout(() => {
        contactModal.style.display = 'none';
    }, 600);
});

// Modales de cartas
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Obtén todos los elementos con la clase "close" (incluyendo el del modal de contacto)
var spansClose = document.querySelectorAll(".close"); 

btn1.onclick = function () {
    modal1.style.display = "block";
    setTimeout(function () {
        modal1.classList.add('show');
    }, 10);
}
btn2.onclick = function() {
    modal2.style.display = "block";
    setTimeout(function() {
        modal2.classList.add('show');
    }, 10);
}

btn3.onclick = function() {
    modal3.style.display = "block";
    setTimeout(function() {
        modal3.classList.add('show');
    }, 10);
}

// Itera sobre todos los elementos con la clase "close"
spansClose.forEach(function(span) {
    span.onclick = function() {
        // Encuentra el modal padre del span que se hizo clic
        let modal = span.closest('.modal, .contact-modal'); 

        modal.classList.remove('show');
        setTimeout(function() {
            modal.style.display = "none";
        }, 600);
    }
});

// Cierre de modales al hacer clic fuera del contenido
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.classList.remove('show');
        setTimeout(function () {
            modal1.style.display = "none";
        }, 600);
    } else if (event.target == modal2) {
        modal2.classList.remove('show');
        setTimeout(function () {
            modal2.style.display = "none";
        }, 600);
    } else if (event.target == modal3) {
        modal3.classList.remove('show');
        setTimeout(function() {
            modal3.style.display = "none";
        }, 600);
    } else if (event.target == contactModal) { 
        contactModal.classList.remove('show');
        setTimeout(function() {
            contactModal.style.display = "none";
        }, 600);
    } 
}
