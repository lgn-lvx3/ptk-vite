import React, { useEffect } from "react"
import { Badge, Dropdown } from "react-daisyui"
import { SupportedLanguage } from "state/PreferencesStore"
import { actions, store, useTrackedStore } from "state/Store"
import { i18n } from "utils/i18n/translate"
import { redirect } from "react-router-dom"

type Props = {
    value: SupportedLanguage
}
const LanguageButtons: React.FC<Props> = ({ value }) => {
    return (
        <div className="flex flex-1">
            <Badge>{value.code.toLocaleUpperCase()}</Badge>
            <span className="pl-3">{value.name}</span>
        </div>
    )
}

export const LanguageDropdown: React.FC = () => {
    const language = useTrackedStore().preferences.language()
    const supportedLanguages = store.preferences.supportedLanguages()
    // const navigate = useNavigate()
    useEffect(() => {
        console.log(`Setting language to: ${language}`)
        i18n.locale = language
    }, [language])
    return (
        <Dropdown end>
            <Dropdown.Toggle
                className="btn btn-ghost rounded-btn"
                button={false}
            >
                <div className="flex flex-1 flex-row items-center">
                    <Badge>{language.toLocaleUpperCase()}</Badge>
                    <div className="px-2">
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
                    </div>
                    <div>
                        {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                        <svg
                            width="12px"
                            height="12px"
                            className="h-2 w-2 fill-current opacity-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048"
                        >
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
                        </svg>
                    </div>
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {supportedLanguages.map((value) => (
                    <Dropdown.Item
                        key={value.code}
                        className={`${
                            language === value.code ? "active" : ""
                        } my-1`}
                        onClick={() => actions.preferences.language(value.code)}
                    >
                        <LanguageButtons value={value} />
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}
