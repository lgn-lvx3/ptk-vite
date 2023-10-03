import { getUniqueNumber } from "utils"
import { ISurvey, ISurveySection, IQuestion, IOption } from "./ISurvey"

// TODO add instructions / fix

/**
 * @description Implementation of the VFIS survey.
 * @author Logan Hendershot
 * @date 09/29/2023
 * @export
 * @class VFISSurvey
 * @implements {ISurvey}
 */
export class VFISSurvey implements ISurvey {
    title = "VFIS"
    subtitle = "Vaizey Fecal Incontinence Score"

    instructions =
        "Please select one answer for each question to indicate how often you experience the following symptoms."

    questionPrompts = [
        "Solid stool leakage",
        "Liquid stool leakage",
        "Gas leakage",
        "Pad use (for stool)",
        "Lifestyle restriction",
    ]

    interpretation = [
        "The scoring is from 0-24. The higher the score, the greater the impairment/disability or, totally incontinent.",
    ]

    scoring = [
        "Below is the score associated with each definition",
        "Never: 0, Rarely: 1, Sometimes: 2, Weekly: 3, Daily: 4",
        "Need to wear a pad or plug - A “no” answer = 0; a “yes” answer = 2",
        "Taking constipation medicines - A “no” answer = 0; a “yes” answer = 2",
        "Lack of ability to defer defecation for 15 minutes - a “no” answer = 0; a “yes” answer = 4",
        "The scores for each question are added together to produce a final score (max is 24 points).",
    ]

    references = [
        "Vaizey CJ, Carapeti E, Cahill JA, et al. Prospective comparison of fecal incontinence grading systems. Gut. 1999 Jan;44(1):77-80.",
    ]

    preSurvey = new Array<ISurveySection>()
    postSurvey = new Array<ISurveySection>()

    completedScore: number | undefined
    maxScore = 100

    questions: IQuestion[] = []
    selected: IQuestion[] = []
    completed = false

    constructor() {
        // for each of the questions in question source, create a new question
        // with the question text and options
        this.questions = this.questionPrompts.map((question) => {
            return new VFISQuestion(getUniqueNumber(), question, [
                new VFISOption(["Never", 0]),
                new VFISOption(["Rarely", 1]),
                new VFISOption(["Sometimes", 2]),
                new VFISOption(["Weekly", 3]),
                new VFISOption(["Daily", 4]),
            ])
        })

        this.preSurvey.push({
            title: "Response Definitions",
            content: [
                "Never - no episodes in the past 4 weeks",
                "Rarely - 1 episode in the past 4 weeks",
                "Sometimes - 1 or more episodes in the past 4 weeks",
                "Weekly - 1 or more episodes a week",
                "Daily - 1 or more episodes a day",
            ],
        })

        this.postSurvey.push({
            title: "Interpretation",
            content: [...this.interpretation],
        })
        this.postSurvey.push({
            title: "Scoring",
            content: [...this.scoring],
        })
        this.postSurvey.push({
            title: "Minimal Clinical Important Difference (MCID)",
            content: [
                "Reasonable estimates for MCID is -5 points.",
                "Bols EM, Hendriks EJ, Deutekom M, et al. Inconclusive psychometric properties of the Vaizey score in fecally incontinent patients: a prospective cohort study. Neurourology & Urodynamics. 2010 Mar;29(3):370-7.",
            ],
        })
        this.postSurvey.push({
            title: "References",
            content: [...this.references],
        })
    }

    calculateScore(): void {
        if (this.selected.length !== this.questions.length) {
            throw new Error("Not all questions have been answered")
        }

        // calculate the total score by summing the scores of the selected options
        this.completedScore = this.selected.reduce((acc, curr) => {
            if (!curr.selectedAnswer) {
                throw new Error("Not all questions have been answered")
            }
            return acc + (curr.selectedAnswer.optionTuple[1] || 0)
        }, 0)

        // calculate the average
        this.completedScore = this.completedScore / this.selected.length

        // convert to % of 100
        this.completedScore = this.completedScore * 25

        // round it to the nearest integer
        this.completedScore = Math.round(this.completedScore)

        this.completed = true
    }

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
}

/**
 * Represents the possible options for a UDI6Question.
 */
export type VFIS_OPTIONS =
    | ["Never", 0]
    | ["Rarely", 1]
    | ["Sometimes", 2]
    | ["Weekly", 3]
    | ["Daily", 4]

export class VFISOption implements IOption {
    id: number
    optionTuple: VFIS_OPTIONS
    constructor(optionText: VFIS_OPTIONS) {
        this.id = getUniqueNumber()
        this.optionTuple = optionText
    }
}

/**
 * Represents a question in the UDI6 survey.
 */
export class VFISQuestion implements IQuestion {
    /** The unique identifier for the question. */
    id: number
    /** The text of the question. */
    prompt: string
    /** The currently selected option for the question. */
    selectedAnswer: IOption | undefined
    /** The available options for the question. */
    options: IOption[]

    /**
     * Creates a new UDI6Question instance.
     * @param id - The unique identifier for the question.
     * @param question - The text of the question.
     * @param options - The available options for the question.
     */
    constructor(id: number, question: string, options: IOption[]) {
        this.id = id
        this.prompt = question
        this.options = options
    }
}
