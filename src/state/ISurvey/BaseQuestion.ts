import { getUniqueNumber } from "utils"
import { IQuestion, IOption, IPrompt } from "./ISurvey"
import { BaseOption } from "./BaseOption"

export class BaseQuestion implements IQuestion {
    id: number
    prompt: IPrompt
    selectedAnswer: IOption | undefined
    options: IOption[]

    constructor(prompt: IPrompt, options: BaseOption[]) {
        this.id = getUniqueNumber()
        this.prompt = prompt
        // for each option, create a new option
        this.options = options.map(
            (option) => new BaseOption(option.optionTuple),
        )
    }
}
