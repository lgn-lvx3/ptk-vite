import React, { useEffect } from "react"
import { Navbar, Dropdown } from "react-daisyui"
import { Link, NavLink } from "react-router-dom"

import { LanguageDropdown } from "components/LanguageDropdown"
import { store, useTrackedStore } from "state/Store"
import { translate } from "utils/i18n"

import logo from "/src/assets/logo.png"
import ThemeSwitcher from "components/ThemeSwitcher"

interface Props {
    title: string
}
// Header component that is used on all pages to display nav values
export const HeaderComponent: React.FC<Props> = ({ title }) => {
    const language = useTrackedStore().preferences.language()
    const survey = useTrackedStore().app.survey()
    const surveyNavTitles = store.app.surveyNavTitles()

    const [surveyText, setSurveyText] = React.useState(
        translate("navigation.surveys"),
    )

    useEffect(() => {
        setSurveyText(translate("navigation.surveys"))
    }, [language])
    return (
        <header>
            <Navbar className="shadow-lg rounded-lg mb-10">
                <div className="hidden md:flex">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-20 w-20 object-contain bg-gray-800 rounded-full p-3 "
                        />
                    </Link>
                </div>
                {/* Dropdown Components */}
                <div className="flex flex-1 justify-end z-10 gap-3">
                    <div>
                        <ThemeSwitcher />
                    </div>
                    {/* Navigation dropdown for surveys */}
                    <div>
                        <Dropdown title={surveyText} className="">
                            <Dropdown.Toggle
                                className="btn btn-ghost rounded-btn"
                                button={false}
                            >
                                {surveyText}
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
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {surveyNavTitles.map((title) => (
                                    <Link to={`surveys/${title}`} key={title}>
                                        <div
                                            key={title}
                                            className={`btn btn-ghost flex flex-1 ${
                                                title ===
                                                survey?.title.replace("-", "")
                                                    ? "btn-active"
                                                    : ""
                                            }`}
                                        >
                                            {title}
                                        </div>
                                    </Link>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        {/* language switcher component */}
                        <LanguageDropdown />
                    </div>
                </div>
            </Navbar>
        </header>
    )
}
