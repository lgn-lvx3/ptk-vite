import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { actions, useTrackedStore } from "state/Store"
import { CCFISSurvey } from "state/Surveys/CCFISSurvey"

export const CCFISPage: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log("Creating new survey")
        actions.app.survey(new CCFISSurvey())
    }, [])

    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        actions.app.survey(new CCFISSurvey())
    }, [language])

    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
