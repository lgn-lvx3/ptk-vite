import { AbstractBaseSurvey } from "../../ISurvey/AbstractBaseSurvey"

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
        super("PFDI20")
    }
}
