import { getUniqueNumber } from "utils"
import { TxKeyPath, translate } from "utils/i18n"
import {
    ISurvey,
    IPostSurvey,
    IQuestion,
    ISurveySection,
    IOption,
} from "./ISurvey"
import { IScale } from "./IScale"
import { BaseQuestionSet } from "./BaseQuestionSet"
import { BaseOption } from "./BaseOption"
import { QuestionSetTranslated } from "./QuestionSetTranslated"

export abstract class AbstractBaseSurvey implements ISurvey {
    id: string
    created: Date
    title: string
    subtitle: string
    surveyInstructions?: string[] | undefined = undefined
    questionSets: BaseQuestionSet[] = []
    postSurvey: IPostSurvey

    scales: IScale[] = []

    selected: IQuestion[] = []
    completed = false

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
    }

    abstract calculateScore(): void

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

    calculateMaxScaleScores(): void {
        this.scales.forEach((scale) => {
            let maxScore = 0
            // find the questions that are in this scale and find the max score
            const questions = this.questionSets.flatMap((q) =>
                q.questions.filter(
                    (question) => question.prompt.scaleId === scale.id,
                ),
            )
            // find the highest score in the tuple
            questions.reduce((acc, curr) => {
                const maxTuple = Math.max(
                    ...curr.options.map((o) => o.optionTuple[1]),
                )
                maxScore += maxTuple
                return acc
            }, 0)
            scale.maxScore = maxScore
        })
    }

    calculateScaleScores(): void {
        this.calculateMaxScaleScores()
        // for each scale, calculate the score
        this.scales.forEach((scale) => {
            // find the score of the questions that belong to this scale
            const score = this.selected.reduce((acc, curr) => {
                if (curr.prompt.scaleId !== scale.id) {
                    return acc
                }
                return acc + (curr.selectedAnswer?.optionTuple[1] || 0)
            }, 0)

            // find the questions that belong to this scale
            // for length
            const questions = this.selected.filter(
                (q) => q.prompt.scaleId === scale.id,
            )
            console.log("questions", questions)

            console.log("score", score)

            // set the score
            scale.score = score
            scale.averageScore = score / questions.length
            if (!scale.maxScore) {
                return
            }
            scale.percentageScore = Math.round(
                (scale.score / scale.maxScore) * 100,
            )
        })
    }
}
