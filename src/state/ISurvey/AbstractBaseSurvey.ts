import { getUniqueNumber } from "utils"
import { TxKeyPath, translate } from "utils/i18n"
import {
    ISurvey,
    IQuestionSet,
    IPostSurvey,
    IQuestion,
    ISurveySection,
    IOption,
} from "./ISurvey"

export abstract class AbstractBaseSurvey implements ISurvey {
    id: string
    created: Date
    title: string
    subtitle: string
    surveyInstructions?: string[] | undefined
    questionSets: IQuestionSet[]
    postSurvey: IPostSurvey

    completedScore: number | undefined
    abstract maxScore: number | undefined
    totalScore: number | undefined
    averageScore: number | undefined

    selected: IQuestion[]
    completed: boolean

    constructor(transationSurveyKey: string) {
        this.id = getUniqueNumber().toString()
        this.created = new Date()
        this.title = translate(`${transationSurveyKey}.title` as TxKeyPath)
        this.subtitle = translate(
            `${transationSurveyKey}.subtitle` as TxKeyPath,
        )
        this.surveyInstructions = translate(
            `${transationSurveyKey}.instructions` as TxKeyPath,
        ) as unknown as string[]

        this.questionSets = []
        const questionSets = translate(
            `${transationSurveyKey}.questionSets` as TxKeyPath,
        ) as unknown as QuestionSetTranslated[]

        questionSets.forEach((set) => {
            const options = set.options.map(
                (o) => new BaseOption([o[0], o[1] as number]),
            )
            // console.log("options", options)
            // console.log("set", set)
            this.questionSets.push(
                new BaseQuestionSet(
                    set.prompts,
                    options,
                    set.instructions,
                    set.title,
                    set.subtitle,
                ),
            )
        })

        this.postSurvey = {
            interpretation: translate(
                `${transationSurveyKey}.interpretation` as TxKeyPath,
            ) as unknown as ISurveySection,
            scoring: translate(
                `${transationSurveyKey}.scoring` as TxKeyPath,
            ) as unknown as ISurveySection,

            mcid: translate(
                `${transationSurveyKey}.mcid` as TxKeyPath,
            ) as unknown as ISurveySection,

            references: translate(
                `${transationSurveyKey}.references` as TxKeyPath,
            ) as unknown as ISurveySection,
        }
        this.completed = false
        this.totalScore = 0
        this.averageScore = 0
        this.selected = []
    }
    abstract calculateScore(): number

    selectOption(question: IQuestion, option: IOption): void {
        // if exists in selected, replace
        question.selectedAnswer = option

        // if the question is already selected, replace the selected option
        const index = this.selected.findIndex((q) => q.id === question.id)
        if (index !== -1) {
            this.selected[index] = question
        } else {
            this.selected.push(question)
        }
    }
    getTotalQuestionLength(): number {
        return this.questionSets.reduce(
            (acc, curr) => acc + curr.questions.length,
            0,
        )
    }

    calculateMaxScore(): number {
        let maxScore = 0
        this.questionSets.forEach((questionSet) => {
            // find the highest score in the tuple
            questionSet.questions.forEach((question) => {
                let maxTuple = 0
                question.options.forEach((option) => {
                    if (option.optionTuple[1] > maxTuple) {
                        maxTuple = option.optionTuple[1]
                    }
                })
                console.log("maxTuple", maxTuple)
                maxScore += maxTuple
            })
        })
        console.log("maxScore", maxScore)
        return maxScore
    }
}

export class BaseQuestion implements IQuestion {
    id: number
    prompt: string
    selectedAnswer: IOption | undefined
    options: IOption[]

    constructor(question: string, options: BaseOption[]) {
        this.id = getUniqueNumber()
        this.prompt = question
        // for each option, create a new option
        this.options = options.map(
            (option) => new BaseOption(option.optionTuple),
        )
    }
}

export class BaseQuestionSet implements IQuestionSet {
    id: number
    title?: string | undefined
    subtitle?: string | undefined
    instructions?: string[] | undefined

    private questionPrompts: string[]

    questions: BaseQuestion[]
    answers = []

    constructor(
        questionPrompts: string[],
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

export class BaseOption implements IOption {
    id: number
    optionTuple: [string, number]

    constructor(optionTuple: [string, number]) {
        this.id = getUniqueNumber()
        this.optionTuple = optionTuple
    }
}

export type QuestionSetTranslated = {
    title?: string
    subtitle?: string
    instructions: string[]
    prompts: string[]
    options: [[string, number]]
}
