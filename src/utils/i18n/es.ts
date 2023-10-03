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
}

export default es
export type Translations = typeof es
