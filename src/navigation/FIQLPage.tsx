import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { actions, useTrackedStore } from "state/Store"
import { FIQLSurvey } from "state/Surveys/FIQLSurvey"

export const FIQLPage: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log("Creating new FIQL survey")
        actions.app.survey(new FIQLSurvey())
    }, [])

    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        actions.app.survey(new FIQLSurvey())
    }, [language])

    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
