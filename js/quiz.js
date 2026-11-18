document.addEventListener("DOMContentLoaded", () => {
    // 1. Base de datos de preguntas
    const preguntas = [
        {
            pregunta: "Cuando te enfrentas a un problema inesperado, tu primera reacción es:",
            opcionA: "Adaptarme a la situación, tomarlo con calma y arreglar las cosas poco a poco.",
            opcionB: "Tomar distancia, observar desde arriba y armar una estrategia a largo plazo."
        },
        {
            pregunta: "¿Qué elemento de la naturaleza sientes que te representa mejor?",
            opcionA: "El agua: profunda, pacífica y capaz de amoldarse a cualquier espacio.",
            opcionB: "El viento: libre, constante y capaz de impulsarte a las alturas."
        },
        {
            pregunta: "En tu grupo de amigos o entorno social, te consideran alguien:",
            opcionA: "Cercano, empático, juguetón y que siempre brinda consuelo.",
            opcionB: "Reservado, elegante, sabio y que da los mejores consejos objetivos."
        },
        {
            pregunta: "Si pudieras elegir el destino ideal para descansar, sería:",
            opcionA: "Una cabaña tranquila frente a un lago o un lugar donde el tiempo pase lento.",
            opcionB: "Una montaña alta, un mirador o un viaje con vistas panorámicas increíbles."
        },
        {
            pregunta: "¿Cuál consideras que es tu mayor virtud frente a los fracasos?",
            opcionA: "Mi resiliencia y mi capacidad de 'regenerarme' tras cualquier herida.",
            opcionB: "Mi paciencia y mi disciplina para no perder de vista mi objetivo final."
        },
        {
            pregunta: "¿Cómo describirías tu ritmo de vida y de trabajo?",
            opcionA: "Fluyo con lo que va pasando; disfruto el presente sin demasiada prisa.",
            opcionB: "Mantengo una constancia inquebrantable; cada paso está fríamente calculado."
        },
        {
            pregunta: "En cuanto a tu estilo personal y cómo te presentas al mundo:",
            opcionA: "Prefiero lo cómodo y fluido. Me gusta proyectar confianza y calidez.",
            opcionB: "Prefiero lo pulcro y estructurado. Me gusta proyectar respeto y gracia."
        },
        {
            pregunta: "Cuando hay un gran cambio en tu entorno, tú:",
            opcionA: "Te sumerges en él y dejas que te transforme, sabiendo que tu esencia sigue intacta.",
            opcionB: "Extiendes tus alas y usas esa nueva corriente para llegar aún más lejos."
        },
        {
            pregunta: "Para recargar tu energía después de un día muy pesado, prefieres:",
            opcionA: "Quedarme en mi rincón seguro, tomar algo caliente y disfrutar del silencio.",
            opcionB: "Salir a caminar, despejar la mente al aire libre y poner mis pensamientos en orden."
        },
        {
            pregunta: "Tu propósito más grande en la vida se parece más a:",
            opcionA: "Encontrar la paz interior, sanar y disfrutar plenamente el aquí y el ahora.",
            opcionB: "Alcanzar mis ambiciones más altas, mantener el equilibrio y dejar un legado."
        },
        // Pregunta 11 de Desempate (solo se muestra si quedan 5 a 5)
        {
            pregunta: "PREGUNTA DE DESEMPATE: A la hora de tomar una decisión crucial que cambiará tu vida, confías en:",
            opcionA: "Mi instinto emocional y lo que me dicte el corazón en ese momento.",
            opcionB: "La lógica pura, analizando los pros y los contras con cabeza fría."
        }
    ];

    // 2. Variables de estado
    let preguntaActual = 0;
    let respuestasUsuario = [];
    let temporizadorRedirect;

    // 3. Captura de elementos del DOM
    const startScreen = document.getElementById("start-screen");
    const questionScreen = document.getElementById("question-screen");
    const resultScreen = document.getElementById("result-screen");
    
    const questionText = document.getElementById("question-text");
    const questionCounter = document.getElementById("question-counter");
    const optionA = document.getElementById("option-a");
    const optionB = document.getElementById("option-b");
    const prevBtn = document.getElementById("prev-btn");
    const progressFill = document.getElementById("progress-fill");

    const resultTitle = document.getElementById("result-title");
    const resultText = document.getElementById("result-text");
    const resultImage = document.getElementById("result-image");
    const resultCard = document.getElementById("result-card");
    const countdownEl = document.getElementById("countdown");

    // 4. Lógica de Navegación
    document.getElementById("start-btn").addEventListener("click", () => {
        cambiarPantalla(startScreen, questionScreen);
        cargarPregunta();
    });

    optionA.addEventListener("click", () => registrarRespuesta("A"));
    optionB.addEventListener("click", () => registrarRespuesta("B"));

    prevBtn.addEventListener("click", () => {
        if (preguntaActual > 0) {
            preguntaActual--;
            respuestasUsuario.pop(); // Borrar la última respuesta registrada
            cargarPregunta();
        }
    });

    function cambiarPantalla(pantallaActual, nuevaPantalla) {
        pantallaActual.classList.remove("active");
        setTimeout(() => {
            nuevaPantalla.classList.add("active");
        }, 50); // Pequeño retraso para que aplique el fade in de CSS
    }

    function cargarPregunta() {
        // Actualizar barra y contador
        const totalBase = 10;
        let progreso = ((preguntaActual) / totalBase) * 100;
        if (progreso > 100) progreso = 100;
        
        progressFill.style.width = `${progreso}%`;
        
        if (preguntaActual < 10) {
            questionCounter.textContent = `Pregunta ${preguntaActual + 1} de 10`;
        } else {
            questionCounter.textContent = "Desempate Final";
        }

        // Mostrar botón de retroceso solo si no estamos en la primera pregunta
        prevBtn.style.display = preguntaActual > 0 ? "inline-block" : "none";

        // Cargar textos
        questionText.textContent = preguntas[preguntaActual].pregunta;
        optionA.textContent = preguntas[preguntaActual].opcionA;
        optionB.textContent = preguntas[preguntaActual].opcionB;
    }

    function registrarRespuesta(valor) {
        respuestasUsuario.push(valor);
        preguntaActual++;

        if (preguntaActual === 10) {
            evaluarResultados();
        } else if (preguntaActual === 11) {
            evaluarResultados(true); // Se evalúa con el desempate incluido
        } else {
            cargarPregunta();
        }
    }

    function evaluarResultados(esDesempate = false) {
        let conteoA = respuestasUsuario.filter(r => r === "A").length;
        let conteoB = respuestasUsuario.filter(r => r === "B").length;

        // Si hay empate en la pregunta 10, forzar la pregunta 11
        if (conteoA === 5 && conteoB === 5 && !esDesempate) {
            cargarPregunta(); // Carga el índice 10 (la pregunta 11)
            return; 
        }

        // Mostrar pantalla final
        cambiarPantalla(questionScreen, resultScreen);
        
        // Lógica de asignación y revelación de la carta
        setTimeout(() => {
            if (conteoA > conteoB) {
                resultTitle.textContent = "¡Eres un Ajolote!";
                resultText.textContent = "Fluyes con el agua, sanas con rapidez y abrazas el presente con resiliencia y empatía.";
                resultImage.src = "assets\\images\\Ajolote.jpg"; // Ajusta la ruta a donde tengas la imagen
            } else {
                resultTitle.textContent = "¡Eres una Grulla!";
                resultText.textContent = "Vuelas con el viento, observas con claridad y avanzas con disciplina, elegancia y sabiduría.";
                resultImage.src = "assets\\images\\Grulla.jpg"; // Ajusta la ruta a donde tengas la imagen
            }

            // Voltear la tarjeta 3D
            resultCard.classList.add("flipped");
            
            // Lanzar confeti usando canvas-confetti
            lanzarConfetiPastel();
            
            // Iniciar cuenta regresiva para redireccionar a la tienda
            iniciarRedireccion();

        }, 500);
    }

    function lanzarConfetiPastel() {
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#FFD1DC', '#E2D4F0', '#D0E8FF', '#D4F0E7']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#FFD1DC', '#E2D4F0', '#D0E8FF', '#D4F0E7']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    function iniciarRedireccion() {
        let tiempoRestante = 15;
        countdownEl.textContent = tiempoRestante;
        
        temporizadorRedirect = setInterval(() => {
            tiempoRestante--;
            countdownEl.textContent = tiempoRestante;
            
            if (tiempoRestante <= 0) {
                clearInterval(temporizadorRedirect);
                // Redirige al index principal de tu tienda
                window.location.href = "index.html"; 
            }
        }, 1000);
    }
});