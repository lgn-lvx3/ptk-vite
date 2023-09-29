import { getUniqueNumber } from "utils"

export interface ISurvey {
    title: string
    subtitle: string
    instructions: ISurveyInstruction

    postSurvey?: ISurveySection[]

    interpretation?: string[]
    scoring?: string[]
    references?: string[]

    totalScore: number | undefined
    maxScore: number | undefined

    questionList: string[]
    questions: Question[]
    selected: Question[]

    completed: boolean

    calculateScore(): void
    selectOption(question: Question, option: Option): void
}

export interface ICompletedSurvey {
    survey: ISurvey
    completed: true
    date: Date
    score: number
    id: string
    uid: string
}

export type UDI6_OPTIONS =
    | ["Not at all", 0]
    | ["A little bit", 1]
    | ["Moderately", 2]
    | ["Greatly", 3]

export interface Option {
    id: number
    optionTuple: [string, number]
}

export interface Question {
    id: number
    text: string
    selectedOption: Option | undefined
    options: Option[]
}

export interface ISurveyInstruction {
    text: string
    timePeriod: string
}

export interface ISurveySection {
    title?: string
    values: string[]
}

export class UDI6Question implements Question {
    id: number
    text: string
    selectedOption: Option | undefined
    options: Option[]
    constructor(id: number, question: string, options: Option[]) {
        this.id = id
        this.text = question
        this.options = options
    }
}

export class UDI6Option implements Option {
    id: number
    optionTuple: UDI6_OPTIONS
    constructor(optionText: UDI6_OPTIONS) {
        this.id = getUniqueNumber()
        this.optionTuple = optionText
    }
}

export class UDI6Survey implements ISurvey {
    title = "udi-6"
    subtitle = "urogenital distress inventory"

    instructions = {
        text: "For each question, select the value that best describes this problem for you",
        timePeriod: "over the past month",
    }

    preSurvey = new Array<ISurveySection>()

    postSurvey = new Array<ISurveySection>()

    references = [
        "Uebersax JS, Wyman JF, Shumaker SA, McClish DK, Fantl JA, Continence Program for Women Research Group. Short Forms to Assess Life Quality and Symptom Distress for Urinary Incontinence in Women: The Incontinence Impact Questionnaire and the Urogenital Distress Inventory. Neurourology and Urodynamics. 1995;14: 131-39.",
    ]

    questionList = [
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

    totalScore: number | undefined
    maxScore = 100

    questions: Question[]
    selected: Question[]
    completed: boolean

    constructor() {
        // for each of the questions in question source, create a new question
        // with the question text and options
        this.questions = this.questionList.map((question) => {
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

        this.selected = []
        this.totalScore = undefined
        this.completed = false
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

    selectOption(question: Question, option: Option): void {
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
