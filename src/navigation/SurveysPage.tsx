import React, { useEffect } from "react"
import { Card } from "react-daisyui"
import { store, useTrackedStore } from "state/Store"
import { TxKeyPath, translate } from "utils/i18n"
import { Link } from "react-router-dom"

export const SurveysPage: React.FC = () => {
    const surveys = store.app.surveyNavTitles()
    const language = useTrackedStore().preferences.language()

    const getSurveyText = (survey: string) => {
        return translate(survey as TxKeyPath) as unknown as {
            title: string
            subtitle: string
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {surveys.map((survey, index) => {
                const [surveyText, setSurveyText] = React.useState(
                    getSurveyText(survey as TxKeyPath),
                )

                useEffect(() => {
                    setSurveyText(getSurveyText(survey as TxKeyPath))
                }, [language])

                return (
                    <Link to={`/surveys/${survey}`} key={survey}>
                        <Card className="hover:bg-base-200">
                            <Card.Body>
                                <Card.Title>{surveyText.title} →</Card.Title>
                                <p className="uppercase text-sm text-gray-400">
                                    {surveyText.subtitle}
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}
