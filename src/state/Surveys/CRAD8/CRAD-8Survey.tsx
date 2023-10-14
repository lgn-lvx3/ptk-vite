import { AbstractBaseSurvey } from "../../ISurvey/AbstractBaseSurvey"

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
    constructor() {
        super("CRAD8")
    }
}
