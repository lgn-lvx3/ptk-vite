import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { actions, useTrackedStore } from "state/Store"
import { IIQ7Survey } from "state/Surveys/IIQ-7Survey"

export const IIQ7Page: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log("Creating new survey")
        actions.app.survey(new IIQ7Survey())
    }, [])

    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        actions.app.survey(new IIQ7Survey())
    }, [language])

    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
