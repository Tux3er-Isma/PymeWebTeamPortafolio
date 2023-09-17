// Función para cambiar el título cuando el usuario se va de la página
window.addEventListener('blur', function() {
  document.title = '¡No te vayas!';
});

// Función para restaurar el título cuando el usuario vuelve a la página
window.addEventListener('focus', function() {
  document.title = 'Terminal';
});


const container = document.querySelector('.header__letters-container__container');
let index = 0;
let icon;
let iconKey = "<p>~></p>"

let frasesArr = [
  "<Diseños/> creativos",
  "<Estrategia/> vendedora",
  "</Soporte> contínuo",
  ">Competitivo precio",
  "</Visibilidad> online",
];

let currentFrase = "";
let previousFrase = "";

let totalFraseArr = [];

let caracteres = ["@", "!", "·", "$", "%", ")", "=", "?"];

function cambiarFrase() {
    const colors = ["#25a6e9", "#a87ffb", "#17b877", "#ffa23e", "#FEC260", "#F9E2AF", "#009FBD", "#0079FF", "#00DFA2", "#F6FA70", "#FF0060", "#4E4FEB", "#068FFF"];
    let istyles = document.createElement('STYLE');
    istyles.innerHTML = `
    i{
        color: ${colors[Math.floor(Math.random()*colors.length)]};
    }
    `

    document.head.appendChild(istyles);
  let frase = frasesArr[Math.floor(Math.random()*frasesArr.length)];
  totalFraseArr.push(frase);
  for (let i = 0; i < totalFraseArr.length; i++){
    if (totalFraseArr.length == 1){
      previousFrase = totalFraseArr[0]
    } else {
      previousFrase = totalFraseArr[i - 1];
      currentFrase = frase;

      if (previousFrase == currentFrase){
        console.log(`La frase duplicada es: ${currentFrase}`);
        frase = frasesArr[Math.floor(Math.random()*frasesArr.length)];

        totalFraseArr = [];
      }
    }
  }
  let fraseArr = Array.from(frase);
   if (frase == "<Diseños/> creativos"){
    icon = '<i class="fa-solid fa-code"></i>';
  } else if (frase == "<Estrategia/> vendedora"){
    icon = '<i class="fa-solid fa-gear"></i>';
  } else if (frase == "</Soporte> contínuo"){
    icon = '<i class="fa-solid fa-gear"></i>';
  } else if (frase == ">Competitivo precio"){
    icon = '<i class="fa-solid fa-arrow-trend-up"></i>';
  } else if (frase == "</Visibilidad> online"){
    icon = '<i class="fa-solid fa-code-merge"></i>'
  }
  fraseArr.push(icon);
  container.innerHTML = "";

  for (let i = 0; i < fraseArr.length; i++) {
    let newItem = document.createElement('DIV');
    newItem.classList.add(`header__letters-container__container__item-${i}`);
    newItem.classList.add('header__letters-container__container__items');
    newItem.style.display = 'none';
    const interval = setInterval(() => {
      newItem.style.display = 'flex';
      if (fraseArr[i] == " ") {
        newItem.style.border = '0px';
        newItem.innerHTML = " ";
      } else {
        newItem.innerHTML = caracteres[Math.floor(Math.random() * caracteres.length)]
        newItem.style.color = '#777';
        setTimeout(() => {
          clearInterval(interval);
          if (fraseArr[i] == " ") {
            newItem.style.border = '0px';
          } else {
            newItem.innerHTML = fraseArr[i];
            if (fraseArr[i] == '>'){
                newItem.style.color = colors[Math.floor(Math.random()*colors.length)]
              } else if (fraseArr[i] == '<'){
                newItem.style.color = colors[Math.floor(Math.random()*colors.length)]
              } else if (fraseArr[i] == '/'){
                newItem.style.color = colors[Math.floor(Math.random()*colors.length)]
              } else {
                newItem.style.color = '#fff';
              }
          }
        }, 700)
      }
    }, i * 30)
    container.appendChild(newItem);
    items = container.childNodes;
    let itemsArr = Array.from(items);
    itemsArr.shift();

    const joinedString = fraseArr.join('');
    const wordsArray = joinedString.split(' ');

    const wordLengths = wordsArray.map(word => {
    return {
        word: word,
        length: word.length
    };
    });

    let line1Length;

    if (wordLengths.length == 5 || wordLengths.length == 4){
        if (wordLengths[0].length < wordLengths[1].length){
            line1Length = wordLengths[1].length; 
        } else {
            line1Length = wordLengths[0].length;
        }
    } else {
        if (wordLengths[0].length == 14){
            line1Length = wordLengths[0].length;
        } else {
            line1Length = wordLengths[0].length + wordLengths[1].length + 1;
        }
    }

    let gridColumnValue = '';
    let gridRowValue = '';

    if (window.screen.availWidth <= 480){
        itemsArr.forEach(item =>{
            item.style.width = '25px';
            item.style.height = '40px';
            item.style.fontSize = '20px';
        })
        for (let i = 0; i < line1Length; i++){
            gridColumnValue += '25px' + ' ';
            gridRowValue += '40px' + ' ';
        }
    } else if (window.screen.availWidth <= 900 && window.screen.availWidth >= 481){
      itemsArr.forEach(item =>{
        item.style.width = '42px';
        item.style.head = '62';
        item.style.fontSize = '30px';
      })
      for (let i = 0; i < line1Length; i++){
        gridColumnValue += '42px' + ' ';
        gridRowValue += '62px' + ' ';
      }
    }else {
        itemsArr.forEach(item =>{
            item.style.width = '64px';
            item.style.height = '95px';
            item.style.fontSize = '50px';
        })
        for (let i = 0; i < line1Length; i++){
            gridColumnValue += '64px' + ' ';
            gridRowValue += '95px' + ' ';
        }
    }

    container.style.gridTemplateColumns = gridColumnValue;
    container.style.gridTemplateRows = gridRowValue;
  }
}

cambiarFrase();
setInterval(cambiarFrase, 6000);
