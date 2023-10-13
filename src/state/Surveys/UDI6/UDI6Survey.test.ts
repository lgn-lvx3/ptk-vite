import { translate } from "utils/i18n"
import { UDI6Survey } from "./UDI6Survey"
import { generateBaseQuestions } from "utils/TestHelpers"
import { IScale } from "state/ISurvey/IScale"

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
        it("should only have one scale", () => {
            expect(survey.scales.length).toBe(1)
        })
        it("should have scale count of 6", () => {
            const scale = "UDI6"
            const scaleQuestions = survey.questionSets.reduce((acc, curr) => {
                // find all scale 1 questions in this questionSet
                const scaleQuestions = curr.questions.filter(
                    (q) => q.prompt.scaleId === scale,
                )
                return acc + scaleQuestions.length
            }, 0)
            expect(scaleQuestions).toBe(6)
        })
        it("should have scale id of UDI6", () => {
            expect(survey.scales[0].id).toBe("UDI6")
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
                    prompt: { text: "Test", scaleId: "1" },
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
                translate("UDI6.scales") as unknown as IScale[],
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

        it("should calculate the percentage score of each scale", () => {
            const maxPercentageScore = 100

            // generate 6 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
                translate("UDI6.scales") as unknown as IScale[],
            )

            baseQuestions.forEach((question) => {
                question.selectedAnswer = question.options[3]
                survey.selected.push(question)
            })

            survey.calculateScore()
            survey.scales.forEach((scale) => {
                expect(scale.percentageScore).toBe(maxPercentageScore)
            })
        })

        it("should calc the completed score", () => {
            // generate 6 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
                translate("UDI6.scales") as unknown as IScale[],
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
            // round it to the nearest integer and multiply
            const completedScore = Math.round((totalScore / 18) * 100)
            survey.calculateScore()

            expect(survey.scales[0].percentageScore).toBe(completedScore)
        })
    })
})
