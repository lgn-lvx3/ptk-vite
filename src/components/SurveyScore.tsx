import { useEffect, useRef, useState } from "react"
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { Alert, Form, Toggle } from "react-daisyui"

import autoAnimate from "@formkit/auto-animate"
import { ISurvey } from "state/ISurvey/ISurvey"
import { translate } from "utils/i18n"
import { useTrackedStore } from "state/Store"
import { SurveyResults } from "./SurveyResults"

/**
 * SurveyScore component displays the survey score and allows the user to download and share the survey results.
 * @param {Props} props - The props object containing the survey data.
 * @returns {JSX.Element} - The SurveyScore component.
 */
type Props = {
    survey: ISurvey | undefined
}
export const SurveyScore = ({ survey }: Props) => {
    const language = useTrackedStore().preferences.language()

    // local state for translations
    const [understand, setUnderstand] = useState(false)
    const [disclaimerText, setDisclaimerText] = useState(
        translate("disclaimer.text"),
    )
    const [understandText, setUnderstandText] = useState(
        translate("disclaimer.understand"),
    )

    const parent = useRef(null)
    // effect for animations
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    // handles language changes
    useEffect(() => {
        setDisclaimerText(translate("disclaimer.text"))
        setUnderstandText(translate("disclaimer.understand"))
    }, [language])

    return (
        <div ref={parent}>
            <Alert
                icon={
                    <ExclamationCircleIcon
                        className="mr-3 h-8 w-8 invisible md:visible"
                        aria-hidden="true"
                    />
                }
            >
                <div className="prose">
                    <p>{disclaimerText}</p>
                </div>
            </Alert>

            <div className="flex items-center">
                <Form className="p-4">
                    <Form.Label title={understandText}>
                        <Toggle
                            checked={understand}
                            onChange={() => {
                                setUnderstand(!understand)
                                if (understand) {
                                    // resetScore()
                                }
                            }}
                            className="m-2"
                            color="primary"
                        />
                    </Form.Label>
                </Form>
            </div>
            {understand ? <SurveyResults survey={survey} /> : null}
        </div>
    )
}
