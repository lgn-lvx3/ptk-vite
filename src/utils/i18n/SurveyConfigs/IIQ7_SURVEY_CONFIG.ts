import { ISurveyData } from "state/ISurvey/SurveyTranslationType"

export const IIQ7_SURVEY_CONFIG: ISurveyData = {
    title: "IIQ-7",
    subtitle: "Incontinence Impact Questionnaire",
    instructions: [],
    scales: [
        {
            id: "IIQ7",
            name: "IIQ7 Score",
        },
    ],
    questionSets: [
        {
            title: "IIQ-7",
            subtitle: "Incontinence Impact Questionnaire",
            instructions: [
                "Some people find that accidental urine loss may affect their activities, relationships, and feelings.",
                "The questions below refer to areas in your life that may have been influenced or changed by your problem.",
                "For each question, circle the response that best describes how much your activities, relationships, and feelings are being affected by urine leakage. Has urine leakage affected your:",
            ],
            prompts: [
                {
                    text: "Ability to do household chores (cooking, housecleaning, laundry)?",
                    scaleId: "IIQ7",
                },

                {
                    text: "Physical recreation such as walking, swimming, or other exercise?",
                    scaleId: "IIQ7",
                },

                {
                    text: "Entertainment activities (movies, concerts, etc.)?",
                    scaleId: "IIQ7",
                },

                {
                    text: "Ability to travel by car or bus more than 30 minutes from home?",
                    scaleId: "IIQ7",
                },
                {
                    text: "Participation in social activities outside your home?",
                    scaleId: "IIQ7",
                },
                {
                    text: "Emotional health (nervousness, depression, etc.)?",
                    scaleId: "IIQ7",
                },
                { text: "Feeling frustrated?", scaleId: "IIQ7" },
            ],
            options: [
                ["Not at all", 0],
                ["Slightly", 1],
                ["Moderately", 2],
                ["Greatly", 3],
            ],
        },
    ],

    interpretation: {
        title: "Interpretation",
        content: [
            "The scale is from 0-100. The higher the score, the greater the impairment/disability.",
            "Items 1 and 2 = physical activity",
            "Items 3 and 4 = travel",
            "Item 5 = social/relationships",
            "Items 6 and 7 = emotional health",
        ],
    },
    scoring: {
        title: "Scoring",
        content: [
            "Item responses are assigned values of 0 for 'not at all,' 1 for 'slightly,' 2 for 'moderately,' and 3 for 'greatly.'",
            "The average score of items responded to is calculated. The average, which ranges from 0 to 3, is multiplied by 33.3 to put scores on a scale of 0 to 100.",
        ],
    },
    mcid: {
        title: "Minimum Important Difference (MID)",
        content: [""],
    },
    references: {
        title: "References",
        content: [
            "Uebersax, J.S., Wyman, J. F., Shumaker, S. A., McClish, D. K., Fantl, J. A., & the Continence Program for Women Research Group. (1995). Short forms to assess life quality and symptom distress for urinary incontinence in women: The incontinence impact questionnaire and the urogenital distress inventory. Neurourology and Urodynamics, 14, 131-139",
        ],
    },
}
