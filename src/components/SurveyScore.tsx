import {
    CheckCircleIcon,
    ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline"
import { PDFDownloadLink, pdf } from "@react-pdf/renderer"
import { Alert, Button } from "react-daisyui"
import { PDFSurvey } from "./PDFSurvey"
import { ISurvey } from "state/ISurvey/ISurvey"
import { useState } from "react"

type Props = {
    survey: ISurvey | undefined
}

export const SurveyScore = ({ survey }: Props) => {
    const [blob, setBlob] = useState<Blob | null>(null)

    //
    return (
        <Alert
            icon={
                <CheckCircleIcon className="mr-3 h-8 w-8" aria-hidden="true" />
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
                    onClick={async () => {
                        console.log("onClick")
                    }}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download"
                    }
                </PDFDownloadLink>
            </Button>

            <Button
                color="neutral"
                endIcon={<ArrowUpOnSquareIcon className="h-5 w-5" />}
                onClick={async () => {
                    const blob = await pdf(<PDFSurvey />).toBlob()
                    console.log("attempting to share")
                    if (navigator?.share) {
                        console.log("navigator.share")
                        navigator
                            .share({
                                title: `${survey?.title} Results`,
                                files: [
                                    new File([blob], `${survey?.title}.pdf`, {
                                        type: "application/pdf",
                                    }),
                                ],
                            })
                            .then(() => console.log("Successful share"))
                            .catch((error) =>
                                console.log("Error sharing", error),
                            )
                    }
                }}
            >
                Share
            </Button>
            {/* </PDFDownloadLink> */}
        </Alert>
    )
}
