import { AbstractBaseSurvey } from "state/ISurvey/AbstractBaseSurvey"
import { IScale } from "state/ISurvey/IScale"
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
        this.scales = translate("FIQL.scales") as unknown as IScale[]
    }
}
