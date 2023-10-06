import { enqueueSnackbar } from "notistack"
import React, { useEffect } from "react"
import { actions, useStore, useTrackedStore } from "state/Store"
import { PFDI20Survey } from "state/Surveys/PFDI-20Survey"
import { UDI6Survey } from "state/Surveys/UDI6/UDI6-Survey"
import { FIQLSurvey } from "state/Surveys/FIQLSurvey"
import { POPDI6Survey } from "state/Surveys/POPDI-6Survey"
import { IIQ7Survey } from "state/Surveys/IIQ-7Survey"
import { VFISSurvey } from "state/Surveys/VFISSurvey"
import { CCFISSurvey } from "state/Surveys/CCFISSurvey"
import { PFIQ7Survey } from "state/Surveys/PFIQ-7Survey"
import { BaseSurvey } from "components/BaseSurvey"
import { SurveyNavTitles } from "state/AppStore"
import { CRAD8Survey } from "state/Surveys/CRAD-8Survey"

interface Props {
    name: SurveyNavTitles
}
export const BaseSurveyPage: React.FC<Props> = ({ name }) => {
    const language = useTrackedStore().preferences.language()

    const handleNameChange = (name: SurveyNavTitles) => {
        switch (name) {
            case "UDI6":
                actions.app.survey(new UDI6Survey())
                break
            case "FIQL":
                actions.app.survey(new FIQLSurvey())
                break
            case "POPDI6":
                actions.app.survey(new POPDI6Survey())
                break
            case "CRAD8":
                actions.app.survey(new CRAD8Survey())
                break
            case "PFDI20":
                actions.app.survey(new PFDI20Survey())
                break
            case "IIQ7":
                actions.app.survey(new IIQ7Survey())
                break
            case "VFIS":
                actions.app.survey(new VFISSurvey())
                break
            case "CCFIS":
                actions.app.survey(new CCFISSurvey())
                break
            case "PFIQ7":
                actions.app.survey(new PFIQ7Survey())
                break
            default:
                // console.log("Invalid survey name", name)
                enqueueSnackbar("Invalid survey name", {
                    variant: "error",
                })
        }
    }

    useEffect(() => {
        handleNameChange(name)
    }, [name, language])

    return <BaseSurvey />
}
