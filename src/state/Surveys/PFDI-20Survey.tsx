import { TxKeyPath, translate } from "utils/i18n"
import { AbstractBaseSurvey } from "../ISurvey/AbstractBaseSurvey"
import { QuestionSetTranslated } from "state/ISurvey/QuestionSetTranslated"
import { BaseOption } from "state/ISurvey/BaseOption"
import { BaseQuestionSet } from "state/ISurvey/BaseQuestionSet"

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
    constructor() {
        const transationSurveyKey = "PFDI20"
        super(transationSurveyKey)
    }

    calculateScore(): void {
        if (this.selected.length !== this.getTotalQuestionLength()) {
            throw new Error("Please answer all questions")
        }

        this.calculateScaleScores()
        this.completed = true
    }
}
