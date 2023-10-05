import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { actions, useTrackedStore } from "state/Store"
import { PFIQ7Survey } from "state/Surveys/PFIQ-7Survey"

export const PFIQ7Page: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log("Creating new survey")
        actions.app.survey(new PFIQ7Survey())
    }, [])

    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        actions.app.survey(new PFIQ7Survey())
    }, [language])

    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
