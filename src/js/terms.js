const page1 = document.querySelector('.page-1');
const terms = document.querySelector('.terms');
const termsBtn = document.querySelector('.main__article--six__form__terms-container__txt__link');
const closeBtn = document.querySelector('.terms__close');

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