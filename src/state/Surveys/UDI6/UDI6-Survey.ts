import { AbstractBaseSurvey } from "../../ISurvey/AbstractBaseSurvey"

/**
 * @description Impl of the AbstractBaseSurvey for the UDI6 survey.
 * see @link {AbstractBaseSurvey} for more details on the methods and properties of this class.
 *
 * All Surveys are set up to be pointed at their config int he translate JSON files.
 *
 * see @link {en.ts} for the english translation of the survey.
 * see @link {es.ts} for the spanish translation of the survey.
 *
 * Once the doc has been read, it will then generate the sub survey sections,
 * questions etc.
 *
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class UDI6Survey
 * @extends {AbstractBaseSurvey}
 */
export class UDI6Survey extends AbstractBaseSurvey {
    // base max score of 100
    maxScore = 100

    /**
     * Creates an instance of UDI6Survey. All surveys are set up to read from the translate configuration files, which
     * @author Logan Hendershot
     * @date 10/06/2023
     * @memberof UDI6Survey
     */
    constructor() {
        super("UDI6")
    }

    calculateScore(): number {
        if (this.selected.length !== this.getQuestionLength()) {
            throw new Error("Not all questions have been answered")
        }

        // calculate the total score by summing the scores of the selected options
        this.totalScore = this.selected.reduce((acc, curr) => {
            if (!curr.selectedAnswer) {
                throw new Error("Not all questions have been answered")
            }
            return acc + (curr.selectedAnswer.optionTuple[1] || 0)
        }, 0)

        // calculate the average
        this.averageScore = this.totalScore / this.selected.length

        // round it to the nearest integer and multiply
        this.completedScore = Math.round(this.averageScore) * 25

        this.completed = true

        return this.completedScore
    }
}
