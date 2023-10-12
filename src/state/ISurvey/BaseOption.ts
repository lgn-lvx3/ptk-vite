import { getUniqueNumber } from "utils"
import { IOption } from "./ISurvey"

export class BaseOption implements IOption {
    id: number
    optionTuple: [string, number]

    constructor(optionTuple: [string, number]) {
        this.id = getUniqueNumber()
        this.optionTuple = optionTuple
    }
}
