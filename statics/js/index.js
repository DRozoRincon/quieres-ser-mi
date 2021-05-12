'use strict'
var params;

getQueries();

function getQueries(){
    const querystring = window.location.search;

    params = new URLSearchParams(querystring);

    if(params.get('name') == null || params.get('rol') == null) window.location.replace('options.html');
}

window.addEventListener('load', ()=>{
    document.getElementById('titulo').append(`¿${params.get('name')[0].toUpperCase() + params.get('name').slice(1)} quieres ser mi ${params.get('rol')}?`);
    let btnNo = document.getElementById('btno');
    let btnSi = document.getElementById('btnsi');
    let promptContainer = document.getElementById('promptContainer');
    let closePrompt = document.getElementById('closePrompt');
    let texto = document.getElementById('texto');

    let heightWindow = window.innerHeight;
    let widthWindow = window.innerWidth;

    btnNo.addEventListener('mouseover',() =>{
        moveBtnNo();
    });

    btnNo.addEventListener('click',() =>{
        moveBtnNo();
    });

    btnSi.addEventListener('click',() =>{
        promptContainer.classList.remove('cerrar');
        promptContainer.classList.add('abrir');
        let html = `
        <p>${decodeURIComponent(escape(window.atob( params.get('text') )))}
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