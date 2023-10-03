// import { getUniqueNumber } from "utils"
// import { ISurvey, ISurveySection, IQuestion, IOption } from "./ISurvey"

// const instructElement = () => {
//     return (
//         <>
//             <p>
//                 Please answer all of the questions in the following survey.
//                 These questions will ask you if you have certain bowel, bladder,
//                 or pelvic symptoms and, if you do,{" "}
//                 <strong>how much they bother you.</strong>
//                 Answer these by circling the appropriate number. While answering
//                 these questions, please consider your symptoms over the last 3
//                 months. The PFDI-20 has 20 items and 3 scales of your symptoms.
//                 All items use the following format with a response scale from 0
//                 to 4
//             </p>
//             <p>
//                 0 = Not Present
//                 <br />
//                 1 = Not at all
//                 <br />
//                 2 = Somewhat
//                 <br />
//                 3 = Moderately
//                 <br />
//                 4 = Quite a bit
//             </p>
//         </>
//     )
// }
// /**
//  * @description Implementation of the UDI-6 survey.
//  * @author Logan Hendershot
//  * @date 09/29/2023
//  * @export
//  * @class UDI6Survey
//  * @implements {ISurvey}
//  */
// export class PFDI20Survey implements ISurvey {
//     title = "PFDI-20"
//     subtitle = "Pelvic Floor Disability Index"

//     instructions = instructElement()

//     references = [
//         "Barber, M., Walters, M., et al. (2005). 'Short forms of two condition-specific quality of life questionnaires for women with pelvic floor disorders (PFDI-20 and PFIQ -7).' American Journal of Obstetrics and Gynecology 193: 103-113",
//     ]

//     questionPrompts = [
//         "Frequent urination?",
//         "Urine leakage related to the feeling of urgency?",
//         "Urine leakage related to physical activity, coughing or sneezing?",
//         "Small amounts of urine leakage (that is drops)?",
//         "Difficulty emptying your bladder?",
//         "Pain or discomfort in the lower abdominal or genital area?",
//     ]

//     interpretation = [
//         "The scale is from 0-300. The higher the score, the greater the impairment/disability.",
//     ]

//     scoring = [
//         "Scale scores: Obtain the mean value of all of the answered items within the corresponding scale (possible value 0 to 4) and then multiply by 25 to obtain the scale score (range 0 to 100). Missing items are dealt with by using the mean from answered items only.",
//         "PFDI-20 Summary Score: Add the scores from the 3 scales together to obtain the summary score (range 0 to 300).",
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
//             return new PFDIQuestion(getUniqueNumber(), question, [
//                 new PFDIOption(["Not present", 0]),
//                 new PFDIOption(["Not at all", 1]),
//                 new PFDIOption(["Somewhat", 2]),
//                 new PFDIOption(["Moderately", 3]),
//                 new PFDIOption(["Quite a bit", 4]),
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
//             title: "Clinically Meaningful Change",
//             content: [
//                 "Studies have found minimal importance changes (MIC) ranging from 23 to 45",
//                 "Barber MD, Walters MD, Bump RC. Short forms of two condition-specific quality-of-life questionnaires for women with pelvic floor disorders (PFDI-20 adn PFIQ-7). Am J Obstet Gynecol 2005;193:103-113.",
//                 "Gelhorn HL, Coyne KS, Sikirica V, Gauld J, Murphy M. Psychometric evaluation of health-related quality-of-life measures after pelvic organ prolapse surgery. Female pelvic medicine & reconstructive surgery. 2012 Jul 1;18(4):221-6.",
//                 "Utomo E, Blok BF, Steensma AB, Korfage IJ. Validation of the pelvic floor distress inventory (PFDI-20) and pelvic floor impact questionnaire (PFIQ-7) in a Dutch population. International urogynecology journal. 2014 Apr 1;25(4):531-44.",
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
// export type PFDI_OPTIONS =
//     | ["Not present", 0]
//     | ["Not at all", 1]
//     | ["Somewhat", 2]
//     | ["Moderately", 3]
//     | ["Quite a bit", 4]

// export class PFDIOption implements IOption {
//     id: number
//     optionTuple: PFDI_OPTIONS
//     constructor(optionText: PFDI_OPTIONS) {
//         this.id = getUniqueNumber()
//         this.optionTuple = optionText
//     }
// }

// /**
//  * Represents a question in the UDI6 survey.
//  */
// export class PFDIQuestion implements IQuestion {
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
