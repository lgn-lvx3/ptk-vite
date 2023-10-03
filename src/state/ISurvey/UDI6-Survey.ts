import { getUniqueNumber } from "utils"
import { ISurvey, ISurveySection, IQuestion, IOption } from "./ISurvey"

/**
 * @description Implementation of the UDI-6 survey.
 * @author Logan Hendershot
 * @date 09/29/2023
 * @export
 * @class UDI6Survey
 * @implements {ISurvey}
 */
export class UDI6Survey implements ISurvey {
    title = "udi-6"
    subtitle = "urogenital distress inventory"

    instructions =
        "For each question, select the value that best describes this problem for you over the past month"

    references = [
        "Uebersax JS, Wyman JF, Shumaker SA, McClish DK, Fantl JA, Continence Program for Women Research Group. Short Forms to Assess Life Quality and Symptom Distress for Urinary Incontinence in Women: The Incontinence Impact Questionnaire and the Urogenital Distress Inventory. Neurourology and Urodynamics. 1995;14: 131-39.",
    ]

    questionPrompt = [
        "Frequent urination?",
        "Urine leakage related to the feeling of urgency?",
        "Urine leakage related to physical activity, coughing or sneezing?",
        "Small amounts of urine leakage (that is drops)?",
        "Difficulty emptying your bladder?",
        "Pain or discomfort in the lower abdominal or genital area?",
    ]

    interpretation = [
        "The scale is from 0-100. The higher the score, the greater the impairment/disability.",
    ]

    scoring = [
        "Each item is scored between 0 (no problem) to 3 (bothered greatly). All scores are summed and multiplied by 6, then multiplied by 25 for the scale score.",
    ]

    preSurvey = new Array<ISurveySection>()
    postSurvey = new Array<ISurveySection>()

    totalScore: number | undefined
    maxScore = 100

    questions: IQuestion[] = []
    selected: IQuestion[] = []
    completed = false

    constructor() {
        // for each of the questions in question source, create a new question
        // with the question text and options
        this.questions = this.questionPrompt.map((question) => {
            return new UDI6Question(getUniqueNumber(), question, [
                new UDI6Option(["Not at all", 0]),
                new UDI6Option(["A little bit", 1]),
                new UDI6Option(["Moderately", 2]),
                new UDI6Option(["Greatly", 3]),
            ])
        })

        this.postSurvey.push({
            title: "Interpretation",
            values: [this.interpretation[0]],
        })
        this.postSurvey.push({
            title: "Scoring",
            values: [this.scoring[0]],
        })
        this.postSurvey.push({
            title: "Minimum Important Difference (MID)",
            values: [
                "Reasonable estimates for MID is an -11 point change.",
                "Anchor-based MID ranged from -22.4 to -6.4 in the study assessing MID Barber, M. D., Spino, C., Janz, N. K., Brubaker, L., Nygaard, I., Nager, C. W., & Wheeler, T. L. (2009).",
                "The minimum important differences for the urinary scales of the pelvic floor distress inventory and Pelvic Floor Impact Questionnaire. American Journal of Obstetrics and Gynecology, 200(5). https://doi.org/10.1016/j.ajog.2009.02.007",
            ],
        })
        this.postSurvey.push({
            title: "References",
            values: [this.references[0]],
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
 * Represents the possible options for a UDI6Question.
 */
export type UDI6_OPTIONS =
    | ["Not at all", 0]
    | ["A little bit", 1]
    | ["Moderately", 2]
    | ["Greatly", 3]

export class UDI6Option implements IOption {
    id: number
    optionTuple: UDI6_OPTIONS
    constructor(optionText: UDI6_OPTIONS) {
        this.id = getUniqueNumber()
        this.optionTuple = optionText
    }
}

/**
 * Represents a question in the UDI6 survey.
 */
export class UDI6Question implements IQuestion {
    /** The unique identifier for the question. */
    id: number
    /** The text of the question. */
    text: string
    /** The currently selected option for the question. */
    selectedOption: IOption | undefined
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
        this.text = question
        this.options = options
    }
}
