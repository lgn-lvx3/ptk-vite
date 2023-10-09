import { AbstractBaseSurvey } from "state/ISurvey/AbstractBaseSurvey"
import { translate } from "utils/i18n"

/**
 * @description Implementation of the FIQL survey.
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class FIQLSurvey
 * @implements {ISurvey}
 */
export class FIQLSurvey extends AbstractBaseSurvey {
    maxScore = 100

    constructor() {
        super("FIQL")
    }

    calculateScore(): number {
        if (this.selected.length !== this.getTotalQuestionLength()) {
            throw new Error(translate("errors.calculate"))
        }

        // calculate the total score by summing the scores of the selected options
        // this.completedScore = this.selected.reduce((acc, curr) => {
        //     if (!curr.selectedAnswer) {
        //         throw new Error(translate("errors.calculate"))
        //     }
        //     return acc + (curr.selectedAnswer.optionTuple[1] || 0)
        // }, 0)

        let score = 0
        let notApplicableCount = 0

        // we calculate the score and the number of not applicable questions
        this.selected.forEach((question) => {
            if (!question.selectedAnswer) {
                throw new Error(translate("errors.calculate"))
            }
            // don't add the score if the option is "not applicable"
            if (question.selectedAnswer.optionTuple[0] !== "N/A") {
                score += question.selectedAnswer.optionTuple[1]
            } else {
                notApplicableCount++
            }
        })

        // calculate the max score possible
        this.maxScore = this.calculateMaxScore()

        // set total score
        this.totalScore = score

        // now we calculate the average score
        // we subtract the number of not applicable questions from the total number of questions
        // and get the average score
        this.averageScore = Math.round(
            score / (this.selected.length - notApplicableCount),
        )

        // calculate the average

        // // convert to % of 100
        // this.completedScore = this.completedScore * 25

        // round it to the nearest integer
        this.completedScore = this.averageScore

        this.completed = true

        return this.completedScore
    }
}
