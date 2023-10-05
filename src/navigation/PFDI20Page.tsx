import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { actions, useTrackedStore } from "state/Store"
import { PFDI20Survey } from "state/Surveys/PFDI-20Survey"

export const PFDI20Page: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log("Creating new survey")
        actions.app.survey(new PFDI20Survey())
    }, [])

    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        actions.app.survey(new PFDI20Survey())
    }, [language])

    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
