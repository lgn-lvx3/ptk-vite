import React, { useEffect, useRef, useState } from "react"
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { SurveyScore } from "./SurveyScore"
import { Alert, Form, Toggle } from "react-daisyui"

import autoAnimate from "@formkit/auto-animate"
import { ISurvey } from "state/ISurvey/ISurvey"

type Props = {
    survey: ISurvey | undefined
}

export const SurveyDisclaimer = ({ survey }: Props) => {
    const [understand, setUnderstand] = useState(false)
    const parent = useRef(null)
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

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
                    <p>
                        This tool should NOT be considered as a substitute for
                        any professional medical service, NOR as a substitute
                        for clinical judgment.
                    </p>
                </div>
            </Alert>

            <div className="flex items-center">
                <Form className="p-4">
                    <Form.Label title="I Understand">
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
            {understand ? <SurveyScore survey={survey} /> : null}
        </div>
    )
}
