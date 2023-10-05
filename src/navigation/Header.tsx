import React from "react"
import { Navbar, Button, Menu, Avatar, Badge, Dropdown } from "react-daisyui"
import { Link } from "react-router-dom"

import logo from "/src/assets/logo.png"
import { LanguageDropdown } from "components/LanguageDropdown"
import { store } from "state/Store"
import { translate } from "utils/i18n"

interface Props {
    title: string
}

export const Header: React.FC<Props> = ({ title }) => {
    const surveyNavTitles = store.app.surveyNavTitles()
    return (
        <header>
            <Navbar className="shadow-lg rounded-lg mb-10">
                <Link to="/">
                    <img
                        src="/src/assets/logo.png"
                        alt="Logo"
                        className="h-20 w-20 object-contain bg-gray-800 rounded-full p-3"
                    />
                </Link>
                {/* <Navbar.Center className="hidden lg:flex"></Navbar.Center> */}
                <Navbar.End className="flex flex-1">
                    {/* Navigation dropdown for surveys */}
                    <div>
                        <Dropdown
                            title={translate("navigation.surveys")}
                            className="z-10"
                        >
                            <Dropdown.Toggle
                                className="btn btn-ghost rounded-btn"
                                button={false}
                            >
                                {translate("navigation.surveys")}
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
                                    <Dropdown.Item key={title}>
                                        <Link to={`surveys/${title}`}>
                                            <Button
                                                color="ghost"
                                                variant="link"
                                                size="sm"
                                            >
                                                {title}
                                            </Button>
                                        </Link>
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* language switcher component */}
                        <LanguageDropdown />
                    </div>
                </Navbar.End>
            </Navbar>
        </header>
    )
}
