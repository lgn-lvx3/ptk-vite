import { BaseOption } from "state/ISurvey/BaseOption"
import {
    generateAnsweredQuestions,
    generateHighestSelectedQuestion,
} from "utils/TestHelpers"
import { translate } from "utils/i18n"
import { QuestionSetTranslated } from "state/ISurvey/QuestionSetTranslated"
import { PFIQ7Survey } from "./PFIQSurvey"

describe("PFIQ7Survey", () => {
    let survey: PFIQ7Survey

    beforeEach(() => {
        survey = new PFIQ7Survey()
    })

    describe("constructor", () => {
        it("should set the survey name to 'PFIQ-7'", () => {
            expect(survey.title).toBe("PFIQ-7")
        })
        it("should set the survey subtitle", () => {
            expect(survey.subtitle).toBe("Pelvic Floor Impact Questionnaire")
        })
        it("should have 3 scales", () => {
            expect(survey.scales.length).toBe(3)
        })
        it("scale id should be PFIQ7 + index", () => {
            survey.scales.forEach((scale, index) => {
                expect(scale.id).toBe(`PFIQ7-${index + 1}`)
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
        let secondOptions: BaseOption[]
        let thirdOptions: BaseOption[]

        let firstQuestionSet: QuestionSetTranslated
        let secondQuestionSet: QuestionSetTranslated
        let thirdQuestionSet: QuestionSetTranslated

        beforeEach(() => {
            survey = new PFIQ7Survey()
            // generate first questionSet
            firstOptions = [
                new BaseOption(["Not at all", 0]),
                new BaseOption(["Somewhat", 1]),
                new BaseOption(["Moderately", 2]),
                new BaseOption(["Quite a bit", 3]),
            ]

            firstQuestionSet = translate(
                "PFIQ7.questionSets.0",
            ) as unknown as QuestionSetTranslated

            // simulate firstQuestion
            const firstAnswers = generateAnsweredQuestions(
                firstQuestionSet,
                firstOptions,
            )

            survey.selected.push(...firstAnswers)

            // generate second questionSet
            secondOptions = [
                new BaseOption(["Not at all", 0]),
                new BaseOption(["Somewhat", 1]),
                new BaseOption(["Moderately", 2]),
                new BaseOption(["Quite a bit", 3]),
            ]
            secondQuestionSet = translate(
                "PFIQ7.questionSets.1",
            ) as unknown as QuestionSetTranslated
            const secondAnswers = generateAnsweredQuestions(
                secondQuestionSet,
                secondOptions,
            )
            survey.selected.push(...secondAnswers)

            // generate third questionSet
            thirdOptions = [
                new BaseOption(["Not at all", 0]),
                new BaseOption(["Somewhat", 1]),
                new BaseOption(["Moderately", 2]),
                new BaseOption(["Quite a bit", 3]),
            ]
            thirdQuestionSet = translate(
                "PFIQ7.questionSets.2",
            ) as unknown as QuestionSetTranslated
            const thirdAnswers = generateAnsweredQuestions(
                thirdQuestionSet,
                thirdOptions,
            )
            survey.selected.push(...thirdAnswers)
        })

        it("should have a max score of 21 for scale 1", () => {
            const maxScore = 21
            survey.calculateMaxScaleScores()
            expect(survey.scales[0].maxScore).toBe(maxScore)
        })
        it("should have a max score of 21 for scale 2", () => {
            const maxScore = 21
            survey.calculateMaxScaleScores()
            expect(survey.scales[1].maxScore).toBe(maxScore)
        })
        it("should have a max score of 21 for scale 3", () => {
            const maxScore = 21
            survey.calculateMaxScaleScores()
            expect(survey.scales[2].maxScore).toBe(maxScore)
        })

        it("should have 100/100 if the highest value is selected for each scale", () => {
            // for each questionlist, find the option that is the highest value

            survey.selected = []

            const options = [firstOptions, secondOptions, thirdOptions]

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
    })
})
