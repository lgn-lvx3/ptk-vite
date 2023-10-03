import { getUniqueNumber } from "utils"
import { ISurvey, ISurveySection, IQuestion, IOption } from "./ISurvey"

// TODO add instructions / fix

/**
 * @description Implementation of the POPDI-6 survey.
 * @author Logan Hendershot
 * @date 09/29/2023
 * @export
 * @class POPDI-6
 * @implements {ISurvey}
 */
export class POPDI6Survey implements ISurvey {
    title = "POPDI-6"
    subtitle = "Pelvic Organ Prolapse Distress Inventory 6"

    // instructions = {
    //     text: "Please answer all of the questions in the following survey. These questions will ask you if you have certain bowel, bladder, or pelvic symptoms and, if you do, how much they bother you. Answer these by circling the appropriate number. While answering these questions, please consider your symptoms over the last 3 months. The PFDI-20 has 20 items and 3 scales of your symptoms. All items use the following format with a response scale from 0 to 4.",
    //     timePeriod: "over the last 3 months.",
    // }

    // references = [
    //     "Uebersax JS, Wyman JF, Shumaker SA, McClish DK, Fantl JA, Continence Program for Women Research Group. Short Forms to Assess Life Quality and Symptom Distress for Urinary Incontinence in Women: The Incontinence Impact Questionnaire and the Urogenital Distress Inventory. Neurourology and Urodynamics. 1995;14: 131-39.",
    // ]

    questionPrompts = [
        "Usually experience pressure in the lower abdomen?",
        "Usually experience heaviness or dullness in the pelvic area?",
        "Usually have a bulge or something falling out that you can see or feel in your vaginal area?",
        "Ever have to push on the vagina or around the rectum to have or complete a bowel movement?",
        "Usually experience a feeling of incomplete bladder emptying?",
        "Ever had to push on a bulge in the vaginal or perineum area with your fingers to start or complete urination?",
    ]

    interpretation = [
        "The scale is from 0-100. The higher the score, the greater the impairment/disability.",
    ]

    scoring = [
        "The PFDI-20 has 20 items and 3 scales of your symptoms. All items use the following format with a response scale from 0 to 4.",
    ]

    preSurvey = new Array<ISurveySection>()
    postSurvey = new Array<ISurveySection>()

    completedScore: number | undefined
    maxScore = 100

    questionSets: IQuestion[] = []
    selected: IQuestion[] = []
    completed = false

    constructor() {
        // for each of the questions in question source, create a new question
        // with the question text and options
        this.questionSets = this.questionPrompts.map((question) => {
            return new POPDI6Question(getUniqueNumber(), question, [
                new POPDI6Option(["Not Present", 0]),
                new POPDI6Option(["Not at all", 1]),
                new POPDI6Option(["A little bit", 2]),
                new POPDI6Option(["Moderately", 3]),
                new POPDI6Option(["Greatly", 4]),
            ])
        })

        this.postSurvey.push({
            title: "Interpretation",
            content: [this.interpretation[0]],
        })
        this.postSurvey.push({
            title: "Scoring",
            content: [this.scoring[0]],
        })
        // this.postSurvey.push({
        //     title: "Minimum Important Difference (MID)",
        //     values: [
        //         "Reasonable estimates for MID is an -11 point change.",
        //         "Anchor-based MID ranged from -22.4 to -6.4 in the study assessing MID Barber, M. D., Spino, C., Janz, N. K., Brubaker, L., Nygaard, I., Nager, C. W., & Wheeler, T. L. (2009).",
        //         "The minimum important differences for the urinary scales of the pelvic floor distress inventory and Pelvic Floor Impact Questionnaire. American Journal of Obstetrics and Gynecology, 200(5). https://doi.org/10.1016/j.ajog.2009.02.007",
        //     ],
        // })
        // this.postSurvey.push({
        //     title: "References",
        //     values: [this.references[0]],
        // })
    }

    calculateScore(): void {
        if (this.selected.length !== this.questionSets.length) {
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
export type POPDI6_OPTIONS =
    | ["Not Present", 0]
    | ["Not at all", 1]
    | ["A little bit", 2]
    | ["Moderately", 3]
    | ["Greatly", 4]

export class POPDI6Option implements IOption {
    id: number
    optionTuple: POPDI6_OPTIONS
    constructor(optionText: POPDI6_OPTIONS) {
        this.id = getUniqueNumber()
        this.optionTuple = optionText
    }
}

/**
 * Represents a question in the UDI6 survey.
 */
export class POPDI6Question implements IQuestion {
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
