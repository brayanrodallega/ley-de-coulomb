// Obtener referencias a los elementos del DOM
const carga1Input = document.getElementById('q1');
const carga2Input = document.getElementById('q2');
const distanciaInput = document.getElementById('r');
const calcularBtn = document.getElementById('calcular');
const resultadoOutput = document.getElementById('resultado');

// Función para calcular la fuerza eléctrica
function calcularFuerza() {
  // Obtener los valores de las cargas y la distancia
  const carga1 = carga1Input.value;
  const carga2 = carga2Input.value;
  const distancia = distanciaInput.value;

  // Calcular la fuerza eléctrica usando la Ley de Coulomb
  const constante = 9e9; // Constante de Coulomb en unidades SI
  const fuerza = constante * carga1 * carga2 / (distancia ** 2);

  // Mostrar el resultado en la página
  const parrafo = document.createElement('p');
  parrafo.textContent = `La fuerza eléctrica es de ${fuerza} N`;
  resultadoOutput.innerHTML = '';
  resultadoOutput.appendChild(parrafo);
}

// Asignar el evento de clic al botón de cálculo
calcularBtn.addEventListener('click', calcularFuerza);
