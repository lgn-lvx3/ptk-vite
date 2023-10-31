import { SurveyTranslationType } from "state/ISurvey/SurveyTranslationType"
import { CCFIS_SURVEY_CONFIG } from "state/Surveys/CCFIS/CCFIS_SURVEY_CONFIG"
import { CRAD8_SURVEY_CONFIG } from "state/Surveys/CRAD8/CRAD8_SURVEY_CONFIG"
import { FIQL_SURVEY_CONFIG } from "state/Surveys/FIQL/FIQL_SURVEY_CONFIG"
import { IIQ7_SURVEY_CONFIG } from "state/Surveys/IIQ7/IIQ7_SURVEY_CONFIG"
import { PFDI20_SURVEY_CONFIG } from "state/Surveys/PFDI20/PFDI20_SURVEY_CONFIG"
import { PFIQ7_SURVEY_CONFIG } from "state/Surveys/PFIQ/PFIQ7_SURVEY_CONFIG"
import { POPDI6_SURVEY_CONFIG } from "state/Surveys/POPDI6/POPDI6_SURVEY_CONFIG"
import { UDI6_SURVEY_CONFIG } from "state/Surveys/UDI6/UDI6_SURVEY_CONFIG"
import { VFIS_SURVEY_CONFIG } from "state/Surveys/VFIS/VFIS_SURVEY_CONFIG"

const en: SurveyTranslationType = {
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
    IIQ7: IIQ7_SURVEY_CONFIG,
    CRAD8: CRAD8_SURVEY_CONFIG,
    POPDI6: POPDI6_SURVEY_CONFIG,
    UDI6: UDI6_SURVEY_CONFIG,
    FIQL: FIQL_SURVEY_CONFIG,
    PFDI20: PFDI20_SURVEY_CONFIG,
    VFIS: VFIS_SURVEY_CONFIG,
    CCFIS: CCFIS_SURVEY_CONFIG,
    PFIQ7: PFIQ7_SURVEY_CONFIG,
}
export default en
export type Translations = typeof en
