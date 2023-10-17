import { ISurveyData } from "state/ISurvey/SurveyTranslationType"

export const POPDI6_SURVEY_CONFIG: ISurveyData = {
    title: "POPDI-6",
    subtitle: "Pelvic Organ prolapse Distress Inventory",
    instructions: [""],
    scales: [
        {
            id: "POPDI6",
            name: "POPDI6 Score",
        },
    ],
    questionSets: [
        {
            title: "POPDI-6",
            subtitle: "Pelvic Organ prolapse Distress Inventory",
            instructions: [
                "Please answer all of the questions in the following survey. These questions will ask you if you have certain bowel, bladder, or pelvic symptoms and, if you do, how much they bother you.",
                "Answer these by circling the appropriate number. While answering these questions, please consider your symptoms over the last 3 months.",
            ],
            prompts: [
                {
                    text: "Usually experience pressure in the lower abdomen?",
                    scaleId: "POPDI6",
                },
                {
                    text: "Usually experience heaviness or dullness in the pelvic area?",
                    scaleId: "POPDI6",
                },
                {
                    text: "Usually experience a bulge or something falling out that you can see or feel in your genital area?",
                    scaleId: "POPDI6",
                },
                {
                    text: "Ever have to push on the genitals or around the rectum to have or complete a bowel movement?",
                    scaleId: "POPDI6",
                },
                {
                    text: "Usually experience a feeling of incomplete bladder emptying?",
                    scaleId: "POPDI6",
                },
                {
                    text: "Ever had to push on a bulge in the genitals or perineum area with your fingers to start or complete urination?",
                    scaleId: "POPDI6",
                },
            ],
            options: [
                ["Not present", 0],
                ["Not at all", 1],
                ["Somewhat", 2],
                ["Moderately", 3],
                ["Quite a bit", 4],
            ],
        },
    ],

    interpretation: {
        title: "Interpretation",
        content: [
            "The scale is from 0-100. The higher the score, the greater the impairment/disability.",
        ],
    },
    scoring: {
        title: "Scoring",
        content: [
            "Each item is scored between 0 (Not present) to 4 (Quite a bit).",
            "All scores are summed and multiplied by 6, then multiplied by 25 for the scale score.",
        ],
    },
    mcid: {
        title: "Minimum Important Difference (MID)",
        content: [""],
    },
    references: {
        title: "References",
        content: [""],
    },
}
