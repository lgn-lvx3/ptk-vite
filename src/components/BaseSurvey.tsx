import React, { useEffect, useRef } from "react"
import { Card, Button, Join, Theme } from "react-daisyui"
import { actions, store, useTrackedStore } from "state/Store"
import { SurveyDisclaimer } from "./SurveyDisclaimer"
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

    if (!survey) {
        return <></>
    }

    return (
        <Theme dataTheme={store.app.theme()}>
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
                        <div className="prose mt-10">
                            <h3>Instructions</h3>
                            <p>{survey.instructions}</p>
                        </div>
                    </Card.Body>
                </Card>
                {/* survey questions */}
                <Card className="card-compact lg:card-normal mt-5 shadow-lg">
                    <Card.Body>
                        {survey.questions.map((question) => (
                            <div
                                key={question.id}
                                className="flex flex-1 flex-col md:flex-row gap-5 justify-start items-center my-5 border-spacing-y-1"
                            >
                                <span className="flex flex-1 prose font-semibold">
                                    {/* Questions */}
                                    <h4>{question.text}</h4>
                                </span>
                                <span>
                                    {/* Options */}
                                    <Join horizontal>
                                        {question.options.map((option) => (
                                            <Button
                                                key={option.id}
                                                color={
                                                    isSelected(option)
                                                        ? "primary"
                                                        : undefined
                                                }
                                                className="join-item btn-xs md:btn-md"
                                                onClick={() => {
                                                    actions.app.upsertOption(
                                                        question,
                                                        option,
                                                    )
                                                }}
                                            >
                                                {option.optionTuple[0]}
                                            </Button>
                                        ))}
                                    </Join>
                                </span>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
                {isComplete && (
                    <Card className="card-compact lg:card-normal my-5 shadow-lg">
                        <Card.Body>
                            <SurveyDisclaimer survey={survey} />
                        </Card.Body>
                    </Card>
                )}
                {/* post survey */}
                <Card className="card-compact lg:card-normal mt-5 shadow-lg">
                    <Card.Body>
                        <div className="prose">
                            {survey.postSurvey?.map((section, index) => (
                                <div key={section.title}>
                                    <h2>{section.title}</h2>
                                    {section.values.map((question, index) => (
                                        // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                        <p key={index}>{question}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </div>
            {/* <div className="flex flex-1 w-full">
                    <PDFViewer>
                        <PDFSurvey />
                    </PDFViewer>
                </div> */}
        </Theme>
    )
}
