import { ISurveyData } from "state/ISurvey/SurveyTranslationType"

export const VFIS_SURVEY_CONFIG: ISurveyData = {
    title: "VFIS",
    subtitle: "Vaizey Fecal Incontinence Score",
    instructions: [""],
    scales: [
        {
            id: "VFIS",
            name: "VFIS Score",
        },
    ],
    questionSets: [
        {
            title: "VFIS",
            subtitle: "Vaizey Fecal Incontinence Score",
            instructions: [
                "Please select one answer for each question to indicate how often you experience the following symptoms.",
                "Never - no episodes in the past 4 weeks",
                "Rarely - 1 episode in the past 4 weeks",
                "Sometimes - 1 or more episodes in the past 4 weeks",
                "Weekly - 1 or more episodes a week",
                "Daily - 1 or more episodes a day",
            ],
            prompts: [
                { text: "Solid stool leakage", scaleId: "VFIS" },
                { text: "Liquid stool leakage", scaleId: "VFIS" },
                { text: "Gas leakage", scaleId: "VFIS" },
                { text: "Pad use (for stool)", scaleId: "VFIS" },
                { text: "Lifestyle restriction", scaleId: "VFIS" },
            ],
            options: [
                ["Never", 0],
                ["Rarely", 1],
                ["Sometimes", 2],
                ["Weekly", 3],
                ["Daily", 4],
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
            "Below is the score associated with each definition",
            "Never: 0, Rarely: 1, Sometimes: 2, Weekly: 3, Daily: 4",
            "Need to wear a pad or plug - A “no” answer = 0; a “yes” answer = 2",
            "Taking constipation medicines - A “no” answer = 0; a “yes” answer = 2",
            "Lack of ability to defer defecation for 15 minutes - a “no” answer = 0; a “yes” answer = 4",
            "The scores for each question are added together to produce a final score (max is 24 points).",
        ],
    },
    mcid: {
        title: "Minimal Clinical Important Difference (MCID)",
        content: [
            "Reasonable estimates for MCID is -5 points.",
            "Bols EM, Hendriks EJ, Deutekom M, et al. Inconclusive psychometric properties of the Vaizey score in fecally incontinent patients: a prospective cohort study. Neurourology & Urodynamics. 2010 Mar;29(3):370-7.",
        ],
    },
    references: {
        title: "References",
        content: [
            "Vaizey CJ, Carapeti E, Cahill JA, et al. Prospective comparison of fecal incontinence grading systems. Gut. 1999 Jan;44(1):77-80.",
        ],
    },
}
