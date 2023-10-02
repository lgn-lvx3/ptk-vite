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
export class IIQSurvey implements ISurvey {
    title = "IIQ-7"
    subtitle = "Colorectal-Anal distress Inventory 8"

    instructions =
        "Some people find that accidental urine loss may affect their activities, relationships, and feelings. The questions below refer to areas in your life that may have been influenced or changed by your problem. For each question, circle the response that best describes how much your activities, relationships, and feelings are being affected by urine leakage. Has urine leakage affected your:"

    questionList = [
        "Ability to do household chores (cooking, housecleaning, laundry)?",
        "Physical recreation such as walking, swimming, or other exercise?",
        "Entertainment activities (movies, concerts, etc.)?",
        "Ability to travel by car or bus more than 30 minutes from home?",
        "Participation in social activities outside your home?",
        "Emotional health (nervousness, depression, etc.)?",
        "Feeling frustrated?",
    ]

    interpretation = [
        "The scale is from 0-100. The higher the score, the greater the impairment/disability.",
        "Items 1 and 2 = physical activity",
        "Items 3 and 4 = travel",
        "Item 5 = social/relationships",
        "Items 6 and 7 = emotional health",
    ]

    scoring = [
        "Item responses are assigned values of 0 for 'not at all,' 1 for 'slightly,' 2 for 'moderately,' and 3 for 'greatly.' The average score of items responded to is calculated. The average, which ranges from 0 to 3, is multiplied by 33.3 to put scores on a scale of 0 to 100.",
    ]

    references = [
        "Uebersax, J.S., Wyman, J. F., Shumaker, S. A., McClish, D. K., Fantl, J. A., & the Continence Program for Women Research Group. (1995). Short forms to assess life quality and symptom distress for urinary incontinence in women: The incontinence impact questionnaire and the urogenital distress inventory. Neurourology and Urodynamics, 14, 131-139",
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
        this.questions = this.questionList.map((question) => {
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
            values: [this.interpretation[0]],
        })
        this.postSurvey.push({
            title: "Scoring",
            values: [this.scoring[0]],
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
