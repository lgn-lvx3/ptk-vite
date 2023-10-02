import React from "react"
import { Navbar, Dropdown, Button, Menu, Avatar } from "react-daisyui"

import logo from "/src/assets/logo.png"

interface Props {
    title: string
}

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <header>
            <Navbar className="flex flex-1 w-full bg-base-100 shadow-lg rounded-lg mb-10">
                <Navbar.Start>
                    <Avatar
                        src={logo}
                        size="sm"
                        innerClassName="rounded bg-primary p-2"
                    />
                </Navbar.Start>
                <Navbar.Center className="hidden lg:flex">
                    <Menu horizontal className="px-1">
                        <Menu.Item>
                            {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                            <a onClick={() => console.log("hello")}>UDI-6</a>
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
                        <Dropdown.Menu
                            tabIndex={0}
                            className="w-52 menu-sm mt-3 z-[1]"
                        >
                            <Dropdown.Item>Item 1</Dropdown.Item>
                            <li>
                                {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <Dropdown.Item>Item 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.End>
            </Navbar>
        </header>
    )
}
