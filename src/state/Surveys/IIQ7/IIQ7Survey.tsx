import { AbstractBaseSurvey } from "state/ISurvey/AbstractBaseSurvey"

/**
 * @description Implementation of the IIQ7 survey.
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class IIQ7Survey
 * @extends {AbstractBaseSurvey}
 */
export class IIQ7Survey extends AbstractBaseSurvey {
    constructor() {
        super("IIQ7")
    }
}
