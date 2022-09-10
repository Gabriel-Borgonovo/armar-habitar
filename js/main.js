// Cuando hago click en .button, a .header_nav le añado la clase .activado
// Este efecto en js se llama TOGGLE

const button = document.querySelector(`.button`);
const nav = document.querySelector(`.header_nav`);

button.addEventListener(`click`, () => {
    nav.classList.toggle(`activado`);
});


//-----CONSTRUCCIÓN DE SLIDER-----------

const slider = document.querySelector(`#carrusel`);
let sliderSection = document.querySelectorAll(`.carrusel_section`);
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector(`#btn_left`);
const btnRight = document.querySelector(`#btn_right`);

slider.insertAdjacentElement(`afterbegin`, sliderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll(`.carrusel_section`)[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all .5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement(`beforeend`, sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function moverIzquierda() {
    let sliderSection = document.querySelectorAll(`.carrusel_section`);
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    
    slider.style.marginLeft = "0";
    slider.style.transition = "all .5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement(`afterbegin`, sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener(`click`, function(){
    moverDerecha();
});

btnLeft.addEventListener(`click`, function(){
    moverIzquierda();
});