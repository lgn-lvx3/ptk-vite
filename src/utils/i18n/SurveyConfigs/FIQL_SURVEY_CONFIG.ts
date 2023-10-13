import { ISurveyData } from "state/ISurvey/SurveyTranslationType"

export const FIQL_SURVEY_CONFIG: ISurveyData = {
    title: "FIQL",
    subtitle: "Fecal Incontinence Quality of Life Scale",
    instructions: [
        "Please follow the instructions for each subset of questions below.",
    ],
    scales: [
        {
            id: "FIQL-1",
            name: "Lifestyle",
        },
        {
            id: "FIQL-2",
            name: "Coping/Behavior",
        },
        {
            id: "FIQL-3",
            name: "Depression/Self Perception",
        },
        {
            id: "FIQL-4",
            name: "Embarrassment",
        },
    ],
    questionSets: [
        {
            title: "FIQL",
            subtitle: "Fecal Incontinence Quality of Life Scale",
            prompts: [
                {
                    text: "In general, would you say your health is:",
                    scaleId: "FIQL-3", // q1a
                },
            ],
            options: [
                ["Excellent", 5],
                ["Very good", 4],
                ["Good", 3],
                ["Fair", 2],
                ["Poor", 1],
            ],
        },
        {
            title: "FIQL",
            subtitle: "Fecal Incontinence Quality of Life Scale",
            instructions: [
                "For each of the items, please indicate how much of the time the issue is a concern for you due to accidental bowel leakage. (If it is a concern for you for reasons other than accidental bowel leakage then check the box under Not Apply, (N/A).)",
                "Due to accidental bowel leakage:",
            ],
            prompts: [
                { text: "I am afraid to go out", scaleId: "FIQL-1" }, // q2a
                { text: "I avoid visiting friends", scaleId: "FIQL-1" }, // q2b
                {
                    text: "I avoid staying overnight away from home", // q2c
                    scaleId: "FIQL-1",
                },
                {
                    text: "It is difficult for me to get out and do things like going to a movie or to church", // q2d
                    scaleId: "FIQL-1",
                },
                {
                    text: "I cut down on how much I eat before I go out", // q2e
                    scaleId: "FIQL-1",
                },
                {
                    text: "Whenever I am away from home, I try to stay near a restroom as much as possible", // q2f
                    scaleId: "FIQL-2",
                },
                {
                    text: "It is important to plan my schedule (daily activities) around my bowel pattern", // q2g
                    scaleId: "FIQL-1",
                },
                { text: "I avoid traveling", scaleId: "FIQL-1" }, // q2h
                {
                    text: "I worry about not being able to get to the toilet in time", // q2i
                    scaleId: "FIQL-2",
                },
                {
                    text: "I feel I have no control over my bowels", // q2j
                    scaleId: "FIQL-2",
                },
                {
                    text: "I can't hold my bowel movement long enough to get to the bathroom", // q2k
                    scaleId: "FIQL-2",
                },
                {
                    text: "I leak stool without even knowing it",
                    scaleId: "FIQL-4", // q2l
                },
                {
                    text: "I try to prevent bowel accidents by staying very near a bathroom",
                    scaleId: "FIQL-2", // q2m
                },
            ],
            options: [
                ["Most of the time", 1],
                ["Some of the time", 2],
                ["A little of the time", 3],
                ["None of the time", 4],
                ["N/A", 0],
            ],
        },
        {
            title: "FIQL",
            subtitle: "Fecal Incontinence Quality of Life Scale",
            instructions: [
                "Due to accidental bowel leakage, indicate the extent to which you AGREE or DISAGREE with each of the following items. (If it is a concern for you for reasons other than accidental bowel leakage then check the box under Not Apply, N/A).",
                "Due to accidental bowel leakage:",
            ],
            prompts: [
                { text: "I feel ashamed", scaleId: "FIQL-4" }, // q3a
                {
                    text: "I can not do many of things I want to do",
                    scaleId: "FIQL-1",
                }, // q3b

                {
                    text: "I worry about bowel accidents",
                    scaleId: "FIQL-2",
                }, // q3c
                { text: "I feel depressed", scaleId: "FIQL-3" }, // q3d
                {
                    text: "I worry about others smelling stool on me",
                    scaleId: "FIQL-4",
                }, // q3e
                {
                    text: "I feel like I am not a healthy person",
                    scaleId: "FIQL-3",
                }, // q3f
                { text: "I enjoy life less", scaleId: "FIQL-3" }, // q3g
                {
                    text: "I have sex less often than I would like to",
                    scaleId: "FIQL-2",
                }, // q3h
                {
                    text: "I feel different from other people",
                    scaleId: "FIQL-3",
                }, // q3i
                {
                    text: "The possibility of bowel accidents is always on my mind",
                    scaleId: "FIQL-2",
                }, // q3j
                { text: "I am afraid to have sex", scaleId: "FIQL-3" }, // q3k
                {
                    text: "I avoid traveling by plane or train",
                    scaleId: "FIQL-1",
                }, // q3l
                { text: "I avoid going out to eat", scaleId: "FIQL-1" }, // q3m
                {
                    text: "Whenever I go someplace new, I specifically locate where the bathrooms are",
                    scaleId: "FIQL-2",
                }, // q3n
            ],
            options: [
                ["Strongly Agree", 1],
                ["Somewhat Agree", 2],
                ["Somehwat Disagree", 3],
                ["Strongly Disagree", 4],
                ["N/A", 0],
            ],
        },
        {
            title: "FIQL",
            subtitle: "Fecal Incontinence Quality of Life Scale",
            instructions: [""],
            prompts: [
                {
                    text: "During the past month, have you felt so sad, discouraged, hopeless, or had so many problems that you wondered if anything was worthwhile?",
                    scaleId: "FIQL-3",
                },
            ],
            options: [
                ["Extremely So - I've almost given up", 1],
                ["Very Much So", 2],
                ["Quite a Bit", 3],
                ["Some - Enough to bother me", 4],
                ["A Little Bit", 5],
                ["Not at All", 6],
            ],
        },
    ],
    interpretation: {
        title: "Interpretation",
        content: [
            "There are 29 items and the scale range for each item is from 1 to 5, with a 1 indicating a lower functional status of quality of life. The lower the score, the greater the impairment/disability. ",
        ],
    },
    scoring: {
        title: "Scoring",
        content: [
            "Scale scores are the average (mean) response to all items in the scale (e.g., add the responses to all questions in a scale together and then divide by the number of items in the scale. Not Apply is coded as a missing value in the analysis for all questions.)",
        ],
    },
    mcid: {
        title: "Minimal Clinical Important Difference (MCID)",
        content: [
            "-1.1 to -1.2 point per subscale.",
            "Bols EM, Hendriks HJ, Berghmans LC, et al. Responsiveness and interpretability of incontinence severity scores and FIQL in patients with fecal incontinence: a secondary analysis from a randomized controlled trial. International Urogynecology Journal. 2013 Mar;24(3):469-78.",
        ],
    },
    references: {
        title: "References",
        content: [
            "Rockwood TH, Church JM, Fleshman JW, et al. Fecal Incontinence Quality of Life Scale: quality of life instrument for patients with fecal incontinence. Diseases of the Colon & Rectum. 2000 Jan;43(1):9-16. discussion -7.",
        ],
    },
}
