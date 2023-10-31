import { translate } from "utils/i18n"
import { generateBaseQuestions } from "utils/TestHelpers"
import { IScale } from "state/ISurvey/IScale"
import { CRAD8Survey } from "./CRAD-8Survey"

describe("CRAD8Survey", () => {
    let survey: CRAD8Survey
    const surveyName = "CRAD-8"
    const surveySubtitle = "Colorectal-Anal distress Inventory"
    const scaleName = "CRAD8"
    const scaleLength = 8
    const maxTotalScore = 32
    const optionScale = [0, 1, 2, 3, 4]

    beforeEach(() => {
        survey = new CRAD8Survey()
    })

    describe("constructor and", () => {
        it(`should set the survey name to ${surveyName}`, () => {
            expect(survey.title).toBe(surveyName)
        })
        it("should set the survey subtitle", () => {
            expect(survey.subtitle).toBe(`${surveySubtitle}`)
        })
    })

    describe("scaling", () => {
        it("should only have one scale", () => {
            expect(survey.scales.length).toBe(1)
        })
        it(`should have scale id of ${scaleName}`, () => {
            expect(survey.scales[0].id).toBe(scaleName)
        })
        it("should have scale question count of 8", () => {
            const scaleQuestions = survey.questionSets.reduce((acc, curr) => {
                // find all scale 1 questions in this questionSet
                const scaleQuestions = curr.questions.filter(
                    (q) => q.prompt.scaleId === scaleName,
                )
                return acc + scaleQuestions.length
            }, 0)
            expect(scaleQuestions).toBe(scaleLength)
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
            const baseQuestions = generateBaseQuestions(
                scaleLength,
                optionScale,
                translate(`${scaleName}.scales`) as unknown as IScale[],
            )

            baseQuestions.forEach((question) => {
                question.selectedAnswer = question.options[3]
                survey.selected.push(question)
            })

            survey.calculateMaxScaleScores()
            survey.scales.forEach((scale) => {
                expect(scale.maxScore).toBe(maxTotalScore)
            })
        })

        it("should calculate the percentage score of each scale", () => {
            const maxPercentageScore = 100

            // generate 6 questions with 4 options each
            const baseQuestions = generateBaseQuestions(
                scaleLength,
                optionScale,
                translate(`${scaleName}.scales`) as unknown as IScale[],
            )

            baseQuestions.forEach((question) => {
                question.selectedAnswer = question.options[4]
                survey.selected.push(question)
            })

            survey.calculateScore()
            survey.scales.forEach((scale) => {
                // console.log(scale)
                expect(scale.percentageScore).toBe(maxPercentageScore)
            })
        })

        it("should calc the completed score", () => {
            const baseQuestions = generateBaseQuestions(
                scaleLength,
                optionScale,
                translate(`${scaleName}.scales`) as unknown as IScale[],
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
            const completedScore = Math.round(
                (totalScore / maxTotalScore) * 100,
            )
            survey.calculateScore()

            expect(survey.scales[0].percentageScore).toBe(completedScore)
        })
    })
})
