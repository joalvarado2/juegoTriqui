let contarTurno = 0;
const posicion = [];

const oprimirBtn = (e, i) => {
  contarTurno++;
  const btn = e.target;
  const color = contarTurno % 2 ? "salmon" : "blue";
  btn.style.backgroundColor = color;
  posicion[i] = color;
  if (Ganador()) {
    alert(`el jugador de color ${color} ha ganado`);
    location.reload();
  }
};

// const limpiar = () => {
    
// }

const Ganador = () => {
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

document
  .querySelectorAll("button")
  .forEach((e, i) => e.addEventListener("click", (e) => oprimirBtn(e, i)));
