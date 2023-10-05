const es = {
    disclaimer: {
        text: "Esta herramienta NO debe considerarse como un sustituto de ningún servicio médico profesional, NI como un sustituto del juicio clínico.",
        understand: "Entiendo",
    },
    download: "Descargar",
    share: "Compartir",
    UDI6: {
        title: "UDI-6",
        subtitle: "Inventario de Angustia Urogenital",
        instructions: [
            "Para cada pregunta, rodea el número que mejor describe este problema para ti en el último mes:",
        ],
        prompts: [
            "¿Micción frecuente?",
            "¿Pérdida de orina relacionada con la sensación de urgencia?",
            "¿Pérdida de orina relacionada con la actividad física, tos o estornudos?",
            "¿Pequeñas cantidades de pérdida de orina (es decir, gotas)?",
            "¿Dificultad para vaciar la vejiga?",
            "¿Dolor o malestar en la zona abdominal inferior o genital?",
        ],
        options: [
            "En absoluto",
            "Un poquito",
            "Moderadamente",
            "En gran medida",
        ],
        interpretation: {
            title: "Interpretación",
            content: [
                "La escala es de 0 a 100. A mayor puntuación, mayor es la discapacidad.",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "Cada ítem se califica entre 0 (ningún problema) a 3 (molesto en gran medida). Todas las puntuaciones se suman y se multiplican por 6, luego se multiplican por 25 para la puntuación de la escala.",
            ],
        },
        mcid: {
            title: "Diferencia Mínima Importante (MID)",
            content: [
                "Las estimaciones razonables para MID es un cambio de -11 puntos.",
                "La MID basada en anclas osciló entre -22.4 y -6.4 en el estudio que evaluó MID Barber, M. D., Spino, C., Janz, N. K., Brubaker, L., Nygaard, I., Nager, C. W., & Wheeler, T. L. (2009).",
            ],
        },
        references: {
            title: "Referencias",
            content: [
                "Uebersax JS, Wyman JF, Shumaker SA, McClish DK, Fantl JA, Continence Program for Women Research Group. Formas Cortas para Evaluar la Calidad de Vida y la Angustia de los Síntomas para la Incontinencia Urinaria en Mujeres: El Cuestionario de Impacto de la Incontinencia y el Inventario de Angustia Urogenital. Neurourology and Urodynamics. 1995;14: 131-39.",
                "Las diferencias mínimas importantes para las escalas urinarias del inventario de angustia del suelo pélvico y el Cuestionario de Impacto del Suelo Pélvico. American Journal of Obstetrics and Gynecology, 200(5). https://doi.org/10.1016/j.ajog.2009.02.007",
            ],
        },
    },
    FIQL: {
        title: "FIQL",
        subtitle: "Escala de Calidad de Vida de la Incontinencia Fecal",
        instructions: [
            "Por favor sigue las instrucciones para cada conjunto de preguntas a continuación.",
        ],
        questionSets: [
            {
                prompts: ["En general, ¿cómo dirías que es tu salud?"],
                options: ["Excelente", "Muy buena", "Buena", "Regular", "Mala"],
            },
            {
                instructions: [
                    "Para cada uno de los elementos, indica qué tanto tiempo el problema es una preocupación para ti debido a la fuga accidental de heces. (Si es una preocupación por razones distintas a la fuga accidental de heces, marca la casilla bajo No Aplica, (N/A)).",
                    "Debido a la fuga accidental de heces:",
                ],
                prompts: [
                    "Tengo miedo de salir",
                    "Evito visitar a amigos",
                    "Evito pasar la noche fuera de casa",
                    "Me resulta difícil salir y hacer cosas como ir al cine o a la iglesia",
                    "Reduczco la cantidad que como antes de salir",
                    "Siempre que estoy fuera de casa, trato de estar cerca de un baño tanto como sea posible",
                    "Es importante planificar mi horario (actividades diarias) en torno a mi patrón intestinal",
                    "Evito viajar",
                    "Me preocupa no poder llegar al baño a tiempo",
                    "Siento que no tengo control sobre mis intestinos",
                    "No puedo contener la evacuación intestinal el tiempo suficiente para llegar al baño",
                    "Pierdo heces sin siquiera saberlo",
                    "Intento evitar accidentes intestinales manteniéndome muy cerca de un baño",
                ],
                options: [
                    "La mayor parte del tiempo",
                    "Algunas veces",
                    "Poco tiempo",
                    "Ninguna vez",
                    "N/A",
                ],
            },
            {
                instructions: [
                    "Debido a la fuga accidental de heces, indica en qué medida ESTÁS DE ACUERDO o EN DESACUERDO con cada uno de los siguientes elementos. (Si es una preocupación para ti por razones distintas a la fuga accidental de heces, marca la casilla bajo No Aplica, N/A).",
                    "Debido a la fuga accidental de heces:",
                ],
                prompts: [
                    "Me siento avergonzado",
                    "No puedo hacer muchas de las cosas que quiero hacer",
                    "Me preocupo por los accidentes intestinales",
                    "Me siento deprimido",
                    "Me preocupo de que otros huelan las heces en mí",
                    "Siento que no soy una persona saludable",
                    "Disfruto menos de la vida",
                    "Tengo menos sexo del que me gustaría",
                    "Me siento diferente a otras personas",
                    "La posibilidad de accidentes intestinales siempre está en mi mente",
                    "Tengo miedo de tener sexo",
                    "Evito viajar en avión o tren",
                    "Evito salir a comer",
                    "Siempre que voy a un lugar nuevo, localizo específicamente dónde están los baños",
                ],
                options: [
                    "Totalmente de acuerdo",
                    "Algo de acuerdo",
                    "Algo en desacuerdo",
                    "Totalmente en desacuerdo",
                    "N/A",
                ],
            },
            {
                instructions: [""],
                prompts: [
                    "Durante el último mes, ¿te has sentido tan triste, desanimado, sin esperanza, o has tenido tantos problemas que te has preguntado si algo vale la pena?",
                ],
                options: [
                    "Extremadamente",
                    "Mucho",
                    "Bastante",
                    "Algo",
                    "Un poco",
                    "Nada en absoluto",
                ],
            },
        ],
        interpretation: {
            title: "Interpretación",
            content: [
                "Hay 29 elementos y el rango de la escala para cada elemento es de 1 a 5, siendo 1 una menor capacidad funcional de calidad de vida. Cuanto menor sea la puntuación, mayor será el deterioro/discapacidad. ",
            ],
        },
        scoring: {
            title: "Puntuación",
            content: [
                "Los puntajes de la escala son la respuesta media (media) a todos los elementos en la escala (por ejemplo, suma las respuestas a todas las preguntas en una escala y luego divide por el número de elementos en la escala. No Aplica se codifica como un valor perdido en el análisis para todas las preguntas).",
            ],
        },
        mcid: {
            title: "Diferencia Clínica Mínima Importante (MCID)",
            content: [
                "-1.1 a -1.2 punto por subescala.",
                "Bols EM, Hendriks HJ, Berghmans LC, et al. Responsiveness and interpretability of incontinence severity scores and FIQL in patients with fecal incontinence: a secondary analysis from a randomized controlled trial. International Urogynecology Journal. 2013 Mar;24(3):469-78.",
            ],
        },
        references: {
            title: "Referencias",
            content: [
                "Rockwood TH, Church JM, Fleshman JW, et al. Fecal Incontinence Quality of Life Scale: quality of life instrument for patients with fecal incontinence. Diseases of the Colon & Rectum. 2000 Jan;43(1):9-16. discussion -7.",
            ],
        },
    },
}

export default es
export type Translations = typeof es
