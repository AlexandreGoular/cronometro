const horasElement = document.querySelector('.horas');
const minutosElement = document.querySelector('.minutos');
const segundosElement = document.querySelector('.segundos');
const iniciarButton = document.querySelector('#iniciar');
const pausarButton = document.querySelector('#pausar');
const resetarButton = document.querySelector('#resetar');

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function atualizarCronometro() {
    segundos ++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;

        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    segundosElement.textContent = segundos.toString().padStart(2, '0');
    minutosElement.textContent = minutos.toString().padStart(2, '0');
    horasElement.textContent = horas.toString().padStart(2, '0');
}

iniciarButton.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = setInterval(atualizarCronometro, 1000);
});

pausarButton.addEventListener('click', () => {
    clearInterval(intervalo);
});

resetarButton.addEventListener('click', () => {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    segundosElement.textContent = '00';
    minutosElement.textContent = '00';
    horasElement.textContent = '00';
});
