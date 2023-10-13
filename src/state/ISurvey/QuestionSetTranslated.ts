import { IPrompt } from "./ISurvey"

export type QuestionSetTranslated = {
    title?: string
    subtitle?: string
    instructions: string[]
    prompts: IPrompt[]
    options: [[string, number]]
}
