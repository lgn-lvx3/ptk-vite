// import { getUniqueNumber } from "utils"
// import { ISurvey, ISurveySection, IQuestion, IOption } from "./ISurvey"

// // TODO add instructions / fix

// /**
//  * @description Implementation of the CCFISSurvey survey.
//  * @author Logan Hendershot
//  * @date 09/29/2023
//  * @export
//  * @class CCFISSurvey
//  * @implements {ISurvey}
//  */
// export class CCFISSurvey implements ISurvey {
//     title = "CCFIS"
//     subtitle = "Cleveland Clinic Fecal Incontinence Score"

//     instructions =
//         "Please select one answer for each question to indicate how often you experience the following symptoms."

//     questionPrompts = [
//         "Solid stool leakage",
//         "Liquid stool leakage",
//         "Gas leakage",
//         "Pad use (for stool)",
//         "Lifestyle restriction",
//     ]

//     interpretation = [
//         "The scale is from 0-20. The higher the score, the greater the impairment/disability.",
//     ]

//     scoring = [
//         "Below is the score associated with each definition",
//         "Never: 0, Rarely: 1, Sometimes: 2, Weekly: 3, Daily: 4",
//         "The scores for each question are added together to produce a final score (max is 20 points).",
//     ]

//     references = [
//         "Jorge JM, Wexner SD. Etiology and management of fecal incontinence. Dis Colon Rectum. 1993 Jan;36(1):77-97.",
//     ]

//     preSurvey = new Array<ISurveySection>()
//     postSurvey = new Array<ISurveySection>()

//     completedScore: number | undefined
//     maxScore = 100

//     questions: IQuestion[] = []
//     selected: IQuestion[] = []
//     completed = false

//     constructor() {
//         // for each of the questions in question source, create a new question
//         // with the question text and options
//         this.questions = this.questionPrompts.map((question) => {
//             return new CCFISQuestion(getUniqueNumber(), question, [
//                 new CCFISOption(["Never", 0]),
//                 new CCFISOption(["Rarely", 1]),
//                 new CCFISOption(["Sometimes", 2]),
//                 new CCFISOption(["Weekly", 3]),
//                 new CCFISOption(["Daily", 4]),
//             ])
//         })

//         this.postSurvey.push({
//             title: "Interpretation",
//             content: [...this.interpretation],
//         })
//         this.postSurvey.push({
//             title: "Scoring",
//             content: [...this.scoring],
//         })
//         this.postSurvey.push({
//             title: "Minimal Clinical Important Difference (MCID)",
//             content: [
//                 "Reasonable estimates for MCID is an -2 to -3 points change.",
//                 "Bols EM, Hendriks HJ, Berghmans LC, et al. Responsiveness and interpretability of incontinence severity scores and FIQL in patients with fecal incontinence: a secondary analysis from a randomized controlled trial. International Urogynecology Journal. 2013 Mar;24(3):469-78.",
//             ],
//         })
//         this.postSurvey.push({
//             title: "References",
//             content: [...this.references],
//         })
//     }

//     calculateScore(): void {
//         if (this.selected.length !== this.questions.length) {
//             throw new Error("Not all questions have been answered")
//         }

//         // calculate the total score by summing the scores of the selected options
//         this.completedScore = this.selected.reduce((acc, curr) => {
//             if (!curr.selectedAnswer) {
//                 throw new Error("Not all questions have been answered")
//             }
//             return acc + (curr.selectedAnswer.optionTuple[1] || 0)
//         }, 0)

//         // calculate the average
//         this.completedScore = this.completedScore / this.selected.length

//         // convert to % of 100
//         this.completedScore = this.completedScore * 25

//         // round it to the nearest integer
//         this.completedScore = Math.round(this.completedScore)

//         this.completed = true
//     }

//     selectOption(question: IQuestion, option: IOption): void {
//         // if exists in selected, replace
//         question.selectedAnswer = option

//         // if the question is already selected, replace the selected option
//         const index = this.selected.findIndex((q) => q.id === question.id)
//         if (index !== -1) {
//             this.selected[index] = question
//         } else {
//             this.selected.push(question)
//         }
//     }
// }

// /**
//  * Represents the possible options for a UDI6Question.
//  */
// export type CCFIS_OPTIONS =
//     | ["Never", 0]
//     | ["Rarely", 1]
//     | ["Sometimes", 2]
//     | ["Weekly", 3]
//     | ["Daily", 4]

// export class CCFISOption implements IOption {
//     id: number
//     optionTuple: CCFIS_OPTIONS
//     constructor(optionText: CCFIS_OPTIONS) {
//         this.id = getUniqueNumber()
//         this.optionTuple = optionText
//     }
// }

// /**
//  * Represents a question in the UDI6 survey.
//  */
// export class CCFISQuestion implements IQuestion {
//     /** The unique identifier for the question. */
//     id: number
//     /** The text of the question. */
//     prompt: string
//     /** The currently selected option for the question. */
//     selectedAnswer: IOption | undefined
//     /** The available options for the question. */
//     options: IOption[]

//     /**
//      * Creates a new UDI6Question instance.
//      * @param id - The unique identifier for the question.
//      * @param question - The text of the question.
//      * @param options - The available options for the question.
//      */
//     constructor(id: number, question: string, options: IOption[]) {
//         this.id = id
//         this.prompt = question
//         this.options = options
//     }
// }
