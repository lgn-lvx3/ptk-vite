import React, { useEffect } from "react"
import { ISurvey } from "../utils/types"
import { Card, Button, Join, Theme } from "react-daisyui"
import { actions, store, useTrackedStore } from "state/Store"
import { SurveyDisclaimer } from "./SurveyDisclaimer"
import { PDFViewer } from "@react-pdf/renderer"
import { PDFSurvey } from "./PDFSurvey"

interface SurveyProps {
    survey: ISurvey | undefined
}

export const BaseSurvey: React.FC<SurveyProps> = ({ survey }) => {
    const newSurvey = useTrackedStore().app.survey() ?? survey
    const isComplete = useTrackedStore().app.isComplete()
    const renderPDF = useTrackedStore().app.renderPDF()

    if (newSurvey) {
        survey = newSurvey
    }
    if (!newSurvey) {
        return <></>
    }

    useEffect(() => {
        if (isComplete) {
            actions.app.calculateScore()
        }
    }, [isComplete])

    return (
        <Theme dataTheme={store.app.theme()}>
            <div className="flex flex-row">
                <div className="">
                    {/* pre survey */}
                    <Card className="mb-5 shadow-lg">
                        <Card.Body>
                            <Card.Title className="uppercase">
                                {newSurvey.title}
                            </Card.Title>
                            <Card.Title className="uppercase text-sm text-slate-400">
                                {newSurvey.subtitle}
                            </Card.Title>
                            <div className="prose">
                                <h3>Instructions</h3>
                                <p>
                                    {newSurvey.instructions.text}{" "}
                                    <strong>
                                        {newSurvey.instructions.timePeriod}.
                                    </strong>
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                    {/* survey questions */}
                    <Card className="card-compact lg:card-normal mt-5 shadow-lg">
                        <Card.Body>
                            {newSurvey.questions.map((question) => (
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
                                                        useTrackedStore().app.isSelected(
                                                            option,
                                                        )
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
                                <SurveyDisclaimer
                                    totalScore={0}
                                    resetScore={() => console.log("resetting")}
                                />
                            </Card.Body>
                        </Card>
                    )}
                    {/* post survey */}
                    <Card className="card-compact lg:card-normal mt-5 shadow-lg">
                        <Card.Body>
                            <div className="prose">
                                {newSurvey.postSurvey?.map((section, index) => (
                                    <div key={section.title}>
                                        <h2>{section.title}</h2>
                                        {section.values.map(
                                            (question, index) => (
                                                // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                                <p key={index}>{question}</p>
                                            ),
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="flex flex-1 w-full">
                    {/* rome-ignore lint/style/useSelfClosingElements: <explanation> */}
                    <PDFViewer>
                        <PDFSurvey />
                    </PDFViewer>
                </div>
            </div>
        </Theme>
    )
}
