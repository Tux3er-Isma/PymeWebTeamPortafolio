window.sr = ScrollReveal();

// const verifyVisibility = (entries, observer) =>{
//     if (window.screen.availWidth > 480){
//         for (let i = 0; i < entries.length; i++){
//             let evtClass = entries[i].target.classList[2];
//             let firstItem = evtClass[0];
//             let lastItem = evtClass[evtClass.length - 1];

//             if (firstItem == 'm'){
//                 console.log("The element is a container")
//                 entries[i].target.style.animation = `appeard-${lastItem} .5s forwards`;
//             } else {
//                 console.log("The element is an arrow");
//                 entries[i].target.style.animation = `aappeard-${lastItem} .7s forwards`;
//             }
//         }
//     }
// }

// const observer = new IntersectionObserver(verifyVisibility);

const workContainer = document.querySelector('.main__article--three__work-container');
const workChildren = workContainer.childNodes;
const workCArr = Array.from(workChildren);
const workFArr = workCArr.filter(item =>{
    return item instanceof HTMLDivElement;
})

const workDArr = [workFArr[1], workFArr[3], workFArr[5], workFArr[7], workFArr[9], workFArr[11]];

// observer.observe(workDArr[0])
// observer.observe(workFArr[2])
if (window.screen.availWidth > 900){
    workFArr[2].classList.replace("main__article--three__work-container__reverse-arrow-container", "main__article--three__work-container__arrow-container");


    sr.reveal(workDArr[0], {
        origin: 'left',
        distance: '15px',
        duration: 500
    })
    
    sr.reveal(workFArr[2], {
        origin: 'left',
        distance: '100px',
        duration: 600
    })
    
    sr.reveal(workDArr[1], {
        origin: 'left',
        distance: '100px',
        duration: 700
    })
    
    sr.reveal(workFArr[4], {
        origin: 'left',
        distance: '100px',
        duration: 800
    })
    
    sr.reveal(workDArr[2], {
        origin: 'left',
        distance: '100px',
        duration: 900
    })
    
    sr.reveal(workFArr[6], {
        origin: 'top',
        distance: '100px',
        duration: 1000
    })
    
    sr.reveal(workDArr[5], {
        origin: 'right',
        distance: '30px',
        duration: 1100
    })
    
    sr.reveal(workFArr[10], {
        origin: 'right',
        distance: '100px',
        duration: 1200
    })
    
    sr.reveal(workDArr[4], {
        origin: 'right',
        distance: '100px',
        duration: 1300
    })
    
    sr.reveal(workFArr[8], {
        origin: 'right',
        distance: '100px',
        duration: 1400
    })
    
    sr.reveal(workDArr[3], {
        origin: 'right',
        distance: '100px',
        duration: 1500
    })
} else {
    //Arrow 2
    workFArr[2].classList.replace("main__article--three__work-container__arrow-container", "main__article--three__work-container__down-arrow-container");
    workFArr[2].childNodes[1].classList.replace("main__article--three__work-container__arrow-container__large-arrow", "main__article--three__work-container__down-arrow-container__long-arrow")
    workFArr[2].childNodes[3].classList.replace("main__article--three__work-container__arrow-container__head-arrow", "main__article--three__work-container__down-arrow-container__head-arrow")

    //Arrow 2
    workFArr[4].classList.replace("main__article--three__work-container__arrow-container", "main__article--three__work-container__down-arrow-container");
    workFArr[4].childNodes[1].classList.replace("main__article--three__work-container__arrow-container__large-arrow", "main__article--three__work-container__down-arrow-container__long-arrow")
    workFArr[4].childNodes[3].classList.replace("main__article--three__work-container__arrow-container__head-arrow", "main__article--three__work-container__down-arrow-container__head-arrow")

    //Arrow 4
    workFArr[8].classList.replace("main__article--three__work-container__reverse-arrow-container", "main__article--three__work-container__down-arrow-container");
    workFArr[8].childNodes[1].classList.replace("main__article--three__work-container__reverse-arrow-container__large-arrow", "main__article--three__work-container__down-arrow-container__long-arrow")
    workFArr[8].childNodes[3].classList.replace("main__article--three__work-container__reverse-arrow-container__head-arrow", "main__article--three__work-container__down-arrow-container__head-arrow")

    //Arrow 5
    workFArr[10].classList.replace("main__article--three__work-container__reverse-arrow-container", "main__article--three__work-container__down-arrow-container");
    workFArr[10].childNodes[1].classList.replace("main__article--three__work-container__reverse-arrow-container__large-arrow", "main__article--three__work-container__down-arrow-container__long-arrow")
    workFArr[10].childNodes[3].classList.replace("main__article--three__work-container__reverse-arrow-container__head-arrow", "main__article--three__work-container__down-arrow-container__head-arrow")

    sr.reveal(workDArr[0], {
        origin: 'top',
        distance: '15px',
        duration: 500
    })
    
    sr.reveal(workFArr[2], {
        origin: 'top',
        distance: '100px',
        duration: 600
    })
    
    sr.reveal(workDArr[1], {
        origin: 'top',
        distance: '100px',
        duration: 700
    })
    
    sr.reveal(workFArr[4], {
        origin: 'top',
        distance: '100px',
        duration: 800
    })
    
    sr.reveal(workDArr[2], {
        origin: 'top',
        distance: '100px',
        duration: 900
    })
    
    sr.reveal(workFArr[6], {
        origin: 'top',
        distance: '100px',
        duration: 1000
    })
    
    sr.reveal(workDArr[5], {
        origin: 'top',
        distance: '30px',
        duration: 1100
    })
    
    sr.reveal(workFArr[10], {
        origin: 'top',
        distance: '100px',
        duration: 1200
    })
    
    sr.reveal(workDArr[4], {
        origin: 'top',
        distance: '100px',
        duration: 1300
    })
    
    sr.reveal(workFArr[8], {
        origin: 'top',
        distance: '100px',
        duration: 1400
    })
    
    sr.reveal(workDArr[3], {
        origin: 'top',
        distance: '100px',
        duration: 1500
    })
}

for (let i = 0; i < workDArr.length; i++){
    console.log(workDArr[i].childNodes[1].innerHTML)
    if (window.screen.availWidth <= 840){
        workDArr[3].childNodes[1].innerHTML = "Pruebas <br> y ajustes <br> <small>Con el cliente</small>";
        workDArr[5].childNodes[1].innerHTML = "Mantenimiento y Actualizaciones";
    } else {
        workDArr[5].childNodes[1].innerHTML = `Pruebas <br> y ajustes <br> <small>Con el cliente</small>`;
        workDArr[3].childNodes[1].innerHTML = "Mantenimiento y Actualizaciones";
    }
}