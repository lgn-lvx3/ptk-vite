import { ISurveyData } from "state/ISurvey/SurveyTranslationType"

export const CRAD8_SURVEY_CONFIG: ISurveyData = {
    title: "CRAD-8",
    subtitle: "Colorectal-Anal distress Inventory",
    instructions: [""],
    scales: [
        {
            id: "CRAD8",
            name: "CRAD8 Score",
        },
    ],
    questionSets: [
        {
            title: "CRAD-8",
            subtitle: "Colorectal-Anal distress Inventory",
            instructions: [
                "Please answer all of the questions in the following survey. These questions will ask you if you have certain bowel, bladder, or pelvic symptoms and, if you do, how much they bother you.",
                "Answer these by circling the appropriate number. While answering these questions, please consider your symptoms over the last 3 months.",
            ],
            prompts: [
                {
                    text: "Feel you need to strain too hard to have a bowel movement?",
                    scaleId: "CRAD8",
                },
                {
                    text: "Feel you have not completely emptied your bowels at the end of a bowel movement?",
                    scaleId: "CRAD8",
                },
                {
                    text: "Usually lose stool beyond your control if your stool is well formed?",
                    scaleId: "CRAD8",
                },
                {
                    text: "Usually lose stool beyond your control if your stool is loose?",
                    scaleId: "CRAD8",
                },
                {
                    text: "Usually lose gas from the rectum beyond your control?",
                    scaleId: "CRAD8",
                },

                {
                    text: "Usually have pain when you pass your stool?",
                    scaleId: "CRAD8",
                },

                {
                    text: "Experience a strong sense of urgency and have to rush to the bathroom to have a bowel movement?",
                    scaleId: "CRAD8",
                },

                {
                    text: "Does part of your bowel ever pass through the rectum and bulge outside during or after a bowel movement?",
                    scaleId: "CRAD8",
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
