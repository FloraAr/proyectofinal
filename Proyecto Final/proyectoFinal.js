// Boton datos personales
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

// Boton experiencia
let cerrarExp = document.querySelectorAll(".close-exp")[0];
let abrirExp = document.querySelectorAll(".cta-exp")[0];
let modalExp = document.querySelectorAll(".modal-exp")[0];
let modalCExp = document.querySelectorAll(".modal-container-exp")[0];

// Boton habilidades
let cerrarHab = document.querySelectorAll(".close-hab")[0];
let abrirHab = document.querySelectorAll(".cta-hab")[0];
let modalHab = document.querySelectorAll(".modal-hab")[0];
let modalCHab = document.querySelectorAll(".modal-container-hab")[0];


abrir.addEventListener("click", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    // toggle hace que se abra y cierre la ventana modal

});

cerrar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 500)
})

window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");
        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 500)
    }
})

// FUNCION BOTON EXPERIENCIA
abrirExp.addEventListener("click", function (d) {
    d.preventDefault();
    modalCExp.style.opacity = "1";
    modalCExp.style.visibility = "visible";
    modalExp.classList.toggle("modal-close-exp");
});

cerrarExp.addEventListener("click", function () {
    modalExp.classList.toggle("modal-close-exp");
    setTimeout(function () {
        modalCExp.style.opacity = "0";
        modalCExp.style.visibility = "hidden";
    }, 500)
})

window.addEventListener("click", function (d) {
    console.log(d.target)
    if (d.target == modalCExp) {
        modalExp.classList.toggle("modal-close-exp");
        setTimeout(function () {
            modalCExp.style.opacity = "0";
            modalCExp.style.visibility = "hidden";
        }, 500)
    }
})

// FUNCION BOTON HABILIDADES
abrirHab.addEventListener("click", function (f) {
    f.preventDefault();
    modalCHab.style.opacity = "1";
    modalCHab.style.visibility = "visible";
    modalHab.classList.toggle("modal-close-hab");
});

cerrarHab.addEventListener("click", function () {
    modalHab.classList.toggle("modal-close-hab");
    setTimeout(function () {
        modalCHab.style.opacity = "0";
        modalCHab.style.visibility = "hidden";
    }, 500)
})

window.addEventListener("click", function (f) {
    console.log(f.target)
    if (f.target == modalCHab) {
        modalHab.classList.toggle("modal-close-hab");
        setTimeout(function () {
            modalCHab.style.opacity = "0";
            modalCHab.style.visibility = "hidden";
        }, 500)
    }
})