import { BaseSurvey } from "components/BaseSurvey"
import React, { useEffect } from "react"
import { UDI6Survey } from "state/ISurvey/UDI6-Survey"
import { actions, useTrackedStore } from "state/Store"

export const UDI6Page: React.FC = () => {
    useEffect(() => {
        console.log("Creating new survey")
        actions.app.survey(new UDI6Survey())
    }, [])
    return (
        <div>
            <BaseSurvey />
        </div>
    )
}
