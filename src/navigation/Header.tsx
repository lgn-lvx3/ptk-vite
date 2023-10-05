import React from "react"
import { Navbar, Button, Menu, Avatar } from "react-daisyui"
import { Link } from "react-router-dom"

import logo from "/src/assets/calculator-logo.png"
import { LanguageDropdown } from "components/LanguageDropdown"
import { store } from "state/Store"

interface Props {
    title: string
}

export const Header: React.FC<Props> = ({ title }) => {
    const surveyNavTitles = store.app.surveyNavTitles()
    return (
        <header>
            <Navbar className="flex flex-1 w-full bg-base-100 shadow-lg rounded-lg mb-10">
                <Navbar.Start>
                    <Link to="/">
                        <Avatar src={logo} size="md" innerClassName="rounded" />
                    </Link>
                </Navbar.Start>
                <Navbar.Center className="hidden lg:flex">
                    <Menu horizontal className="px-1">
                        {surveyNavTitles.map((title) => (
                            <Menu.Item key={title}>
                                <Link to={`surveys/${title}`}>
                                    <Button
                                        color="ghost"
                                        variant="link"
                                        size="sm"
                                    >
                                        {title}
                                    </Button>
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <LanguageDropdown />
                </Navbar.End>
            </Navbar>
        </header>
    )
}
