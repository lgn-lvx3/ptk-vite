import { getUniqueNumber } from "utils"
import { ISurvey, ISurveySection, IQuestion, IOption } from "./ISurvey"

const instructionText = (): JSX.Element => {
    return (
        <>
            Some people find that bladder, bowel, or gential symptoms affect
            their activities, relationships, and feelings. For each question,
            check the response that best describes how much your activities,
            relationships, or feelings have been affected by your bladder,
            bowel, or vaginal symptoms or conditions{" "}
            <strong>over the last 3 months.</strong>Please make sure you mark an
            answer in <strong>all 3 columns</strong> for each question.
        </>
    )
}

export type PFIQ_QUESTION_TYPES =
    | "Bladder or urine"
    | "Bowel or rectum"
    | "Vagina or pelvis"
/**
 * @description Implementation of the UDI-6 survey.
 * @author Logan Hendershot
 * @date 09/29/2023
 * @export
 * @class PFIQSurvey
 * @implements {ISurvey}
 */
export class PFIQSurvey implements ISurvey {
    title = "PFIQ-7"
    subtitle = "urogenital distress inventory"

    instructions = instructionText()

    references = [
        "Barber MD, Kuchibhatla M, Pieper CF, Bump RC. Psychometric Evaluation Of 2 Comprehensive Condition - Specific Quality of Life Instruments for Women with Pelvic Disorders. American Journal of Obstetric and Gynecology Volume 185; November 6, 2001",
    ]

    questionList = [
        "Ability to do household chores (cooking, laundry, housecleaning)?",
        "Ability to do physical activities such as walking, swimming, or other exercise?",
        "Ability to do entertainment activities (movies, concerts, etc.)?",
        "Ability to travel by car or bus for a distance greater than 30 minutes away from home?",
        "Participating in social activities outside your home?",
        "Emotional health (nervousness, depression, etc)?",
        "Feeling frustrated?",
    ]

    interpretation = [
        "The scale is from 0-300. The higher the score, the greater the impairment/disability.",
    ]

    scoring = [
        "All of the items use the following response scale: 0, Not at all; 1, somewhat; 2, moderately; 3, quite a bit.",
    ]

    preSurvey = new Array<ISurveySection>()
    postSurvey = new Array<ISurveySection>()

    totalScore: number | undefined
    maxScore = 100

    questions: IQuestion[] = []
    questionTopics: PFIQ_QUESTION_TYPES[] = [
        "Bladder or urine",
        "Bowel or rectum",
        "Vagina or pelvis",
    ]
    selected: IQuestion[] = []
    completed = false

    constructor() {
        // for each of the questions in question source, create a new question
        // with the question text and options

        const qs = this.questionList.map((question) => {
            const questionsWithTopic = new Array<PFIQQuestion>()
            this.questionTopics.forEach((topic) => {
                return questionsWithTopic.push(
                    new PFIQQuestion(
                        getUniqueNumber(),
                        question,
                        [
                            new PFIQOption(["Not at all", 0]),
                            new PFIQOption(["Somewhat", 1]),
                            new PFIQOption(["Moderately", 2]),
                            new PFIQOption(["Quite a bit", 3]),
                        ],
                        topic,
                    ),
                )
            })
            return questionsWithTopic
        })

        this.postSurvey.push({
            title: "Interpretation",
            values: [...this.interpretation],
        })
        this.postSurvey.push({
            title: "Note",
            values: [
                "The PFIQ-7's standardized assessment form uses the words women and vagina. These words were changed to people and genitals to include other individuals who might need to complete this form. ",
            ],
        })
        this.postSurvey.push({
            title: "Scoring",
            values: [...this.scoring],
        })

        this.postSurvey.push({
            title: "PFIQ-7 Score Scales",
            values: [
                "Urinary Impact Questionnaire (UIQ-7): 7 items under column heading 'Bladder or urine'",
                "Colorectal-Anal Impact questionnaire (CRAIQ-7): 7 items under column heading 'Bowel / rectum'",
                "Pelvic Organ Prolapse Impact Questionnaire (POPIQ-7): Items under column 'Pelvis / Vagina'",
            ],
        })

        this.postSurvey.push({
            title: "Scale Scores",
            values: [
                "Obtain the mean value for all of the answered items within the corresponding scale (possible value 0 - 3) and then multiply by (100/3) to obtain the scale score (range 0-100). Missing items are dealt with by using the mean from answered items only. PFIQ-7 Summary Score: Add the scores from the 3 scales together to obtain the summary score (range 0-300).",
            ],
        })

        this.postSurvey.push({
            title: "Minimally Clinically Important Difference (MCID):",
            values: [
                "36 points or 12% difference.",
                "Barber MD, Walters MD, Bump RC. Short forms of two condition-specific quality-of-life questionnaires for women with pelvic floor disorders (PFDI-20 and PFIQ-7). American journal of obstetrics and gynecology. 2005 Jul 1;193(1):103-13.",
            ],
        })
        this.postSurvey.push({
            title: "References",
            values: [...this.references],
        })
    }

    calculateScore(): void {
        if (this.selected.length !== this.questions.length) {
            throw new Error("Not all questions have been answered")
        }

        // calculate the total score by summing the scores of the selected options
        this.totalScore = this.selected.reduce((acc, curr) => {
            if (!curr.selectedOption) {
                throw new Error("Not all questions have been answered")
            }
            return acc + (curr.selectedOption.optionTuple[1] || 0)
        }, 0)

        // calculate the average
        this.totalScore = this.totalScore / this.selected.length

        // convert to % of 100
        this.totalScore = this.totalScore * 25

        // round it to the nearest integer
        this.totalScore = Math.round(this.totalScore)

        this.completed = true
    }

    selectOption(question: IQuestion, option: IOption): void {
        // if exists in selected, replace
        question.selectedOption = option

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
 * Represents the possible options for a PFIQQuestion.
 */
export type PFIQ_OPTIONS =
    | ["Not at all", 0]
    | ["Somewhat", 1]
    | ["Moderately", 2]
    | ["Quite a bit", 3]

export class PFIQOption implements IOption {
    id: number
    optionTuple: PFIQ_OPTIONS
    constructor(optionText: PFIQ_OPTIONS) {
        this.id = getUniqueNumber()
        this.optionTuple = optionText
    }
}

/**
 * Represents a question in the PFIQ survey.
 */
export class PFIQQuestion implements IQuestion {
    /** The unique identifier for the question. */
    id: number
    /** The text of the question. */
    text: string
    /** The currently selected option for the question. */
    selectedOption: IOption | undefined
    /** The available options for the question. */
    options: IOption[]

    topic: PFIQ_QUESTION_TYPES | undefined

    /**
     * Creates a new PFIQQuestion instance.
     * @param id - The unique identifier for the question.
     * @param question - The text of the question.
     * @param options - The available options for the question.
     */
    constructor(
        id: number,
        question: string,
        options: IOption[],
        topic?: PFIQ_QUESTION_TYPES,
    ) {
        this.id = id
        this.text = question
        this.options = options
        this.topic = topic
    }
}
