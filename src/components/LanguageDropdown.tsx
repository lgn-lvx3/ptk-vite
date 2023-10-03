import I18n from "i18n-js"
import React, { useEffect } from "react"
import { Dropdown, Badge, Menu, Button } from "react-daisyui"
import { SupportedLanguage } from "state/AppStore"
import { actions, useTrackedStore } from "state/Store"
import { i18n } from "utils/i18n/translate"

type Props = {
    value: [SupportedLanguage, string]
}
const LanguageButtons: React.FC<Props> = ({ value }) => {
    return (
        <>
            <Badge>{value[0].toLocaleUpperCase()}</Badge>
            {value[1]}
        </>
    )
}

export const LanguageDropdown: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    useEffect(() => {
        console.log(`Language changed to: ${language}`)
        i18n.locale = language
    }, [language])
    return (
        <Dropdown end>
            <Dropdown.Toggle
                className="btn btn-ghost rounded-btn"
                button={false}
            >
                {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                >
                    <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z" />
                    <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z" />
                </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-52 mt-4 z-10">
                <Dropdown.Item
                    className={`${language === "en" ? "active" : ""}`}
                    onClick={() => actions.preferences.language("en")}
                >
                    <LanguageButtons value={["en", "English"]} />
                </Dropdown.Item>
                <Dropdown.Item
                    className={`${language === "es" ? "active" : ""}`}
                    onClick={() => actions.preferences.language("es")}
                >
                    <LanguageButtons value={["es", "Español"]} />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
