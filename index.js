// llammamos nuestros elementos del DOM es decir del navegador
const cuadros = document.querySelectorAll("button");
const parrafo = document.querySelector("p");

// por cada boton que tenemos escuchamos un envento y le asignamos una funcion
cuadros.forEach((e, i) => e.addEventListener("click", (e) => oprimirBtn(e, i)));

let contarTurno = 0;
const posicion = [];

// cada vez que se oprime  un boton le asignamos un valor en texto y un valor en color
const oprimirBtn = (e, i) => {
  contarTurno++;
  const btn = e.target;
  const text = contarTurno % 2 ? "X" : "O";
  const color = contarTurno % 2 ? "#29b33c" : "#007bff";
  btn.innerHTML = text;
  btn.style.backgroundColor = color;
  posicion[i] = color;
  if (ganador()) {
    parrafo.innerHTML = `
      Felicitaciones a ganado el jugador con la letra ${text}<br/>
      Oprime reset para comenzar una nueva partida  `;
  }
};

// funcion que tiene la logica para  sacar el ganador hacemos comparaciones en nuestro array de elementos
const ganador = () => {
  if (posicion[0] == posicion[1] && posicion[0] == posicion[2] && posicion[0]) {
    return true;
  } else if (
    posicion[3] == posicion[4] &&
    posicion[3] == posicion[5] &&
    posicion[3]
  ) {
    return true;
  } else if (
    posicion[6] == posicion[7] &&
    posicion[6] == posicion[8] &&
    posicion[6]
  ) {
    return true;
  } else if (
    posicion[0] == posicion[3] &&
    posicion[0] == posicion[6] &&
    posicion[0]
  ) {
    return true;
  } else if (
    posicion[1] == posicion[4] &&
    posicion[1] == posicion[7] &&
    posicion[1]
  ) {
    return true;
  } else if (
    posicion[2] == posicion[5] &&
    posicion[2] == posicion[8] &&
    posicion[2]
  ) {
    return true;
  } else if (
    posicion[0] == posicion[4] &&
    posicion[0] == posicion[8] &&
    posicion[0]
  ) {
    return true;
  } else if (
    posicion[2] == posicion[4] &&
    posicion[2] == posicion[6] &&
    posicion[2]
  ) {
    return true;
  }
  return false;
};
