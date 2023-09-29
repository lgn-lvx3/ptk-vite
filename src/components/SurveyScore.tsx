import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { Button } from "react-daisyui"

type Props = {
    totalScore: number
}
export const SurveyScore = ({ totalScore }: Props) => {
    return (
        <div className="bg-indigo-600 rounded-md">
            <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-indigo-800">
                            <CheckCircleIcon
                                className="mr-3 h-8 w-8 text-white"
                                aria-hidden="true"
                            />
                        </span>
                        <p className="ml-3 font-medium text-white truncate">
                            <span className="hidden md:inline">
                                Your Score: {totalScore}/100
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
