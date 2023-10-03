import { getUniqueNumber } from "utils"
import { I } from "vitest/dist/reporters-5f784f42.js"

/**
 * @description Interface for a survey, which contains a title, subtitle, instructions, and a list of questions. Can contain several sub question sets.
 * @author Logan Hendershot
 * @date 10/03/2023
 * @export
 * @interface ISurvey
 */
export interface ISurvey {
    id: string
    created: Date

    /** The title of the survey. */
    title: string
    subtitle: string

    surveyInstructions?: JSX.Element | string[] | undefined

    // A set of one or more question sections to be displayed in the survey.
    questionSets: IQuestionSet[]

    /** The post-survey sections. */
    postSurvey: IPostSurvey

    /** The total score for the survey. */
    completedScore: number | undefined

    /** The maximum possible score for the survey. */
    maxScore: number | undefined

    /** The list of selected questions for the survey. */
    selected: IQuestion[]

    /** Whether the survey has been completed. */
    completed: boolean

    /** Calculates the score for the entirety survey. */
    calculateScore(): void

    /**
     * Selects an option for a question in the survey.
     * @param question The question to select an option for.
     * @param option The option to select.
     */
    selectOption(question: IQuestion, option: IOption): void

    getQuestionLength(): number
}

/**
 * @description Interface for the post survey section
 * @author Logan Hendershot
 * @date 10/03/2023
 * @export
 * @interface IPostSurvey
 */
export interface IPostSurvey {
    note?: ISurveySection[]
    interpretation: ISurveySection[]
    scoring: ISurveySection[]

    // can be MCID or clinically meaningful change
    mcid?: ISurveySection[]

    references: ISurveySection[]
}

/**
 * @description Represents a set of questions in a survey.
 * @author Logan Hendershot
 * @date 10/03/2023
 * @export
 * @interface IQuestionSet
 */
export interface IQuestionSet {
    id: number
    title?: string
    // pre survey instructions, can be an element if there needs html or a string array if not
    instructions?: JSX.Element | string[]

    // these are the populated questions for the survey
    questions: IQuestion[]

    // the possible answers for each question
    answers: IOption[] | undefined
}

/**
 * @description Represents a section of the survey to be displayed, typically title will be
 * h1 or so and the values listed below it
 * @author Logan Hendershot
 * @date 10/03/2023
 * @export
 * @interface ISurveySection
 */
export interface ISurveySection {
    title?: string
    content: string[]
}

/**
 * @description The possible options for a survey question.
 * @author Logan Hendershot
 * @date 10/03/2023
 * @export
 * @interface IOption
 */
export interface IOption {
    /** The unique identifier for the option. */
    id: number
    /** A tuple containing the option text and its corresponding value. */
    optionTuple: [string, number]
}

/**
 * @description Interface for the survey questions, has a prompt and a list of options to select from, as well as the selected answer if answered.
 * @author Logan Hendershot
 * @date 10/03/2023
 * @export
 * @interface IQuestion
 */
export interface IQuestion {
    /** The unique identifier of the question. */
    id: number
    /** The text of the question. */
    prompt: string
    /** The selected option of the question, if any. */
    selectedAnswer: IOption | undefined
    /** The available options for the question. */
    options: IOption[]
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
    instructions?: JSX.Element | string[] | undefined

    private questionPrompts: string[]

    questions: BaseQuestion[]
    answers = []

    constructor(questionPrompts: string[], options: BaseOption[]) {
        this.id = getUniqueNumber()
        this.questionPrompts = questionPrompts
        this.questions = this.questionPrompts.map(
            (q) => new BaseQuestion(q, options),
        )
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
