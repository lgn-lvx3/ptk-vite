import React, { useEffect, useRef } from "react"
import { Card, Button, Join, Theme } from "react-daisyui"
import { actions, store, useTrackedStore } from "state/Store"

import { SurveySection } from "./SurveySection"
import { SurveyScore } from "./SurveyScore"

import autoAnimate from "@formkit/auto-animate"

export const BaseSurvey: React.FC = () => {
    const survey = useTrackedStore().app.survey()
    const isComplete = useTrackedStore().app.isComplete()

    useEffect(() => {
        if (isComplete) {
            actions.app.calculateScore()
        }
    }, [isComplete])

    const isSelected = store.app.isSelected

    const parent = useRef(null)
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    // if survey is undefined, return empty fragment
    if (!survey) {
        return <></>
    }

    return (
        <Theme dataTheme={store.preferences.theme()}>
            <div className="" ref={parent}>
                {/* pre survey */}
                <Card className="mb-5 shadow-lg">
                    <Card.Body>
                        <Card.Title className="uppercase">
                            {survey.title}
                        </Card.Title>
                        <Card.Title className="uppercase text-sm text-slate-400">
                            {survey.subtitle}
                        </Card.Title>
                    </Card.Body>
                </Card>
                {/* survey questions */}
                <Card className="card-compact lg:card-normal mt-5 shadow-lg">
                    <Card.Body>
                        {/* question set instructions */}
                        {survey.questionSets.map((questionSet) => (
                            <div key={questionSet.id}>
                                <div className="prose">
                                    <h3>Instructions</h3>
                                    <p>{questionSet.instructions}</p>
                                </div>
                                {/* questions */}
                                {questionSet.questions?.map((question) => (
                                    <div
                                        key={question.id}
                                        className="flex flex-1 flex-col md:flex-row gap-5 justify-start items-center my-5 border-spacing-y-1"
                                    >
                                        <span className="flex flex-1 prose font-semibold">
                                            <h4>{question.prompt}</h4>
                                        </span>
                                        <span>
                                            {/* Options */}
                                            <Join horizontal>
                                                {question.options.map(
                                                    (option) => (
                                                        <Button
                                                            key={option.id}
                                                            color={
                                                                isSelected(
                                                                    option,
                                                                )
                                                                    ? "primary"
                                                                    : undefined
                                                            }
                                                            className="join-item btn-xs md:btn-sm"
                                                            onClick={() => {
                                                                actions.app.upsertOption(
                                                                    question,
                                                                    option,
                                                                )
                                                            }}
                                                        >
                                                            {
                                                                option
                                                                    .optionTuple[0]
                                                            }
                                                        </Button>
                                                    ),
                                                )}
                                            </Join>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Card.Body>
                </Card>

                {isComplete && (
                    <Card className="card-compact lg:card-normal my-5 shadow-lg">
                        <Card.Body>
                            <SurveyScore survey={survey} />
                        </Card.Body>
                    </Card>
                )}
                {/* post survey */}
                <Card className="card-compact lg:card-normal mt-5 shadow-lg">
                    <Card.Body>
                        <div className="prose">
                            {/* note display if exists */}
                            {survey.postSurvey.note && (
                                <SurveySection
                                    section={survey.postSurvey.note}
                                />
                            )}
                            {/* interpretation display */}
                            <SurveySection
                                section={survey.postSurvey.interpretation}
                            />
                            {/* scoring display */}
                            <SurveySection
                                section={survey.postSurvey.scoring}
                            />
                            {/* mcid display */}
                            <SurveySection section={survey.postSurvey.mcid} />
                            {/* references display */}
                            <SurveySection
                                section={survey.postSurvey.references}
                            />
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </Theme>
    )
}
