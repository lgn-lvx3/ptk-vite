import autoAnimate from "@formkit/auto-animate"
import {
    CheckCircleIcon,
    ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline"
import { PDFDownloadLink, pdf } from "@react-pdf/renderer"
import { useSnackbar } from "notistack"
import { useState, useRef, useEffect } from "react"
import { Alert, Button } from "react-daisyui"
import { useTrackedStore } from "state/Store"
import { translate } from "utils/i18n"
import { PDFSurvey } from "./PDFSurvey"
import { ISurvey } from "state/ISurvey/ISurvey"

type Props = {
    survey: ISurvey | undefined
}
export const SurveyResults = ({ survey }: Props) => {
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
        <>
            {survey?.scales.map((scale) => {
                return (
                    <div className="mb-5 flex flex-1" key={scale?.id}>
                        <Alert
                            icon={
                                <CheckCircleIcon
                                    className="mr-3 h-8 w-8 invisible md:visible"
                                    aria-hidden="true"
                                />
                            }
                            className="p-5"
                        >
                            <div className="flex flex-1 w-full items-center justify-between text-base-content">
                                <span className="absolute mb-12 text-xs text-gray-400 uppercase font-semibold">
                                    {survey.title} Scale
                                </span>
                                <h3 className="text-xl font-semibold">
                                    {scale?.name}
                                </h3>
                                <div className="flex flex-row">
                                    <h1 className="text-sm sm:text-4xl font-extrabold">
                                        {scale?.percentageScore}
                                    </h1>
                                    <span className="self-end text-gray-400 font-semibold">
                                        / {100}
                                    </span>
                                </div>
                            </div>
                        </Alert>
                    </div>
                )
            })}
            <div className="flex flex-1 justify-end mt-10">
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
                                throw new Error(translate("errors.sharing"))
                            }

                            const pdfFile = new File(
                                [pdfBlob],
                                `${survey?.title}.pdf`,
                                {
                                    type: "application/pdf",
                                },
                            )

                            if (
                                !navigator?.canShare({
                                    files: [pdfFile],
                                })
                            ) {
                                throw new Error(translate("errors.file"))
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
            </div>
        </>
    )
}
