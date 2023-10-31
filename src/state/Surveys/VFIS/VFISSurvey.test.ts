import { translate } from "utils/i18n"
import {
    generateAnsweredQuestions,
    generateBaseQuestions,
} from "utils/TestHelpers"
import { IScale } from "state/ISurvey/IScale"
import { VFISSurvey } from "./VFISSurvey"
import { BaseQuestion } from "state/ISurvey/BaseQuestion"
import { BaseOption } from "state/ISurvey/BaseOption"
import { QuestionSetTranslated } from "state/ISurvey/QuestionSetTranslated"

describe("VFISSurvey", () => {
    let survey: VFISSurvey
    const surveyName = "VFIS"
    const surveySubtitle = "Vaizey Fecal Incontinence Score"
    const scaleName = "VFIS"
    const scaleLength = 7
    const maxTotalScore = 24

    beforeEach(() => {
        survey = new VFISSurvey()
    })

    const testSurveyTitleAndSubtitle = () => {
        it(`should set the survey name to ${surveyName}`, () => {
            expect(survey.title).toBe(surveyName)
        })
        it("should set the survey subtitle", () => {
            expect(survey.subtitle).toBe(`${surveySubtitle}`)
        })
    }

    const testScaling = () => {
        it("should only have one scale", () => {
            expect(survey.scales.length).toBe(1)
        })
        it(`should have scale id of ${scaleName}`, () => {
            expect(survey.scales[0].id).toBe(scaleName)
        })
        it("should have scale question count of 7", () => {
            const scaleQuestions = survey.questionSets.reduce((acc, curr) => {
                // find all scale 1 questions in this questionSet
                const scaleQuestions = curr.questions.filter(
                    (q) => q.prompt.scaleId === scaleName,
                )
                return acc + scaleQuestions.length
            }, 0)
            expect(scaleQuestions).toBe(scaleLength)
        })
    }

    const testCalculateScore = () => {
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
            const options = [
                new BaseOption(["0", 0]),
                new BaseOption(["1", 1]),
                new BaseOption(["2", 2]),
                new BaseOption(["3", 3]),
                new BaseOption(["4", 4]),
            ]
            const firstAnswers = generateAnsweredQuestions(
                translate(
                    "VFIS.questionSets.0",
                ) as unknown as QuestionSetTranslated,
                options,
            )

            survey.selected = firstAnswers

            const secondOptions = [
                new BaseOption(["0", 0]),
                new BaseOption(["1", 2]),
            ]
            const secondAnswers = generateAnsweredQuestions(
                translate(
                    "VFIS.questionSets.1",
                ) as unknown as QuestionSetTranslated,
                secondOptions,
            )

            survey.selected.push(...secondAnswers)

            const thirdOptions = [
                new BaseOption(["0", 0]),
                new BaseOption(["1", 4]),
            ]
            const thirdAnswers = generateAnsweredQuestions(
                translate(
                    "VFIS.questionSets.2",
                ) as unknown as QuestionSetTranslated,
                thirdOptions,
            )

            survey.selected.push(...thirdAnswers)

            survey.calculateMaxScaleScores()
            survey.scales.forEach((scale) => {
                expect(scale.maxScore).toBe(maxTotalScore)
            })
        })

        it("should calc the completed score", () => {
            const optionScale = [0, 1, 2, 3, 4]
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
    }

    describe("constructor and", testSurveyTitleAndSubtitle)
    describe("scaling", testScaling)
    describe("calculateScore", testCalculateScore)
})
