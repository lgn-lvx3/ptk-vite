import { AbstractBaseSurvey } from "state/ISurvey/AbstractBaseSurvey"

/**
 * @description Implementation of the POPDI-6 survey.
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class POPDI6Survey
 * @extends {AbstractBaseSurvey}
 */
export class POPDI6Survey extends AbstractBaseSurvey {
    maxScore = 100

    constructor() {
        super("POPDI6")
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
