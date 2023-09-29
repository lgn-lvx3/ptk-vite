import React, { useState } from "react"
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { SurveyScore } from "./SurveyScore"

type Props = {
    totalScore: number
    resetScore: () => void
}
export const SurveyDisclaimer = ({ totalScore, resetScore }: Props) => {
    const [understand, setUnderstand] = useState(false)

    return (
        <div className="">
            <div className="">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-yellow-100 text-yellow-800">
                    <ExclamationCircleIcon
                        className="mr-3 h-8 w-8 text-yellow-800"
                        aria-hidden="true"
                    />{" "}
                    Disclaimer
                </span>
                <div className="my-5 text-md leading-5 text-gray-500">
                    <p>
                        This tool should NOT be considered as a substitute for
                        any professional medical service, NOR as a substitute
                        for clinical judgment.
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    {/* <!-- On: "bg-indigo-600", Off: "bg-gray-200" --> */}
                    {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <span
                        role="checkbox"
                        onClick={() => {
                            setUnderstand(!understand)
                            if (understand) {
                                resetScore()
                            }
                        }}
                        tabIndex={0}
                        aria-checked="false"
                        aria-labelledby="toggleLabel"
                        className={`${
                            understand ? "bg-indigo-600" : "bg-gray-200"
                        } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                    >
                        {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                        {/* rome-ignore lint/style/useSelfClosingElements: <explanation> */}
                        <span
                            aria-hidden="true"
                            className={`${
                                understand ? "translate-x-5" : "translate-x-0"
                            } inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                        ></span>
                    </span>
                    <span id="toggleLabel">
                        <span className="text-sm leading-5 font-medium text-gray-900">
                            I Understand
                        </span>
                    </span>
                </div>
            </div>
            {understand ? <SurveyScore totalScore={totalScore} /> : null}
        </div>
    )
}
