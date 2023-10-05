import { AbstractBaseSurvey } from "../ISurvey/AbstractBaseSurvey"

/**
 * @description Impl of the AbstractBaseSurvey for the CRAD8 survey.
 *
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class CRAD8Survey
 * @extends {AbstractBaseSurvey}
 */
export class CRAD8Survey extends AbstractBaseSurvey {
    maxScore = 100

    constructor() {
        super("CRAD8")
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
