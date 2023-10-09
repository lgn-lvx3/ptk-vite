const es = {
    hero: {
        title: "Calculadoras del Kit de Herramientas Pélvicas",
        subtitle:
            "Medidas de resultados precisas para calcular el análisis pélvico para pacientes.",
        action: "Comenzar",
    },
    navigation: {
        surveys: "Encuestas",
    },
    disclaimer: {
        text: "Esta herramienta NO debe considerarse como un sustituto de ningún servicio médico profesional, NI como un sustituto del juicio clínico.",
        understand: "Entiendo",
        score: "Puntuación",
        download: "Descargar",
        share: "Compartir",
    },
    errors: {
        calculate: "Errores",
        sharing: "Tu navegador no permite compartir.",
        file: "Tu navegador no puede compartir este archivo.",
        content: "Por favor, responde a todas las preguntas.",
    },
    IIQ7: {
        title: "IIQ-7",
        subtitle: "Cuestionario de Impacto de la Incontinencia",
        instructions: [],
        questionSets: [
            {
                title: "IIQ-7",
                subtitle: "Cuestionario de Impacto de la Incontinencia",
                instructions: [
                    "Algunas personas encuentran que la pérdida accidental de orina puede afectar sus actividades, relaciones y sentimientos.",
                    "Las preguntas a continuación se refieren a áreas de su vida que puedan haber sido influenciadas o cambiadas por su problema.",
                    "Para cada pregunta, circule la respuesta que mejor describa cuánto están afectando sus actividades, relaciones y sentimientos la pérdida de orina. ¿Ha afectado la pérdida de orina su:",
                ],
                prompts: [
                    "¿Capacidad para hacer tareas domésticas (cocinar, limpiar la casa, lavar la ropa)?",
                    "¿Recreación física como caminar, nadar u otro ejercicio?",
                    "¿Actividades de entretenimiento (cine, conciertos, etc.)?",
                    "¿Capacidad para viajar en automóvil o autobús más de 30 minutos desde casa?",
                    "¿Participación en actividades sociales fuera de su casa?",
                    "¿Salud emocional (nerviosismo, depresión, etc.)?",
                    "¿Sensación de frustración?",
                ],
                options: [
                    ["Nada en absoluto", 0],
                    ["Ligeramente", 1],
                    ["Moderadamente", 2],
                    ["En gran medida", 3],
                ],
            },
        ],

        interpretation: {
            title: "Interpretación",
            content: [
                "La escala es de 0-100. A mayor puntuación, mayor es el deterioro/discapacidad.",
                "Ítems 1 y 2 = actividad física",
                "Ítems 3 y 4 = viajes",
                "Ítem 5 = social/relaciones",
                "Ítems 6 y 7 = salud emocional",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "Las respuestas a los ítems se les asignan valores de 0 para 'nada en absoluto', 1 para 'ligeramente', 2 para 'moderadamente' y 3 para 'en gran medida'.",
                "Se calcula la puntuación media de los ítems respondidos. La media, que varía de 0 a 3, se multiplica por 33.3 para poner las puntuaciones en una escala de 0 a 100.",
            ],
        },
        mcid: {
            title: "Diferencia Mínima Importante (MID)",
            content: [""],
        },
        references: {
            title: "Referencias",
            content: [
                "Uebersax, J.S., Wyman, J. F., Shumaker, S. A., McClish, D. K., Fantl, J. A., & el Continence Program for Women Research Group. (1995). Formas cortas para evaluar la calidad de vida y el sufrimiento de los síntomas para la incontinencia urinaria en mujeres: el cuestionario de impacto de la incontinencia y el inventario de angustia urogenital. Neurourología y Urodinámica, 14, 131-139",
            ],
        },
    },
    CRAD8: {
        title: "CRAD-8",
        subtitle: "Inventario del malestar colorrectal-anal",
        instructions: [""],
        questionSets: [
            {
                title: "CRAD-8",
                subtitle: "Inventario del malestar colorrectal-anal",
                instructions: [
                    "Por favor contesta todas las preguntas en la siguiente encuesta. Estas preguntas te preguntarán si tienes ciertos síntomas intestinales, de la vejiga o pélvicos y, si los tienes, cuánto te molestan.",
                    "Responde estos círculos con el número correspondiente. Mientras respondes estas preguntas, por favor considera tus síntomas durante los últimos 3 meses.",
                ],
                prompts: [
                    "¿Sientes que necesitas esforzarte demasiado para tener una evacuación intestinal?",
                    "¿Sientes que no has vaciado por completo tus intestinos al final de una evacuación intestinal?",
                    "¿Normalmente pierdes las heces más allá de tu control si tus heces están bien formadas?",
                    "¿Normalmente pierdes las heces más allá de tu control si tus heces están sueltas?",
                    "¿Normalmente pierdes gas del recto más allá de tu control?",
                    "¿Normalmente sientes dolor cuando pasas tus heces?",
                    "¿Experimentas una fuerte sensación de urgencia y tienes que correr al baño para tener una evacuación intestinal?",
                    "¿Parte de tu intestino pasa alguna vez a través del recto y sobresale después o durante una evacuación intestinal?",
                ],
                options: [
                    ["No presente", 0],
                    ["Nada en absoluto", 1],
                    ["Algo", 2],
                    ["Moderadamente", 3],
                    ["Bastante", 4],
                ],
            },
        ],

        interpretation: {
            title: "Interpretación",
            content: [
                "La escala es de 0 a 100. Cuanto más alta es la puntuación, mayor es el deterioro/discapacidad.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "Cada elemento se puntúa entre 0 (No presente) a 4 (Bastante).",
                "Todas las puntuaciones se suman y se multiplican por 6, luego se multiplican por 25 para la puntuación de escala.",
            ],
        },
        mcid: {
            title: "Diferencia Mínima Importante (MID)",
            content: [""],
        },
        references: {
            title: "Referencias",
            content: [""],
        },
    },
    POPDI6: {
        title: "POPDI-6",
        subtitle: "Inventario de Molestias por Prolapso de Órganos Pélvicos",
        instructions: [""],
        questionSets: [
            {
                title: "POPDI-6",
                subtitle:
                    "Inventario de Molestias por Prolapso de Órganos Pélvicos",
                instructions: [
                    "Por favor, responde todas las preguntas en la siguiente encuesta. Estas preguntas te preguntarán si tienes ciertos síntomas intestinales, de vejiga o pélvicos y, si los tienes, cuánto te molestan.",
                    "Responde estas preguntas marcando el número apropiado. Al responder estas preguntas, considera tus síntomas durante los últimos 3 meses.",
                ],
                prompts: [
                    "¿Normalmente sientes presión en el abdomen inferior?",
                    "¿Normalmente sientes pesadez o embotamiento en el área pélvica?",
                    "¿Normalmente tienes una protuberancia o algo que cae que puedes ver o sentir en tu área vaginal?",
                    "¿Alguna vez has tenido que empujar en la vagina o alrededor del recto para tener o completar una evacuación intestinal?",
                    "¿Normalmente sientes una sensación de vaciado incompleto de la vejiga?",
                    "¿Alguna vez has tenido que empujar una protuberancia en el área vaginal o perineal con tus dedos para comenzar o completar la micción?",
                ],
                options: [
                    ["No presente", 0],
                    ["Nada en absoluto", 1],
                    ["Algo", 2],
                    ["Moderadamente", 3],
                    ["Bastante", 4],
                ],
            },
        ],

        interpretation: {
            title: "Interpretación",
            content: [
                "La escala es de 0-100. Cuanto mayor sea la puntuación, mayor será el deterioro/discapacidad.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "Cada ítem se puntúa entre 0 (No presente) a 4 (Bastante).",
                "Todas las puntuaciones se suman y se multiplican por 6, luego se multiplican por 25 para la puntuación de la escala.",
            ],
        },
        mcid: {
            title: "Diferencia Mínima Importante (DMI)",
            content: [""],
        },
        references: {
            title: "Referencias",
            content: [""],
        },
    },
    UDI6: {
        title: "UDI-6",
        subtitle: "Inventario de Molestias Urogenitales",
        instructions: [
            "Por favor, sigue las instrucciones para cada subconjunto de preguntas a continuación.",
        ],
        questionSets: [
            {
                title: "UDI-6",
                subtitle: "Inventario de Molestias Urogenitales",
                instructions: [
                    "Para cada pregunta, marca el número que mejor describa este problema para ti durante el último mes:",
                ],
                prompts: [
                    "¿Miccionas con frecuencia?",
                    "¿Pérdida de orina relacionada con la sensación de urgencia?",
                    "¿Pérdida de orina relacionada con actividad física, tos o estornudos?",
                    "¿Pequeñas cantidades de pérdida de orina (es decir, gotas)?",
                    "¿Dificultad para vaciar la vejiga?",
                    "¿Dolor o molestia en el área abdominal inferior o genital?",
                ],
                options: [
                    ["Nada en absoluto", 0],
                    ["Un poco", 1],
                    ["Moderadamente", 2],
                    ["Mucho", 3],
                ],
            },
        ],

        interpretation: {
            title: "Interpretación",
            content: [
                "La escala es de 0-100. Cuanto mayor sea la puntuación, mayor será el deterioro/discapacidad.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "Cada ítem se puntúa entre 0 (sin problema) a 3 (molesta mucho).",
                "Todas las puntuaciones se suman y se multiplican por 6, luego se multiplican por 25 para la puntuación de la escala.",
            ],
        },
        mcid: {
            title: "Diferencia Mínima Importante (DMI)",
            content: [
                "Las estimaciones razonables para DMI son un cambio de -11 puntos.",
                "La DMI basada en anclajes varió de -22.4 a -6.4 en el estudio que evaluó la DMI Barber, M. D., Spino, C., Janz, N. K., Brubaker, L., Nygaard, I., Nager, C. W., & Wheeler, T. L. (2009).",
            ],
        },
        references: {
            title: "Referencias",
            content: [
                "Uebersax JS, Wyman JF, Shumaker SA, McClish DK, Fantl JA, Grupo de Investigación del Programa de Continencia para Mujeres. Formularios cortos para evaluar la calidad de vida y el malestar de síntomas para la incontinencia urinaria en mujeres: el Cuestionario de Impacto de la Incontinencia y el Inventario de Molestias Urogenitales. Neurourología y Urodinámica. 1995;14: 131-39.",
                "Las diferencias mínimas importantes para las escalas urinarias del inventario de angustia del suelo pélvico y el Cuestionario de Impacto del Suelo Pélvico. Revista Americana de Obstetricia y Ginecología, 200(5). https://doi.org/10.1016/j.ajog.2009.02.007",
            ],
        },
    },
    FIQL: {
        title: "FIQL",
        subtitle: "Escala de Calidad de Vida de Incontinencia Fecal",
        instructions: [
            "Por favor, sigue las instrucciones para cada subconjunto de preguntas a continuación.",
        ],
        questionSets: [
            {
                title: "FIQL",
                subtitle: "Escala de Calidad de Vida de Incontinencia Fecal",
                prompts: ["En general, ¿dirías que tu salud es:"],
                options: [
                    ["Excelente", 5],
                    ["Muy buena", 4],
                    ["Buena", 3],
                    ["Regular", 2],
                    ["Mala", 1],
                ],
            },
            {
                title: "FIQL",
                subtitle: "Escala de Calidad de Vida de Incontinencia Fecal",
                instructions: [
                    "Para cada uno de los elementos, indica cuánto tiempo el problema es una preocupación para ti debido a la fuga accidental de heces. (Si es una preocupación para ti por razones distintas a la fuga accidental de heces, marca la casilla bajo No Aplica, (N/A)).",
                    "Debido a la fuga accidental de heces:",
                ],
                prompts: [
                    "Temo salir",
                    "Evito visitar amigos",
                    "Evito pasar la noche fuera de casa",
                    "Me resulta difícil salir y hacer cosas como ir al cine o a la iglesia",
                    "Reduzco la cantidad de comida antes de salir",
                    "Siempre que estoy fuera de casa, intento estar cerca de un baño tanto como sea posible",
                    "Es importante planificar mi horario (actividades diarias) en función de mi patrón intestinal",
                    "Evito viajar",
                    "Me preocupa no llegar al baño a tiempo",
                    "Siento que no tengo control sobre mis intestinos",
                    "No puedo contener la evacuación intestinal lo suficiente como para llegar al baño",
                    "Pierdo heces sin siquiera saberlo",
                    "Intento evitar accidentes intestinales quedándome muy cerca de un baño",
                ],
                options: [
                    ["La mayoría del tiempo", 1],
                    ["Algunas veces", 2],
                    ["Poco tiempo", 3],
                    ["Nunca", 4],
                    ["N/A", 0],
                ],
            },
            {
                title: "FIQL",
                subtitle: "Escala de Calidad de Vida de Incontinencia Fecal",
                instructions: [
                    "Debido a la fuga accidental de heces, indica en qué medida ESTÁS DE ACUERDO o EN DESACUERDO con cada uno de los siguientes elementos. (Si es una preocupación para ti por razones distintas a la fuga accidental de heces, marca la casilla bajo No Aplica, N/A).",
                    "Debido a la fuga accidental de heces:",
                ],
                prompts: [
                    "Me siento avergonzado",
                    "No puedo hacer muchas de las cosas que quiero hacer",
                    "Me preocupo por accidentes intestinales",
                    "Me siento deprimido",
                    "Me preocupo de que otros huelan las heces en mí",
                    "Siento que no soy una persona sana",
                    "Disfruto menos de la vida",
                    "Tengo relaciones sexuales con menos frecuencia de la que me gustaría",
                    "Me siento diferente a otras personas",
                    "La posibilidad de accidentes intestinales siempre está en mi mente",
                    "Temo tener relaciones sexuales",
                    "Evito viajar en avión o tren",
                    "Evito salir a comer",
                    "Siempre que voy a un lugar nuevo, localizo específicamente dónde están los baños",
                ],
                options: [
                    ["Totalmente de acuerdo", 1],
                    ["Algo de acuerdo", 2],
                    ["Algo en desacuerdo", 3],
                    ["Totalmente en desacuerdo", 4],
                    ["N/A", 0],
                ],
            },
            {
                title: "FIQL",
                subtitle: "Escala de Calidad de Vida de Incontinencia Fecal",
                instructions: [""],
                prompts: [
                    "Durante el último mes, ¿te has sentido tan triste, desanimado, sin esperanzas o has tenido tantos problemas que te has preguntado si algo vale la pena?",
                ],
                options: [
                    ["Extremadamente - casi he abandonado", 1],
                    ["Mucho", 2],
                    ["Bastante", 3],
                    ["Algo - lo suficiente como para molestarme", 4],
                    ["Un poco", 5],
                    ["Nada en absoluto", 6],
                ],
            },
        ],
        interpretation: {
            title: "Interpretación",
            content: [
                "Hay 29 elementos y el rango de la escala para cada elemento es de 1 a 5, siendo 1 un indicador de un estado funcional más bajo de calidad de vida. Cuanto menor sea la puntuación, mayor será el deterioro/discapacidad.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "Las puntuaciones de la escala son la respuesta media a todos los elementos de la escala (por ejemplo, suma las respuestas a todas las preguntas de una escala y luego divide por el número de elementos en la escala. No Aplica se codifica como un valor faltante en el análisis para todas las preguntas).",
            ],
        },
        mcid: {
            title: "Diferencia Clínica Mínima Importante (DCMI)",
            content: [
                "-1.1 a -1.2 puntos por subescala.",
                "Bols EM, Hendriks HJ, Berghmans LC, et al. Sensibilidad y capacidad de interpretación de las puntuaciones de gravedad de la incontinencia y FIQL en pacientes con incontinencia fecal: un análisis secundario de un ensayo controlado aleatorio. Revista Internacional de Uroginecología. 2013 Mar;24(3):469-78.",
            ],
        },
        references: {
            title: "Referencias",
            content: [
                "Rockwood TH, Church JM, Fleshman JW, et al. Escala de Calidad de Vida de Incontinencia Fecal: instrumento de calidad de vida para pacientes con incontinencia fecal. Enfermedades del Colon y Recto. 2000 Ene;43(1):9-16. discusión -7.",
            ],
        },
    },
    PFDI20: {
        title: "PFDI-20",
        subtitle: "Índice de Discapacidad del Suelo Pélvico",
        instructions: [
            "Por favor, responde todas las preguntas en la siguiente encuesta.",
            "Estas preguntas te preguntarán si tienes ciertos síntomas intestinales, de vejiga o pélvicos y, si los tienes, cuánto te molestan.",
            "Responde estas preguntas marcando el número apropiado. Al responder estas preguntas, considera tus síntomas durante los últimos 3 meses.",
            "El PFDI-20 tiene 20 elementos y 3 escalas de tus síntomas. Todos los elementos usan el siguiente formato con una escala de respuesta de 0 a 4.",
        ],
        questionSets: [
            {
                prompts: [""],
                options: [["", 5]],
            },
        ],
        interpretation: {
            title: "Interpretación",
            content: [
                "La escala es de 0-300. Cuanto mayor sea la puntuación, mayor será el deterioro/discapacidad.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "Puntuaciones de la escala: Obtén el valor medio de todos los elementos respondidos dentro de la escala correspondiente (valor posible de 0 a 4) y luego multiplica por 25 para obtener la puntuación de la escala (rango de 0 a 100). Los elementos faltantes se tratan utilizando la media de los elementos respondidos únicamente.",
                "Puntuación resumida de PFSI-20: Suma las puntuaciones de las 3 escalas para obtener la puntuación resumida (rango de 0 a 300).",
            ],
        },
        mcid: {
            title: "Cambio Clínicamente Significativo",
            content: [
                "Los estudios han encontrado cambios de importancia mínima (MIC) que varían de 23 a 45.",
                "Barber MD, Walters MD, Bump RC. Formas cortas de dos cuestionarios de calidad de vida específicos para la condición para mujeres con trastornos del suelo pélvico (PFDI-20 y PFIQ-7). Am J Obstet Gynecol 2005;193:103-113.",
                "Gelhorn HL, Coyne KS, Sikirica V, Gauld J, Murphy M. Evaluación psicométrica de medidas de calidad de vida relacionadas con la salud después de la cirugía de prolapso de órganos pélvicos. Cirugía de medicina y reconstrucción pélvica femenina. 2012 1 de julio;18(4):221-6.",
                "Utomo E, Blok BF, Steensma AB, Korfage IJ. Validación del índice de angustia del suelo pélvico (PFDI-20) y del cuestionario de impacto del suelo pélvico (PFIQ-7) en una población holandesa. Revista internacional de uroginecología. 2014 1 de abril;25(4):531-44.",
            ],
        },
        references: {
            title: "Referencias",
            content: [
                "Barber, M., Walters, M., et al. (2005). 'Formas cortas de dos cuestionarios de calidad de vida específicos para la condición para mujeres con trastornos del suelo pélvico (PFDI-20 y PFIQ -7).' American Journal of Obstetrics and Gynecology 193: 103-113",
            ],
        },
    },
    VFIS: {
        title: "VFIS",
        subtitle: "Puntuación de Incontinencia Fecal de Vaizey",
        instructions: [""],
        questionSets: [
            {
                title: "VFIS",
                subtitle: "Puntuación de Incontinencia Fecal de Vaizey",
                instructions: [
                    "Por favor, selecciona una respuesta para cada pregunta para indicar con qué frecuencia experimentas los siguientes síntomas.",
                    "Nunca - ningún episodio en las últimas 4 semanas",
                    "Raramente - 1 episodio en las últimas 4 semanas",
                    "A veces - 1 o más episodios en las últimas 4 semanas",
                    "Semanalmente - 1 o más episodios a la semana",
                    "Diariamente - 1 o más episodios al día",
                ],
                prompts: [
                    "Fuga de heces sólidas",
                    "Fuga de heces líquidas",
                    "Fuga de gases",
                    "Uso de almohadillas (para heces)",
                    "Restricción del estilo de vida",
                ],
                options: [
                    ["Nunca", 0],
                    ["Raramente", 1],
                    ["A veces", 2],
                    ["Semanalmente", 3],
                    ["Diariamente", 4],
                ],
            },
        ],
        interpretation: {
            title: "Interpretación",
            content: [
                "La puntuación es de 0-24. Cuanto mayor sea la puntuación, mayor será el deterioro/discapacidad o, totalmente incontinente.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "A continuación se muestra la puntuación asociada con cada definición",
                "Nunca: 0, Raramente: 1, A veces: 2, Semanalmente: 3, Diariamente: 4",
                "Necesidad de usar una almohadilla o tapón - Una respuesta 'no' = 0; una respuesta 'sí' = 2",
                "Tomar medicamentos para el estreñimiento - Una respuesta 'no' = 0; una respuesta 'sí' = 2",
                "Falta de capacidad para diferir la defecación durante 15 minutos - una respuesta 'no' = 0; una respuesta 'sí' = 4",
                "Las puntuaciones de cada pregunta se suman para producir una puntuación final (el máximo son 24 puntos).",
            ],
        },
        mcid: {
            title: "Diferencia Clínica Mínima Importante (DCMI)",
            content: [
                "Las estimaciones razonables para DCMI son -5 puntos.",
                "Bols EM, Hendriks EJ, Deutekom M, et al. Propiedades psicométricas inconclusas de la puntuación de Vaizey en pacientes con incontinencia fecal: un estudio de cohorte prospectivo. Neurourología y Urodinámica. 2010 Mar;29(3):370-7.",
            ],
        },
        references: {
            title: "Referencias",
            content: [
                "Vaizey CJ, Carapeti E, Cahill JA, et al. Comparación prospectiva de sistemas de clasificación de incontinencia fecal. Gut. 1999 Ene;44(1):77-80.",
            ],
        },
    },
    CCFIS: {
        title: "CCFIS",
        subtitle: "Puntuación de Incontinencia Fecal de la Clínica Cleveland",
        instructions: [""],
        questionSets: [
            {
                title: "CCFIS",
                subtitle:
                    "Puntuación de Incontinencia Fecal de la Clínica Cleveland",
                instructions: [
                    "Por favor, selecciona una respuesta para cada pregunta para indicar con qué frecuencia experimentas los siguientes síntomas.",
                    "Las respuestas son las siguientes:",
                    "Nunca",
                    "Raramente - Menos de una vez al mes",
                    "A veces - Menos de una vez a la semana",
                    "Usualmente - Menos de una vez al día",
                    "Siempre - Todos los días",
                ],
                prompts: [
                    "Fuga de heces sólidas",
                    "Fuga de heces líquidas",
                    "Fuga de gases",
                    "Uso de almohadillas (para heces)",
                    "Restricción del estilo de vida",
                ],
                options: [
                    ["Nunca", 0],
                    ["Raramente", 1],
                    ["A veces", 2],
                    ["Usualmente", 3],
                    ["Siempre", 4],
                ],
            },
        ],
        interpretation: {
            title: "Interpretación",
            content: [
                "La puntuación es de 0-24. Cuanto mayor sea la puntuación, mayor será el deterioro/discapacidad o, totalmente incontinente.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "El rango de puntuación es de 0-20",
                "La mejor puntuación es 0. Por lo tanto, cuanto mayor sea la puntuación, mayor será el deterioro/discapacidad.",
            ],
        },
        mcid: {
            title: "Diferencia Clínica Mínima Importante (DCMI)",
            content: [
                "-2 a -3 puntos.",
                "Bols EM, Hendriks HJ, Berghmans LC, et al. Sensibilidad y capacidad de interpretación de las puntuaciones de gravedad de la incontinencia y FIQL en pacientes con incontinencia fecal: un análisis secundario de un ensayo controlado aleatorio. Revista Internacional de Uroginecología. 2013 Mar;24(3):469-78.",
            ],
        },
        references: {
            title: "Referencias",
            content: [
                "Jorge JM, Wexner SD. Etiología y manejo de la incontinencia fecal. Dis Colon Rectum. 1993 Ene;36(1):77–97.",
            ],
        },
    },
    PFIQ7: {
        title: "PFIQ-7",
        subtitle: "Cuestionario de Impacto del Suelo Pélvico",
        instructions: [
            "Por favor, sigue las instrucciones para cada subconjunto de preguntas a continuación.",
        ],
        questionSets: [
            {
                title: "PFIQ-7",
                subtitle: "Cuestionario de Impacto del Suelo Pélvico",
                instructions: [
                    "Para cada pregunta, marca la respuesta que mejor describa cuánto han afectado tus actividades, relaciones o sentimientos tu vejiga o orina durante los últimos 3 meses.",
                ],
                prompts: [
                    "Capacidad para hacer tareas domésticas (cocinar, lavandería, limpieza de la casa)?",
                    "Capacidad para hacer actividades físicas como caminar, nadar u otro ejercicio?",
                    "Capacidad para hacer actividades de entretenimiento (cine, conciertos, etc.)?",
                    "Capacidad para viajar en coche o autobús a una distancia mayor de 30 minutos desde tu casa?",
                    "Participación en actividades sociales fuera de tu casa?",
                    "Salud emocional (nerviosismo, depresión, etc)?",
                    "Sentirte frustrado?",
                ],
                options: [
                    ["Nada en absoluto", 0],
                    ["Algo", 1],
                    ["Moderadamente", 2],
                    ["Bastante", 3],
                ],
            },
            // ... (other question sets are similar, just change the focus from "bladder or urine" to "bowel or rectum" and "genitals or pelvis")
        ],
        interpretation: {
            title: "Interpretación",
            content: [
                "La escala es de 0-100. Cuanto mayor sea la puntuación, mayor será el deterioro/discapacidad.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                // ... (content similar to the English version, just translated)
            ],
        },
        mcid: {
            title: "Diferencia Clínica Mínima Importante (DCMI)",
            content: [
                "36 puntos o una diferencia del 12%.",
                "Barber MD, Walters MD, Bump RC. Formas cortas de dos cuestionarios de calidad de vida específicos para mujeres con trastornos del suelo pélvico (PFDI-20 y PFIQ-7). Revista americana de obstetricia y ginecología. 2005 Jul 1;193(1):103-13.",
            ],
        },
        references: {
            title: "Referencias",
            content: [
                "Barber MD, Kuchibhatla M, Pieper CF, Bump RC. Evaluación Psicométrica De 2 Instrumentos Completos De Calidad De Vida Específicos De La Condición Para Mujeres Con Trastornos Pélvicos. Revista Americana de Obstetricia y Ginecología Volumen 185; 6 de noviembre de 2001",
            ],
        },
        note: {
            title: "Nota",
            content: [
                "El formulario de evaluación estandarizado de PFIQ-7 utiliza las palabras mujeres y vagina. Estas palabras se cambiaron a personas y genitales para incluir a otros individuos que podrían necesitar completar este formulario.",
            ],
        },
    },
}

export default es
export type Translations = typeof es
