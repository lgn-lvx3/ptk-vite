import { ISurveyData } from "state/ISurvey/SurveyTranslationType"
import { POPDI6_SURVEY_CONFIG } from "../POPDI6/POPDI6_SURVEY_CONFIG"
import { CRAD8_SURVEY_CONFIG } from "../CRAD8/CRAD8_SURVEY_CONFIG"
import { UDI6_SURVEY_CONFIG } from "../UDI6/UDI6_SURVEY_CONFIG"
const popdiQ = POPDI6_SURVEY_CONFIG.questionSets
const cradQ = CRAD8_SURVEY_CONFIG.questionSets
const udiQ = UDI6_SURVEY_CONFIG.questionSets

export const PFDI20_SURVEY_CONFIG: ISurveyData = {
    title: "PFDI-20",
    subtitle: "Pelvic Floor Disability Index",
    instructions: [
        "Please answer all of the questions in the following survey.",
        "These questions will ask you if you have certain bowel, bladder, or pelvic symptoms and, if you do, how much they bother you.",
        "Answer these by circling the appropriate number. While answering these questions, please consider your symptoms over the last 3 months.",
        "The PFDI-20 has 20 items and 3 scales of your symptoms. All items use the following format with a response scale from 0 to 4. ",
    ],
    scales: [
        {
            id: "POPDI6",
            name: "POPDI6 Score",
        },
        {
            id: "CRAD8",
            name: "CRAD8 Score",
        },
        {
            id: "UDI6",
            name: "UDI6 Score",
        },
    ],
    questionSets: [popdiQ[0], cradQ[0], udiQ[0]],
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
}
