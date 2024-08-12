const openModal = document.querySelector('.btn_mdl')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal_close')

var span = document.getElementsByClassName("close")[0];



openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show')
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show')
})

span.onclick = function () {
    modal.classList.remove('modal--show')
}

//MODALES DE CARTAS

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");


var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];



btn1.onclick = function () {
    modal1.style.display = "block"; // Muestra modal
    setTimeout(function () { // Aplica la clase 'show' después de un pequeño retraso
        modal1.classList.add('show');
    }, 10); // Retraso de 10 milisegundos para asegurar que la transición se aplique
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


span1.onclick = function () {
    modal1.classList.remove('show'); // Remueve la clase 'show'
    setTimeout(function () { // Oculta la modal después de la transición
        modal1.style.display = "none";
    }, 600); // Retraso de 600 milisegundos
}

span2.onclick = function() {
    modal2.classList.remove('show');
    setTimeout(function() {
        modal2.style.display = "none";
    }, 600);
}

span3.onclick = function() {
    modal3.classList.remove('show');
    setTimeout(function() {
        modal3.style.display = "none";
    }, 600);
}


window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.classList.remove('show');
        setTimeout(function () {
            modal1.style.display = "none";
        }, 600);
    }
    if (event.target == modal2) {
        modal2.classList.remove('show');
        setTimeout(function () {
            modal2.style.display = "none";
        }, 600);
    }
    if (event.target == modal3) {
        modal3.classList.remove('show');
        setTimeout(function() {
            modal2.style.display = "none";
        }, 600);
    }
}
