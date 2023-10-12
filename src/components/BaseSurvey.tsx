import React, { useEffect, useRef } from "react"
import { Card, Button, Join, Theme } from "react-daisyui"
import { actions, store, useTrackedStore } from "state/Store"

import { SurveySection } from "./SurveySection"
import { SurveyScore } from "./SurveyScore"

import autoAnimate from "@formkit/auto-animate"
import { IOption, IQuestion, IQuestionSet } from "state/ISurvey/ISurvey"
import { useSnackbar } from "notistack"

interface Props {
    questionSet: IQuestionSet
}
export const QuestionSetInstructions: React.FC<Props> = ({ questionSet }) => {
    if (!questionSet.instructions) {
        return null
    }

    return (
        <div className="mb-10 w-full">
            <h4 className="text-gray-400 text-right">{questionSet.title}</h4>
            <h4 className="text-gray-400 uppercase text-sm text-right">
                {questionSet.subtitle}
            </h4>

            <div className="prose mt--10">
                <h2>Instructions</h2>
                {Array.isArray(questionSet.instructions) && (
                    <div className="prose mb-10">
                        {questionSet.instructions.map((instruction, index) => (
                            // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                            <p key={index}>{instruction}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

interface SurveyQuestionCard {
    question: IQuestion
    isSelected: (option: IOption) => boolean
}
export const SurveyQuestionCard: React.FC<SurveyQuestionCard> = ({
    question,
    isSelected,
}) => {
    const joinThreshold = 3
    return (
        <Card compact key={question.id} className="lg:card-normal my-5">
            <Card.Body className="flex flex-1 flex-col md:flex-row gap-5 justify-start items-center">
                <div className="flex flex-1 prose font-semibold self-start">
                    <h4>{question.prompt.text}</h4>
                </div>
                <div className="flex flex-1 flex-col">
                    {/* Buttons/Options */}
                    <Join
                        horizontal={question.options.length <= joinThreshold}
                        vertical={question.options.length > joinThreshold}
                    >
                        {question.options.map((option) => (
                            <Button
                                key={option.id}
                                color={
                                    isSelected(option) ? "primary" : undefined
                                }
                                className="join-item flex-1 text-xs"
                                onClick={() => {
                                    actions.app.upsertOption(question, option)
                                }}
                            >
                                {option.optionTuple[0]}
                            </Button>
                        ))}
                    </Join>
                </div>
            </Card.Body>
        </Card>
    )
}

export const BaseSurvey: React.FC = () => {
    const survey = useTrackedStore().app.survey()
    const isComplete = useTrackedStore().app.isComplete()
    const isSelected = store.app.isSelected
    const parent = useRef(null)

    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    useEffect(() => {
        if (isComplete) {
            try {
                actions.app.calculateScore()
            } catch (e: unknown) {
                console.error(e)
                enqueueSnackbar((e as Error).message, {
                    variant: "error",
                    autoHideDuration: 5000,
                })
            }
        }
    }, [isComplete])

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    // if survey is undefined, return empty fragment
    if (!survey) {
        return <></>
    }
    return (
        <div className="" ref={parent}>
            {/* pre survey */}
            <Card className="mb-5 shadow-lg">
                <Card.Body>
                    <Card.Title className="uppercase">
                        <h1 className="">{survey.title}</h1>
                    </Card.Title>
                    <Card.Title className="uppercase text-sm text-gray-400">
                        {survey.subtitle}
                    </Card.Title>
                    {/* survey instructions */}
                    {survey.surveyInstructions?.map((instruction, index) => (
                        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <p key={index} className="prose mt-5">
                            {instruction}
                        </p>
                    ))}
                </Card.Body>
            </Card>
            {/* survey questions */}
            <Card compact className="lg:card-normal mt-5 shadow-lg">
                <Card.Body>
                    {/* question set instructions */}
                    {survey.questionSets.map((questionSet, index) => (
                        <div key={questionSet.id} className="my-5">
                            {/* QuestionSet instructions */}
                            <QuestionSetInstructions
                                questionSet={questionSet}
                            />
                            {/* questionset questions */}
                            {questionSet.questions.map(
                                (question, index, arr) => (
                                    <SurveyQuestionCard
                                        key={question.id}
                                        question={question}
                                        isSelected={isSelected}
                                    />
                                ),
                            )}
                        </div>
                    ))}
                </Card.Body>
            </Card>

            {isComplete && (
                <Card compact className="lg:card-normal my-5 shadow-lg">
                    <Card.Body>
                        <SurveyScore survey={survey} />
                    </Card.Body>
                </Card>
            )}
            {/* post survey */}
            <Card compact className="lg:card-normal mt-5 shadow-lg">
                <Card.Body>
                    <div className="prose">
                        {/* note display if exists */}
                        {survey.postSurvey.note && (
                            <SurveySection section={survey.postSurvey.note} />
                        )}
                        {/* interpretation display */}
                        <SurveySection
                            section={survey.postSurvey.interpretation}
                        />
                        {/* scoring display */}
                        <SurveySection section={survey.postSurvey.scoring} />
                        {/* mcid display */}
                        <SurveySection section={survey.postSurvey.mcid} />
                        {/* references display */}
                        <SurveySection section={survey.postSurvey.references} />
                    </div>
                </Card.Body>
            </Card>
            {/* Uncomment to see PDF on main screen */}
            {/* <div className="h-screen">
                <PDFViewer className="h-screen w-full">
                    <PDFSurvey />
                </PDFViewer>
            </div> */}
        </div>
    )
}
