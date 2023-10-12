import { UDI6Survey } from "./UDI6-Survey"
import { generateBaseQuestions } from "utils/TestHelpers"

const questionsTotal = 6
const optionScale = [0, 1, 2, 3]
const scales = [
    {
        id: 1,
        name: "UDI-6 Scale Score",
    },
]

describe("UDI6Survey", () => {
    let survey: UDI6Survey

    beforeEach(() => {
        survey = new UDI6Survey()
    })

    describe("constructor", () => {
        it("should set the survey name to 'UDI-6'", () => {
            expect(survey.title).toBe("UDI-6")
        })
        it("should set the survey subtitle", () => {
            expect(survey.subtitle).toBe("Urogenital Distress Inventory")
        })
    })

    describe("calculateScore", () => {
        it("should throw an error if no questions have been answered", () => {
            expect(() => survey.calculateScore()).toThrowError(
                "Please answer all questions",
            )
        })

        it("should throw an error if not some but not all questions answered", () => {
            survey.selected = [
                {
                    id: 0,
                    prompt: { text: "Test", scaleId: 0 },
                    selectedAnswer: undefined,
                    options: [],
                },
            ]
            expect(() => survey.calculateScore()).toThrowError(
                "Please answer all questions",
            )
        })

        it("should calculate the maxScore of each scale", () => {
            const maxScaleScore = 18

            // generate 6 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
                scales,
            )

            baseQuestions.forEach((question) => {
                question.selectedAnswer = question.options[3]
                survey.selected.push(question)
            })

            survey.calculateMaxScaleScores()
            survey.scales.forEach((scale) => {
                expect(scale.maxScore).toBe(maxScaleScore)
            })
        })

        // it("should calc the average score by getting total and dividing by length of questions", () => {
        //     const targetScore = 2

        //     // generate 6 questions with 4 options each
        //     const baseQuestions = generateBaseQuestions(
        //         questionsTotal,
        //         optionScale,
        //     )

        //     // set their selected answer to the 3rd option
        //     baseQuestions.forEach((question) => {
        //         question.selectedAnswer = question.options[2]
        //         survey.selected.push(question)
        //     })

        //     survey.calculateScore()

        //     expect(survey.averageScore).toBe(targetScore)
        // })

        // it("should calc the completed score", () => {
        //     // generate 6 questions with 4 options each
        //     const baseQuestions = generateBaseQuestions(
        //         questionsTotal,
        //         optionScale,
        //     )

        //     // set their selected answer to the 3rd option
        //     baseQuestions.forEach((question) => {
        //         // select options at random for each question
        //         const randomIndex = Math.floor(
        //             Math.random() * question.options.length,
        //         )
        //         question.selectedAnswer = question.options[randomIndex]
        //         survey.selected.push(question)
        //     })

        //     // calculate what the score should be
        //     const totalScore = survey.selected.reduce((acc, curr) => {
        //         return acc + (curr.selectedAnswer?.optionTuple[1] || 0)
        //     }, 0)

        //     // calculate the average
        //     // round it to the nearest integer and multiply
        //     const completedScore = Math.round((totalScore / 18) * 100)

        //     expect(survey.calculateScore()).toBe(completedScore)
        // })
    })

    //     it("should calculate the total score by summing the scores of the selected options", () => {
    //         survey.selected = [
    //             { selectedAnswer: [1, 2] },
    //             { selectedAnswer: [3, 4] },
    //             { selectedAnswer: [5, 6] },
    //             { selectedAnswer: [7, 8] },
    //             { selectedAnswer: [9, 10] },
    //             { selectedAnswer: [11, 12] },
    //         ]
    //         expect(survey.calculateScore()).toBe(50)
    //     })

    //     it("should calculate the average", () => {
    //         survey.selected = [
    //             { selectedAnswer: [1, 2] },
    //             { selectedAnswer: [3, 4] },
    //             { selectedAnswer: [5, 6] },
    //             { selectedAnswer: [7, 8] },
    //             { selectedAnswer: [9, 10] },
    //             { selectedAnswer: [11, 12] },
    //         ]
    //         survey.calculateScore()
    //         expect(survey.completedScore).toBe(2.5)
    //     })

    //     it("should convert to % of 100", () => {
    //         survey.selected = [
    //             { selectedAnswer: [1, 2] },
    //             { selectedAnswer: [3, 4] },
    //             { selectedAnswer: [5, 6] },
    //             { selectedAnswer: [7, 8] },
    //             { selectedAnswer: [9, 10] },
    //             { selectedAnswer: [11, 12] },
    //         ]
    //         survey.calculateScore()
    //         expect(survey.completedScore).toBe(63)
    //     })

    //     it("should round it to the nearest integer", () => {
    //         survey.selected = [
    //             { selectedAnswer: [1, 2] },
    //             { selectedAnswer: [3, 4] },
    //             { selectedAnswer: [5, 6] },
    //             { selectedAnswer: [7, 8] },
    //             { selectedAnswer: [9, 10] },
    //             { selectedAnswer: [11, 12] },
    //         ]
    //         survey.calculateScore()
    //         expect(survey.completedScore).toBe(63)
    //     })

    //     it("should set completed to true", () => {
    //         survey.selected = [
    //             { selectedAnswer: [1, 2] },
    //             { selectedAnswer: [3, 4] },
    //             { selectedAnswer: [5, 6] },
    //             { selectedAnswer: [7, 8] },
    //             { selectedAnswer: [9, 10] },
    //             { selectedAnswer: [11, 12] },
    //         ]
    //         survey.calculateScore()
    //         expect(survey.completed).toBe(true)
    //     })
    // })
})
