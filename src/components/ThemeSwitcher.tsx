import { FC, useEffect } from "react"
import { Button, useTheme } from "react-daisyui"
import { actions, useTrackedStore } from "state/Store"

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
            <Button
                onClick={() => {
                    const theme = userTheme === "dark" ? "light" : "dark"

                    actions.preferences.theme(theme)
                }}
                color="ghost"
            >
                <span className="text-xl">
                    {userTheme === "light" ? "☀️" : "🌙"}
                </span>
            </Button>
        </>
    )
}

export default ThemeSwitcher
