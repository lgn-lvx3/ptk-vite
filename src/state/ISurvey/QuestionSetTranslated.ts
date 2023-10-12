import { Prompt } from "./ISurvey"

export type QuestionSetTranslated = {
    title?: string
    subtitle?: string
    instructions: string[]
    prompts: Prompt[]
    options: [[string, number]]
}
