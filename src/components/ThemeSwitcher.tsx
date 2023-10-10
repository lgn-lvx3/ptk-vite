import { FC, useEffect } from "react"
import { Button, Dropdown, Link, Menu, useTheme } from "react-daisyui"
import { Themes } from "state/AppStore"
import { actions, useTrackedStore } from "state/Store"
import { ThemeItem } from "./ThemeItem"

/**
 * A component that allows the user to switch between light and dark themes.
 */
export const ThemeSwitcher: FC = () => {
    const userTheme = useTrackedStore().preferences.theme()
    const { setTheme } = useTheme(userTheme)

    useEffect(() => {
        setTheme(userTheme)
    }, [userTheme])

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle
                    className="btn btn-ghost rounded-btn"
                    button={false}
                >
                    Theme
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
                <Dropdown.Menu className="grid grid-cols-1 w-52 max-h-96 overflow-y-auto">
                    {Themes.map((t, i) => {
                        return (
                            <Dropdown.Item key={i}>
                                <ThemeItem name={t} />
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            {/* <Dropdown
                onClick={() => {
                    const theme = userTheme === "dark" ? "light" : "dark"

                    actions.preferences.theme(theme)
                }}
                color="ghost"
            >
                <span className="text-xl">
                    {userTheme === "light" ? "☀️" : "🌙"}
                </span>
            </Dropdown> */}
        </>
    )
}

export default ThemeSwitcher
