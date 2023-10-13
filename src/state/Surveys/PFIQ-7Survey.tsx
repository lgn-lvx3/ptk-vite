import { AbstractBaseSurvey } from "state/ISurvey/AbstractBaseSurvey"

/**
 * @description Implementation of the PFIQ7 survey.
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class PFIQ7Survey
 * @extends {AbstractBaseSurvey}
 */
export class PFIQ7Survey extends AbstractBaseSurvey {
    constructor() {
        super("PFIQ7")
    }
}
