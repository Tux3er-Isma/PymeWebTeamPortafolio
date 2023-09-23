"use strict";

// const sW = navigator.serviceWorker.register("/src/js/sW.js");
document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      e.preventDefault(); // Evitar el comportamiento predeterminado del tabulador
    }
  });