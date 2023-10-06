import { UDI6Survey } from "./UDI6-Survey"
import { generateBaseQuestions } from "utils/TestHelpers"

const surveyMaxScore = 100
const questionsTotal = 6
const optionScale = [0, 1, 2, 3]

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

        it("should set the max score to 100", () => {
            expect(survey.maxScore).toBe(surveyMaxScore)
        })
    })

    describe("calculateScore", () => {
        it("should throw an error if no questions have been answered", () => {
            expect(() => survey.calculateScore()).toThrowError(
                "Not all questions have been answered",
            )
        })

        it("should throw an error if not all questions have been answered", () => {
            survey.selected = [
                {
                    id: 0,
                    prompt: "Test",
                    selectedAnswer: undefined,
                    options: [],
                },
            ]
            expect(() => survey.calculateScore()).toThrowError(
                "Not all questions have been answered",
            )
        })

        it("should calculate the total score by summing the scores of the selected options", () => {
            const totalScore = 18

            // generate 6 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
            )

            baseQuestions.forEach((question) => {
                question.selectedAnswer = question.options[3]
                survey.selected.push(question)
            })

            survey.calculateScore()

            expect(survey.totalScore).toBe(totalScore)
        })

        it("should calc the average score by getting total and dividing by length of questions", () => {
            const targetScore = 2

            // generate 6 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
            )

            // set their selected answer to the 3rd option
            baseQuestions.forEach((question) => {
                question.selectedAnswer = question.options[2]
                survey.selected.push(question)
            })

            survey.calculateScore()

            expect(survey.averageScore).toBe(targetScore)
        })

        it("should calc the completed score", () => {
            // generate 6 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
            )

            // set their selected answer to the 3rd option
            baseQuestions.forEach((question) => {
                // select options at random for each question
                const randomIndex = Math.floor(
                    Math.random() * question.options.length,
                )
                question.selectedAnswer = question.options[randomIndex]
                survey.selected.push(question)
            })

            // calculate what the score should be
            const totalScore = survey.selected.reduce((acc, curr) => {
                return acc + (curr.selectedAnswer?.optionTuple[1] || 0)
            }, 0)

            // calculate the average
            const averageScore = totalScore / survey.selected.length

            // round it to the nearest integer and multiply
            const completedScore = Math.round(averageScore) * 25

            expect(survey.calculateScore()).toBe(completedScore)
        })
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
