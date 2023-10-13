// Generates base questions for testing a survey,
// takes in the number of questions and the options
// to be used for each question. The scale is the values

import { BaseOption } from "state/ISurvey/BaseOption"
import { BaseQuestion } from "state/ISurvey/BaseQuestion"
import { BaseQuestionSet } from "state/ISurvey/BaseQuestionSet"
import { IScale } from "state/ISurvey/IScale"
import { IQuestionSet } from "state/ISurvey/ISurvey"
import { QuestionSetTranslated } from "state/ISurvey/QuestionSetTranslated"

/**
 * Generates an array of BaseQuestion objects with the specified number of questions and options.
 * @param questionsTotal The number of questions to generate.
 * @param optionScale An array of numbers representing the scale of options to generate.
 * @returns An array of BaseQuestion objects.
 */
export const generateBaseQuestions = (
    questionsTotal: number,
    optionScale: number[],
    scales: IScale[],
) => {
    const selected = []
    // generate options
    const options = optionScale.map((scale) => {
        return new BaseOption([scale.toString(), scale])
    })
    for (let i = 0; i < questionsTotal; i++) {
        // randomly select a scale
        const scale = scales[Math.floor(Math.random() * scales.length)]
        selected.push(
            new BaseQuestion(
                { text: `Question ${i} Prompt`, scaleId: scale.id },
                options,
            ),
        )
    }
    return selected
}

export const generateAnsweredQuestions = (
    questionSet: QuestionSetTranslated,
    options: BaseOption[],
) => {
    const selected: BaseQuestion[] = []
    // generate options

    questionSet.prompts.forEach((prompt) => {
        const selectedOption =
            options[Math.floor(Math.random() * options.length)]
        const selectedQuestion = new BaseQuestion(prompt, options)
        selectedQuestion.selectedAnswer = selectedOption
        selected.push(selectedQuestion)
    })

    return selected
}
