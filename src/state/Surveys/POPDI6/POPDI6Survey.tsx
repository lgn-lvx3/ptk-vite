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
    constructor() {
        super("POPDI6")
    }
}
