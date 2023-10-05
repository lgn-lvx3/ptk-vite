import { AbstractBaseSurvey } from "../ISurvey/AbstractBaseSurvey"

/**
 * @description Impl of the AbstractBaseSurvey for the CCFIS survey.
 *
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class CCFISSurvey
 * @extends {AbstractBaseSurvey}
 */
export class CCFISSurvey extends AbstractBaseSurvey {
    maxScore = 100

    constructor() {
        super("CCFIS")
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
