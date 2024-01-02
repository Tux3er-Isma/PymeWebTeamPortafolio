const wLoader = document.querySelector('.loader-w');
document.body.style.overflowY = 'hidden';
if (window.screen.availWidth <= 480){
    let ia = document.querySelector('.ia');
    ia.innerHTML = "IA";
}
setTimeout(() =>{
    wLoader.style.display = 'none';
    document.body.style.overflowY = 'scroll';
}, 5000);