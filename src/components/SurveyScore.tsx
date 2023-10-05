import {
    CheckCircleIcon,
    ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline"
import { PDFDownloadLink, pdf } from "@react-pdf/renderer"
import { Button } from "react-daisyui"
import { PDFSurvey } from "./PDFSurvey"
import { useSnackbar } from "notistack"

import { useEffect, useRef, useState } from "react"
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { Alert, Form, Toggle } from "react-daisyui"

import autoAnimate from "@formkit/auto-animate"
import { ISurvey } from "state/ISurvey/ISurvey"
import { translate } from "utils/i18n"
import { useTrackedStore } from "state/Store"

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

/**
 * SurveyScore component displays the survey score and allows the user to download and share the survey results.
 * @param {Props} props - The props object containing the survey data.
 * @returns {JSX.Element} - The SurveyScore component.
 */
const SurveyResults = ({ survey }: Props) => {
    // local state for translations
    const language = useTrackedStore().preferences.language()
    // notistack
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    // local state for translations
    const [scoreText, setScoreText] = useState(translate("disclaimer.score"))
    const [download, setDownload] = useState(translate("disclaimer.download"))
    const [share, setShare] = useState(translate("disclaimer.share"))

    // effect for animations
    const parent = useRef(null)
    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    // handles language changes
    useEffect(() => {
        setScoreText(translate("disclaimer.score"))
        setDownload(translate("disclaimer.download"))
        setShare(translate("disclaimer.share"))
    }, [language])

    return (
        <Alert
            icon={
                <CheckCircleIcon
                    className="mr-3 h-8 w-8 invisible md:visible"
                    aria-hidden="true"
                />
            }
        >
            <div className="prose">
                <h1 className="text-success-content">
                    {scoreText}: {survey?.completedScore} / {survey?.maxScore}
                </h1>
            </div>

            <Button color="neutral" variant="link">
                <PDFDownloadLink
                    document={<PDFSurvey />}
                    fileName={`${survey?.title}-${survey?.id}.pdf`}
                >
                    {download}
                </PDFDownloadLink>
            </Button>

            <Button
                color="neutral"
                endIcon={<ArrowUpOnSquareIcon className="h-5 w-5" />}
                onClick={async () => {
                    try {
                        const pdfBlob = await pdf(<PDFSurvey />).toBlob()
                        if (!navigator?.share) {
                            // throw snackbar error
                            throw new Error("Sharing not supported by browser.")
                        }

                        const pdfFile = new File(
                            [pdfBlob],
                            `${survey?.title}.pdf`,
                            {
                                type: "application/pdf",
                            },
                        )

                        if (!navigator?.canShare({ files: [pdfFile] })) {
                            throw new Error("Browser cannot share file.")
                        }

                        // console.log("attempting to share", pdfFile)

                        await navigator.share({
                            title: `${survey?.title} Results`,
                            files: [pdfFile],
                        })
                    } catch (error: any) {
                        enqueueSnackbar(error.message, {
                            variant: "error",
                        })
                    }
                }}
            >
                {share}
            </Button>
        </Alert>
    )
}
