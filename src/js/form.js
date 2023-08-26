const form = document.querySelector('.main__article--six__form');
let Name = document.querySelector('.main__article--six__form__name-inpt');
let email = document.querySelector('.main__article--six__form__email-inpt');
let about = document.querySelector('.main__article--six__form__about-inpt');
let message = document.querySelector('.main__article--six__form__message-inpt');
let checkbox = document.querySelector('.main__article--six__form__terms-container__checkbox');
const btn = document.querySelector('.main__article--six__form__btn');

let params;

const sendEmail = () =>{
    params = {
        about: about.value,
        name: Name.value,
        email: email.value,
        message: message.value
    }
}

const serviceId = 'service_xoih2xp';
const templateId = 'template_inpif3n';

btn.addEventListener('mouseover', () =>{
    if (Name.value == "" || email.value == "" || about.value == "" || message.value == "" || checkbox.checked == false){
        btn.style.cursor = 'not-allowed';
    } else {
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', () =>{
            sendEmail();
            emailjs.send(serviceId, templateId, params).then( res =>{
                console.log(res);
                alert("Tu mensaje fue enviado con exito");
              }).catch(err =>{
                console.log(err);
              })
        })
    }
})