import { ISurveyData } from "state/ISurvey/SurveyTranslationType"

export const CCFIS_SURVEY_CONFIG: ISurveyData = {
    title: "CCFIS",
    subtitle: "Cleveland Clinic Fecal Incontinence Score",
    instructions: [""],
    scales: [
        {
            id: "CCFIS",
            name: "CCFIS Score",
        },
    ],
    questionSets: [
        {
            title: "CCFIS",
            subtitle: "Cleveland Clinic Fecal Incontinence Score",
            instructions: [
                "Please select one answer for each question to indicate how often you experience the following symptoms.",
                "The responses are as follows:",
                "Never",
                "Rarely - Less than once a month",
                "Sometimes - Less than once a week",
                "Usually - Less than once a day",
                "Always - Everyday",
            ],
            prompts: [
                { text: "Solid stool leakage", scaleId: "CCFIS" },
                { text: "Liquid stool leakage", scaleId: "CCFIS" },
                { text: "Gas leakage", scaleId: "CCFIS" },
                { text: "Pad use (for stool)", scaleId: "CCFIS" },
                { text: "Lifestyle restriction", scaleId: "CCFIS" },
            ],
            options: [
                ["Never", 0],
                ["Rarely", 1],
                ["Sometimes", 2],
                ["Usually", 3],
                ["Always", 4],
            ],
        },
    ],

    interpretation: {
        title: "Interpretation",
        content: [
            "The scoring is from 0-24. The higher the score, the greater the impairment/disability or, totally incontinent.",
        ],
    },
    scoring: {
        title: "Scoring",
        content: [
            "The scoring range is 0-20",
            "Best score is 0. So the higher the score, the greater the impairment/disability.",
        ],
    },
    mcid: {
        title: "Minimal Clinical Important Difference (MCID)",
        content: [
            "-2 to -3  points.",
            "Bols EM, Hendriks HJ, Berghmans LC, et al. Responsiveness and interpretability of incontinence severity scores and FIQL in patients with fecal incontinence: a secondary analysis from a randomized controlled trial. International Urogynecology Journal. 2013 Mar;24(3):469-78.",
        ],
    },
    references: {
        title: "References",
        content: [
            "Jorge JM, Wexner SD. Etiology and management of fecal incontinence. Dis Colon Rectum. 1993 Jan;36(1):77–97.",
        ],
    },
}
