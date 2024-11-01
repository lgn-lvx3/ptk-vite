import { IScale } from "./IScale"

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

    scales: IScale[]

    surveyInstructions?: string[]

    // A set of one or more question sections to be displayed in the survey.
    questionSets: IQuestionSet[]

    /** The post-survey sections. */
    postSurvey: IPostSurvey

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

    getTotalQuestionLength(): number
}

/**
 * @description Interface for the post survey section
 * @author Logan Hendershot
 * @date 10/03/2023
 * @export
 * @interface IPostSurvey
 */
export interface IPostSurvey {
    note?: ISurveySection
    interpretation: ISurveySection
    scoring: ISurveySection

    // can be MCID or clinically meaningful change
    mcid?: ISurveySection

    references: ISurveySection
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
    subtitle?: string
    // pre survey instructions, can be an element if there needs html or a string array if not
    instructions?: string[]

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
    /** The text and scaleID of the question. */
    prompt: IPrompt

    /** The selected option of the question, if any. */
    selectedAnswer: IOption | undefined
    /** The available options for the question. */
    options: IOption[]
}

export interface IPrompt {
    text: string
    scaleId: string
}
