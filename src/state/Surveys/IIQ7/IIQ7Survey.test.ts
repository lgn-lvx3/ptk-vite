import { translate } from "utils/i18n"
import { generateBaseQuestions } from "utils/TestHelpers"
import { IScale } from "state/ISurvey/IScale"
import { IIQ7Survey } from "./IIQ7Survey"

const questionsTotal = 7
const optionScale = [0, 1, 2, 3]

describe("IIQ7Survey", () => {
    let survey: IIQ7Survey

    beforeEach(() => {
        survey = new IIQ7Survey()
    })

    describe("constructor", () => {
        it("should set the survey name to 'IIQ-7'", () => {
            expect(survey.title).toBe("IIQ-7")
        })
        it("should set the survey subtitle", () => {
            expect(survey.subtitle).toBe("Incontinence Impact Questionnaire")
        })
        it("should only have one scale", () => {
            expect(survey.scales.length).toBe(1)
        })
        it("should have scale count of 7", () => {
            const scale = "IIQ7"
            const scaleQuestions = survey.questionSets.reduce((acc, curr) => {
                // find all scale 1 questions in this questionSet
                const scaleQuestions = curr.questions.filter(
                    (q) => q.prompt.scaleId === scale,
                )
                return acc + scaleQuestions.length
            }, 0)
            expect(scaleQuestions).toBe(7)
        })
        it("should have scale id of IIQ7", () => {
            expect(survey.scales[0].id).toBe("IIQ7")
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
            const maxScaleScore = 21

            // generate 7 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
                translate("IIQ7.scales") as unknown as IScale[],
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

            // generate 7 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
                translate("IIQ7.scales") as unknown as IScale[],
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
            // generate 7 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                questionsTotal,
                optionScale,
                translate("IIQ7.scales") as unknown as IScale[],
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
            const completedScore = Math.round((totalScore / 21) * 100)
            survey.calculateScore()

            expect(survey.scales[0].percentageScore).toBe(completedScore)
        })
    })
})
