import { AbstractBaseSurvey } from "../../ISurvey/AbstractBaseSurvey"

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
    constructor() {
        super("CCFIS")
    }
}
