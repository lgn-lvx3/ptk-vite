import { IScale } from "./IScale"

type Option = [string, number]

interface Prompt {
    text: string
    scaleId?: string
}

interface QuestionSet {
    title: string
    subtitle: string
    instructions?: string[]
    prompts: Prompt[]
    options: Option[]
}

interface SectionInfo {
    title: string
    content: string[]
}

export interface ISurveyData {
    title: string
    subtitle: string
    instructions: string[]
    scales: IScale[]
    questionSets: QuestionSet[]
    interpretation?: SectionInfo
    scoring?: SectionInfo
    mcid?: SectionInfo
    references?: SectionInfo
    note?: SectionInfo
}

interface Disclaimer {
    text: string
    understand: string
    score: string
    download: string
    share: string
}

interface Hero {
    title: string
    subtitle: string
    action: string
}

interface Navigation {
    surveys: string
}

interface Errors {
    calculate: string
    sharing: string
    file: string
    content: string
}

export interface SurveyTranslationType {
    hero: Hero
    navigation: Navigation
    disclaimer: Disclaimer
    errors: Errors
    [key: string]: Hero | Navigation | Disclaimer | Errors | ISurveyData
}
