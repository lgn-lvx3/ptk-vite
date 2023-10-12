import { getUniqueNumber } from "utils"
import { IQuestionSet, Prompt } from "./ISurvey"
import { BaseQuestion } from "./BaseQuestion"
import { BaseOption } from "./BaseOption"

export class BaseQuestionSet implements IQuestionSet {
    id: number
    title?: string | undefined
    subtitle?: string | undefined
    instructions?: string[] | undefined

    private questionPrompts: Prompt[]

    questions: BaseQuestion[]
    answers = []

    constructor(
        questionPrompts: Prompt[],
        options: BaseOption[],
        instructions?: string[],
        title?: string,
        subtitle?: string,
    ) {
        this.id = getUniqueNumber()
        this.questionPrompts = questionPrompts
        this.questions = this.questionPrompts.map(
            (q) => new BaseQuestion(q, options),
        )
        this.instructions = instructions
        this.title = title
        this.subtitle = subtitle
    }
}
