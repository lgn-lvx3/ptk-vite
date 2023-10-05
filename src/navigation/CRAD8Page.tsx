import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { actions, useTrackedStore } from "state/Store"
import { CRAD8Survey } from "state/Surveys/CRAD-8Survey"

export const CRAD8Page: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log("Creating new survey")
        actions.app.survey(new CRAD8Survey())
    }, [])

    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        actions.app.survey(new CRAD8Survey())
    }, [language])

    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
