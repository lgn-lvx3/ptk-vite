import { getUniqueNumber } from "utils"
import {
    ISurvey,
    ISurveySection,
    IQuestion,
    IOption,
    IPostSurvey,
    IQuestionSet,
    BaseOption,
    BaseQuestion,
    BaseQuestionSet,
} from "./ISurvey"
import { translate } from "utils/i18n"

/**
 * @description Implementation of the UDI6 survey.
 * @author Logan Hendershot
 * @date 09/29/2023
 * @export
 * @class UDI6Survey
 * @implements {ISurvey}
 */
export class UDI6Survey implements ISurvey {
    id: string
    created: Date

    title = translate("UDI6.title")
    subtitle = translate("UDI6.subtitle")

    maxScore = 100
    completedScore: number | undefined
    completed = false

    questionSets = [new UDI6QuestionSet()]
    selected: IQuestion[] = []
    postSurvey: IPostSurvey

    constructor() {
        this.id = getUniqueNumber().toString()
        this.created = new Date()

        const interpretation: ISurveySection = translate(
            "UDI6.interpretation",
        ) as unknown as ISurveySection

        // const scoring: ISurveySection = {
        //     title: "Scoring",
        //     content: [
        //         "Each item is scored between 0 (no problem) to 3 (bothered greatly). All scores are summed and multiplied by 6, then multiplied by 25 for the scale score.",
        //     ],
        // }

        const scoring = translate("UDI6.scoring") as unknown as ISurveySection

        // const mcid: ISurveySection = {
        //     title: "Minimum Important Difference (MID)",
        //     content: [
        //         "Reasonable estimates for MID is an -11 point change.",
        //         "Anchor-based MID ranged from -22.4 to -6.4 in the study assessing MID Barber, M. D., Spino, C., Janz, N. K., Brubaker, L., Nygaard, I., Nager, C. W., & Wheeler, T. L. (2009).",
        //     ],
        // }

        const mcid = translate("UDI6.mcid") as unknown as ISurveySection

        const references: ISurveySection = translate(
            "UDI6.references",
        ) as unknown as ISurveySection

        // const references: ISurveySection = {
        //     title: "References",
        //     content: [
        //         "Uebersax JS, Wyman JF, Shumaker SA, McClish DK, Fantl JA, Continence Program for Women Research Group. Short Forms to Assess Life Quality and Symptom Distress for Urinary Incontinence in Women: The Incontinence Impact Questionnaire and the Urogenital Distress Inventory. Neurourology and Urodynamics. 1995;14: 131-39.",
        //         "The minimum important differences for the urinary scales of the pelvic floor distress inventory and Pelvic Floor Impact Questionnaire. American Journal of Obstetrics and Gynecology, 200(5). https://doi.org/10.1016/j.ajog.2009.02.007",
        //     ],
        // }

        this.postSurvey = {
            interpretation: [interpretation],
            scoring: [scoring],
            mcid: [mcid],
            references: [references],
        }
    }
    surveyInstructions?: JSX.Element | string[] | undefined
    getQuestionLength(): number {
        return this.questionSets.reduce(
            (acc, curr) => acc + curr.questions.length,
            0,
        )
    }

    // questions = this.questionPrompts.map((question) => {
    //     return new UDI6Question(getUniqueNumber(), question, [
    //         new UDI6Option(["Not at all", 0]),
    //         new UDI6Option(["A little bit", 1]),
    //         new UDI6Option(["Moderately", 2]),
    //         new UDI6Option(["Greatly", 3]),
    //     ])
    // })

    calculateScore(): void {
        if (this.selected.length !== this.getQuestionLength()) {
            throw new Error("Not all questions have been answered")
        }

        // calculate the total score by summing the scores of the selected options
        this.completedScore = this.selected.reduce((acc, curr) => {
            if (!curr.selectedAnswer) {
                throw new Error("Not all questions have been answered")
            }
            return acc + (curr.selectedAnswer.optionTuple[1] || 0)
        }, 0)

        // calculate the average
        this.completedScore = this.completedScore / this.selected.length

        // convert to % of 100
        this.completedScore = this.completedScore * 25

        // round it to the nearest integer
        this.completedScore = Math.round(this.completedScore)

        this.completed = true
    }

    selectOption(question: IQuestion, option: IOption): void {
        // if exists in selected, replace
        question.selectedAnswer = option

        // if the question is already selected, replace the selected option
        const index = this.selected.findIndex((q) => q.id === question.id)
        if (index !== -1) {
            this.selected[index] = question
        } else {
            this.selected.push(question)
        }
    }
}

export class UDI6QuestionSet extends BaseQuestionSet {
    instructions = translate("UDI6.instructions") as unknown as string[]

    answers = []

    constructor() {
        // const trans = translate("UDI6.options")
        const optionText = translate("UDI6.options") as unknown as string[]
        // console.log("optionText", trans)

        const options = optionText.map((option, index) => {
            return new BaseOption([option, index])
        })

        const prompts = translate("UDI6.prompts") as unknown as string[]

        super(prompts, options)
    }
}
