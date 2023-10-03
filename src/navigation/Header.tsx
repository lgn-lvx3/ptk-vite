import React from "react"
import { Navbar, Dropdown, Button, Menu, Avatar } from "react-daisyui"
import { Link } from "react-router-dom"

import logo from "/src/assets/logo.png"
import { LanguageDropdown } from "components/LanguageDropdown"

interface Props {
    title: string
}

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <header>
            <Navbar className="flex flex-1 w-full bg-base-100 shadow-lg rounded-lg mb-10">
                <Navbar.Start>
                    <Link to="/">
                        <Avatar
                            src={logo}
                            size="sm"
                            innerClassName="rounded bg-primary p-2"
                        />
                    </Link>
                </Navbar.Start>
                <Navbar.Center className="hidden lg:flex">
                    <Menu horizontal className="px-1">
                        <Menu.Item>
                            <Link to="surveys/udi6">UDI-6</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="surveys/udi6">UDI-6</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <Menu.Item>
                                        {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                        <a>Submenu 1</a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                        <a>Submenu 2</a>
                                    </Menu.Item>
                                </ul>
                            </details>
                        </Menu.Item>
                        <Menu.Item>
                            {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a>Item 3</a>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Dropdown end>
                        <Button
                            tag="label"
                            color="ghost"
                            tabIndex={0}
                            className="lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </Button>
                        <LanguageDropdown />
                    </Dropdown>
                </Navbar.End>
            </Navbar>
        </header>
    )
}
