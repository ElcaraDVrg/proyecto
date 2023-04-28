const letras = ['a', 'e', 'i', 'o', 'u', '-', ' !', 'A', 'E', 'I', 'O', 'U'];
let cupon = "";
for (i = 0; i < 4; i++) {
    cupon += letras[Math.floor(Math.random() * letras.length)];
}


const message = "¡Has ganado un cupón! Cupón: " + cupon;

let btn = document.querySelectorAll(".modal-button");
let modals = document.querySelectorAll(".modal");
let spans = document.getElementsByClassName("close");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
    }
}

for (let i = 0; i< spans.length; i++) {
    spans[i].onclick = function(e) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
            document.querySelector("body").style.overflow = "auto";
        }
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') {
                modals[index].style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        }
    }
}