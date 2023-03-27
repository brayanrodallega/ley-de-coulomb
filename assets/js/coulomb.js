// Obtener referencias a los elementos del DOM (Form Force)
let formCalculateForce = document.getElementById("formForce");
let btnForce = document.getElementById("btnForce");
let inputQ1f = document.getElementById("q1f");
let inputQ2f = document.getElementById("q2f");
let inputDistancef = document.getElementById("rf");
let selectScale1f = document.getElementById("scale1f");
let selectScale2f = document.getElementById("scale2f");
let selectScale3f = document.getElementById("scale3f");
let calculateN = document.getElementById("calculateN");

// Obtener referencias a los elementos del DOM (Form Distance)
let formCalculateDistance = document.getElementById("formDistance");
let btnDistanced = document.getElementById("btnDistance");
let inputQ1d = document.getElementById("q1d");
let inputQ2d = document.getElementById("q2d");
let inputForced = document.getElementById("fd");
let selectScale1d = document.getElementById("scale1d");
let selectScale2d = document.getElementById("scale2d");
let selectScale4d = document.getElementById("scale4d");
let calculateD = document.getElementById("calculateD");


// Obtener referencias a los elementos del DOM (Form Charge)
let formCalculateCharge = document.getElementById("formCharge");
let btnCharge = document.getElementById("btnCharge");
let inputDistancec = document.getElementById("rc");
let inputForcec = document.getElementById("fc");
let selectScale3c = document.getElementById("scale3c");
let selectScale4c = document.getElementById("scale4c");
let calculateQ = document.getElementById("calculateQ");

// Obtener referencias a los elementos del DOM (Form Charge Different)
let formCalculateChargeDifferent = document.getElementById("formChargeDifferent");
let btnChargeDifferent = document.getElementById("btnChargeDifferent");
let inputQ1cd = document.getElementById("q1cd");
let inputDistancecd = document.getElementById("rcd");
let inputForcecd = document.getElementById("fcd");
let selectScale1cd = document.getElementById("scale1cd");
let selectScale3cd = document.getElementById("scale3cd");
let selectScale4cd = document.getElementById("scale4cd");
let calculateQd = document.getElementById("calculateQD");

// Obtener referencias a los elementos del DOM (Result)
let result = document.getElementById("result");

// Función para calcular la fuerza eléctrica
function calculateForce() {
  // Obtener los valores de las cargas y la distancia
  const q1f = parseFloat(inputQ1f.value) * parseFloat(selectScale1f.value);
  const q2f = parseFloat(inputQ2f.value) * parseFloat(selectScale2f.value);
  const distance = parseFloat(inputDistancef.value) * parseFloat(selectScale3f.value);

  // Verificar que los valores sean válidos
  if (isNaN(q1f) || isNaN(q2f) || isNaN(distance)) {
    alert("Por favor ingrese valores válidos");
    return;
  }

  // Calcular la fuerza eléctrica usando la Ley de Coulomb
  const constK = 9 * Math.pow(10, 9); // Constante de Coulomb
  const forceN = constK * ((q1f * q2f) / Math.pow(distance, 2));

  // Mostrar el resultado en la página
  const p = document.createElement("p");
  p.textContent = `La fuerza eléctrica es de ${forceN.toExponential(3)} N`;
  result.innerHTML = "";
  result.appendChild(p);
}

// Función para calcular la distancia
function calculateDistance() {
  // Obtener los valores de las cargas y la fuerza
  const q1d = parseFloat(inputQ1d.value) * parseFloat(selectScale1d.value);
  const q2d = parseFloat(inputQ2d.value) * parseFloat(selectScale2d.value);
  const force = parseFloat(inputForced.value) * parseFloat(selectScale4d.value);

  // Verificar que los valores sean válidos
  if (isNaN(q1d) || isNaN(q2d) || isNaN(force)) {
    alert("Por favor ingrese valores válidos");
    return;
  }

  // Calcular la distancia usando la Ley de Coulomb
  const constK = 9 * Math.pow(10, 9); // Constante de Coulomb
  const distance = Math.sqrt((constK * ((q1d * q2d) / force)));

  // Mostrar el resultado en la página
  const p = document.createElement("p");
  p.textContent = `La distancia es de ${distance.toExponential(3)} m`;
  result.innerHTML = "";
  result.appendChild(p);
}

// Función para calcular la cargas eléctricas iguales
function calculateCharge() {
  // Obtener los valores de la distancia y la fuerza
  const distance = parseFloat(inputDistancec.value) * parseFloat(selectScale3c.value);
  const force = parseFloat(inputForcec.value) * parseFloat(selectScale4c.value);

  // Verificar que los valores sean válidos
  if (isNaN(distance) || isNaN(force)) {
    alert("Por favor ingrese valores válidos");
    return;
  }

  // Calcular la carga usando la Ley de Coulomb
  const constK = 9 * Math.pow(10, 9); // Constante de Coulomb
  const charge = Math.sqrt(((distance**2) * force) / constK);

  // Mostrar el resultado en la página
  const p = document.createElement("p");
  p.textContent = `La carga es de ${charge.toExponential(3)} C`;
  result.innerHTML = "";
  result.appendChild(p);
}

// Función para calcular la cargas eléctricas diferentes
function calculateChargeDifferent() {
  // Obtener los valores de la distancia y la fuerza
  const q1cd = parseFloat(inputQ1cd.value) * parseFloat(selectScale1cd.value);
  const distance = parseFloat(inputDistancecd.value) * parseFloat(selectScale3cd.value);
  const force = parseFloat(inputForcecd.value) * parseFloat(selectScale4cd.value);

  // Verificar que los valores sean válidos
  if (isNaN(q1cd) || isNaN(distance) || isNaN(force)) {
    alert("Por favor ingrese valores válidos");
    return;
  }
  console.log(q1cd, distance, force);
  // Calcular la carga usando la Ley de Coulomb
  const constK = 9 * Math.pow(10, 9); // Constante de Coulomb
  const charge = ((force * (distance**2)) / (constK * q1cd));

  // Mostrar el resultado en la página
  const p = document.createElement("p");
  p.textContent = `La carga es de ${charge.toExponential(3)} C`;
  result.innerHTML = "";
  result.appendChild(p);
}


// Asignar el evento de clic al botón de cálculo
calculateN.addEventListener("click", calculateForce);
calculateD.addEventListener("click", calculateDistance);
calculateQ.addEventListener("click", calculateCharge);
calculateQd.addEventListener("click", calculateChargeDifferent);

// Toggle para mostrar u ocultar el formulario
btnForce.addEventListener("click", () => {
  formCalculateForce.classList.toggle("hidden");
  formCalculateDistance.classList.add("hidden");
  formCalculateCharge.classList.add("hidden");
  formCalculateChargeDifferent.classList.add("hidden");
  clear();
});

btnDistanced.addEventListener("click", () => {
  formCalculateDistance.classList.toggle("hidden");
  formCalculateForce.classList.add("hidden");
  formCalculateCharge.classList.add("hidden");
  formCalculateChargeDifferent.classList.add("hidden");
  clear();
});

btnCharge.addEventListener("click", () => {
  formCalculateCharge.classList.toggle("hidden");
  formCalculateForce.classList.add("hidden");
  formCalculateDistance.classList.add("hidden");
  formCalculateChargeDifferent.classList.add("hidden");
  clear();
});

btnChargeDifferent.addEventListener("click", () => {
  formCalculateChargeDifferent.classList.toggle("hidden");
  formCalculateForce.classList.add("hidden");
  formCalculateDistance.classList.add("hidden");
  formCalculateCharge.classList.add("hidden");
  clear();
});

function clear() {
  inputQ1f.value = "";
  inputQ2f.value = "";
  inputDistancef.value = "";
  selectScale1f.value = "1";
  selectScale2f.value = "1";
  selectScale3f.value = "1";
  result.innerHTML = "";

  inputQ1d.value = "";
  inputQ2d.value = "";
  inputForced.value = "";
  selectScale1d.value = "1";
  selectScale2d.value = "1";
  selectScale4d.value = "1";

  inputDistancec.value = "";
  inputForcec.value = "";
  selectScale3c.value = "1";
  selectScale4c.value = "1";

  inputQ1cd.value = "";
  inputDistancecd.value = "";
  inputForcecd.value = "";
  selectScale1cd.value = "1";
  selectScale3cd.value = "1";
  selectScale4cd.value = "1";
}
