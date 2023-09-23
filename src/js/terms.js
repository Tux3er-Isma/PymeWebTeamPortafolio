const page1 = document.querySelector('.page-1');
const terms = document.querySelector('.terms');
const termsBtn = document.querySelector('.main__article--six__form__terms-container__txt__link');
const footerTermsBtn = document.querySelector('.footer__copyright__link');
const footerRTermsBtn = document.querySelector('.footer__copyright__link-r');
const closeBtn = document.querySelector('.terms__close');

termsBtn.addEventListener('click', () =>{
    page1.style.display = 'none';
    terms.style.display = 'flex';
    history.pushState({name: "terms"}, "", "terms")
})

footerTermsBtn.addEventListener('click', () =>{
    page1.style.display = 'none';
    terms.style.display = 'flex';
    history.pushState({name: "terms"}, "", "terms")
})

footerRTermsBtn.addEventListener('click', () =>{
    page1.style.display = 'none';
    terms.style.display = 'flex';
    history.pushState({name: "terms"}, "", "terms")
})

termsBtn.addEventListener('click', () =>{
    page1.style.display = 'none';
    terms.style.display = 'flex';
    history.pushState({name: "terms"}, "", "terms")
})


closeBtn.addEventListener('click', () =>{
    const currentURL = window.location.href;
    const newURL = currentURL.replace('/terms', '');
  
    history.replaceState({}, '', newURL);
    page1.style.display = 'block';
    terms.style.display = 'none';
})

closeBtn.addEventListener('mouseover', () =>{
    closeBtn.style.animation = 'chicky .1s forwards';
})

closeBtn.addEventListener('mouseout', () =>{
    closeBtn.style.animation = 'grandy .1s forwards';
})

window.addEventListener('popstate', (evt) =>{
    console.log(evt.state);
    if (evt.state == "{}"){
        console.log("Estas llendo a la pagina de los terminos");
    } else {
        console.log("Estas volviendo a la pagina principal");
        const currentURL = window.location.href;
        const newURL = currentURL.replace('/terms', '');
      
        history.replaceState({}, '', newURL);
        page1.style.display = 'block';
        terms.style.display = 'none';
        
        if (window.screen.availWidth <= 900){
            chatMain.style.zIndex = '0';
            chatContainer.zIndex = '0';
            chatBar.style.top = 'auto';
            chatBar.style.bottom = '20px';
        } else {
            chatMain.style.zIndex = '0';
        }
        footer.style.zIndex = '12';
        chatBar.style.bottom = '20px';
        chatMain.style.opacity = '0';
        chatIcon.src = "https://cdn.discordapp.com/attachments/973568724722389052/1145322729181036585/comentario-alt_2.png";
        document.body.style.overflowY = 'scroll';
        chatPopUpContainer.style.display = 'none';
    }
})

// window.addEventListener('popstate', (evt) =>{
//     console.log(evt.state)
//     if (evt.state == {}){
//         console.log("Te estas llendo de los terminos")
//         const currentURL = window.location.href;
//         const newURL = currentURL.replace('/terms', '');
      
//         history.replaceState({}, '', newURL);
//         page1.style.display = 'block';
//         terms.style.display = 'none';
//     } else {
//         console.log("Te estas dirigiendo a los terminos")
//         page1.style.display = 'none';
//         terms.style.display = 'flex';
//         history.pushState({name: "terms"}, "", "terms")
//     }
// })