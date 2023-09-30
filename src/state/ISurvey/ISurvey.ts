/**
 * Represents a survey with a title, subtitle, instructions, questions, and scoring information.
 */
export interface ISurvey {
    /** The title of the survey. */
    title: string
    /** The subtitle of the survey. */
    subtitle: string
    /** The instructions for the survey. */
    instructions: ISurveyInstruction

    /** The post-survey sections. */
    postSurvey?: ISurveySection[]

    /** The interpretation information for the survey. */
    interpretation?: string[]
    /** The scoring information for the survey. */
    scoring?: string[]
    /** The references for the survey. */
    references?: string[]

    /** The total score for the survey. */
    totalScore: number | undefined
    /** The maximum possible score for the survey. */
    maxScore: number | undefined

    /** The list of question IDs for the survey. */
    questionList: string[]
    /** The list of questions for the survey. */
    questions: IQuestion[]
    /** The list of selected questions for the survey. */
    selected: IQuestion[]

    /** Whether the survey has been completed. */
    completed: boolean

    /** Calculates the score for the survey. */
    calculateScore(): void
    /**
     * Selects an option for a question in the survey.
     * @param question The question to select an option for.
     * @param option The option to select.
     */
    selectOption(question: IQuestion, option: IOption): void
}
/**
 * Represents a survey instruction.
 */
export interface ISurveyInstruction {
    /**
     * The text of the instruction.
     */
    text: string

    /**
     * The time period for the instruction.
     */
    timePeriod: string
}

/**
 * Represents a section of a survey, which contains a title and an array of values.
 */
export interface ISurveySection {
    /**
     * The title of the survey section.
     */
    title?: string
    /**
     * An array of values for the survey section.
     */
    values: string[]
}

/**
 * Represents an option in a survey question.
 */
export interface IOption {
    /** The unique identifier for the option. */
    id: number
    /** A tuple containing the option text and its corresponding value. */
    optionTuple: [string, number]
}

/**
 * Represents a survey question.
 */
export interface IQuestion {
    /** The unique identifier of the question. */
    id: number
    /** The text of the question. */
    text: string
    /** The selected option of the question, if any. */
    selectedOption: IOption | undefined
    /** The available options for the question. */
    options: IOption[]
}
