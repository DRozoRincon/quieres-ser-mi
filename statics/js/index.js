'use strict'
var params;

getQueries();

function getQueries(){
    const querystring = window.location.search;

    params = new URLSearchParams(querystring);

    if(params.get('name') == null || params.get('rol') == null) window.location.replace('settings.html');
}

window.addEventListener('load', ()=>{
    document.getElementById('titulo').append(`¿${params.get('name')[0].toUpperCase() + params.get('name').slice(1)} quieres ser mi ${params.get('rol')}?`);
    document.getElementById("my_audioRomantic").play(); // play audio
    let audioAgradecido = document.getElementById('my_audioAgradecido');
    let heartsRigth = document.getElementById('heartsRight');
    let heartsLeft = document.getElementById('heartsLeft');
    var waitingFinishAnimation = false;
    let btnNo = document.getElementById('btno');
    let btnSi = document.getElementById('btnsi');
    let promptContainer = document.getElementById('promptContainer');
    let closePrompt = document.getElementById('closePrompt');
    let texto = document.getElementById('texto');

    let heightWindow = window.innerHeight;
    let widthWindow = window.innerWidth;

    window.addEventListener("resize", function(event) { // para evitar que sea tapado boton NO en resize de la ventana
        heightWindow = window.innerHeight;
        widthWindow = window.innerWidth;
        btnNo.style.top = `0px`;
        btnNo.style.left = `0px`;
    });

    btnNo.addEventListener('mouseover',() =>{
        moveBtnNo();
    });

    btnNo.addEventListener('click',() =>{
        moveBtnNo();
    });

    btnSi.addEventListener('click',() =>{
        //Logica para animacion de corazones
        audioAgradecido.play();
        heartsRigth.classList.add('showTranslationAnimation');
        heartsLeft.classList.add('showTranslationAnimation');
        if(!waitingFinishAnimation){
            waitingFinishAnimation = true;
            setTimeout(function(){
                waitingFinishAnimation = false;
                heartsRigth.classList.remove('showTranslationAnimation');
                heartsLeft.classList.remove('showTranslationAnimation');
            }, 5000);
        }
        promptContainer.classList.remove('cerrar');
        promptContainer.classList.add('abrir');
        let html = `
        <p>${decodeURIComponent(escape(window.atob( params.get('text') )))}</p>
        `;
        texto.innerHTML = html;
    });

    closePrompt.addEventListener('click',() =>{
        promptContainer.classList.remove('abrir');
        promptContainer.classList.add('cerrar');
    });

    function moveBtnNo(){
        let leftBtn = Math.floor(Math.random() * (widthWindow));
        let topBtn = Math.floor(Math.random() * (heightWindow));
        if(leftBtn > (widthWindow - 70)) leftBtn = leftBtn - 70;
        if(topBtn > (heightWindow - 70)) topBtn = topBtn - 70;
        btnNo.style.position = 'fixed';
        btnNo.style.top = `${topBtn}px`;
        btnNo.style.left = `${leftBtn}px`;
    }
});