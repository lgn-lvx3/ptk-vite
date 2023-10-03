import {
    CheckCircleIcon,
    ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline"
import { PDFDownloadLink, pdf } from "@react-pdf/renderer"
import { Button } from "react-daisyui"
import { PDFSurvey } from "./PDFSurvey"
import { useSnackbar } from "notistack"

import React, { useEffect, useRef, useState } from "react"
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { Alert, Form, Toggle } from "react-daisyui"

import autoAnimate from "@formkit/auto-animate"
import { ISurvey } from "state/ISurvey/ISurvey"
import { translate } from "utils/i18n"

type Props = {
    survey: ISurvey | undefined
}

export const SurveyScore = ({ survey }: Props) => {
    const [understand, setUnderstand] = useState(false)
    const parent = useRef(null)

    const disclaimerText = translate("disclaimer")
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
                    <p>{translate("disclaimer.text")}</p>
                </div>
            </Alert>

            <div className="flex items-center">
                <Form className="p-4">
                    <Form.Label title={translate("disclaimer.understand")}>
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

const SurveyResults = ({ survey }: Props) => {
    // notistack
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    //
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
                    Score: {survey?.completedScore} / {survey?.maxScore}
                </h1>
            </div>

            <Button color="neutral" variant="link">
                <PDFDownloadLink
                    document={<PDFSurvey />}
                    fileName={`${survey?.title}.pdf`}
                >
                    {translate("download")}
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

                        console.log("attempting to share", pdfFile)

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
                {translate("share")}
            </Button>
        </Alert>
    )
}
