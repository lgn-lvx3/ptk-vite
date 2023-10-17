import { ISurveyData } from "state/ISurvey/SurveyTranslationType"

export const PFIQ7_SURVEY_CONFIG: ISurveyData = {
    title: "PFIQ-7",
    subtitle: "Pelvic Floor Impact Questionnaire",
    instructions: [
        "Please follow the instructions for each subset of questions below.",
    ],
    scales: [
        {
            id: "PFIQ7-1",
            name: "Bladder or Urine",
        },
        {
            id: "PFIQ7-2",
            name: "Bowell or Rectum",
        },
        {
            id: "PFIQ7-3",
            name: "Genitals or Pelvis",
        },
    ],
    questionSets: [
        {
            title: "PFIQ-7",
            subtitle: "Pelvic Floor Impact Questionnaire",
            instructions: [
                "For each question, check the response that best describes how much your activities, relationships, or feelings have been affected by your bladder or urine over the last 3 months.",
            ],
            prompts: [
                {
                    text: "Ability to do household chores (cooking, laundry, housecleaning)?",
                    scaleId: "PFIQ7-1",
                },
                {
                    text: "Ability to do physical activities such as walking, swimming, or other exercise?",
                    scaleId: "PFIQ7-1",
                },
                {
                    text: "Ability to do entertainment activities (movies, concerts, etc.)?",
                    scaleId: "PFIQ7-1",
                },
                {
                    text: "Ability to travel by car or bus for a distance greater than 30 minutes away from home?",
                    scaleId: "PFIQ7-1",
                },
                {
                    text: "Participating in social activities outside your home?",
                    scaleId: "PFIQ7-1",
                },
                {
                    text: "Emotional health (nervousness, depression, etc)?",
                    scaleId: "PFIQ7-1",
                },
                { text: "Feeling frustrated?", scaleId: "PFIQ7-1" },
            ],
            options: [
                ["Not at all", 0],
                ["Somewhat", 1],
                ["Moderately", 2],
                ["Quite a bit", 3],
            ],
        },
        {
            title: "PFIQ-7",
            subtitle: "Pelvic Floor Impact Questionnaire",
            instructions: [
                "For each question, check the response that best describes how much your activities, relationships, or feelings have been affected by your bowel or rectum over the last 3 months.",
            ],
            prompts: [
                {
                    text: "Ability to do household chores (cooking, laundry, housecleaning)?",
                    scaleId: "PFIQ7-2",
                },
                {
                    text: "Ability to do physical activities such as walking, swimming, or other exercise?",
                    scaleId: "PFIQ7-2",
                },
                {
                    text: "Ability to do entertainment activities (movies, concerts, etc.)?",
                    scaleId: "PFIQ7-2",
                },
                {
                    text: "Ability to travel by car or bus for a distance greater than 30 minutes away from home?",
                    scaleId: "PFIQ7-2",
                },
                {
                    text: "Participating in social activities outside your home?",
                    scaleId: "PFIQ7-2",
                },
                {
                    text: "Emotional health (nervousness, depression, etc)?",
                    scaleId: "PFIQ7-2",
                },
                { text: "Feeling frustrated?", scaleId: "PFIQ7-2" },
            ],
            options: [
                ["Not at all", 0],
                ["Somewhat", 1],
                ["Moderately", 2],
                ["Quite a bit", 3],
            ],
        },
        {
            title: "PFIQ-7",
            subtitle: "Pelvic Floor Impact Questionnaire",
            instructions: [
                "For each question, check the response that best describes how much your activities, relationships, or feelings have been affected by your genitals or pelvis over the last 3 months.",
            ],
            prompts: [
                {
                    text: "Ability to do household chores (cooking, laundry, housecleaning)?",
                    scaleId: "PFIQ7-3",
                },
                {
                    text: "Ability to do physical activities such as walking, swimming, or other exercise?",
                    scaleId: "PFIQ7-3",
                },
                {
                    text: "Ability to do entertainment activities (movies, concerts, etc.)?",
                    scaleId: "PFIQ7-3",
                },
                {
                    text: "Ability to travel by car or bus for a distance greater than 30 minutes away from home?",
                    scaleId: "PFIQ7-3",
                },
                {
                    text: "Participating in social activities outside your home?",
                    scaleId: "PFIQ7-3",
                },
                {
                    text: "Emotional health (nervousness, depression, etc)?",
                    scaleId: "PFIQ7-3",
                },
                { text: "Feeling frustrated?", scaleId: "PFIQ7-3" },
            ],
            options: [
                ["Not at all", 0],
                ["Somewhat", 1],
                ["Moderately", 2],
                ["Quite a bit", 3],
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
            "All of the items use the following response scale: 0, Not at all; 1, somewhat; 2, moderately; 3, quite a bit.",
            "PFIQ-7 Score Scales: Urinary Impact Questionnaire (UIQ-7): 7 items under column heading “Bladder or urine",
            "Colorectal-Anal Impact questionnaire (CRAIQ-7): 7 items under column heading “Bowel / rectum",
            "Pelvic Organ Prolapse Impact Questionnaire (POPIQ-7): Items under column “Pelvis / Vagina",
            "Scale Scores: Obtain the mean value for all of the answered items within the corresponding scale (possible value 0 - 3) and then multiply by (100/3) to obtain the scale score (range 0-100).",
            "Missing items are dealt with by using the mean from answered items only.",
            "PFIQ-7 Summary Score: Add the scores from the 3 scales together to obtain the summary score (range 0-300).",
        ],
    },
    mcid: {
        title: "Minimally Clinically Important Difference (MCID):",
        content: [
            "36 points or 12% difference.",
            "Barber MD, Walters MD, Bump RC. Short forms of two condition-specific quality-of-life questionnaires for women with pelvic floor disorders (PFDI-20 and PFIQ-7). American journal of obstetrics and gynecology. 2005 Jul 1;193(1):103-13.",
        ],
    },
    references: {
        title: "References",
        content: [
            "Barber MD, Kuchibhatla M, Pieper CF, Bump RC. Psychometric Evaluation Of 2 Comprehensive Condition - Specific Quality of Life Instruments for Women with Pelvic Disorders. American Journal of Obstetric and Gynecology Volume 185; November 6, 2001",
        ],
    },
    note: {
        title: "Note",
        content: [
            "The PFIQ-7's standardized assessment form uses the words women and vagina. These words were changed to people and genitals to include other individuals who might need to complete this form.",
        ],
    },
}
