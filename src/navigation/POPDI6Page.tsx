import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { actions, useTrackedStore } from "state/Store"
import { POPDI6Survey } from "state/Surveys/POPDI-6Survey"

export const POPDI6Page: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log("Creating new survey")
        actions.app.survey(new POPDI6Survey())
    }, [])

    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        actions.app.survey(new POPDI6Survey())
    }, [language])

    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
