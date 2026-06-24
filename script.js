let pantallaActual = 1;
const totalPantallas = 7;

const pantallas = document.querySelectorAll(".pantalla");
const puntos = document.querySelectorAll(".punto");
const contadorPantalla = document.getElementById("contadorPantalla");

function irPantalla(numero) {
  pantallaActual = numero;

  pantallas.forEach((pantalla) => {
    pantalla.classList.remove("activa");
  });

  document.getElementById(`pantalla-${numero}`).classList.add("activa");

  actualizarProgreso();
}

function actualizarProgreso() {
  contadorPantalla.textContent = `${pantallaActual} / ${totalPantallas}`;

  puntos.forEach((punto, index) => {
    punto.classList.toggle("activo", index === pantallaActual - 1);
  });
}

function retroceder() {
  if (pantallaActual > 1) {
    irPantalla(pantallaActual - 1);
  }
}

function activarAbrazo() {
  const burbuja = document.getElementById("burbujaAbrazo");

  burbuja.classList.remove("oculto");
  burbuja.classList.add("visible");
}

function elegirEstado(estado) {
  const mensajeEstado = document.getElementById("mensajeEstado");

  const mensajes = {
    triste:
      "Está bien sentirte así. No tienes que fingir que todo está perfecto. Hoy solo respira suavecito, paso a paso.",

    cansada:
      "Has cargado bastante. Descansar también cuenta como avanzar. Hoy mereces bajar el ritmo sin sentir culpa.",

    estresada:
      "Suelta un poquito los hombros. No tienes que tener todo bajo control para estar haciendo las cosas bien.",

    reir:
      "Entonces queda oficialmente activado el modo sonrisita. No prometo arreglar el día, pero sí hacerlo más liviano.",

    noSe:
      "No saber cómo te sientes también es válido. A veces solo necesitamos una pausa antes de entender lo que pasa dentro."
  };

  mensajeEstado.textContent = mensajes[estado];

  irPantalla(3);
}

function mostrarSorpresa(tipo) {
  const resultado = document.getElementById("resultadoSorpresa");

  const sorpresas = {
    mensaje: [
      "Hoy hiciste lo que pudiste, y eso también merece reconocerse.",
      "No necesitas ser fuerte todo el tiempo. También puedes pausar.",
      "Aunque hoy pese, no significa que siempre será así.",
      "Tu valor no baja solo porque tu ánimo bajó."
    ],

    risa: [
      "Mini misión: busca un video de gatitos haciendo travesuras. Es terapia autorizada.",
      "Hoy se permite reírse por cualquier tontería. Sin explicaciones.",
      "Tu tarea seria del día: encontrar algo tan absurdo que te saque una sonrisa.",
      "Respira. Toma agüita. Y recuerda que hasta los patitos caminan raro y siguen siendo lindos."
    ],

    plan: [
      "Plan recomendado: algo rico, una mantita y cero culpa.",
      "Plan mini: agua, respiración profunda y cinco minutos sin exigirte nada.",
      "Plan bonito: pon una canción tranquila y deja que el mundo espere un ratito.",
      "Plan de emergencia: comida rica, celular en modo tranqui y descanso obligatorio."
    ],

    frase: [
      "No estás fallando. Solo estás teniendo un día difícil.",
      "A veces sobrevivir al día ya es suficiente.",
      "No tienes que poder con todo para seguir siendo increíble.",
      "Mañana puede sentirse distinto. Por ahora, sé amable contigo."
    ]
  };

  const lista = sorpresas[tipo];
  const mensaje = lista[Math.floor(Math.random() * lista.length)];

  resultado.textContent = mensaje;
  resultado.classList.remove("oculto");
  resultado.classList.add("visible");
}

function mensajeNube(tipo) {
  const mensaje = document.getElementById("mensajeNube");

  const nubes = {
    tiempo:
      "No tienes que apurarte para sentirte mejor. Algunas cosas sanan despacito.",

    todo:
      "Hoy puedes hacer menos. Eso no te hace débil, te hace humana.",

    presencia:
      "Solo por existir ya haces una diferencia en este mundo. Gracias por ser tú.",

    sola:
      "Aunque hoy te sientas solita, aquí hay un pequeño rincón hecho para acompañarte."
  };

  mensaje.textContent = nubes[tipo];
  mensaje.classList.add("visible");
}

function mostrarAntojito(tipo) {
  const resultado = document.getElementById("resultadoAntojito");

  const antojitos = {
    dulce:
      "Queda oficialmente recomendado: algo dulce, una bebida rica y cero culpa. A veces un gustito también abraza.",

    bebida:
      "Una bebidita caliente o fresquita puede ser suficiente para pausar el día. Hazlo bonito, aunque sea simple.",

    bonito:
      "Busca algo suavecito: gatitos, paisajes, flores, perritos o videos que no exijan pensar demasiado.",

    descansar:
      "Perfecto. No hacer nada también es una forma de cuidarte. Descansar no es perder el tiempo."
  };

  resultado.textContent = antojitos[tipo];
  resultado.classList.remove("oculto");
  resultado.classList.add("visible");
}

function otroMensajeFinal() {
  const extra = document.getElementById("extraFinal");

  const frases = [
    "Te mereces días suaves, gente bonita y momentos que no pesen.",
    "No olvides que incluso cuando dudas de ti, sigues siendo alguien increíble.",
    "Mañana puede sentirse distinto. Por ahora, respira y quédate contigo.",
    "Ojalá esta página te haya dado aunque sea una sonrisita pequeña.",
    "No todo tiene que resolverse hoy. A veces solo toca aguantar con ternura."
  ];

  const random = frases[Math.floor(Math.random() * frases.length)];

  extra.textContent = random;
  extra.classList.remove("oculto");
  extra.classList.add("visible");
}

function lanzarBrillitos(event) {
  const simbolos = ["✨", "🌸", "⭐", "💫", "☁️"];
  const cantidad = 8;

  for (let i = 0; i < cantidad; i++) {
    const brillito = document.createElement("span");
    brillito.classList.add("brillito");
    brillito.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];

    const x = event.clientX + Math.random() * 80 - 40;
    const y = event.clientY + Math.random() * 40 - 20;

    brillito.style.left = `${x}px`;
    brillito.style.top = `${y}px`;

    document.body.appendChild(brillito);

    setTimeout(() => {
      brillito.remove();
    }, 800);
  }
}

actualizarProgreso();
