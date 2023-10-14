import { BaseOption } from "state/ISurvey/BaseOption"
import { IQuestionSet } from "state/ISurvey/ISurvey"
import {
    generateAnsweredQuestions,
    generateHighestSelectedQuestion,
} from "utils/TestHelpers"
import { translate } from "utils/i18n"
import { FIQLSurvey } from "./FIQLSurvey"
import { QuestionSetTranslated } from "state/ISurvey/QuestionSetTranslated"
import { BaseQuestion } from "state/ISurvey/BaseQuestion"

describe("FIQLSurvey", () => {
    let survey: FIQLSurvey

    beforeEach(() => {
        survey = new FIQLSurvey()
    })

    describe("constructor", () => {
        it("should set the survey name to 'FIQL'", () => {
            expect(survey.title).toBe("FIQL")
        })
        it("should set the survey subtitle", () => {
            expect(survey.subtitle).toBe(
                "Fecal Incontinence Quality of Life Scale",
            )
        })
        it("should have 4 scales", () => {
            expect(survey.scales.length).toBe(4)
        })
        it("scale id should be FIQL + index", () => {
            survey.scales.forEach((scale, index) => {
                expect(scale.id).toBe(`FIQL-${index + 1}`)
            })
        })
        it("Scale 1 should have 10 items", () => {
            const scale = "FIQL-1"
            const scaleQuestions = survey.questionSets.reduce((acc, curr) => {
                // find all scale 1 questions in this questionSet
                const scaleQuestions = curr.questions.filter(
                    (q) => q.prompt.scaleId === scale,
                )
                return acc + scaleQuestions.length
            }, 0)
            expect(scaleQuestions).toBe(10)
        })
        it("Scale 2 should have 9 items", () => {
            const scale = "FIQL-2"
            const scaleQuestions = survey.questionSets.reduce((acc, curr) => {
                // find all scale 1 questions in this questionSet
                const scaleQuestions = curr.questions.filter(
                    (q) => q.prompt.scaleId === scale,
                )
                return acc + scaleQuestions.length
            }, 0)
            expect(scaleQuestions).toBe(9)
        })
        it("Scale 3 should have 7 items", () => {
            const scale = "FIQL-3"
            const scaleQuestions = survey.questionSets.reduce((acc, curr) => {
                // find all scale 1 questions in this questionSet
                const scaleQuestions = curr.questions.filter(
                    (q) => q.prompt.scaleId === scale,
                )
                return acc + scaleQuestions.length
            }, 0)
            expect(scaleQuestions).toBe(7)
        })
        it("Scale 4 should have 3 items", () => {
            const scale = "FIQL-4"
            const scaleQuestions = survey.questionSets.reduce((acc, curr) => {
                // find all scale 1 questions in this questionSet
                const scaleQuestions = curr.questions.filter(
                    (q) => q.prompt.scaleId === scale,
                )
                return acc + scaleQuestions.length
            }, 0)
            expect(scaleQuestions).toBe(3)
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
        let lastOpt: BaseOption[]

        let firstQuestionSet: QuestionSetTranslated
        let secondQuestionSet: QuestionSetTranslated
        let thirdQuestionSet: QuestionSetTranslated
        let lastQuest: QuestionSetTranslated
        beforeEach(() => {
            survey = new FIQLSurvey()
            // generate first questionSet
            firstOptions = [
                new BaseOption(["1", 5]),
                new BaseOption(["2", 4]),
                new BaseOption(["3", 3]),
                new BaseOption(["4", 2]),
                new BaseOption(["5", 1]),
            ]

            firstQuestionSet = translate(
                "FIQL.questionSets.0",
            ) as unknown as QuestionSetTranslated

            // simulate firstQuestion
            const firstAnswers = generateAnsweredQuestions(
                firstQuestionSet,
                firstOptions,
            )

            survey.selected.push(...firstAnswers)

            // generate second questionSet
            secondOptions = [
                new BaseOption(["1", 1]),
                new BaseOption(["2", 2]),
                new BaseOption(["3", 3]),
                new BaseOption(["4", 4]),
                new BaseOption(["0", 0]),
            ]
            secondQuestionSet = translate(
                "FIQL.questionSets.1",
            ) as unknown as QuestionSetTranslated
            const secondAnswers = generateAnsweredQuestions(
                secondQuestionSet,
                secondOptions,
            )
            survey.selected.push(...secondAnswers)

            // generate third questionSet
            thirdOptions = [
                new BaseOption(["1", 1]),
                new BaseOption(["2", 2]),
                new BaseOption(["3", 3]),
                new BaseOption(["4", 4]),
                new BaseOption(["0", 0]),
            ]
            thirdQuestionSet = translate(
                "FIQL.questionSets.2",
            ) as unknown as QuestionSetTranslated
            const thirdAnswers = generateAnsweredQuestions(
                thirdQuestionSet,
                thirdOptions,
            )
            survey.selected.push(...thirdAnswers)

            // generate third questionSet
            lastOpt = [
                new BaseOption(["1", 1]),
                new BaseOption(["2", 2]),
                new BaseOption(["3", 3]),
                new BaseOption(["4", 4]),
                new BaseOption(["5", 5]),
                new BaseOption(["6", 6]),
            ]
            lastQuest = translate(
                "FIQL.questionSets.3",
            ) as unknown as QuestionSetTranslated
            const lastAns = generateAnsweredQuestions(lastQuest, lastOpt)
            survey.selected.push(...lastAns)
        })

        it("should have a max score of 40 for scale 1", () => {
            const maxScore = 40
            survey.calculateMaxScaleScores()
            expect(survey.scales[0].maxScore).toBe(maxScore)
        })
        it("should have a max score of 40 for scale 2", () => {
            const maxScore = 36
            survey.calculateMaxScaleScores()
            expect(survey.scales[1].maxScore).toBe(maxScore)
        })
        it("should have a max score of 31 for scale 3", () => {
            const maxScore = 31
            survey.calculateMaxScaleScores()
            expect(survey.scales[2].maxScore).toBe(maxScore)
        })
        it("should have a max score of 12 for scale 4", () => {
            const maxScore = 12
            survey.calculateMaxScaleScores()
            expect(survey.scales[3].maxScore).toBe(maxScore)
        })

        it("should have 100/100 if the highest value is selected for each scale", () => {
            // for each questionlist, find the option that is the highest value

            survey.selected = []

            const options = [firstOptions, secondOptions, thirdOptions, lastOpt]

            const questions = [
                firstQuestionSet,
                secondQuestionSet,
                thirdQuestionSet,
                lastQuest,
            ]

            questions.forEach((question, index) => {
                const val = generateHighestSelectedQuestion(
                    questions[index],
                    options[index],
                )
                survey.selected = [...survey.selected, ...val]
            })

            // survey.calculateScore()
            // console.log("length", survey.getTotalQuestionLength())
            // console.log("length", survey.selected.length)
            survey.calculateScore()
            expect(survey.scales[0].percentageScore).toBe(100)
            expect(survey.scales[1].percentageScore).toBe(100)
            expect(survey.scales[2].percentageScore).toBe(100)
            expect(survey.scales[3].percentageScore).toBe(100)

            // console.log(survey.selected.length)
            // survey.calculateScore()
        })
    })
})
