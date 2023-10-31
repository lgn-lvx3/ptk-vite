import { BaseOption } from "state/ISurvey/BaseOption"
import {
    generateAnsweredQuestions,
    generateHighestSelectedQuestion,
} from "utils/TestHelpers"
import { translate } from "utils/i18n"
import { PFDI20Survey } from "./PFDI20Survey"
import { QuestionSetTranslated } from "state/ISurvey/QuestionSetTranslated"

describe("PFDI20Survey", () => {
    let survey: PFDI20Survey

    beforeEach(() => {
        survey = new PFDI20Survey()
    })

    describe("constructor", () => {
        it("should set the survey name to 'PFDI-20'", () => {
            expect(survey.title).toBe("PFDI-20")
        })
        it("should set the survey subtitle", () => {
            expect(survey.subtitle).toBe("Pelvic Floor Disability Index")
        })
        it("should have 3 scales", () => {
            expect(survey.scales.length).toBe(3)
        })
        it("scale id should be POPDI6, CRAD8, UDI6", () => {
            const scales = ["POPDI6", "CRAD8", "UDI6"]
            survey.scales.forEach((scale, index) => {
                expect(scale.id).toBe(`${scales[index]}`)
            })
        })
    })

    describe("calculateScore should throw", () => {
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
    })

    describe("calculateScaleScores", () => {
        let firstOptions: BaseOption[]

        let firstQuestionSet: QuestionSetTranslated
        let secondQuestionSet: QuestionSetTranslated
        let thirdQuestionSet: QuestionSetTranslated
        beforeEach(() => {
            survey = new PFDI20Survey()
            // generate first questionSet
            firstOptions = [
                new BaseOption(["0", 0]),
                new BaseOption(["1", 1]),
                new BaseOption(["2", 2]),
                new BaseOption(["3", 3]),
                new BaseOption(["4", 4]),
            ]

            firstQuestionSet = translate(
                "PFDI20.questionSets.0",
            ) as unknown as QuestionSetTranslated

            // simulate firstQuestion
            const firstAnswers = generateAnsweredQuestions(
                firstQuestionSet,
                firstOptions,
            )

            survey.selected.push(...firstAnswers)

            // generate second questionSet
            secondQuestionSet = translate(
                "PFDI20.questionSets.1",
            ) as unknown as QuestionSetTranslated
            const secondAnswers = generateAnsweredQuestions(
                secondQuestionSet,
                firstOptions,
            )
            survey.selected.push(...secondAnswers)

            thirdQuestionSet = translate(
                "PFDI20.questionSets.2",
            ) as unknown as QuestionSetTranslated
            const thirdAnswers = generateAnsweredQuestions(
                thirdQuestionSet,
                firstOptions,
            )
            survey.selected.push(
                ...firstAnswers,
                ...secondAnswers,
                ...thirdAnswers,
            )
        })

        it("should have a max score of 24 for scale POPDI6 Scale", () => {
            const maxScore = 24
            survey.calculateMaxScaleScores()
            expect(survey.scales[0].maxScore).toBe(maxScore)
        })
        it("should have a max score of 32 for scale CRAD8", () => {
            const maxScore = 32
            survey.calculateMaxScaleScores()
            expect(survey.scales[1].maxScore).toBe(maxScore)
        })
        it("should have a max score of 24 for UDI6", () => {
            const maxScore = 24
            survey.calculateMaxScaleScores()
            expect(survey.scales[2].maxScore).toBe(maxScore)
        })

        it("should have 100/100 if the highest value is selected for each scale", () => {
            // for each questionlist, find the option that is the highest value

            survey.selected = []

            const options = [firstOptions, firstOptions, firstOptions]

            const questions = [
                firstQuestionSet,
                secondQuestionSet,
                thirdQuestionSet,
            ]

            questions.forEach((question, index) => {
                const val = generateHighestSelectedQuestion(
                    questions[index],
                    options[index],
                )
                survey.selected = [...survey.selected, ...val]
            })

            survey.calculateScore()
            expect(survey.scales[0].percentageScore).toBe(100)
            expect(survey.scales[1].percentageScore).toBe(100)
            expect(survey.scales[2].percentageScore).toBe(100)
        })

        it("should calculate correct score when random options are selected", () => {
            survey.selected = []

            const options = [firstOptions, firstOptions, firstOptions]

            const questions = [
                firstQuestionSet,
                secondQuestionSet,
                thirdQuestionSet,
            ]

            questions.forEach((question, index) => {
                const val = generateAnsweredQuestions(
                    questions[index],
                    options[index],
                )
                survey.selected = [...survey.selected, ...val]
            })

            survey.calculateScore()
            expect(survey.scales[0].score).toBeGreaterThanOrEqual(0)
            expect(survey.scales[0].score).toBeLessThanOrEqual(100)
            expect(survey.scales[1].score).toBeGreaterThanOrEqual(0)
            expect(survey.scales[1].score).toBeLessThanOrEqual(100)
            expect(survey.scales[2].score).toBeGreaterThanOrEqual(0)
            expect(survey.scales[2].score).toBeLessThanOrEqual(100)
        })
    })
})
