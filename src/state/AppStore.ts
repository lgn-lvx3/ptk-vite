import { createStore } from "@udecode/zustood"
import { IQuestion, IOption } from "state/ISurvey/ISurvey"
import { ISurvey } from "state/ISurvey/ISurvey"

export type SupportedLanguage = "en" | "es"

interface State {
    surveyNavTitles: string[]
    surveyInProgress: boolean
    surveyCompleted: boolean
    disclaimerAccepted: boolean
    survey: ISurvey | undefined
    selected: IQuestion[]
    score: number | undefined
    renderPDF: boolean
}

const initialState: State = {
    surveyNavTitles: [
        "UDI6",
        "FIQL",
        "POPDI6",
        "CRAD8",
        "PFDI20",
        "IIQ7",
        "VFIS",
        "CCFIS",
        "PFIQ7",
    ],
    surveyInProgress: false,
    surveyCompleted: false,
    disclaimerAccepted: false,
    survey: undefined,
    selected: [],
    score: undefined,
    renderPDF: false,
}

export const AppStore = createStore("App")(
    { ...initialState },
    {
        devtools: { enabled: true },
        immer: { enabledAutoFreeze: true },
    },
)
    .extendActions((set, get, api) => ({
        calculateScore: () => {
            const survey = get.survey()
            if (survey) {
                survey.calculateScore()
                set.score(survey.completedScore)
                set.renderPDF(true)
            }
        },
        // select the option for a question
        // if the question is already selected, replace the selected option
        upsertOption: (question: IQuestion, option: IOption) => {
            const survey = get.survey()
            if (!survey) {
                return
            }
            // if exists in selected, replace
            question.selectedAnswer = option

            // if the question is already selected, replace the selected option
            const selected = get.selected()
            const index = selected.findIndex((q) => q.id === question.id)
            if (index !== -1) {
                const newSelected = selected.slice()
                newSelected[index] = question

                survey.selectOption(question, option)
                set.selected(newSelected)
            } else {
                set.selected([...selected, question])
                survey.selectOption(question, option)
            }
        },
    }))
    .extendSelectors((set, get, api) => ({
        isSelected: (option: IOption) => {
            const selected = get.selected()
            // console.log("isSelected", selected)

            // if selected contains the option, return true
            if (selected.some((q) => q.selectedAnswer?.id === option.id))
                return true
            else return false
        },
        isComplete: () => {
            const survey = get.survey()
            if (!survey) {
                return false
            }

            // calc total questions
            const total = survey.questionSets.reduce(
                (acc, curr) => acc + curr.questions.length,
                0,
            )

            const selected = get.selected().length
            // calc total questions

            console.log("isComplete", selected, total)

            if (selected === total) {
                return true
            } else return false
        },
    }))
