const form = document.querySelector('.main__article--six__form');
let Name = document.querySelector('.main__article--six__form__name-inpt');
let email = document.querySelector('.main__article--six__form__email-inpt');
let about = document.querySelector('.main__article--six__form__about-inpt');
let message = document.querySelector('.main__article--six__form__message-inpt');
let checkbox = document.querySelector('.main__article--six__form__terms-container__checkbox');
const btn = document.querySelector('.main__article--six__form__btn');
const sendPopUpArr = [];

let params;

// const sendEmail = () =>{
//     params = {
//         about: about.value,
//         name: Name.value,
//         email: email.value,
//         message: message.value
//     }
// }

const serviceId = 'service_xuwz0dh';
const templateId = 'template_xkriab8';

btn.addEventListener('mouseover', () =>{
    if (Name.value == "" || email.value == "" || about.value == "" || message.value == "" || checkbox.checked == false){
        btn.style.cursor = 'not-allowed';
    } else {
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', () =>{
            if (Name.value != "" || email.value != "" || about.value != "" || message.value != "" || checkbox.checked != false){
                const createSendPopUp = () =>{
                    const sendPopUp = document.createElement('DIV');
                    sendPopUp.classList.add('send-popup');
                    sendPopUp.innerHTML = "¡Enviado!";
                    sendPopUp.style.top = `${this.scrollY + 10}px`;
                    document.body.appendChild(sendPopUp);
                    if (window.screen.availWidth >= 1920){
                        sendPopUp.style.left = `${window.screen.availWidth / 2.6}px`
                    } else  if (window.screen.availWidth >= 1200){
                        sendPopUp.style.left = `${window.screen.availWidth / 3}px`
                    } else {
                        sendPopUp.style.left = `${window.screen.availWidth / 10}px`
                    }
                    sendPopUpArr.push(sendPopUp);
                    sendPopUp.addEventListener('animationend', () =>{
                        sendPopUp.style.animation = `bye-bye 2s forwards ease-in-out`;
                        sendPopUpArr[sendPopUpArr.length - 1].style.display = 'none';
                    })
                }
                // sendEmail();
                // emailjs.send(serviceId, templateId, params).then( res =>{
                //         console.log(sendPopUpArr);
                //     const sendPopUp = document.createElement('DIV');
                //     sendPopUp.classList.add('send-popup');
                //     sendPopUp.innerHTML = "¡Enviado!";
                //     sendPopUp.style.top = `${this.scrollY + 10}px`;
                //     document.body.appendChild(sendPopUp);
                //     if (window.screen.availWidth >= 1920){
                //         sendPopUp.style.left = `${window.screen.availWidth / 2.6}px`
                //     } else  if (window.screen.availWidth >= 1200){
                //         sendPopUp.style.left = `${window.screen.availWidth / 3}px`
                //     } else {
                //         sendPopUp.style.left = `${window.screen.availWidth / 10}px`
                //     }
                //     sendPopUpArr.push(sendPopUp);
                //     sendPopUp.addEventListener('animationend', () =>{
                //         sendPopUp.style.animation = `bye-bye 2s forwards ease-in-out`;
                //         // sendPopUpArr[sendPopUpArr.length - 1].style.display = 'none';
                //     })
                //   }).catch(err =>{
                //     console.log(err);
                //   })
                const htmlBody = `
                    <b>${Name.value} te ha mandado un email</b>
                    <br>
                    <b>Email: ${email.value}</b>
                    <br>
                    <b>Mensaje: ${message.value}</b>
                `
                Email.send({
                    SecureToken: "3d5aa13f-30cd-49ce-8353-eac475b8c092",
                    // Host : "smtp.elasticemail.com",
                    // Username : "isma.tux3er@gmail.com",
                    // Password : "69595BF7440A82F0C7E59A6759635232B412",
                    To : 'isma.tux3er@gmail.com',
                    From : "isma.tux3er@gmail.com",
                    Subject : `Isma y Xavi habeis recivido un email de: ${email.value} y este es el asunto: ${about.value}`,
                    Body : `${htmlBody}`
                }).then(
                  message => createSendPopUp(message)
                )

            }
        })
    }
})
