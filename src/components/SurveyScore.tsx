import {
    CheckCircleIcon,
    ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline"
import { PDFDownloadLink, pdf } from "@react-pdf/renderer"
import { Alert, Button } from "react-daisyui"
import { PDFSurvey } from "./PDFSurvey"
import { ISurvey } from "state/ISurvey/ISurvey"
import { useSnackbar } from "notistack"

type Props = {
    survey: ISurvey | undefined
}

export const SurveyScore = ({ survey }: Props) => {
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
                    Score: {survey?.totalScore} / {survey?.maxScore}
                </h1>
            </div>

            <Button color="neutral" variant="link">
                <PDFDownloadLink
                    document={<PDFSurvey />}
                    fileName={`${survey?.title}.pdf`}
                >
                    Download
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
                Share
            </Button>
        </Alert>
    )
}
