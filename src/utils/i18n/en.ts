const en = {
    hero: {
        title: "Pelvic Toolkit Calculators",
        subtitle:
            "Accurate outcome measures for calculating Pelvic analysis for patients.",
        action: "Get Started",
    },
    navigation: {
        surveys: "Surveys",
    },
    disclaimer: {
        text: "This tool should NOT be considered as a substitute for any professional medical service, NOR as a substitute for clinical judgment.",
        understand: "I understand",
        score: "Score",
        download: "Download",
        share: "Share",
    },
    errors: {
        calculate: "Please answer all questions.",
        sharing: "Your browser doesn't allow sharing.",
        file: "Your browser can't share this file.",
        content: "Please answer all questions.",
    },
    IIQ7: {
        title: "IIQ-7",
        subtitle: "Incontinence Impact Questionnaire",
        instructions: [],
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
                    "Ability to do household chores (cooking, housecleaning, laundry)?",
                    "Physical recreation such as walking, swimming, or other exercise?",
                    "Entertainment activities (movies, concerts, etc.)?",
                    "Ability to travel by car or bus more than 30 minutes from home?",
                    "Participation in social activities outside your home?",
                    "Emotional health (nervousness, depression, etc.)?",
                    "Feeling frustrated?",
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
    },
    CRAD8: {
        title: "CRAD-8",
        subtitle: "Colorectal-Anal distress Inventory",
        instructions: [""],
        questionSets: [
            {
                title: "CRAD-8",
                subtitle: "Colorectal-Anal distress Inventory",
                instructions: [
                    "Please answer all of the questions in the following survey. These questions will ask you if you have certain bowel, bladder, or pelvic symptoms and, if you do, how much they bother you.",
                    "Answer these by circling the appropriate number. While answering these questions, please consider your symptoms over the last 3 months.",
                ],
                prompts: [
                    "Feel you need to strain too hard to have a bowel movement?",
                    "Feel you have not completely emptied your bowels at the end of a bowel movement?",
                    "Usually lose stool beyond your control if your stool is well formed?",
                    "Usually lose stool beyond your control if your stool is loose?",
                    "Usually lose gas from the rectum beyond your control?",
                    "Usually have pain when you pass your stool?",
                    "Experience a strong sense of urgency and have to rush to the bathroom to have a bowel movement?",
                    "Does part of your bowel ever pass through the rectum and bulge outside during or after a bowel movement?",
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
    },
    POPDI6: {
        title: "POPDI-6",
        subtitle: "Pelvic Organ prolapse Distress Inventory",
        instructions: [""],
        questionSets: [
            {
                title: "POPDI-6",
                subtitle: "Pelvic Organ prolapse Distress Inventory",
                instructions: [
                    "Please answer all of the questions in the following survey. These questions will ask you if you have certain bowel, bladder, or pelvic symptoms and, if you do, how much they bother you.",
                    "Answer these by circling the appropriate number. While answering these questions, please consider your symptoms over the last 3 months.",
                ],
                prompts: [
                    "Usually experience pressure in the lower abdomen?",
                    "Usually experience heaviness or dullness in the pelvic area?",
                    "Usually have a bulge or something falling out that you can see or feel in your vaginal area?",
                    "Ever have to push on the vagina or around the rectum to have or complete a bowel movement?",
                    "Usually experience a feeling of incomplete bladder emptying?",
                    "Ever had to push on a bulge in the vaginal or perineum area with your fingers to start or complete urination?",
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
    },
    UDI6: {
        title: "UDI-6",
        subtitle: "Urogenital Distress Inventory",
        instructions: [
            "Please follow the instructions for each subset of questions below.",
        ],
        questionSets: [
            {
                title: "UDI-6",
                subtitle: "Urogenital Distress Inventory",
                instructions: [
                    "For each question, circle the number that best describes this problem for you over the past month:",
                ],
                prompts: [
                    "Frequent urination?",
                    "Urine leakage related to the feeling of urgency?",
                    "Urine leakage related to physical activity, coughing or sneezing?",
                    "Small amounts of urine leakage (that is drops)?",
                    "Difficulty emptying your bladder?",
                    "Pain or discomfort in the lower abdominal or genital area?",
                ],
                options: [
                    ["Not at all", 0],
                    ["A little bit", 1],
                    ["Moderately", 2],
                    ["Greatly", 3],
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
                "Each item is scored between 0 (no problem) to 3 (bothered greatly).",
                "All scores are summed and multiplied by 6, then multiplied by 25 for the scale score.",
            ],
        },
        mcid: {
            title: "Minimum Important Difference (MID)",
            content: [
                "Reasonable estimates for MID is an -11 point change.",
                "Anchor-based MID ranged from -22.4 to -6.4 in the study assessing MID Barber, M. D., Spino, C., Janz, N. K., Brubaker, L., Nygaard, I., Nager, C. W., & Wheeler, T. L. (2009).",
            ],
        },
        references: {
            title: "References",
            content: [
                "Uebersax JS, Wyman JF, Shumaker SA, McClish DK, Fantl JA, Continence Program for Women Research Group. Short Forms to Assess Life Quality and Symptom Distress for Urinary Incontinence in Women: The Incontinence Impact Questionnaire and the Urogenital Distress Inventory. Neurourology and Urodynamics. 1995;14: 131-39.",
                "The minimum important differences for the urinary scales of the pelvic floor distress inventory and Pelvic Floor Impact Questionnaire. American Journal of Obstetrics and Gynecology, 200(5). https://doi.org/10.1016/j.ajog.2009.02.007",
            ],
        },
    },
    FIQL: {
        title: "FIQL",
        subtitle: "Fecal Incontinence Quality of Life Scale",
        instructions: [
            "Please follow the instructions for each subset of questions below.",
        ],
        questionSets: [
            {
                title: "FIQL",
                subtitle: "Fecal Incontinence Quality of Life Scale",
                prompts: ["In general, would you say your health is:"],
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
                    "I am afraid to go out",
                    "I avoid visiting friends",
                    "I avoid staying overnight away from home",
                    "It is difficult for me to get out and do things like going to a movie or to church",
                    "I cut down on how much I eat before I go out",
                    "Whenever I am away from home, I try to stay near a restroom as much as possible",
                    "It is important to plan my schedule (daily activities) around my bowel pattern",
                    "I avoid traveling",
                    "I worry about not being able to get to the toilet in time",
                    "I feel I have no control over my bowels",
                    " I can't hold my bowel movement long enough to get to the bathroom",
                    "I leak stool without even knowing it",
                    "I try to prevent bowel accidents by staying very near a bathroom",
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
                    "I feel ashamed",
                    "I can not do many of things I want to do",
                    "I worry about bowel accidents",
                    "I feel depressed",
                    "I worry about others smelling stool on me",
                    "I feel like I am not a healthy person",
                    "I enjoy life less",
                    "I have sex less often than I would like to",
                    "I feel different from other people",
                    "The possibility of bowel accidents is always on my mind",
                    "I am afraid to have sex",
                    "I avoid traveling by plane or train",
                    "I avoid going out to eat",
                    "Whenever I go someplace new, I specifically locate where the bathrooms are",
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
                    "During the past month, have you felt so sad, discouraged, hopeless, or had so many problems that you wondered if anything was worthwhile?",
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
    },
    PFDI20: {
        title: "PFDI-20",
        subtitle: "Pelvic Floor Disability Index",
        instructions: [
            "Please answer all of the questions in the following survey.",
            "These questions will ask you if you have certain bowel, bladder, or pelvic symptoms and, if you do, how much they bother you.",
            "Answer these by circling the appropriate number. While answering these questions, please consider your symptoms over the last 3 months.",
            "The PFDI-20 has 20 items and 3 scales of your symptoms. All items use the following format with a response scale from 0 to 4. ",
        ],
        questionSets: [
            {
                prompts: [""],
                options: [["", 5]],
            },
        ],
        interpretation: {
            title: "Interpretation",
            content: [
                "The scale is from 0-300. The higher the score, the greater the impairment/disability ",
            ],
        },
        scoring: {
            title: "Scoring",
            content: [
                "Scale scores: Obtain the mean value of all of the answered items within the corresponding scale (possible value 0 to 4) and then multiply by 25 to obtain the scale score (range 0 to 100). Missing items are dealt with by using the mean from answered items only.",
                "PFSI-20 Summary Score: Add the scores from the 3 scales together to obtain the summary score (range 0 to 300).",
            ],
        },
        mcid: {
            title: "Clinically Meaningful Change",
            content: [
                "Studies have found minimal importance changes (MIC) ranging from 23 to 45",
                "Barber MD, Walters MD, Bump RC. Short forms of two condition-specific quality-of-life questionnaires for women with pelvic floor disorders (PFDI-20 adn PFIQ-7). Am J Obstet Gynecol 2005;193:103-113.",
                "Gelhorn HL, Coyne KS, Sikirica V, Gauld J, Murphy M. Psychometric evaluation of health-related quality-of-life measures after pelvic organ prolapse surgery. Female pelvic medicine & reconstructive surgery. 2012 Jul 1;18(4):221-6.",
                "Utomo E, Blok BF, Steensma AB, Korfage IJ. Validation of the pelvic floor distress inventory (PFDI-20) and pelvic floor impact questionnaire (PFIQ-7) in a Dutch population. International urogynecology journal. 2014 Apr 1;25(4):531-44.",
            ],
        },
        references: {
            title: "References",
            content: [
                "Barber, M., Walters, M., et al. (2005). 'Short forms of two condition-specific quality of life questionnaires for women with pelvic floor disorders (PFDI-20 and PFIQ -7).' American Journal of Obstetrics and Gynecology 193: 103-113",
            ],
        },
    },
    VFIS: {
        title: "VFIS",
        subtitle: "Vaizey Fecal Incontinence Score",
        instructions: [""],
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
                    "Solid stool leakage",
                    "Liquid stool leakage",
                    "Gas leakage",
                    "Pad use (for stool)",
                    "Lifestyle restriction",
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
    },
    CCFIS: {
        title: "CCFIS",
        subtitle: "Cleveland Clinic Fecal Incontinence Score",
        instructions: [""],
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
                    "Solid stool leakage",
                    "Liquid stool leakage",
                    "Gas leakage",
                    "Pad use (for stool)",
                    "Lifestyle restriction",
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
    },
    PFIQ7: {
        title: "PFIQ-7",
        subtitle: "Pelvic Floor Impact Questionnaire",
        instructions: [
            "Please follow the instructions for each subset of questions below.",
        ],
        questionSets: [
            {
                title: "PFIQ-7",
                subtitle: "Pelvic Floor Impact Questionnaire",
                instructions: [
                    "For each question, check the response that best describes how much your activities, relationships, or feelings have been affected by your bladder or urine over the last 3 months.",
                ],
                prompts: [
                    "Ability to do household chores (cooking, laundry, housecleaning)?",
                    "Ability to do physical activities such as walking, swimming, or other exercise?",
                    "Ability to do entertainment activities (movies, concerts, etc.)?",
                    "Ability to travel by car or bus for a distance greater than 30 minutes away from home?",
                    "Participating in social activities outside your home?",
                    "Emotional health (nervousness, depression, etc)?",
                    "Feeling frustrated?",
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
                    "Ability to do household chores (cooking, laundry, housecleaning)?",
                    "Ability to do physical activities such as walking, swimming, or other exercise?",
                    "Ability to do entertainment activities (movies, concerts, etc.)?",
                    "Ability to travel by car or bus for a distance greater than 30 minutes away from home?",
                    "Participating in social activities outside your home?",
                    "Emotional health (nervousness, depression, etc)?",
                    "Feeling frustrated?",
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
                    "Ability to do household chores (cooking, laundry, housecleaning)?",
                    "Ability to do physical activities such as walking, swimming, or other exercise?",
                    "Ability to do entertainment activities (movies, concerts, etc.)?",
                    "Ability to travel by car or bus for a distance greater than 30 minutes away from home?",
                    "Participating in social activities outside your home?",
                    "Emotional health (nervousness, depression, etc)?",
                    "Feeling frustrated?",
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
                "Scale Scores: Obtain the mean value for all of the answered items within the corresponding scale (possible value 0 - 3) and then multiply by (100/3) to obtain the scale score (range 0-100). Missing items are dealt with by using the mean from answered items only. PFIQ-7 Summary Score: Add the scores from the 3 scales together to obtain the summary score (range 0-300).",
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
    },
}
export default en
export type Translations = typeof en
