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
    constructor() {
        super("FIQL")
        this.scales = [
            {
                id: 1,
                name: "Lifestyle",
            },
            {
                id: 2,
                name: "Coping/Behavior",
            },
            {
                id: 3,
                name: "Depression/Self Perception",
            },
            {
                id: 4,
                name: "Embarrassment",
            },
        ]
    }

    calculateScore(): void {
        if (this.selected.length !== this.getTotalQuestionLength()) {
            throw new Error(translate("errors.calculate"))
        }

        this.calculateScaleScores()
        this.completed = true
    }
}
