import React from "react"
import { ISurveySection } from "state/ISurvey/ISurvey"
import { getUniqueNumber } from "utils"

interface SurveySectionProps {
    section: ISurveySection[] | undefined
}
export const SurveySection: React.FC<SurveySectionProps> = ({ section }) => {
    // no section return
    if (!section) return <></>

    // if we get sections, show em, looping through each content section
    return section.map((section) => (
        <div key={getUniqueNumber()}>
            <h3>{section.title}</h3>
            {section.content.map((content) => (
                <p key={getUniqueNumber()}>{content}</p>
            ))}
        </div>
    ))
}
