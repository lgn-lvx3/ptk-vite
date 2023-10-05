import { TxKeyPath, translate } from "utils/i18n"
import {
    AbstractBaseSurvey,
    BaseOption,
    BaseQuestionSet,
    QuestionSetTranslated,
} from "../ISurvey/AbstractBaseSurvey"

/**
 * @description Impl of the AbstractBaseSurvey for the PFDI20Survey survey.
 *
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class PFDI20Survey
 * @extends {AbstractBaseSurvey}
 */
export class PFDI20Survey extends AbstractBaseSurvey {
    maxScore = 100

    constructor() {
        const transationSurveyKey = "PFDI20"
        super(transationSurveyKey)

        this.questionSets = []

        const popdi6QuestionSets = translate(
            "POPDI6.questionSets" as TxKeyPath,
        ) as unknown as QuestionSetTranslated[]

        popdi6QuestionSets.forEach((set) => {
            const options = set.options.map(
                (o) => new BaseOption([o[0], o[1] as number]),
            )
            console.log("options", options)
            console.log("set", set)
            this.questionSets.push(
                new BaseQuestionSet(
                    set.prompts,
                    options,
                    set.instructions,
                    set.title,
                    set.subtitle,
                ),
            )
        })

        const udiQuestionSets = translate(
            "UDI6.questionSets" as TxKeyPath,
        ) as unknown as QuestionSetTranslated[]

        udiQuestionSets.forEach((set) => {
            const options = set.options.map(
                (o) => new BaseOption([o[0], o[1] as number]),
            )
            console.log("options", options)
            console.log("set", set)
            this.questionSets.push(
                new BaseQuestionSet(
                    set.prompts,
                    options,
                    set.instructions,
                    set.title,
                    set.subtitle,
                ),
            )
        })

        const crad8QuestionSets = translate(
            "CRAD8.questionSets" as TxKeyPath,
        ) as unknown as QuestionSetTranslated[]

        crad8QuestionSets.forEach((set) => {
            const options = set.options.map(
                (o) => new BaseOption([o[0], o[1] as number]),
            )
            console.log("options", options)
            console.log("set", set)
            this.questionSets.push(
                new BaseQuestionSet(
                    set.prompts,
                    options,
                    set.instructions,
                    set.title,
                    set.subtitle,
                ),
            )
        })
    }

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
}
