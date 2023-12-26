window.sr = ScrollReveal();

const markdownIt = window.markdownit();

// const hola = document.querySelector('.hola');
// const textoMarkdown = "Este es un **texto en negrita** y este es *texto en cursiva*.";

// // Procesar el texto Markdown
// const resultadoHTML = markdownIt.render(textoMarkdown);

// // Mostrar el resultado en tu HTML
// // hola.innerHTML = resultadoHTML;

const chat = document.querySelector('.chat');
const chatPopUpContainer = document.querySelector('.chat__popup-container');
const chatBar = document.querySelector('.chat__bar');
const chatIcon = document.querySelector('.chat__bar__icon');
const chatMain = document.querySelector('.chat__main');
const chatTitle = document.querySelector('.chat__main__title');
const suggestionsContainer = document.querySelector('.chat__main__suggestions-container');
const sCArr = suggestionsContainer.childNodes;
const chatInpt = document.querySelector('.chat__main__inpt-container__inpt');
const chatInptIcon = document.querySelector('.chat__main__inpt-container__icon-container__icon');
const chatContainer = document.querySelector('.chat__main__chat-container');
const arrowDown = document.querySelector('.header__letters-container__arrow-down');
const footer = document.querySelector('.footer');
let chatIconC = true;
let typingLength = 0;
let userMessage = "";
const txt2Arr = [];
const loaderArr = [];

const logoImg = document.querySelector('.logo__img');

logoImg.addEventListener('mouseover', () =>{
  logoImg.style.animation = 'grandy .1s forwards';
})

logoImg.addEventListener('mouseout', () =>{
  logoImg.style.animation = 'chicky .1s forwards';
})

chatInpt.removeAttribute('readonly', false);
chatInpt.style.cursor = 'text';

setTimeout(() =>{
    chatPopUpContainer.style.animation = 'apear 1s forwards';

    setTimeout(() =>{
        chatPopUpContainer.style.animation = 'disapear 1s forwards';
    }, 5000)

}, 2000)

sCArr.forEach(container =>{
    container.addEventListener('click', () =>{
        sCArr[1].style.display = 'none';
        sCArr[3].style.display = 'none';
        sCArr[5].style.display = 'none';
        sCArr[7].style.display = 'none';
        chatTitle.style.display = 'none';
        userMessage = container.childNodes[1].textContent;
        chatInpt.setAttribute('readonly', true);
        chatInpt.style.cursor = 'not-allowed';
        chatInpt.value = "";
        suggestionsContainer.style.opacity = '0';
        suggestionsContainer.style.positon = 'absolute';
        suggestionsContainer.style.zIndex = '-1';
                    //
                    const loader = document.createElement('DIV');
                    loader.classList.add('loader');

                    const contianer1 = document.createElement('DIV');
                    const pictureContainer1 = document.createElement('PICTURE');
                    let profile1 = document.createElement('IMG');
                    let txt1 = document.createElement('P');
                
                    const contianer2 = document.createElement('DIV');
                    const pictureContainer2 = document.createElement('PICTURE');
                    let profile2 = document.createElement('IMG');
                    const txt2Container = document.createElement('DIV');
                    let txt2 = document.createElement('PRE');
                
                    const cursor = document.createElement('span');
                    cursor.className = 'cursor';
                    txt2.appendChild(cursor);
            
                    txt1.innerHTML = userMessage;
                
                    profile1.setAttribute('src', "https://cdn2.iconfinder.com/data/icons/instagram-outline/19/11-512.png");
                    profile2.setAttribute('src', "https://cdn.discordapp.com/attachments/973568724722389052/1155097462038614116/W_logo.png");
                
                    contianer1.classList.add('chat__main__chat-container__container');
                    contianer2.classList.add('chat__main__chat-container__container');
                    contianer1.classList.add('chat__main__chat-container__container--1');
                    contianer2.classList.add('chat__main__chat-container__container--2');
                    pictureContainer1.classList.add('chat__main__chat-container__container__picture-container');
                    pictureContainer2.classList.add('chat__main__chat-container__container__picture-container');
                    pictureContainer1.classList.add('chat__main__chat-container__container__picture-container--1');
                    pictureContainer2.classList.add('chat__main__chat-container__container__picture-container--2');
                    profile1.classList.add('chat__main__chat-container__container__picture-container__img');
                    profile2.classList.add('chat__main__chat-container__container__picture-container__img');
                    profile1.classList.add('chat__main__chat-container__container__picture-container__img--1');
                    profile2.classList.add('chat__main__chat-container__container__picture-container__img--2');
                    txt2Container.classList.add('chat__main__chat-container__txt-2-container')
                    txt1.classList.add('chat__main__chat-container__container__txt');
                    txt2.classList.add('chat__main__chat-container__container__txt');
                    txt1.classList.add('chat__main__chat-container__container__txt--1');
                    txt2Container.classList.add('chat__main__chat-container__container__txt-2-container__txt--2');
            
                    pictureContainer1.appendChild(profile1);
                    pictureContainer2.appendChild(profile2);
                    contianer1.appendChild(pictureContainer1);
                    contianer1.appendChild(txt1);
                    contianer2.appendChild(pictureContainer2);
                    txt2Container.appendChild(txt2);
                    txt2Container.appendChild(loader);
                    contianer2.appendChild(txt2Container);
                
                    chatContainer.appendChild(contianer1);
                    chatContainer.appendChild(contianer2);
            
                    txt2Arr.push(txt2);
                    txt2.style.display = 'none';
                    loaderArr.push(loader);
                    //
        getBotMessage();
    })
})

chatBar.addEventListener('click', () =>{
    if (chatIcon.src == "https://cdn.discordapp.com/attachments/973568724722389052/1145322729181036585/comentario-alt_2.png"){
        chatIcon.src = "https://cdn.discordapp.com/attachments/973568724722389052/1152897398620835860/cruz-pequena.png";
        chatPopUpContainer.style.display = 'none';
        // if (window.location.href == `${window.location.origin}/#main`){
        //     console.log("You are in main section");
        //     history.pushState({}, document.title, window.location.pathname);
        //     sr.reveal(sCArr[1], {
        //         origin: 'bottom',
        //         distance: '10px',
        //         duration: 600,
        //         reset: true,
        //         opacity: 1
        //     })
    
        //     sr.reveal(sCArr[3], {
        //         origin: 'bottom',
        //         distance: '10px',
        //         duration: 1000,
        //         reset: true,
        //         opacity: 1
        //     })
    
        //     sr.reveal(sCArr[5], {
        //         origin: 'bottom',
        //         distance: '10px',
        //         duration: 1400,
        //         reset: true,
        //         opacity: 1
        //     })
    
        //     sr.reveal(sCArr[7], {
        //         origin: 'bottom',
        //         distance: '10px',
        //         duration: 1800,
        //         reset: true,
        //         opacity: 1
        //     })
        // }
        // if (window.location.href == `${window.location.origin}/#article-five`){
        //     console.log("You are in main section");
        //     history.pushState({}, document.title, window.location.pathname);
        //     sr.reveal(sCArr[1], {
        //         origin: 'bottom',
        //         distance: '10px',
        //         duration: 600,
        //         reset: true,
        //         opacity: 1
        //     })
    
        //     sr.reveal(sCArr[3], {
        //         origin: 'bottom',
        //         distance: '10px',
        //         duration: 1000,
        //         reset: true,
        //         opacity: 1
        //     })
    
        //     sr.reveal(sCArr[5], {
        //         origin: 'bottom',
        //         distance: '10px',
        //         duration: 1400,
        //         reset: true,
        //         opacity: 1
        //     })
    
        //     sr.reveal(sCArr[7], {
        //         origin: 'bottom',
        //         distance: '10px',
        //         duration: 1800,
        //         reset: true,
        //         opacity: 1
        //     })
        // }
        chatMain.style.zIndex = '12';
        chatMain.style.opacity = '1';
        footer.style.zIndex = '0';
        document.body.style.overflowY = 'hidden';
        sCArr[1].style.opacity = '1';
        logoImg.style.display = 'none';
        if (window.screen.availWidth <= 900){
            chatBar.style.top = '10px';
            chatMain.style.top = `${0}px`;
        } else {
            chatMain.style.top = `${this.scrollY}px`;
            // sr.reveal(sCArr[1], {
            //     origin: 'bottom',
            //     distance: '10px',
            //     duration: 600,
            //     opacity: 1
            // })
    
            // sr.reveal(sCArr[3], {
            //     origin: 'bottom',
            //     distance: '10px',
            //     duration: 1000,
            //     opacity: 1
            // })
    
            // sr.reveal(sCArr[5], {
            //     origin: 'bottom',
            //     distance: '10px',
            //     duration: 1400,
            //     opacity: 1
            // })
    
            // sr.reveal(sCArr[7], {
            //     origin: 'bottom',
            //     distance: '10px',
            //     duration: 1800,
            //     opacity: 1
            // })
        }
        chatPopUpContainer.style.animation = 'disaper 1s forwards';
    } else if (chatIcon.src == "https://cdn.discordapp.com/attachments/973568724722389052/1152897398620835860/cruz-pequena.png"){
        if (window.screen.availWidth <= 900){
            chatMain.style.zIndex = '0';
            chatContainer.zIndex = '0';
            chatBar.style.top = 'auto';
            chatBar.style.bottom = '20px';
        } else {
            chatMain.style.zIndex = '0';
        }
        logoImg.style.display = 'block';
        footer.style.zIndex = '12';
        chatBar.style.bottom = '20px';
        chatMain.style.opacity = '0';
        chatIcon.src = "https://cdn.discordapp.com/attachments/973568724722389052/1145322729181036585/comentario-alt_2.png";
        document.body.style.overflowY = 'scroll';
        chatPopUpContainer.style.display = 'none';
    }
})


let partA1 = "sk-UMP4EzGwvDXeL"
let partA2 = "VGoT4prT3BlbkFJ83V4tX7JI"
let partA3 = "gbVmOffp1o8";

key = partA1 + partA2 + partA3;

// //OPENAI API CONFIGURATION
// let key;
// fetch('env.json').then(res =>{
//     res.json().then(res =>{
//         key = res.APIKEY;
//     }).catch(err =>{
//         console.log(err);
//     })
// })

let preText = "";

chatInpt.addEventListener('keyup', () =>{
    if (chatInpt.value != ""){
        chatInptIcon.style.opacity = '1';
        chatInptIcon.src = 'https://cdn.discordapp.com/attachments/973568724722389052/1145336337336119367/parte-superior-del-avion-de-papel_1.png';
    } else {
        chatInptIcon.style.opacity = '.5';
        chatInptIcon.src = 'https://cdn.discordapp.com/attachments/973568724722389052/1145336336933453865/parte-superior-del-avion-de-papel.png';
    }
})

async function getBotMessage(){
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: ` 

            Eres un asistente de IA de una empresa llamada Pyme Web. Todas tus respuestas deben estar en formato MarkDown

            Somos una empresa llamada Pyme Web Team (recuerda que el prompt tiene que estar escrito en imperativo)

            Quiénes somos
            Hola, somos Isma y Xavi (Pyme Web Team), dos emprendedores con una visión clara: ayudar a las pequeñas y medianas empresas a tener una sólida presencia en internet a través de páginas web efectivas. Nuestra juventud es nuestra ventaja, ya que combinamos pasión, creatividad y conocimiento técnico con un compromiso inquebrantable hacia la satisfacción del cliente.
            
            Queremos ser tu aliado tecnológico en este emocionante viaje hacia el éxito en línea. Confía en nosotros para crear una presencia web que refleje la esencia y el valor de tu negocio. Descubre más sobre nosotros 
            
            
            Qué hacemos
            Nos especializamos en:
             Diseño y desarrollo (Páginas web)
             Creación y edición de videos para redes sociales
             Mantenimiento y actualización continua
             Copy Writing
            
            Cómo trabajamos
            Seguimos unas pautas y pasos para proporcionar el mejor servicio:
            
            1: Consulta y planificacion con el cliente
            2: Diseño creativo y propuesta
            3:Desarrollo tecnico
            4:Pruebas y ajustes
            5: Entrega y lanzamiento
            6: Mantenimiento y actualizaciones
            
            
            Por qué con nosotros
            Te ofrecemos:
            
            - Diseños personalizados y profesionales
            - Especializados en paginas web vendedoras
            - Interfaz intuitiva
            - Estrategias SEO para ganar visibilidad
               online
            - Soporte continuo y actualizaciones
            - Precios competitivos
            - Diseños adaptados a cualquier
               dispositivo
            - Uso de la última tecnologia de Inteligencia
               Artificial
            
            
            (Esta parte explica un poco quienes somos más allá de lo que he puesto antes)
            
            En un mundo cada vez más conectado, la presencia en línea, es fundamental para el éxito de cualquier empresa. Nos hemos embarcado en la misión de brindar a las PYMES las herramientas que necesitan para competir en este entorno digital en constante evolución.
            
            A pesar de nuestra juventud, -quizá te sorprenda cuando nos conozcas personalmente- no subestimes nuestra experiencia y conocimiento. Hemos crecido con la tecnología y comprendemos sus matices como pocos.
            
            Hemos trabajado incansablemente para perfeccionar nuestras habilidades y conocimientos en el diseño y desarrollo de páginas web. Lo más importante es que amamos lo que hacemos, y esto se refleja en la calidad de nuestro trabajo. Estamos comprometidos con la excelencia y nos enorgullece ofrecer soluciones web que no solo son hermosas desde un punto de vista estético, sino que también están diseñadas para impulsar el éxito comercial de nuestros clientes.
            
            Sólo queda decir que estamos listos para ser tu aliado tecnológico en el viaje hacia el éxito en línea. Confía en nosotros para crear una presencia web que refleje la esencia y el valor de tu negocio.
            
            ¡Únete a nosotros en este emocionante viaje! ¿El primer paso? ¡Contacta con nosotros!
            
            Contactanos
            para contactarnos o conceder una entrevista pueden acceder al formulario que se encuentra al final de la pagina web,
            
            Descargar presentacion
            Para descargar la presentacion/portfolio los usuarios pueden descargarlo apretando el boton de "Descargar presentacion" que se encuentra en la web
            
            dominamos los lenguajes de programacion: HTML, CSS, JS, SASS, ASTRO (js)
            
            No completes las palabras solo da tu respuesta recuerda que eres un asistente. Tu función es responder al cliente con información proporcionada anteriormente

            Cuando lo creas necesario crea un formato de lista o esquema. Que quede más dinámico el resultado.

           Reponde a esta oracion: ${userMessage}`}],
            max_tokens: 500,
            temperature: 0.5
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json();
        console.log(data);
        chatInpt.setAttribute('readonly', true);
        setTimeout(() =>{
            chatInpt.removeAttribute('readonly', false);
            chatInpt.style.cursor = 'text';
        }, 500)
        chatInpt.style.cursor = 'not-allowed';
        loaderArr[loaderArr.length - 1].style.display = 'none';
        txt2Arr[txt2Arr.length - 1].style.display = 'block';
        let lettersTxt2Arr;
            txt2Arr[txt2Arr.length - 1].innerHTML = data.choices[0].message.content;
            lettersTxt2Arr = Array.from(txt2Arr[txt2Arr.length - 1].innerHTML);
        typingLength = lettersTxt2Arr.length;


        let currentCharIndex = 0;

        function typePhrase() {
            if (currentCharIndex <= lettersTxt2Arr.length) {
                    txt2Arr[txt2Arr.length - 1].textContent = data.choices[0].message.content.substr(0, currentCharIndex);
                currentCharIndex++;
                setTimeout(typePhrase, 1); // Cambia el tiempo de escritura según tus preferencias
            }
        }

        // Iniciar el efecto al cargar la página
        typePhrase();



        // txt2.style.width = `${lettersTxt2Arr.length * 10}px`;
        // txt2.style.animation = `typing 2s steps(${lettersTxt2Arr.length}), blink .5s infinite step-end alternate`;
    }

    catch (err){
        console.error(err)
    }
}

chatInptIcon.addEventListener('click', () =>{
    if (chatInpt.value == "" || chatInpt.value == " "){
        const errorPopup = document.createElement('DIV');
        errorPopup.classList.add('error-popup');
        errorPopup.innerHTML = "Por favor no dejes huecos en blanco";
        errorPopup.style.top = `${this.scrollY + 10}px`;
        if (window.screen.availWidth >= 1920){
            errorPopup.style.left = `${window.screen.availWidth / 2.6}px`
        } else  if (window.screen.availWidth >= 1200){
            errorPopup.style.left = `${window.screen.availWidth / 3}px`
        } else {
            errorPopup.style.left = `${window.screen.availWidth / 10}px`
        }
        errorPopup.addEventListener('animationend', () =>{
            errorPopup.style.animation = `bye-bye 2s forwards ease-in-out`
        })
        document.body.appendChild(errorPopup);
    } else {
        sCArr[1].style.display = 'none';
        sCArr[3].style.display = 'none';
        sCArr[5].style.display = 'none';
        sCArr[7].style.display = 'none';
        chatTitle.style.display = 'none';
        chatInpt.setAttribute('readonly', true);
        chatInpt.style.cursor = 'not-allowed';
        chatInpt.value = "";
        suggestionsContainer.style.opacity = '0';
        suggestionsContainer.style.positon = 'absolute';
        suggestionsContainer.style.zIndex = '-1';
                //
                const loader = document.createElement('DIV');
                loader.classList.add('loader');

                const contianer1 = document.createElement('DIV');
                const pictureContainer1 = document.createElement('PICTURE');
                let profile1 = document.createElement('IMG');
                let txt1 = document.createElement('P');
            
                const contianer2 = document.createElement('DIV');
                const pictureContainer2 = document.createElement('PICTURE');
                let profile2 = document.createElement('IMG');
                const txt2Container = document.createElement('DIV');
                let txt2 = document.createElement('PRE');
            
                const cursor = document.createElement('span');
                cursor.className = 'cursor';
                txt2.appendChild(cursor);
        
                txt1.innerHTML = userMessage;
            
                profile1.setAttribute('src', "https://cdn2.iconfinder.com/data/icons/instagram-outline/19/11-512.png");
                profile2.setAttribute('src', "https://cdn.discordapp.com/attachments/973568724722389052/1155097462038614116/W_logo.png");
            
                contianer1.classList.add('chat__main__chat-container__container');
                contianer2.classList.add('chat__main__chat-container__container');
                contianer1.classList.add('chat__main__chat-container__container--1');
                contianer2.classList.add('chat__main__chat-container__container--2');
                pictureContainer1.classList.add('chat__main__chat-container__container__picture-container');
                pictureContainer2.classList.add('chat__main__chat-container__container__picture-container');
                pictureContainer1.classList.add('chat__main__chat-container__container__picture-container--1');
                pictureContainer2.classList.add('chat__main__chat-container__container__picture-container--2');
                profile1.classList.add('chat__main__chat-container__container__picture-container__img');
                profile2.classList.add('chat__main__chat-container__container__picture-container__img');
                profile1.classList.add('chat__main__chat-container__container__picture-container__img--1');
                profile2.classList.add('chat__main__chat-container__container__picture-container__img--2');
                txt2Container.classList.add('chat__main__chat-container__txt-2-container')
                txt1.classList.add('chat__main__chat-container__container__txt');
                txt2.classList.add('chat__main__chat-container__container__txt');
                txt1.classList.add('chat__main__chat-container__container__txt--1');
                txt2Container.classList.add('chat__main__chat-container__container__txt-2-container__txt--2');
        
                pictureContainer1.appendChild(profile1);
                pictureContainer2.appendChild(profile2);
                contianer1.appendChild(pictureContainer1);
                contianer1.appendChild(txt1);
                contianer2.appendChild(pictureContainer2);
                txt2Container.appendChild(txt2);
                txt2Container.appendChild(loader);
                contianer2.appendChild(txt2Container);
            
                chatContainer.appendChild(contianer1);
                chatContainer.appendChild(contianer2);

                txt2.style.display = 'none';
        
                txt2Arr.push(txt2);
                loaderArr.push(loader);
                //
        getBotMessage();
    }
})

chatInpt.addEventListener('keydown', (evt) =>{
    if (evt.key == 'Enter'){
        if (chatInpt.value == "" || chatInpt.value == " "){
            const errorPopup = document.createElement('DIV');
            errorPopup.classList.add('error-popup');
            errorPopup.innerHTML = "Por favor no dejes huecos en blanco";
            errorPopup.style.top = `${this.scrollY + 10}px`;
            if (window.screen.availWidth >= 1920){
                errorPopup.style.left = `${window.screen.availWidth / 2.6}px`
            } else {
                errorPopup.style.left = `${window.screen.availWidth / 3}px`
            }
            errorPopup.addEventListener('animationend', () =>{
                errorPopup.style.animation = `bye-bye 2s forwards ease-in-out`
            })
            document.body.appendChild(errorPopup);
        } else {
            sCArr[1].style.display = 'none';
            sCArr[3].style.display = 'none';
            sCArr[5].style.display = 'none';
            sCArr[7].style.display = 'none';
            chatTitle.style.display = 'none';
            chatInpt.setAttribute('readonly', true);
            chatInpt.style.cursor = 'not-allowed';
            chatInpt.value = "";
            suggestionsContainer.style.opacity = '0';
            suggestionsContainer.style.positon = 'absolute';
            suggestionsContainer.style.zIndex = '-1';
                    //
                    const loader = document.createElement('DIV');
                    loader.classList.add('loader');

                    const contianer1 = document.createElement('DIV');
                    const pictureContainer1 = document.createElement('PICTURE');
                    let profile1 = document.createElement('IMG');
                    let txt1 = document.createElement('P');
                
                    const contianer2 = document.createElement('DIV');
                    const pictureContainer2 = document.createElement('PICTURE');
                    let profile2 = document.createElement('IMG');
                    const txt2Container = document.createElement('DIV');
                    let txt2 = document.createElement('PRE');
                
                    const cursor = document.createElement('span');
                    cursor.className = 'cursor';
                    txt2.appendChild(cursor);
            
                    txt1.innerHTML = userMessage;
                
                    profile1.setAttribute('src', "https://cdn2.iconfinder.com/data/icons/instagram-outline/19/11-512.png");
                    profile2.setAttribute('src', "https://cdn.discordapp.com/attachments/973568724722389052/1155097462038614116/W_logo.png");
                
                    contianer1.classList.add('chat__main__chat-container__container');
                    contianer2.classList.add('chat__main__chat-container__container');
                    contianer1.classList.add('chat__main__chat-container__container--1');
                    contianer2.classList.add('chat__main__chat-container__container--2');
                    pictureContainer1.classList.add('chat__main__chat-container__container__picture-container');
                    pictureContainer2.classList.add('chat__main__chat-container__container__picture-container');
                    pictureContainer1.classList.add('chat__main__chat-container__container__picture-container--1');
                    pictureContainer2.classList.add('chat__main__chat-container__container__picture-container--2');
                    profile1.classList.add('chat__main__chat-container__container__picture-container__img');
                    profile2.classList.add('chat__main__chat-container__container__picture-container__img');
                    profile1.classList.add('chat__main__chat-container__container__picture-container__img--1');
                    profile2.classList.add('chat__main__chat-container__container__picture-container__img--2');
                    txt2Container.classList.add('chat__main__chat-container__txt-2-container')
                    txt1.classList.add('chat__main__chat-container__container__txt');
                    txt2.classList.add('chat__main__chat-container__container__txt');
                    txt1.classList.add('chat__main__chat-container__container__txt--1');
                    txt2Container.classList.add('chat__main__chat-container__container__txt-2-container__txt--2');
            
                    pictureContainer1.appendChild(profile1);
                    pictureContainer2.appendChild(profile2);
                    contianer1.appendChild(pictureContainer1);
                    contianer1.appendChild(txt1);
                    contianer2.appendChild(pictureContainer2);
                    txt2Container.appendChild(txt2);
                    txt2Container.appendChild(loader);
                    contianer2.appendChild(txt2Container);
                
                    chatContainer.appendChild(contianer1);
                    chatContainer.appendChild(contianer2);

                    txt2.style.display = 'none';
            
                    txt2Arr.push(txt2);
                    loaderArr.push(loader);
                    //
            getBotMessage();
        }
    }
})

chatInpt.addEventListener('keyup', (evt) =>{
    userMessage = evt.target.value;
})

chatInptIcon.addEventListener('mouseover', () =>{
    chatInptIcon.style.opacity = '1';
})

chatInptIcon.addEventListener('mouseleave', () =>{
    chatInptIcon.style.opacity = '0.5';
})