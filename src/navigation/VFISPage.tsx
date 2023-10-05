import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { actions, useTrackedStore } from "state/Store"
import { VFISSurvey } from "state/Surveys/VFISSurvey"

export const VFISPage: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log("Creating new survey")
        actions.app.survey(new VFISSurvey())
    }, [])

    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        actions.app.survey(new VFISSurvey())
    }, [language])

    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
