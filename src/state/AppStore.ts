import { createStore } from "@udecode/zustood"
import { IQuestion, IOption } from "state/ISurvey/ISurvey"
import { ISurvey } from "state/ISurvey/ISurvey"
import { s } from "vitest/dist/reporters-5f784f42.js"
interface State {
    theme: "light" | "dark"
    surveyInProgress: boolean
    surveyCompleted: boolean
    disclaimerAccepted: boolean
    survey: ISurvey | undefined
    selected: IQuestion[]
    score: number | undefined

    renderPDF: boolean
}

const initialState: State = {
    theme: "dark",
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
                set.score(survey.totalScore)
                set.renderPDF(true)
            }
        },
        // select the option for a question
        // if the question is already selected, replace the selected option
        upsertOption: (question: IQuestion, option: IOption) => {
            // if exists in selected, replace
            question.selectedOption = option

            // if the question is already selected, replace the selected option
            const selected = get.selected()
            const index = selected.findIndex((q) => q.id === question.id)
            if (index !== -1) {
                const newSelected = selected.slice()
                newSelected[index] = question

                get.survey()?.selectOption(question, option)
                set.selected(newSelected)
            } else {
                set.selected([...selected, question])
                get.survey()?.selectOption(question, option)
            }
        },
    }))
    .extendSelectors((set, get, api) => ({
        isSelected: (option: IOption) => {
            const selected = get.selected()
            // console.log("isSelected", selected)

            // if selected contains the option, return true
            if (selected.some((q) => q.selectedOption?.id === option.id))
                return true
            else return false
        },
        isComplete: () => {
            // console.log("isSelected", selected)
            if (get.selected().length === get.survey()?.questions.length) {
                return true
            } else return false
        },
    }))
