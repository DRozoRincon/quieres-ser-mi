window.addEventListener('load', ()=>{
    let name = document.getElementById('name');
    let text = document.getElementById('text');
    let rol = document.getElementById('rol');
    let showResult = document.getElementById('showResult');
    let noData = document.getElementById('noData');

    showResult.addEventListener('click',() =>{
        if(name.value != '' && text.value != ''){
            let url = window.location.href;
            window.open(`${url.slice(0,-14)}/index.html?name=${name.value}&rol=${rol.value}&text=${window.btoa(unescape(encodeURIComponent(text.value)))}`, '_blank');
        }else{
            noData.classList.toggle('showNodata');
        }
    });
});