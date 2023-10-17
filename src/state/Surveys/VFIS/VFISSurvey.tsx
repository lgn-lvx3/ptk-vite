import { AbstractBaseSurvey } from "../../ISurvey/AbstractBaseSurvey"

/**
 * @description Impl of the AbstractBaseSurvey for the VFIS survey.
 *
 * @author Logan Hendershot
 * @date 10/04/2023
 * @export
 * @class VFISSurvey
 * @extends {AbstractBaseSurvey}
 */
export class VFISSurvey extends AbstractBaseSurvey {
    constructor() {
        super("VFIS")
    }
}
