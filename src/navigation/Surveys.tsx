import React from "react"
import { Button, Card } from "react-daisyui"
import { store } from "state/Store"
import { TxKeyPath, translate } from "utils/i18n"
import { Link } from "react-router-dom"

export const Surveys: React.FC = () => {
    const surveys = store.app.surveyNavTitles()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {surveys.map((survey, index) => {
                const surveyText = translate(
                    survey as TxKeyPath,
                ) as unknown as {
                    title: string
                    subtitle: string
                }
                return (
                    <Link to={`/surveys/${survey}`}>
                        <Card className="hover:bg-base-200">
                            <Card.Body>
                                <Card.Title>{surveyText.title} →</Card.Title>
                                <p className="uppercase text-sm text-slate-400">
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
