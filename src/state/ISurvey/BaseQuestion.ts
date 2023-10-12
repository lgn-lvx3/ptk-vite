import { getUniqueNumber } from "utils"
import { IQuestion, IOption, Prompt } from "./ISurvey"
import { BaseOption } from "./BaseOption"

export class BaseQuestion implements IQuestion {
    id: number
    prompt: Prompt
    selectedAnswer: IOption | undefined
    options: IOption[]

    constructor(prompt: Prompt, options: BaseOption[]) {
        this.id = getUniqueNumber()
        this.prompt = prompt
        // for each option, create a new option
        this.options = options.map(
            (option) => new BaseOption(option.optionTuple),
        )
    }
}
