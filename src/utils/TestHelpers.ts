// Generates base questions for testing a survey,
// takes in the number of questions and the options
// to be used for each question. The scale is the values

import { BaseOption, BaseQuestion } from "state/ISurvey/AbstractBaseSurvey"

/**
 * Generates an array of BaseQuestion objects with the specified number of questions and options.
 * @param questionsTotal The number of questions to generate.
 * @param optionScale An array of numbers representing the scale of options to generate.
 * @returns An array of BaseQuestion objects.
 */
export const generateBaseQuestions = (
    questionsTotal: number,
    optionScale: number[],
) => {
    const selected = []
    // generate options
    const options = optionScale.map((scale) => {
        return new BaseOption([scale.toString(), scale])
    })
    for (let i = 0; i < questionsTotal; i++) {
        selected.push(new BaseQuestion(`Q${i}:`, options))
    }
    return selected
}
